import React, { useState, useEffect } from "react";
import Button from "../button";
import styles from "./form.module.css";
import { useRouter } from 'next/router';

const Form = () => {
  const router = useRouter();

  const [nama, setNama] = useState<string>("");
  const [durasi, setDurasi] = useState<string>("");
  const [isNamaValid, setIsNamaValid] = useState<boolean>(true);
  const [isDurasiValid, setIsDurasiValid] = useState<boolean>(true);

  useEffect(() => {
    setNama(localStorage.getItem("nama") || "");
    setDurasi(localStorage.getItem("durasi") || "");
  }, []);

  const onClick = (e: React.SyntheticEvent) => {
    let success: boolean = true;
    e.preventDefault();
    if (nama === "") {
      setIsNamaValid(false);
      success = false;
    } else {
      setIsNamaValid(true);
    }
    if (durasi === "" || parseInt(durasi) < 0) {
      setIsDurasiValid(false);
      success = false;
    } else {
      setIsDurasiValid(true);
    }
    if (success) {
      localStorage.setItem("nama", nama);
      localStorage.setItem("durasi", durasi);
      router.push('/survey/1')
    }
  };

  return (
    <form className={styles.formContainer}>
      <div className={styles.formItem}>
        <label htmlFor="nama">
          Nama <span className="gum">*</span>
        </label>
        <input
          id="nama"
          type="text"
          placeholder="Nama"
          onChange={(e) => {
            setNama(e.target.value);
          }}
          value={nama}
        />
        {!isNamaValid && (
          <p className="gum">Harap isi formulir ini dengan benar terlebih dahulu!</p>
        )}
      </div>
      <div className={styles.formItem}>
        <label htmlFor="durasi">
          Durasi (dalam detik) <span className="gum">*</span>
        </label>
        <input
          id="durasi"
          type="number"
          placeholder="60"
          onChange={(e) => {
            setDurasi(e.target.value);
          }}
          value={durasi}
          min='1'
        />
        {!isDurasiValid && (
          <p className="gum">Harap isi formulir ini dengan benar terlebih dahulu!</p>
        )}
      </div>
      <div className={styles.mulaiContainer}>
        <Button text="Mulai" onClick={onClick} />
        <p>
          Formulir dengan tanda <span className="gum">*</span> wajib diisi.
        </p>
      </div>
    </form>
  );
};

export default Form;
