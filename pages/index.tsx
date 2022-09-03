import Header from "../components/header";
import Information from "../components/home/info";
import Form from "../components/home/form";
import AuthWrapper from "../components/authwrapper";

const Home = () => {
  return (
    <AuthWrapper>
      <>
        <Information />
        <Form />
      </>
    </AuthWrapper>
  );
};

export default Home;
