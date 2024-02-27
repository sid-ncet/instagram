import React from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Home = () => {
  const handleLogin = (values: any) => {
    // Handle login logic here
    console.log("Form values:", values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <View style={{backgroundColor:'white', padding:10, flex: 1}} >
          <View style={{paddingVertical: 15,paddingHorizontal:12, marginBottom: 10, borderWidth: 1}}>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize="none"
              keyboardType="email-address"
              style={{fontSize: 20}}
            />
            </View>
            {touched.email && errors.email && (
              <Text style={{ color: "red", marginBottom: 10}}>{errors.email}</Text>
            )}
          
          <View style={{borderWidth: 1,paddingVertical: 15, paddingHorizontal: 12,marginBottom:12}}>
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={{fontSize: 20}}
            />
            </View>
            {touched.password && errors.password && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.password}</Text>
            )}

          <Button
            title="Login"
            onPress={(e: NativeSyntheticEvent<NativeTouchEvent>) =>
              handleSubmit()
            }
          />

          {/* Display other UI components or navigate to other screens as needed */}
        </View>
      )}
    </Formik>
  );
};

export default Home;
