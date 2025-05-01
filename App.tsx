import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import outputs from "./amplify_outputs.json";
import TodoList from "./src/TodoList";

// Configure Amplify
Amplify.configure(outputs);

const AuthenticatedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
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
});

export default App;