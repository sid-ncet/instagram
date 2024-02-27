// Import necessary components and libraries
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<any>([]);
  const [isHeartPressed, setIsHeartPressed] = useState<any>(false);
  const [heartNumber, setNewHeartNumber] = useState<any>({});
  const [captureImage, setCaptureImage] = useState<any>([]);
  const [showCameraButtons, setShowCameraButtons] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
    )
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        // console.log('dataPhotos',apiData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        console.error("Camera permission not granted!");
      }
    })();
  }, []);
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const heartIcon = (item: any) => {
    setIsHeartPressed(true);
    setNewHeartNumber((prevState: any) => ({
      ...prevState,
      [item.id]: (prevState[item.id] || 0) + 1,
    }));
    console.log("heartIcon", item.title);
  };
  const openCameraIcon = () => {
    setShowCameraButtons(!showCameraButtons);
  };
  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    });
    handleImagePickerResult(result);
  };
  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    handleImagePickerResult(result);
  };
  const handleImagePickerResult = (result: any) => {
    if (!result.canceled) {
      // setImage(result.uri);
      setCaptureImage((prevCaptureImage: any) => [
        ...prevCaptureImage,
        result.assets[0].uri,
      ]);
      setShowCameraButtons(!showCameraButtons);
    }
  };
  const handleTouchablePress = () => {
    setShowCameraButtons(false);
  };
  const heartPressClick = () => {
    console.log("heartPress");
    console.log("heart", { heartNumber });

    navigation.navigate("details", {data });
  };
  const messageData = ()=> {
    console.log('message shown')
    navigation.navigate('message')
  }
  return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View>
          <View>
            <View
              style={{
                marginTop: 60,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => handleDrawer()}>
                <FontAwesome5
                  name="bars"
                  size={24}
                  color="black" 
                  style={{ marginLeft: 12 }}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 23 }}>Home</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={openCameraIcon}
                >
                  <FontAwesome5 name="camera" size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() => heartPressClick()}
                >
                  <FontAwesome5 name="heart" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15 }} onPress={() => messageData()}>
                  <FontAwesome5 name="paper-plane" size={24} />
                </TouchableOpacity>
              </View>
            </View>
              <View>
                <View>
                  {showCameraButtons && (
                    <View
                      style={{
                        width: 100,
                        backgroundColor: "white",
                        paddingHorizontal: 12,
                        position: "absolute",
                        top: 4,
                        left: 260,
                        zIndex: 999,
                      }}
                    >
                      <TouchableOpacity
                        onPress={openGallery}
                        accessible={false}
                      >
                        <View style={{}}>
                          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Gallery
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={openCamera} accessible={false}>
                        <View
                          style={{ backgroundColor: "white", marginTop: 9 }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              paddingBottom: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Camera
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <ScrollView horizontal={true}>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    {captureImage.map((uri: any, index: any) => (
                      <View key={index} style={{ width: 120, height: 120 }}>
                        <Image
                          source={{ uri }}
                          style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                      </View>
                    ))}
                    {data.photos &&
                      data.photos.map((item: any) => (
                        <View key={item.id} style={{ width: 120, height: 120 }}>
                          <Image
                            source={{ uri: item.url }}
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 50,
                            }}
                          />
                        </View>
                      ))}
                  </View>
                </ScrollView>
              </View>
          </View>
          {data.photos &&
            data.photos.map((item: any) => (
              <View key={item.id} style={{ marginBottom: 15 }}>
                <Image
                  source={{ uri: item.url }}
                  style={{ width: 400, height: 200 }}
                />
                <View style={{ flexDirection: "row", margin: 8 }}>
                  <TouchableOpacity
                    style={{ marginRight: 15 }}
                    onPress={() => heartIcon(item)}
                  >
                    <FontAwesome5 name="heart" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 15 }}>
                    <FontAwesome5 name="paper-plane" size={24} />
                  </TouchableOpacity>
                </View>
                {isHeartPressed && heartNumber[item.id] > 0 && (
                  <View>
                    <Text style={{ fontSize: 20, marginLeft: 6 }}>
                      {heartNumber[item.id]} likes
                    </Text>
                  </View>
                )}
                <Text style={{ fontSize: 17 }}>{item.title}</Text>
              </View>
            ))}
        </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  );
};
export default HomeScreen;
