# Google OAuth iOS Setup

To enable Google Sign-In for your iOS app, follow these steps:

1. Go to the Google Cloud Console (https://console.cloud.google.com/)

2. Select your project

3. Go to "APIs & Services" > "Credentials"

4. Find your OAuth 2.0 Client ID or create a new one:
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "iOS" as the Application type
   - Enter your app's Bundle ID (found in Xcode): `com.adelsayed.my-food2-app`

5. Configure the iOS client:
   - Name: MyFood2App iOS
   - Bundle ID: com.adelsayed.my-food2-app
   - App Store ID: (optional, leave blank for development)
   - Team ID: (Your Apple Developer Team ID from Xcode)

6. Add the following URL schemes to your iOS project:
   ```xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>com.googleusercontent.apps.YOUR_CLIENT_ID</string>
         <string>myfood2app</string>
       </array>
     </dict>
   </array>
   ```

7. Update your iOS app's URL schemes in Xcode:
   - Open Xcode
   - Select your project in the navigator
   - Select your target
   - Go to "Info" tab
   - Expand "URL Types"
   - Add the URL schemes from step 6

8. Note: The `myfood2app://` scheme should already be configured since we're using Expo's development build.