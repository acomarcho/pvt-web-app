import Header from "../../components/header";
import Button from "../../components/button";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const App = () => {
  const router = useRouter();

  const [duration, setDuration] = useState<string>("0");

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
    setDuration(localStorage.getItem("durasi") as string);
  }, [router]);

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/app/countdown");
  };

  return (
    <>
      <div style={{ marginTop: "15px" }}>
        <p>
          <strong>Petunjuk pengujian PVT</strong>
        </p>
        <br />
        <p>
          Silakan tekan tombol space bar menggunakan tangan kanan atau kiri
          (yang dirasa dapat cepat merespon stimulus) setiap kali muncul gambar
          kotak hitam dan putih.
        </p>
        <br />
        <p>
          Anda akan mengerjakan tes selama{" "}
          <span className="blueberry">{duration} menit</span>.
        </p>
      </div>
      <Button text="Saya mengerti" onClick={onClick} marginTop="30px" />
    </>
  );
};

export default App;
