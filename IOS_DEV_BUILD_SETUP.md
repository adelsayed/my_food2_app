# iOS Development Build Setup for OAuth

## 1. Configure EAS Build
1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Create `eas.json` configuration:
```json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## 2. Configure URL Schemes
1. Update `Info.plist` with required URL schemes:
```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>myfood2app</string>
      <string>com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3</string>
      <string>com.adelsayed.my-food2-app</string>
    </array>
  </dict>
</array>
```

## 3. Required Code Changes
1. Update `App.tsx` with OAuth configuration:
```typescript
const oauthConfig = {
  ...outputs,
  oauth: {
    ...outputs.auth.oauth,
    redirectSignIn: Platform.select({
      ios: ['myfood2app://', 'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'],
      default: ['myfood2app://']
    }),
    redirectSignOut: Platform.select({
      ios: ['myfood2app://', 'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'],
      default: ['myfood2app://']
    }),
  }
};
```

2. Update `amplify/auth/resource.ts`:
```typescript
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
        'myfood2app://',
        'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'
      ]
    }
  }
});
```

## 4. Initialize EAS Project
1. Login to EAS and initialize project:
```bash
npx eas login
npx eas build:configure
```

## 5. Create Development Build
1. We used a single command to create, install and run the development build:
```bash
npx eas login && npx eas build:configure && npx eas build --profile development --platform ios
```

2. After build completion, installed the app on simulator when prompted:
```
? Install and run the iOS build on a simulator? › yes
```

## 6. What Each Command Does
- `eas login`: Authenticates with Expo Account
- `eas build:configure`: Sets up the project for EAS Build
- `eas build --profile development --platform ios`: 
  - Creates a development build
  - Uses simulator configuration from eas.json
  - Generates QR code for installation
  - Offers to install on simulator

## 7. File Dependencies
1. `eas.json`: Build profile configuration
2. `Info.plist`: URL scheme configuration
3. `app.json`: Expo app configuration
4. `App.tsx`: OAuth redirect configuration
5. `amplify/auth/resource.ts`: Auth configuration
6. `.env`: Environment variables (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

## 8. Testing OAuth Flow
1. Launch the development build
2. Click "Sign in with Google"
3. Should open URL with format:
```
https://ddf95a2d8e646bedb990.auth.me-south-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=myfood2app://
```
4. After authentication, should redirect back to app using URL scheme

## Note
Remember this development build is required because OAuth sign-in requires native URL scheme handling, which isn't available in Expo Go.

## Troubleshooting
- If OAuth doesn't work, verify URL schemes in Info.plist
- Check that the development build is installed (not Expo Go)
- Verify Cognito configuration matches URL schemes
- Check the OAuth URL in browser for correct client_id and redirect_uri
- Ensure all environment variables are properly set
- Verify all file changes are saved before building