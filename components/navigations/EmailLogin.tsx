import React, { useState, useEffect } from "react";
import App from "../../firebaseConfig";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
const EmailLogin = ({ navigation }: any) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleButton = async () => {
    try {
      const auth = getAuth(App);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      // console.log('usercrendential', userCredential)
      const user = userCredential.user;
      if (user && user.emailVerified) {
        navigation.navigate("mytab");
      } else {
        Alert.alert("Email is not verified please verify your email address before login");
      }
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      Alert.alert("Error", "Failed to sign up. Please try again.");
    }
  };
  const RegisterMail = () => {
    navigation.navigate("registerEmail");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 28,
          marginBottom: 8,
          fontStyle: "italic",
          fontWeight: "300",
        }}
      >
        Login
      </Text>
      <View>
        <View
          style={{ elevation: 70, shadowColor: "green", borderColor: "green" }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              fontSize: 24,
              borderWidth: 1,
              marginTop: 15,
              width: 300,
              borderRadius: 7,
              padding: 7,
              borderColor: "green",
            }}
            placeholder="Enter the Email"
            value={Email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={{
              fontSize: 24,
              backgroundColor: "white",
              borderWidth: 1,
              marginTop: 15,
              width: 300,
              borderRadius: 7,
              padding: 7,
              borderColor: "green",
            }}
            placeholder="Enter the password"
            value={Password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          padding: 5,
          backgroundColor: "green",
          borderRadius: 7,
          alignItems: "center",
          marginTop: 15,
          justifyContent: "center",
        }}
        onPress={handleButton}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={RegisterMail}>
          <Text style={{ fontSize: 17, color: "grey" }}>
            Don't have a account ? Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EmailLogin;
