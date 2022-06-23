import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/1/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FirstSurveyPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('nama') || !localStorage.getItem('durasi')) {
      router.push('/');
    }
  }, [router])
  return (
    <>
      <Header />
      <Information>
        <p>
          Seberapa besar tingkat kantuk Anda saat ini? (1-9){" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <Range />
      <Information marginTop="30px">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Waspada</p>
          <p>Sangat mengantuk</p>
        </div>
      </Information>
      <Buttons prevLink="/" nextLink="/survey/2" />
    </>
  );
};

export default FirstSurveyPage;
