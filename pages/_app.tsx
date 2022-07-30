import "../styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "../components/wrapper";
import Logo from "../components/logo";
import Header from '../components/header';
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <>
        <Logo />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </Wrapper>
  );
}

export default MyApp;
