import Cookies from "js-cookie";

export default function useLogout() {
  const signOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("access_token");
    Cookies.remove("access_token");
    window.location.reload();
  };

  return { signOut };
}
