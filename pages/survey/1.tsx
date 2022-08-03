import Header from "../../components/header";
import Information from "../../components/survey/info";
import RadioButtons from "../../components/survey/agreement/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useState } from "react";

const FirstSurveyPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(
    localStorage.getItem("agreement") === "1" ? false : true
  );

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
          Jika anda menggunakan <strong>KOMPUTER/LAPTOP</strong>, silahkan tekan tombol space bar
          menggunakan tangan kanan atau kiri (yang dirasa dapat cepat merespon
          stimulus) setiap kali muncul gambar kotak hitam dan putih. Jika anda
          menggunakan <strong>HANDPHONE/TABLET</strong>, silahkan sentuh pada bagian mana saja di
          layar menggunakan jari yang anda rasa nyaman dan dapat merespon dengan
          cepat
        </p>
      </Information>
      <Information>
        <p>
          Dengan menggunakan aplikasi ini, Anda berarti telah menyetujui
          penggunaan data yang dihasilkan untuk keperluan penelitian.{" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <RadioButtons setIsDisabled={setIsDisabled} />
      <Buttons prevLink="/" nextLink="/survey/2" isDisabled={isDisabled} />
    </>
  );
};

export default FirstSurveyPage;
