import * as fs from "fs";
import { gql } from "apollo-server-express";

const dirname = "./src/graphql/schema";

const files = [
  "schema",
  "enums",
  "cart",
  "address",
  "asset",
  "brand",
  "category",
  "medicalCondition",
  "note",
  "potencyAmount",
  "prepackage",
  "prices",
  "product",
  "promotions",
  "quantity",
  "refundOrderItemRequest",
  "splitPayment",
  "taxes",
  "vendor",
  "weightTolerance",
  "member",
  "ConsumerInfo",
  "doctor",
  "signedContract"
];

let schema = "";
try {
  for (let i = 0; i < files.length; i++) {
    schema += "\n" + fs.readFileSync(`${dirname}/${files[i]}.graphql`, {
      encoding: "utf8",
      flag: "r"
    });
  }

  if  (schema.length === 0) {
    throw new Error("Schema Could not be extracted from files")
  }
} catch (error) {
  throw new Error(error);
}


export default gql`${schema}`;
