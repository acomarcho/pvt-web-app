import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthWrapper = (props: { children: JSX.Element }) => {
  const router = useRouter();

  const authenticate = async (token: string) => {
    try {
      await axios.post("/api/authenticate", {
        token,
      });
      /* Tidak melakukan apa-apa, autentikasi valid */
    } catch {
      /* Token tidak valid lagi */
      router.push("/auth");
    }
  };

  useEffect(() => {
    authenticate(localStorage.getItem("token") ?? "");
  }, []);

  return <>
    {props.children}
  </>;
};

export default AuthWrapper;
