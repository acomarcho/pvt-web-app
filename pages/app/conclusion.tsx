import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import AuthWrapper from "../../components/authwrapper";
import { getFastest10RT, getMedianRT } from "../../utils/statistics"
import styles from "./conclusion.module.css"

const Results = () => {
  const router = useRouter();
  const [isLatihan, setIsLatihan] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidurRumah") ||
      !localStorage.getItem("durasiTidurKendaraan") ||
      !localStorage.getItem("tingkatKantuk")
    ) {
      router.push("/");
      return;
    }
    if (
      !localStorage.getItem("listReaksi") ||
      localStorage.getItem("listReaksi") === "[]"
    ) {
      router.push("/");
      return;
    }
  }, [router]);

  useEffect(() => {
    if (localStorage.getItem("durasi") === "1") {
      setIsLatihan(true);
    } else {
      setIsLatihan(false);
    }

    const reactions: number[] = JSON.parse(localStorage.getItem("listReaksi")!);
    if (getFastest10RT(reactions) >= 300 || getMedianRT(reactions) >= 365) {
      setIsFailed(true);
    } else {
      setIsFailed(false);
    }
  }, []);

  if (!isLatihan) {
    return (
      <>
        <div className={styles.subheadingContainer}>
          <h1>Tes selesai!</h1>
        </div>
        {isFailed && (
          <div className={styles.conclusionBoxOrange}>Stop! Mohon konsultasi dengan paramedis.</div>
        )}
        {!isFailed && (
          <div className={styles.conclusionBoxMint}>Anda siap untuk bekerja!</div>
        )}
        <br />
        <Button
          text="Selesai"
          onClick={() => {
            localStorage.removeItem("tingkatKantuk");
            localStorage.removeItem("nama");
            localStorage.removeItem("listReaksi");
            localStorage.removeItem("durasi");
            localStorage.removeItem("durasiTidurRumah");
            localStorage.removeItem("durasiTidurKendaraan");
            localStorage.removeItem("kualitasTidurRumah");
            localStorage.removeItem("kualitasTidurKendaraan");
            router.push("/");
          }}
          marginTop="30px"
        />
      </>
    );
  } else {
    return (
      <AuthWrapper>
        <>
          <div className={styles.subheadingContainer}>
            <h1>Anda sudah menyelesaikan latihan!</h1>
          </div>
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                marginTop: "15px",
                gap: "15px",
              }}
            >
              <Button
                text="Mulai tes 3 menit"
                onClick={() => {
                  localStorage.setItem("durasi", "3");
                  router.push("/app");
                }}
              />
            </div>
          </div>
          <Button
            text="Selesai"
            onClick={() => {
              localStorage.removeItem("tingkatKantuk");
              localStorage.removeItem("nama");
              localStorage.removeItem("listReaksi");
              localStorage.removeItem("durasi");
              localStorage.removeItem("durasiTidurRumah");
              localStorage.removeItem("durasiTidurKendaraan");
              localStorage.removeItem("kualitasTidurRumah");
              localStorage.removeItem("kualitasTidurKendaraan");
              router.push("/");
            }}
            marginTop="30px"
          />
        </>
      </AuthWrapper>
    );
  }
};

export default Results;
