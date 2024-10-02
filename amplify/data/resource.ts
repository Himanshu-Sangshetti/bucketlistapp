import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  BucketItem: a
    .model({
      title: a.string(),
      description: a.string(),
      completed: a.boolean(),
    })
    .authorization((allow) => [allow.owner()]),  // Restrict access to the owner
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});