import Header from "../../components/header";
import Information from "../../components/survey/info";
import RadioButtons from "../../components/survey/3/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FirstSurveyPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('nama') || !localStorage.getItem('durasi') || !localStorage.getItem('tingkatKantuk') || !localStorage.getItem('tingkatLelah')) {
      router.push('/');
    }
  }, [router])
  return (
    <>
      <Information>
        <p>
          Apakah saat ini Anda dalam kondisi siap untuk bekerja?{" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <RadioButtons />
      <Buttons prevLink="/survey/2" nextLink="/app" />
    </>
  );
};

export default FirstSurveyPage;
