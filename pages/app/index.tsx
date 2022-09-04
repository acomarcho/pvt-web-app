import Header from "../../components/header";
import Button from "../../components/button";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AuthWrapper from "../../components/authwrapper";

const App = () => {
  const router = useRouter();

  const [duration, setDuration] = useState<string>("0");

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
    setDuration(localStorage.getItem("durasi") as string);
  }, [router]);

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/app/countdown");
  };

  return (
    <AuthWrapper>
      <>
        <div style={{ marginTop: "15px" }}>
          <p>
            <strong>Petunjuk pengujian PVT</strong>
          </p>
          <br />
          <p>
            Silakan tekan tombol space bar menggunakan tangan kanan atau kiri
            (yang dirasa dapat cepat merespon stimulus) setiap kali muncul
            gambar kotak hitam dan putih.
          </p>
          <br />
          <div>
            <Image src="/spacebar-hd.png" width="640" height="360" />
          </div>
          <br />
          <p>
            Untuk keluar dari tes, silakan scroll ke bawah lalu tekan tombol &apos;Keluar&apos;.
          </p>
          <br />
          <p>
            Anda akan mengerjakan tes selama{" "}
            <span className="blueberry">{duration} menit</span>.
          </p>
        </div>
        <Button text="Saya mengerti" onClick={onClick} marginTop="30px" />
      </>
    </AuthWrapper>
  );
};

export default App;
