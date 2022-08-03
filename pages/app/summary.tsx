import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Subheading from "../../components/summary/subheading";
import ResultCard from "../../components/summary/resultCard";
import Button from "../../components/button";

const Results = () => {
  const router = useRouter();
  const [isLatihan, setIsLatihan] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.getItem("agreement") !== "1" ||
      !localStorage.getItem("nama") ||
      !localStorage.getItem("durasi") ||
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
    if (localStorage.getItem("durasi") === "3") {
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
        <Button
          text="Selesai"
          onClick={() => {
            localStorage.removeItem("tingkatLelah");
            localStorage.removeItem("tingkatKantuk");
            localStorage.removeItem("nama");
            localStorage.removeItem("listReaksi");
            localStorage.removeItem("durasi");
            localStorage.removeItem("kesiapanKerja");
            router.push("/");
          }}
          marginTop="30px"
        />
      </>
    );
  } else {
    return (
      <>
        <Subheading />
        <ResultCard />
        <div style={{
          marginTop: "15px"
        }}>
          <p>Anda sudah menyelesaikan latihan!</p>
          <div
            style={{
              display: "flex",
              marginTop: "15px",
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
            <Button
              text="Mulai tes 10 menit"
              onClick={() => {
                localStorage.setItem("durasi", "10");
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
            localStorage.removeItem("agreement")
            localStorage.removeItem("device")
            router.push("/");
          }}
          marginTop="30px"
        />
      </>
    );
  }
};

export default Results;
