import { useNavigation } from "@react-navigation/native";
import { serverTimestamp } from "firebase/firestore";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-elements";
import * as Yup from "yup";
import { auth, db } from "../../firebase";

const PLACEHOLDER_URL =
  "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = () => {
  const [thumbnail, setThumbnail] = useState(PLACEHOLDER_URL);
  const navigation = useNavigation();
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth.currentUser;
    const unsubscribe = db
      .collection("users")
      .where("user_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };

  useEffect(() => getUsername(), []);

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  console.log(currentLoggedInUser);

  const uploadPostFirebase = async (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(auth.currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: auth.currentUser.uid,
        caption: caption,
        createdAt: serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(value) => uploadPostFirebase(value.imageUrl, value.caption)}
      validationSchema={uploadPostSchema}
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
        <View style={{ margin: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              source={{ uri: thumbnail ? thumbnail : PLACEHOLDER_URL }}
              style={{ width: 100, height: 100 }}
            />

            <TextInput
              placeholder="Write a caption..."
              placeholderTextColor="gray"
              multiline={true}
              style={{
                color: "white",
                fontSize: 20,
                flex: 1,
                marginLeft: 10,
                alignSelf: "flex-start",
              }}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
          </View>
          <Divider
            width={0.2}
            orientation="vertical"
            style={{ marginBottom: 10, marginTop: 15 }}
          />
          <TextInput
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            style={{ color: "white", fontSize: 18 }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red", fontSize: 10 }}>
              {errors.imageUrl}
            </Text>
          )}
          <View style={{ marginTop: 20 }}>
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
