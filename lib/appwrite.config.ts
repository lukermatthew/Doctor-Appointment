import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668cb02c002d38365b17")
  .setKey(
    "e10cd4cda522f004ed182798a8132a439c61bf4d3b8ac7654c85e40b9f4a2ac1ae4192ecfae4d120872c0cce28613a5addb8bdfdd47b76ce0ac0e974d93b0dc8758db191370aa14cf4d80874f15fd6e893f40e5c5abd6d07ab3281fd2e24b6c19f0ca3d4b88157515dca0fa9fe939405d59d23c6bb3452ac302a64ebb1f06a8d"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
