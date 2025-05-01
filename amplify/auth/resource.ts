import { defineAuth } from '@aws-amplify/backend';
import { secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile']
      },
      callbackUrls: [
        'http://localhost:8081/',
        'https://localhost:8081/',
        'exp://localhost:8081/',
        'myfood2app://',
        'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'
      ],
      logoutUrls: [
        'http://localhost:8081/',
        'https://localhost:8081/',
        'exp://localhost:8081/',
        'myfood2app://',
        'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'
      ]
    }
  }
});