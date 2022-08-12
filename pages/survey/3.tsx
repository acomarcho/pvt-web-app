import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/1/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SecondSurveyPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      localStorage.getItem("agreement") !== "1" ||
      !localStorage.getItem("durasi")
    ) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <Information>
        <p>
          Seberapa besar tingkat kantuk Anda saat ini? (1-10){" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <Information>
        <>
          <p style={{ marginBottom: "15px" }}>Keterangan pengisian skala:</p>
          <p>
            1 = <strong>Sangat, sangat</strong> waspada
          </p>
          <p>
            2 = <strong>Sangat</strong> waspada
          </p>
          <p>3 = Waspada</p>
          <p>
            4 = <strong>Agak</strong> waspada
          </p>
          <p>
            5 = <strong>Tidak</strong> dalam keadaan waspada, namun juga{" "}
            <strong>tidak</strong> dalam keadaan mengantuk mengantuk
          </p>
          <p>
            6 = Ada <strong>sedikit</strong> rasa kantuk
          </p>
          <p>
            7 = Mengantuk, tapi <strong>tidak butuh usaha</strong> untuk tetap
            terjaga
          </p>
          <p>
            8 = Mengantuk, <strong>butuh usaha</strong> untuk tetap terjaga
          </p>
          <p>
            9 = <strong>Sangat</strong> mengantuk,{" "}
            <strong>perlu usaha besar</strong> untuk tetap terjaga
          </p>
          <p>
            10 = <strong>Sangat</strong>, <strong>sangat</strong> mengantuk,{" "}
            <strong>sangat sulit</strong> untuk terjaga
          </p>
        </>
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
            <strong>Sangat, sangat</strong> waspada
          </p>
          <p
            style={{
              maxWidth: "120px",
              textAlign: "right",
            }}
          >
            <strong>Sangat</strong> mengantuk, <strong>sulit</strong> untuk
            tetap terjaga
          </p>
        </div>
      </Information>
      <Buttons prevLink="/survey/2" nextLink="/survey/4" />
    </>
  );
};

export default SecondSurveyPage;
