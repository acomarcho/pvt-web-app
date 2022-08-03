import Header from "../../components/header";
import Button from "../../components/button";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const App = () => {
  const router = useRouter();

  const [duration, setDuration] = useState<string>("0");
  const [isPhone, setIsPhone] = useState<boolean>(true);

  useEffect(() => {
    if (
      localStorage.getItem("device") === "Laptop" ||
      localStorage.getItem("device") === "Komputer"
    ) {
      setIsPhone(false);
    } else {
      setIsPhone(true);
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("agreement") !== "1" ||
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
        {!isPhone && (
          <p>
            Silakan tekan tombol space bar menggunakan tangan kanan atau kiri
            (yang dirasa dapat cepat merespon stimulus) setiap kali muncul
            gambar kotak hitam dan putih.
          </p>
        )}
        {isPhone && (
          <p>
            Silakan sentuh pada bagian mana saja di layar menggunakan jari yang
            Anda rasa nyaman dan dapat merespon dengan cepat.
          </p>
        )}
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
