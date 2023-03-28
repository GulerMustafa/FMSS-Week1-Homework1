import axios from "axios";
const getUserPosts = async (Number) => {
  const user = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + Number
  );
  const post = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/?userId=" + Number
  );
  return { user: user.data, posts: post.data };
};
export default getUserPosts;
