import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";

import { AuthContext } from "../providers/AuthProvider";
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View style={{alignItems: "center" }}>
              <Text style={{ paddingHorizontal: 10 }}>
                Name: {auth.CurrentUser.name}
              </Text>
              <Button
              title="Delete profile"
              onPress={function () {
                console.log('Button pressed')
                //props.navigation.navigate("SignUp");
              }}
              />
              <Text style={{ paddingHorizontal: 10 }}>
                Born at: {auth.CurrentUser.dob}
              </Text>
              <Text style={{ paddingHorizontal: 10 }}>
                Address: {auth.CurrentUser.address}
              </Text>
              <Text style={{ paddingHorizontal: 10 }}>
                Works at: {auth.CurrentUser.workplace}
              </Text>              
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;
