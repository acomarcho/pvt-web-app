import "../styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "../components/wrapper";
import Logo from "../components/logo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <>
        <Logo />
        <Component {...pageProps} />
      </>
    </Wrapper>
  );
}

export default MyApp;
