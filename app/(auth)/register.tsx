import Typo from "@/components/Typo";
import ScreenWraper from "@/components/ScreenWraper";
import BackButton from "@/components/BackButton";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { router } from "expo-router";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
const RegisterSchema = z.object({
  name: z
    .string()
    .min(4, "Name must be at lease 4 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .nonempty("Password is required"),
});
type FormData = z.infer<typeof RegisterSchema>;
const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const handleRegister: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const res = await register(data.email, data.password, data.name);
    console.log("response", res);
    if (res.success) {
      setLoading(false);
    } else {
      setLoading(false);
      Alert.alert("Login", res.msg || "Failed to sign up");
    }
  };
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <BackButton />

        <View style={{ marginVertical: spacingY._20, gap: spacingY._5 }}>
          <Typo size={30} fontWeight={"800"}>
            Let,s
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get Started
          </Typo>
        </View>

        <View style={styles.form}>
          <Typo size={16} fontWeight={"400"} color={colors.textLighter}>
            Register now to track all your expenses
          </Typo>
          <View>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="Enter your name"
                    onChangeText={onChange}
                    value={value}
                    icon={
                      <Icons.User
                        weight="fill"
                        size={verticalScale(26)}
                        color={colors.neutral300}
                      />
                    }
                  />
                  {errors.name && (
                    <Typo size={12} style={{ marginTop: 10 }} color="red">
                      {errors.name.message}
                    </Typo>
                  )}
                </>
              )}
            />
          </View>

          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="Enter your email"
                    onChangeText={onChange}
                    value={value}
                    icon={
                      <Icons.At
                        weight="fill"
                        size={verticalScale(26)}
                        color={colors.neutral300}
                      />
                    }
                  />
                  {errors.email && (
                    <Typo size={12} style={{ marginTop: 10 }} color="red">
                      {errors.email.message}
                    </Typo>
                  )}
                </>
              )}
            />
          </View>

          <View>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    onChangeText={onChange}
                    value={value}
                    icon={
                      <Icons.Lock
                        weight="fill"
                        size={verticalScale(26)}
                        color={colors.neutral300}
                      />
                    }
                  />
                  {errors.password && (
                    <Typo size={12} style={{ marginTop: 10 }} color="red">
                      {errors.password.message}
                    </Typo>
                  )}
                </>
              )}
            />
          </View>

          <Button
            loading={loading}
            style={{ alignItems: "center" }}
            onPress={handleSubmit(handleRegister)}
          >
            <Typo size={21} fontWeight={"700"} color={colors.black}>
              Register
            </Typo>
          </Button>

          <View
            style={{
              flexDirection: "row",
              gap: spacingX._5,
              alignSelf: "center",
            }}
          >
            <Typo size={16} fontWeight={"400"} color={colors.textLighter}>
              Have an account?
            </Typo>
            <TouchableOpacity onPress={() => router.navigate("/(auth)/signIn")}>
              <Typo size={16} fontWeight={"700"} color={colors.primary}>
                Login
              </Typo>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWraper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    marginHorizontal: spacingX._20,
  },
  form: {
    flex: 1,
    marginTop: verticalScale(10),
    gap: spacingY._20,
  },
});

export default Register;
