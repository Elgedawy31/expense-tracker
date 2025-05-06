import React from "react";
import ScreenWraper from "@/components/ScreenWraper";
import Typo from "@/components/Typo";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const welcome = () => {
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log("Login button pressed");
            }}
          >
            <Typo fontWeight="500">Login</Typo>
          </TouchableOpacity>
          <Image
            source={require("@/images/welcome.png")}
            resizeMode="contain"
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.footer}>
          <View style={{ alignItems: "center" }}>
            <Typo size={30} fontWeight={800}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={800}>
              of your finances
            </Typo>
          </View>
          <View style={{ alignItems: "center" , gap:2}}>
            <Typo size={17} color={colors.textLight}>
              Always take control
            </Typo>
            <Typo size={17} color={colors.textLight}>
              of your finances
            </Typo>
          </View>
        </View>
      </View>
    </ScreenWraper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});

export default welcome;
