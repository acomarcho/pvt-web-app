import Header from "../../components/header";
import Information from "../../components/survey/info";
import RadioButtons from "../../components/survey/agreement/radio";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useState } from "react";

const SecondSurveyPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  return (
    <>
      <Information>
        <p>
          Dengan menggunakan aplikasi ini, Anda berarti telah menyetujui
          penggunaan data yang dihasilkan untuk keperluan penelitian.{" "}
          <span className="gum">*</span>
        </p>
      </Information>
      <RadioButtons setIsDisabled={setIsDisabled} />
      <Buttons prevLink="/survey/1" nextLink="/survey/3" isDisabled={isDisabled} />
    </>
  );
};

export default SecondSurveyPage;
