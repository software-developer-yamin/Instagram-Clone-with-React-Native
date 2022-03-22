import Validator from "email-validator";
import { Formik } from "formik";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Phone number, username or email"
                placeholderTextColor="#444"
                autoFocus={true}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Text
              style={{
                alignSelf: "flex-end",
                color: "#6BB0F5",
                marginBottom: 30,
              }}
            >
              Forgot Password?
            </Text>
            <Button
              title="Login"
              onPress={handleSubmit}
              color={!isValid && "#9ACAF7"}
            />

            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#F4F4F4",
  },
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
