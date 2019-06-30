import Core from "../core";
import { AppContext } from "../context.d";
import { RegisterConsumerInput } from "./types";
import { CallbackFunc } from "./cart";
import { isNotString, isNumber, longStringExists } from "../utils";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ConsumerInfo } from "./types/consumerInfo";
import { isFunction } from "util";
import { BlazeErrorResponse } from "./types/responses";

// A consumerID 5d1829206218d16ba2dab462
// A consumerID 5d182a2d6218d16ba2dab464

class AuthAPI extends Core {
  constructor(context: AppContext) {
    super(context);
  }

  public async register(
    userInfo: { consumer: RegisterConsumerInput },
    cb?: CallbackFunc<any, void>
  ) {
    if (!this.useApiKeys("Auth-register")) {
      return {};
    }
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      dob,
      sex
    } = userInfo.consumer;

    let data: RegisterConsumerInput = {};
    if (longStringExists(email)) {
      data.email = email;
    } else if (isNotString(email)) {
      this.addError({
        code: "email-invalid",
        location: "Auth-register",
        message: `Expexted required form prop 'email' of type string but got ${email} of type ${typeof email}`
      });
    }

    if (longStringExists(firstName)) {
      data.firstName = firstName;
    } else if (isNotString(firstName)) {
      this.addError({
        code: "firstName-invalid",
        location: "Auth-register",
        message: `Expected required form prop 'firstName' of type string but got ${firstName} of type ${typeof firstName}`
      });
    }

    if (longStringExists(lastName)) {
      data.lastName = lastName;
    } else if (isNotString(lastName)) {
      this.addError({
        code: "lastName-invalid",
        location: "Auth-register",
        message: `Expected required form prop 'lastName' of type string but got ${lastName} of type ${typeof lastName}`
      });
    }

    if (longStringExists(phoneNumber)) {
      data.phoneNumber = phoneNumber;
    } else if (isNotString(phoneNumber)) {
      this.addError({
        code: "phoneNumber-invalid",
        location: "Auth-register",
        message: `Expected required form prop 'phoneNumber' of type string but got ${phoneNumber} of type ${typeof phoneNumber}`
      });
    }

    if (this.hasErrors) return { errors: this.errors };

    if (longStringExists(sex) && /MALE|FEMALE/.test(sex)) {
      data.sex = sex;
    } else {
      data.sex = null;
    }

    if (isNumber(dob)) {
      data.dob = dob;
    } else {
      data.dob = 0;
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "post",
      headers: this.headers,
      url: "/partner/user/register",
      data
    };

    try {
      const response: AxiosResponse<ConsumerInfo | BlazeErrorResponse> = await this.axios(
        axiosOptions
      );
      if (!!response && response.status === 200) {
        if (isFunction(cb)) cb(response.data, this.errors);
        return { consumer: response.data };
      } else {
        /** might not even get in here */
        this.addError({
          code: "empty-result",
          location: "Auth-register",
          message: `Axios response returned empty.`,
          error: JSON.stringify(response)
        });
        return { errors: this.errors };
      }
    } catch (error) {
      if (error.response.status === 401) {
        if (error.response.statusText === "Unauthorized") {
          if ((error.response.data as BlazeErrorResponse).message === 'Email is in use.') {
            this.addError({
              code: "email-exists",
              location: "Auth-register",
              message: 'Email is in use.'
            });
          }
        }
      }
      this.addError({
        code: "catch-error",
        location: "Auth-register",
        message: `Attempt to call register endpoint failed.`,
        error: JSON.stringify(error)
      });

      if (isFunction(cb)) cb(null, this.errors);
      return { errors: this.errors };
    }
  }
}

export default AuthAPI;
