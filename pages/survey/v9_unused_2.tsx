import Header from "../../components/header";
import Information from "../../components/survey/info";
import Radio from "../../components/survey/1/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthWrapper from "../../components/authwrapper";

const TingkatKantukPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidur")
    ) {
      router.push("/");
    }
  }, [router]);
  return (
    <AuthWrapper>
      <>
        <Information>
          <p>
            Seberapa besar tingkat kantuk Anda saat ini?{" "}
            <span className="gum">*</span>
          </p>
        </Information>
        <Radio />
        <Buttons prevLink="/survey/1" nextLink="/survey/3" />
      </>
    </AuthWrapper>
  );
};

export default TingkatKantukPage;
