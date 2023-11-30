import { useEffect, useState } from "react";
import axiosAuth from "../api/axiosAuth";
import { api } from "../api/api";

export default function useGetComment(id) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    id &&
      axiosAuth
        .post(api + "/comment/get", { post_id: id })
        .then((res) => setComments(res.data.result))
        .catch((err) => console.log(err));
  }, [comments, id]);

  return { comments };
}
