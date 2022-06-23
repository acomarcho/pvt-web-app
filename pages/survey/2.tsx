import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/2/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SecondSurveyPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('nama') || !localStorage.getItem('durasi') || !localStorage.getItem('tingkatKantuk')) {
      router.push('/');
    }
  }, [router])
  return (
    <>
      <Header />
      <Information>
        <p>
          Seberapa besar tingkat kelelahan Anda saat ini? (1-100){" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <Range />
      <Information marginTop="30px">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p>Tidak lelah</p>
          <p>Sangat lelah</p>
        </div>
      </Information>
      <Buttons prevLink="/survey/1" nextLink="/survey/3" />
    </>
  );
};

export default SecondSurveyPage;
