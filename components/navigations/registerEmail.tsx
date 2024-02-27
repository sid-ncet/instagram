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
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
const RegisterEmail = ({ navigation }: any) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleButton = async () => {
    try {
      const auth = getAuth(App);
      const userCredential = await createUserWithEmailAndPassword(auth,Email,Password);
        await sendEmailVerification(userCredential.user)
        Alert.alert('user signup successfuly verification link send to your email address')
        setName(''),setEmail(''),setPassword('') 
        navigation.navigate('EmailLogin')
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      Alert.alert('Error', 'Failed to sign up. Please try again.'); 
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{textAlign:'center', fontSize: 28, marginBottom: 8,fontStyle:'italic', fontWeight:'300'}}>Register</Text>
      <View>
        <View style={{elevation: 75, shadowColor: "green", borderColor:'green' }}>
        <TextInput
          style={{
            backgroundColor: "white",
            fontSize: 24,
            borderWidth: 1,
            marginTop: 15,
            width:300,
            borderRadius: 7,
            padding: 7,
            borderColor: "green",
          }}
          placeholder="Enter the Name"
          value={Name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={{
            backgroundColor: "white",
            fontSize: 24,
            borderWidth: 1,
            marginTop: 15,
            width:300,
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
            width:300,
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
          padding:5,
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

      <View id="recaptcha-container" style={{ display: "none" }} />
    </View>
  );
};
export default RegisterEmail;
