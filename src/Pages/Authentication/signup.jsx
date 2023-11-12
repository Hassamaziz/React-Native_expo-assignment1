import React from "react";
import AuthHeader from "../../Components/AuthHeader/AuthHeader";
import Input from "../../Components/InputFields/InputFields";
import { View, Text, Image,Pressable } from "react-native";
import LargeButton from "../../Components/LargeButton/LargeButton";

const SignUp = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 15,marginTop:40 }}>
        <AuthHeader title="Sign up free"
        onPress={()=>navigation.navigate("signup")} />
      </View>

      <View style={{ flex: 4 }}>
        <Input
          lable="Or continue with"
          inputImg={require("../../Assets/mail.png")}
          placeHolder="Enter e-mail address"
        />

        <Input
          lable="Or continue with"
          inputImg={require("../../Assets/password.png")}
          placeHolder="Create a password"
        />

        <Input
          lable="Or continue with"
          inputImg={require("../../Assets/password.png")}
          placeHolder="Repeat password"
        />
        <View
          style={{
            marginHorizontal: 24,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ marginRight: 5 }}
            source={require("../../Assets/terms.png")}
          />
          <Text>
            I have read the{" "}
            <Text style={{ color: "#0373F3", fontWeight: "bold" }}>
              Terms of Service
            </Text>
          </Text>
        </View>
        <View
        style={{
          marginHorizontal: 24,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
       
        <Text>
          Already Have An Account{" "}
          <Text onPress={()=>navigation.navigate("signin")} style={{ color: "#0373F3", fontWeight: "bold" }}>
           Go To SignIn
          </Text>
        </Text>
      </View>
      </View>

      <View style={{ flex: 0.5, justifyContent: "flex-end" }}>
        <LargeButton text="Continue" color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SignUp;
