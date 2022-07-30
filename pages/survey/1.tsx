import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/1/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FirstSurveyPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("nama") || !localStorage.getItem("durasi")) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <Information>
        <p>
          Seberapa besar tingkat kantuk Anda saat ini? (1-9){" "}
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
            5 = <strong>Tidak</strong> waspada, namun juga{" "}
            <strong>tidak</strong> mengantuk
          </p>
          <p>
            6 = Muncul <strong>sedikit</strong> tanda mengantuk
          </p>
          <p>
            7 = Mengantuk, tapi <strong>tidak butuh usaha</strong> untuk tetap
            terjaga
          </p>
          <p>
            8 = Mengantuk, <strong>butuh usaha</strong> untuk tetap terjaga
          </p>
          <p>
            9 = <strong>Sangat</strong> mengantuk, <strong>sulit</strong> untuk
            tetap terjaga
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
              textAlign: "right"
            }}
          >
            <strong>Sangat</strong> mengantuk, <strong>sulit</strong> untuk
            tetap terjaga
          </p>
        </div>
      </Information>
      <Buttons prevLink="/" nextLink="/survey/2" />
    </>
  );
};

export default FirstSurveyPage;
