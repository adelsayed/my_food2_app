import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, Text, Linking } from "react-native";
import { Amplify } from "aws-amplify";
import { Hub } from '@aws-amplify/core';
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { type ResourcesConfig } from '@aws-amplify/core';
import outputs from "./amplify_outputs.json";
import TodoList from "./src/TodoList";

// Debug helper
const debugLog = (message: string, data?: any) => {
  console.log(`[Auth Debug] ${message}`, data || '');
};

// Configure Amplify
const oauthConfig = {
  ...outputs,
  oauth: {
    ...outputs.auth.oauth,
    redirectSignIn: Platform.select({
      web: ['http://localhost:8081'],
      ios: ['myfood2app://', 'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'],
      default: ['myfood2app://']
    }),
    redirectSignOut: Platform.select({
      web: ['http://localhost:8081'],
      ios: ['myfood2app://', 'com.googleusercontent.apps.15561685556-7ugn77upvtiip19ksbi09q9ooegv8tq3://oauth2redirect'],
      default: ['myfood2app://']
    }),
  }
};

debugLog('Auth Configuration:', oauthConfig);
debugLog('Platform:', Platform.OS);
debugLog('OAuth Domain:', outputs.auth.oauth.domain);
debugLog('Redirect URLs:', oauthConfig.oauth.redirectSignIn);

Amplify.configure(oauthConfig);

// Set up Hub listener for auth events
Hub.listen('auth', (data) => {
  const { payload } = data;
  debugLog('Auth Event:', payload.event);
  debugLog('Auth Payload:', payload);
});

const AuthenticatedScreen = () => {
  const { user } = useAuthenticator();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome, {user?.username}</Text>
      </View>
      <TodoList />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator
        loginMechanisms={['email']}
        socialProviders={['google']}
      >
        <AuthenticatedScreen />
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
  }
});

export default App;