import { Formik } from "formik";
import { useState } from "react";
import { Image, StyleSheet, View,InputText } from "react-native";
import * as Yup from "yup";

const FormikPostUploader = () => {
  const [thumbnail, setThumbnail] = useState("");

  const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the character limit."),
  });

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(value) => console.log(value)}
      validationSchema={uploadPostSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <View>
            <Image />
          </View>

          <InputText placeholder="Upload Caption" />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
