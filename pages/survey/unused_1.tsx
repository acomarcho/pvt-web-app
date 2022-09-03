import Header from "../../components/header";
import Information from "../../components/survey/info";
import DeviceRadioButtons from "../../components/survey/agreement/radio2";
import Buttons from "../../components/survey/buttons";

const FirstSurveyPage = () => {
  return (
    <>
      <Information>
        <>
          <p>
            Aplikasi ini dapat digunakan untuk menilai kelelahan terhadap aspek
            psikomotorik.
          </p>
          <br />
          <p>
            Pengujian dilakukan dengan cara melakukan respons terhadap stimulus
            berupa gambar kotak hitam putih. Bentuk respons disesuaikan dengan
            device yang digunakan Anda.
          </p>
        </>
      </Information>
      <Information>
        <p>
          Device apa yang Anda gunakan untuk pengujian ini?{" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <DeviceRadioButtons />
      <Buttons prevLink="/" nextLink="/survey/2" />
    </>
  );
};

export default FirstSurveyPage;
