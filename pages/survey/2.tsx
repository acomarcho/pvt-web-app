import Information from "../../components/survey/info";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Radio from "../../components/survey/tidur-kendaraan/radio";
import styles from "./1.module.css";
import AuthWrapper from "../../components/authwrapper";

const TingkatKantukPage = () => {
  const router = useRouter();
  const [durasiJam, setDurasiJam] = useState<string>("");
  const [durasiMenit, setDurasiMenit] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("durasiTidurKendaraan")) {
      const duration = localStorage.getItem("durasiTidurKendaraan");
      const hours = Math.floor(parseInt(duration!) / 60);
      const minutes = parseInt(duration!) % 60;
      setDurasiJam(hours === 0 ? "" : hours.toString());
      setDurasiMenit(minutes === 0 ? "" : minutes.toString());
    } else {
      localStorage.setItem("durasiTidurKendaraan", "0");
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
    localStorage.setItem("durasiTidurKendaraan", (hours * 60 + minutes).toString());
  }, [durasiJam, durasiMenit]);

  return (
    <AuthWrapper>
      <>
        <form className={styles.formContainer}>
          <div className={styles.formItem}>
            <label htmlFor="durasiTidur">
              Berapa lama durasi tidur <strong>DI KENDARAAN</strong> Anda dalam 24
              jam terakhir? (kosongkan jika tidak sempat tidur <strong>di KENDARAAN</strong>)<span className="gum">*</span>
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
                      parseInt(e.target.value) >= 0 &&
                      parseInt(e.target.value) <= 59
                    ) {
                      setDurasiMenit(e.target.value);
                    }
                    if (
                      e.target.value === "" ||
                      parseInt(e.target.value) === 0
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
          Apabila Anda sempat tidur <strong>DI KENDARAAN</strong>, bagaimana kualitas tidur <strong>DI KENDARAAN</strong> Anda dalam 24 jam
          terakhir? <span className="gum">*</span>
        </p>
        <Radio />
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              router.push("/survey/1");
            }}
          >
            Kembali
          </button>
          <button
            onClick={() => {
              router.push("/survey/3");
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
