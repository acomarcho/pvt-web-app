import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/2/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthWrapper from "../../components/authwrapper";

const IstirahatPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidur") ||
      !localStorage.getItem("tingkatKantuk")
    ) {
      router.push("/");
    }
  }, [router]);
  return (
    <AuthWrapper>
      <>
        <Information>
          <p>
            Seberapa besar Anda membutuhkan istirahat saat ini? (0-100){" "}
            <span className="gum">*</span>
          </p>
        </Information>
        <Range />
        <Information marginTop="30px">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                maxWidth: "120px",
              }}
            >
              <strong>Sangat tidak</strong> memerlukan istirahat
            </p>
            <p
              style={{
                maxWidth: "120px",
                textAlign: "right",
              }}
            >
              <strong>Sangat</strong> memerlukan istirahat
            </p>
          </div>
        </Information>
        <Buttons prevLink="/survey/2" nextLink="/survey/4" />
      </>
    </AuthWrapper>
  );
};

export default IstirahatPage;
