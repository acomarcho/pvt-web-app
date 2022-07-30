import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/header";
import Subheading from "../../components/summary/subheading";
import ResultCard from "../../components/summary/resultCard";
import Button from "../../components/button";

const Results = () => {
  const router = useRouter();
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
      localStorage.getItem("listReaksi") == "[]"
    ) {
      router.push("/");
      return;
    }
  }, [router]);
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
};

export default Results;
