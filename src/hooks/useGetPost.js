import { useEffect, useState } from "react";
import axiosAuth from "../api/axiosAuth";
import { api } from "../api/api";

export default function useGetPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosAuth
      .get(api + "/post")
      .then((res) => setPosts(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return { posts };
}
