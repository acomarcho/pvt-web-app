import Header from "../../components/header";
import Information from "../../components/survey/info";
import RadioButtons from "../../components/survey/agreement/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useState } from "react";

const FirstSurveyPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(localStorage.getItem("agreement") === '1' ? false : true);

  return (
    <>
      <Information>
        <p>
          Aplikasi ini dapat digunakan untuk menilai kelelahan terhadap aspek
          psikomotorik.
        </p>
      </Information>
      <Information>
        <p>
          Cara pengujian: tekan space bar (boleh menggunakan tangan kanan atau
          kiri) setiap kali ada stimulus yang muncul, berupa kotak hitam dan
          putih.
        </p>
      </Information>
      <Information>
        <p>
          Dengan menggunakan aplikasi ini, Anda berarti telah menyetujui
          penggunaan data yang dihasilkan untuk keperluan penelitian. <span className="gum">*</span>
        </p>
      </Information>
      <RadioButtons setIsDisabled={setIsDisabled}/>
      <Buttons prevLink="/" nextLink="/survey/2" isDisabled={isDisabled}/>
    </>
  );
};

export default FirstSurveyPage;
