import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import "firebase/compat/firestore";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.postHeaderContainer}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={{ uri: post?.profile_picture }}
        style={styles.postHeaderProfilePicture}
      />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <MaterialCommunityIcons name="dots-horizontal" size={25} color="white" />
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post?.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View
    style={{
      marginHorizontal: 15,
      marginTop: 10,
      marginBottom: 25,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <FontAwesome5
            name="heart"
            style={{ marginRight: 15 }}
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="message-circle"
            style={{ marginRight: 15 }}
            size={28}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="send"
            style={{ marginRight: 15 }}
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Feather name="bookmark" size={24} color="white" />
      </TouchableOpacity>
    </View>

    <View style={{ flexDirection: "row", marginTop: 4 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        {post?.likes_by_users?.length?.toLocaleString("en-GB")} likes
      </Text>
    </View>

    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "bold" }}>
          @{post?.user?.replace(" ", "")}
        </Text>
        <Text> {post?.caption}</Text>
      </Text>
    </View>

    {!!post?.comments?.length && (
      <View style={{ marginTop: 5 }}>
        <Text style={{ color: "gray" }}>
          View {post?.comments?.length > 1 ? "all " : ""}
          {post?.comments?.length}{" "}
          {post?.comments?.length > 1 ? "comments" : "comment"}
        </Text>
      </View>
    )}

    <Comments post={post} />
  </View>
);

const Comments = ({ post }) => (
  <>
    {post?.comments?.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "900" }}>
            @{comment?.user.replace(" ", "")}
          </Text>{" "}
          {comment?.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  postHeaderProfilePicture: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
});
