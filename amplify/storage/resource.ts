import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyBucketTrackerImages",
  access: (allow) => ({
    "images/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});