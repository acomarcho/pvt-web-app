import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Subheading from "../../components/summary/subheading-2";
import ResultCard from "../../components/summary/resultCard";
import Button from "../../components/button";
import AuthWrapper from "../../components/authwrapper";
import Conclusion from "../../components/summary/conclusion"

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
      <>
        <Subheading />
        <ResultCard />
        <Conclusion />
        <Button
          text="Selesai"
          onClick={() => {
            localStorage.removeItem("tingkatLelah");
            localStorage.removeItem("tingkatKantuk");
            localStorage.removeItem("nama");
            localStorage.removeItem("listReaksi");
            localStorage.removeItem("durasi");
            localStorage.removeItem("kesiapanKerja");
            localStorage.removeItem("agreement");
            localStorage.removeItem("device");
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
          <Subheading />
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
                text="Mulai tes 3 menit"
                onClick={() => {
                  localStorage.setItem("durasi", "3");
                  router.push("/app");
                }}
              />
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
              localStorage.removeItem("tingkatLelah");
              localStorage.removeItem("tingkatKantuk");
              localStorage.removeItem("nama");
              localStorage.removeItem("listReaksi");
              localStorage.removeItem("durasi");
              localStorage.removeItem("kesiapanKerja");
              localStorage.removeItem("agreement");
              localStorage.removeItem("device");
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
