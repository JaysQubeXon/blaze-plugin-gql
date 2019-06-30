import Axios, { AxiosInstance } from "axios";
import { Error } from "../common.d";
import { keys } from '../load-config';
import { ApiKeys, Headers, CoreState } from "./core";
import { AppContext } from "../context.d";
import { longStringExists, isNotObject } from "../utils";

export default class Core {
  protected axios: AxiosInstance = Axios.create();
  protected headers: Headers = {
    "Content-Type": "application/json",
    Authorization: ""
  };

  private state: CoreState = {
    accessType: "none"
  };

  public context: AppContext = null;

  public errors: Error[] = [];
  public hasErrors: boolean = false;

  constructor(context: AppContext) {
    this.context = context;
    this.axios.defaults.baseURL = `https://api.stage.blaze.me/api/v1`;
  }

  public addError(error: Error) {
    this.errors.push(error);
    this.hasErrors = true;
  }
  public resetErrors() {
    this.errors = [];
    this.hasErrors = false;
  }

  protected setState({ accessType }: CoreState) {
    if (!!accessType && longStringExists(accessType)) {
      this.state.accessType = accessType;
    }
  }

  public accessDenied(location: string) {
    this.addError({
      code: "access-deneid",
      location,
      message: "UnAuthorized! Please provide access keys."
    });
  }

  public dublicateAccessKeys(location: string) {
    this.addError({
      code: "dublicate-key-sources",
      location,
      message: "Please provide access keys as headers or as json config file"
    });
  }

  protected async useApiKeys(location: string): Promise<boolean> {
    
    // local json option check:
    if (isNotObject(keys) && isNotObject(this.context)) {
      /** No keys */
      this.accessDenied(location);
      return false;
    // } else if (
    //   keys["api_key"] &&
    //   this.context["keys"] &&
    //   this.context.keys["authorization"]
    // ) {
    //   /** if both sources have keys, alert! */
    //   this.dublicateAccessKeys(location);
    //   return false;
    } else if (!this.context.keys && keys["api_key"]) {
      /**  local json object exists and context has no keys */
      const {
        api_key,
        partner_key,
        developer_key,
        useDeveloperKey
      }: ApiKeys = keys;

      if (longStringExists(api_key)) {
        /** API key from vendor exists */
        this.headers.Authorization = api_key;
        this.setState({ accessType: "public" });

        if (longStringExists(partner_key)) {
          /** partner API key exists, using it instead */
          this.headers.partner_key = partner_key;
          this.setState({ accessType: "partner" });
        }
        if (useDeveloperKey && longStringExists(developer_key)) {
          /** useDeveloperKey set to `true` so use it instead of api_key */
          this.headers.Authorization = developer_key;
          this.setState({ accessType: "developer" });
        }
        /** API keys mounted on headers from json config file */
        return true;
      }
    } else if (!keys && this.context["keys"]) {
      /** Local json is empty and keys exist on this.context */
      if (
        this.context.keys["authorization"] &&
        longStringExists(this.context.keys.authorization)
      ) {
        /** prop `authorization` verified on context keys object */
        this.headers.Authorization = this.context.keys.authorization;
        this.setState({ accessType: "public" });
        if (
          this.context.keys["partner_key"] &&
          longStringExists(this.context.keys.partner_key)
        ) {
          /** request has partner privilages */
          this.headers.partner_key = this.context.keys.partner_key;
          this.setState({ accessType: "partner" });
        }
        /** API keys mounted on headers from request headers */
        return true;
      }
    }
    this.accessDenied(location);
    /** Keys and context.keys do not have any keys */
    return false;
  }
}
