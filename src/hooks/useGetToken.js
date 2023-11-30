import { jwtDecode } from "jwt-decode";

export default function useGetToken() {
  const token = sessionStorage.getItem("token");
  const decode = token && jwtDecode(token);

  return { decode };
}
