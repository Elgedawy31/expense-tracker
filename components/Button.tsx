import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/types";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Loading from "./Loading";

const Button = ({
  style,
  children,
  loading = false,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        style,
        styles.button,
        { backgroundColor: loading ? "transparent" : colors.primary },
      ]}
      onPress={onPress}
      disabled={loading}
    >
     {loading ? <Loading /> :  children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: "continuous",
    justifyContent: "center",
    height: verticalScale(52),
  },
});
export default Button;
