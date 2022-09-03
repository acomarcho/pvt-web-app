import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/header";
import Subheading from "../../components/results/subheading";
import ResultCard from "../../components/results/resultCard";
import Button from "../../components/button";
import Thanks from "../../components/results/thanks";
import AuthWrapper from "../../components/authwrapper";

const Results = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidur") ||
      !localStorage.getItem("tingkatKantuk") ||
      !localStorage.getItem("kesiapanKerja") ||
      !localStorage.getItem("tingkatLelah")
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
    <AuthWrapper>
      <>
        <Subheading />
        <ResultCard />
        <Button
          text="Lihat ringkasan hasil tes"
          onClick={() => router.push("/app/summary")}
          marginTop="30px"
        />
        <Thanks />
      </>
    </AuthWrapper>
  );
};

export default Results;
