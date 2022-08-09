import axios from "axios";

const getUsers = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    resolve(user);
  });
};

const getPosts = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );
    resolve(post);
  });
};

const getData = async (user_id) => {
  try {
    const user = await getUsers(user_id);
    const post = await getPosts(user_id);

    return { user, post };
  } catch (error) {
    console.log("Bir sorun oluştu.");
  }
};

export default getData;
