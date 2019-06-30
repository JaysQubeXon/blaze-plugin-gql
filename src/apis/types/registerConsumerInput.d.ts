export interface RegisterConsumerInput {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dob?: number;
  sex?: "MALE" | "FEMALE";
}
