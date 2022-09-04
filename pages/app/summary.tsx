import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Subheading from "../../components/summary/subheading";
import ResultCard from "../../components/summary/resultCard";
import Button from "../../components/button";
import AuthWrapper from "../../components/authwrapper";
import Legend from "../../components/summary/legend"

const Results = () => {
  const router = useRouter();
  const [isLatihan, setIsLatihan] = useState<boolean>(false);

  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidur") ||
      !localStorage.getItem("tingkatKantuk") ||
      !localStorage.getItem("tingkatLelah")
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
        <Legend />
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
          <ResultCard />
          <Legend />
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <p>Anda sudah menyelesaikan latihan!</p>
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
