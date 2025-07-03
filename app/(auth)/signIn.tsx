import Typo from "@/components/Typo";
import ScreenWraper from "@/components/ScreenWraper";
import BackButton from "@/components/BackButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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
const LoginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .nonempty("Password is required"),
});
type FormData = z.infer<typeof LoginSchema>;
const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <BackButton />

        <View style={{ marginVertical: spacingY._20, gap: spacingY._5 }}>
          <Typo size={30} fontWeight={"800"}>
            Hey
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome back
          </Typo>
        </View>

        <View style={styles.form}>
          <Typo size={16} fontWeight={"400"} color={colors.textLighter}>
            Login now to track all your expenses
          </Typo>
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
                    <Typo size={12} color="red"  style={{ marginTop: 10 }} >
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

          <Typo
            size={16}
            fontWeight={"400"}
            color={colors.textLighter}
            style={{ alignSelf: "flex-end" }}
          >
            Forget password?
          </Typo>
          <Button
            loading={loading}
            style={{ alignItems: "center" }}
            onPress={handleSubmit(handleLogin)}
          >
            <Typo size={21} fontWeight={"700"} color={colors.black}>
              Login
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
              Don’t have an account?
            </Typo>
            <TouchableOpacity onPress={() => router.navigate("/(auth)/register")}>
              <Typo size={16} fontWeight={"700"} color={colors.primary}>
                Register
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

export default SignIn;
