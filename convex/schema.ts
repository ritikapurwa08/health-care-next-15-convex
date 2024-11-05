import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";

const Schema = defineSchema({
  ...authTables,
});

export default Schema;
