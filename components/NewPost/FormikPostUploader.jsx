import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-elements";
import * as Yup from "yup";

const PLACEHOLDER_URL =
  "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = () => {
  const [thumbnail, setThumbnail] = useState(PLACEHOLDER_URL);
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(value) => {
        console.log(value);
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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
