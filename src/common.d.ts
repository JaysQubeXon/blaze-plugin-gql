import { QueryResultBase } from "pg";

export type ID = number;
export type PrimaryKey = number;
export type ForeignKey<T> = T;
export type AlphaNumeric = string;

export interface Error {
  code: string;
  message: string;
  location: string;
  error?: any;
}

export interface Errors {
  errors?: Error[];
}

export interface Deletion {
  confirmation: boolean;
}

export interface ExpectedQueryResult<T> extends QueryResultBase {
  rows: T[];
}

export type APIKey = ForeignKey<AlphaNumeric>;

export interface Payload<T> extends Errors {
  payload?: T | T[];
}
