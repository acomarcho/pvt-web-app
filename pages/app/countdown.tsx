import Header from "../../components/header";
import Card from "../../components/countdown/card";
import AuthWrapper from "../../components/authwrapper";

const Countdown = () => {
  return (
    <AuthWrapper>
      <Card startCount={3}/>
    </AuthWrapper>
  );
};

export default Countdown;
