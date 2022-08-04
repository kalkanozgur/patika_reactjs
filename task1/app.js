import axios from "axios";

const getData = async (user_id) => {
  try {
    const { data: userInfo } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    const { data: userPost } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    return {userInfo, userPost}
  } catch (e) {
    console.log("Error: ", e);
  }
}
console.log(await getData(3));
