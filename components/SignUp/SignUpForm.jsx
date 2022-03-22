import { useNavigation } from "@react-navigation/native";
import Validator from "email-validator";
import { Formik } from "formik";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { auth, db } from "../../firebase";

const SignUpForm = () => {
  const navigation = useNavigation();

  const signUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onSignUp = async (email, password, username) => {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("🔥Firebase User Created Successfully", email, password);

      await db.collection("users").doc(authUser.user.email).set({
        user_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      });
    } catch (err) {
      Alert.alert("🔥 BOOBOO..", err.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(value) =>
          onSignUp(value.email, value.password, value.username)
        }
        validationSchema={signUpFormSchema}
        validateOnMount={true}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
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
                placeholder="Email"
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
                    1 > values.username.length || values.username.length >= 2
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
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

            <View style={{ marginTop: 30 }}>
              <Button
                title="Sign Up"
                onPress={handleSubmit}
                color={!isValid && "#9ACAF7"}
              />
            </View>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text
                  style={{ color: "#6BB0F5" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  {" "}
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

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
