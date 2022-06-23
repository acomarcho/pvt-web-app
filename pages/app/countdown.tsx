import Header from "../../components/header";
import Card from "../../components/countdown/card";

const Countdown = () => {
  return (
    <>
      <Header />
      <Card startCount={3}/>
    </>
  );
};

export default Countdown;
