import Header from "../../components/header";
import Information from "../../components/survey/info";
import Radio from "../../components/survey/tingkat-kantuk/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthWrapper from "../../components/authwrapper";

const IstirahatPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidurRumah") ||
      !localStorage.getItem("durasiTidurKendaraan")
    ) {
      router.push("/");
    }
  }, [router]);
  return (
    <AuthWrapper>
      <>
        <Information>
          <p>
            Dalam skala 1-4, seberapa besar tingkat kantuk Anda saat ini?{" "}
            <span className="gum">*</span>
          </p>
        </Information>
        <Radio />
        <Buttons prevLink="/survey/2" nextLink="/app" />
      </>
    </AuthWrapper>
  );
};

export default IstirahatPage;
