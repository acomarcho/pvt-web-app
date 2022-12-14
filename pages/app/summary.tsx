import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Subheading from "../../components/summary/subheading";
import Subheading2 from "../../components/summary/subheading-2";
import WaktuHabis from "../../components/summary/waktuHabis";
import ResultCard from "../../components/summary/resultCard";
import Button from "../../components/button";
import AuthWrapper from "../../components/authwrapper";
import Conclusion from "../../components/summary/conclusion";

const Results = () => {
  const router = useRouter();
  const [isLatihan, setIsLatihan] = useState<boolean>(false);

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
  }, []);

  if (!isLatihan) {
    return (
      <AuthWrapper>
        <>
          <WaktuHabis />
          <Subheading />
          <ResultCard />
          <p style={{ marginTop: "15px" }}>
            Terima kasih telah berpartisipasi dalam tes ini!
          </p>
          <Button
            text="Selesai"
            onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem("nama");
                localStorage.removeItem("durasi");
                localStorage.removeItem("kualitasTidurRumah");
                localStorage.removeItem("durasiTidurRumah");
                localStorage.removeItem("kualitasTidurKendaraan");
                localStorage.removeItem("durasiTidurKendaraan");
                localStorage.removeItem("tingkatKantuk");
                localStorage.removeItem("butuhIstirahat");
                localStorage.removeItem("listReaksi");
              }
              router.push("/");
            }}
            marginTop="30px"
          />
        </>
      </AuthWrapper>
    );
  } else {
    return (
      <AuthWrapper>
        <>
          <WaktuHabis />
          <Subheading2 />
          <ResultCard />
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <Button
                text="Mulai tes 5 menit"
                onClick={() => {
                  localStorage.setItem("durasi", "5");
                  router.push("/app");
                }}
              />
            </div>
          </div>
          <Button
            text="Selesai"
            onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem("nama");
                localStorage.removeItem("durasi");
                localStorage.removeItem("kualitasTidurRumah");
                localStorage.removeItem("durasiTidurRumah");
                localStorage.removeItem("kualitasTidurKendaraan");
                localStorage.removeItem("durasiTidurKendaraan");
                localStorage.removeItem("tingkatKantuk");
                localStorage.removeItem("butuhIstirahat");
                localStorage.removeItem("listReaksi");
              }
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
