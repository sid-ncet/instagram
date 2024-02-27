// import { View, Text, TextInput,Button, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import{ getAuth,RecaptchaVerifier } from 'firebase/auth';
// const Login = ({navigation}:any) => {
//   const [number, setNumber]= useState('')
//   const handleButton = async () => {
//     try {
//       const response = await fetch('http://192.168.3.112:4000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ number }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log('response', data);
//         navigation.navigate('mytab');
//       } else {
//         console.error('Request failed with status:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return (
//     <View style={{backgroundColor: 'yellow', flex: 1, justifyContent:'center', alignItems:'center'}}>
//         <View style={{borderWidth: 1,borderRadius: 20,padding: 10, borderColor: 'green'}}>
//         <TextInput style={{ fontSize: 24,}} placeholder='enter the mobile-number'
//         value={number}
//         onChangeText={(text)=> setNumber(text)}/>
//         </View>
//       <TouchableOpacity style={{ width: 200, height: 37, backgroundColor: 'green', borderRadius: 50, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}
//       onPress={handleButton}>
//         <Text style={{fontSize:20, color:'white'}}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
// export default Login



// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   TouchableWithoutFeedback,
// //   StyleSheet,
// // } from 'react-native';

// // const Login = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handlePress = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleTouchablePress = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <TouchableWithoutFeedback onPress={handleTouchablePress}>
// //       <View style={styles.container}>
// //         <TouchableOpacity onPress={handlePress}>
// //           <Text>Show/Hide</Text>
// //         </TouchableOpacity>

// //         {isOpen && (
// //           <View style={styles.popup}>
// //             <Text>This is a popup!</Text>
// //           </View>
// //         )}
// //       </View>
// //     </TouchableWithoutFeedback>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   popup: {
// //     position: 'absolute',
// //     top: 50,
// //     left: 20,
// //     padding: 10,
// //     backgroundColor: 'white',
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: 'black',
// //   },
// // });

// // export default Login;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
// import {getAuth,signInWithPhoneNumber } from 'firebase/auth';
// import app from '../firebaseConfig';
// const Login = ({ navigation }: any) => {
//   const [number, setNumber] = useState('');
//   const [verificationId, setVerificationId] = useState('');
//   const handleButton = async () => {
//     const auth=getAuth(app)
//     const appVerifier = window.recaptchaVerifier;
//     try {
//       const confirmation = await signInWithPhoneNumber(auth,`+${number}`);
//       setVerificationId(confirmation.verificationId);

//       // Navigate to the screen where the user can enter the verification code
//       // navigation.navigate('Verification', { verificationId: confirmation.verificationId });
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert('Error', 'Failed to send verification code. Please try again.');
//     }
//   };
//   const emailLogin=()=>{
//     console.log('emailLogin')
//     navigation.navigate('EmailLogin')
//   }
//   return (
//     <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ borderWidth: 1, borderRadius: 20, padding: 10, borderColor: 'green', marginBottom: 20 }}>
//         <TextInput
//           style={{ fontSize: 24 }}
//           placeholder="Enter the mobile number"
//           value={number}
//           onChangeText={(text) => setNumber(text)}
//         />
//       </View>
//       <TouchableOpacity
//         style={{
//           width: 200,
//           height: 37,
//           backgroundColor: 'green',
//           borderRadius: 50,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//         onPress={handleButton}
//       >
//         <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
//       </TouchableOpacity>

//       <View id="recaptcha-container" style={{ display: 'none' }} />
//       <View style={{marginTop: 20}}>
//         <TouchableOpacity onPress={emailLogin}>
//         <Text style={{fontSize: 17, color: 'grey'}}>Login With Email</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default Login;
