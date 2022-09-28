import Information from "../../components/survey/info";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Radio from "../../components/survey/tidur-rumah/radio";
import styles from "./1.module.css";
import AuthWrapper from "../../components/authwrapper";

const TingkatKantukPage = () => {
  const router = useRouter();
  const [durasiTidur, setDurasiTidur] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("durasiTidurRumah")) {
      setDurasiTidur(localStorage.getItem("durasiTidurRumah") as string);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("durasi")) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    localStorage.setItem("durasiTidurRumah", durasiTidur);
  }, [durasiTidur]);

  return (
    <AuthWrapper>
      <>
        <form className={styles.formContainer}>
          <div className={styles.formItem}>
            <label htmlFor="durasiTidur">
              Berapa lama durasi tidur <strong>(di rumah)</strong> Anda dalam 24 jam terakhir? (dalam jam){" "}
              <span className="gum">*</span>
            </label>
            <input
              type="number"
              name="durasiTidur"
              id="durasiTidur"
              value={durasiTidur}
              onChange={(e) => setDurasiTidur(e.target.value)}
            />
            {(parseInt(durasiTidur) < 0 || parseInt(durasiTidur) > 24) && (
              <p className="gum">Durasi tidak valid!</p>
            )}
          </div>
        </form>
        <p style={{ marginTop: "30px" }}>
          Bagaimana kualitas tidur <strong>(di rumah)</strong> Anda dalam 24 jam terakhir?{" "}
          <span className="gum">*</span>
        </p>
        <Radio />
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Kembali
          </button>
          <button
            onClick={() => {
              router.push("/survey/2");
            }}
            disabled={
              durasiTidur === "" ||
              parseInt(durasiTidur) < 0 ||
              parseInt(durasiTidur) > 24
            }
          >
            Selanjutnya
          </button>
        </div>
      </>
    </AuthWrapper>
  );
};

export default TingkatKantukPage;
