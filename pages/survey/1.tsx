import Information from "../../components/survey/info";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Radio from "../../components/survey/tidur-rumah/radio";
import styles from "./1.module.css";
import AuthWrapper from "../../components/authwrapper";

const TingkatKantukPage = () => {
  const router = useRouter();
  const [durasiJam, setDurasiJam] = useState<string>("");
  const [durasiMenit, setDurasiMenit] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("durasiTidurRumah")) {
      const duration = localStorage.getItem("durasiTidurRumah");
      const hours = Math.floor(parseInt(duration!) / 60);
      const minutes = parseInt(duration!) % 60;
      setDurasiJam(hours === 0 ? "" : hours.toString());
      setDurasiMenit(minutes === 0 ? "" : minutes.toString());
    } else {
      localStorage.setItem("durasiTidurRumah", "0");
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("durasi")) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    let hours = parseInt(durasiJam);
    if (isNaN(hours)) {
      hours = 0;
    }
    let minutes = parseInt(durasiMenit);
    if (isNaN(minutes)) {
      minutes = 0;
    }
    localStorage.setItem("durasiTidurRumah", (hours * 60 + minutes).toString());
  }, [durasiJam, durasiMenit]);

  return (
    <AuthWrapper>
      <>
        <form className={styles.formContainer}>
          <div className={styles.formItem}>
            <label htmlFor="durasiTidur">
              Berapa lama durasi tidur Anda <strong>DI RUMAH/MESS</strong> dalam 24
              jam terakhir? (kosongkan jika tidak sempat tidur <strong>DI RUMAH/MESS</strong>) <span className="gum">*</span>
            </label>
            <div className={styles.formFlex}>
              <div className={styles.formFlexItem}>
                <input
                  type="number"
                  name="durasiTidur"
                  id="durasiTidur"
                  min="0"
                  max="24"
                  placeholder="0"
                  value={durasiJam}
                  onChange={(e) => {
                    if (
                      parseInt(e.target.value) >= 0 &&
                      parseInt(e.target.value) <= 59
                    ) {
                      setDurasiJam(e.target.value);
                    }
                    if (
                      e.target.value === "" ||
                      parseInt(e.target.value) === 0
                    ) {
                      setDurasiJam("");
                    }
                  }}
                />
                <p>jam</p>
              </div>
              <div className={styles.formFlexItem}>
                <input
                  type="number"
                  name="durasiTidur"
                  id="durasiTidur"
                  min="0"
                  max="59"
                  step="5"
                  placeholder="0"
                  value={durasiMenit}
                  onChange={(e) => {
                    if (
                      parseInt(e.target.value) > 0 &&
                      parseInt(e.target.value) <= 59
                    ) {
                      setDurasiMenit(e.target.value);
                    }
                    if (
                      e.target.value === ""
                    ) {
                      setDurasiMenit("");
                    }
                  }}
                />
                <p>menit</p>
              </div>
            </div>
          </div>
        </form>
        <p style={{ marginTop: "30px" }}>
          Apabila Anda sempat tidur <strong>DI RUMAH/MESS</strong>, bagaimana kualitas tidur Anda <strong>DI RUMAH/MESS</strong> dalam 24 jam
          terakhir? <span className="gum">*</span>
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
              parseInt(durasiJam) + parseInt(durasiMenit) / 60 > 24 ||
              parseInt(durasiJam) > 24 ||
              parseInt(durasiMenit) > 59
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
