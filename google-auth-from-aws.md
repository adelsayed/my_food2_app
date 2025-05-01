# Google Authentication Setup with AWS Amplify Gen2

## Prerequisites
- AWS Amplify CLI installed and configured
- React Native project with Amplify Gen2 initialized
- Google Cloud Console account

## 1. Configure Auth Resource

Create or update your auth resource in `backend/auth/resource.ts`:

import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        scopes: ['profile', 'email', 'openid']
      }
    }
  }
});

## 2. Implement Authentication UI

Update your `App.tsx`:

import { Authenticator } from '@aws-amplify/ui-react-native';

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator 
        socialProviders={['google']}
        components={{
          SignIn: {
            Header() {
              return (
                <View style={styles.header}>
                  <Text style={styles.headerText}>Welcome Back!</Text>
                </View>
              );
            },
          },
        }}
        containerStyle={{
          padding: 16,
          backgroundColor: '#ffffff',
        }}
        theme={{
          tokens: {
            colors: {
              brand: {
                primary: {
                  10: '#f5f5f5',
                  80: '#4285F4',
                  90: '#3367d6',
                  100: '#2a56c6',
                },
              },
            },
            borderWidths: {
              small: 2,
              medium: 4,
              large: 6,
            },
            radii: {
              small: 4,
              medium: 8,
              large: 12,
            },
          },
        }}
      >
        {({ signOut, user }) => (
          <View>
            <Text>Welcome {user?.username}</Text>
            <Button title="Sign Out" onPress={signOut} />
            {/* Your app content here */}
          </View>
        )}
      </Authenticator>
    </Authenticator.Provider>
  );
}

// Optional: Access auth state anywhere in your app
function MyComponent() {
  const { user, signOut } = useAuthenticator();

  return (
    <View>
      {user && (
        <>
          <Text>Hello, {user.username}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      )}
    </View>
  );
}

## 3. Platform Configuration

### Android Setup
Add to `android/app/src/main/AndroidManifest.xml`:

<activity
    android:name="com.amazonaws.amplify.auth.signin.activities.SocialSignInActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="myapp" />
    </intent-filter>
</activity>

### iOS Setup
Add to `Info.plist`:

<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>myapp</string>
        </array>
    </dict>
</array>

## 4. Google Cloud Console Setup

1. Go to Google Cloud Console
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
   - Configure OAuth consent screen
   - Create OAuth client ID
   - Add authorized redirect URIs
   - Save client ID and client secret

## 5. Environment Variables

Create a `.env` file in your project root:

GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here

## 6. Testing

1. Run your app
2. Click on "Sign In with Google"
3. Complete the OAuth flow
4. Verify user details in AWS Cognito console

## Common Issues and Solutions

1. **Redirect URI Mismatch**
   - Verify redirect URIs in Google Console match your app configuration

2. **Social Provider Not Appearing**
   - Ensure `socialProviders` prop is correctly set
   - Check if Google credentials are properly configured

3. **Authentication Failed**
   - Verify environment variables are correctly set
   - Check Google Console credentials
   - Ensure proper app scheme in native configurations

## Security Notes

- Never commit sensitive credentials to version control
- Always use environment variables for secrets
- Regularly rotate client secrets
- Implement proper error handling
- Consider implementing additional security measures like MFA

## Additional Notes

- The Authenticator component automatically handles:
  - Sign-in/sign-up flows
  - Password reset
  - Social provider authentication
  - Error messages
  - Form validation
  - Responsive design
  - Accessibility features

- Benefits of using Authenticator.Provider:
  - Reduces boilerplate code
  - Provides consistent user experience
  - Handles edge cases automatically
  - Maintained and updated by AWS
  - Includes built-in accessibility features
  - Supports multiple authentication methods
  - Customizable while maintaining security
