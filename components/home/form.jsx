import React, { useState, useEffect } from "react";
import Button from "../button";
import styles from "./form.module.css";
import { useRouter } from "next/router";
import Select from "react-select";

const options = [
  { value: "3", label: "Latihan (durasi 3 menit)" },
  { value: "5", label: "5 menit" },
  { value: "10", label: "10 menit" },
];

const customStyles = {
  control: (provided, _) => ({
    ...provided,
    border: "none",
    borderRadius: "12px",
    background: "none",
    boxShadow: "none",
  }),
  singleValue: (provided, _) => ({
    ...provided,
    color: "var(--white-2)",
  }),
  valueContainer: (provided, _) => ({
    ...provided,
    background: "#3E3F58",
    padding: "12px 24px",
    color: "var(--white-2)",
    borderRadius: "12px 0 0 12px",
  }),
  dropdownIndicator: (provided, _) => ({
    ...provided,
    color: "var(--white-2)",
    background: "#3E3F58",
  }),
  indicatorsContainer: (provided, _) => ({
    ...provided,
    background: "#3E3F58",
    borderRadius: "0 12px 12px 0",
  }),
  option: (provided, _) => ({
    ...provided,
    padding: "12px 24px",
    background: "#36384F",
    color: "var(--white-2)",
  }),
  menu: (provided, _) => ({
    ...provided,
    background: "none",
  }),
  menuList: (provided, _) => ({
    ...provided,
    background: "none",
  }),
};

const Form = () => {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [durasi, setDurasi] = useState(null);
  const [isDurasiValid, setIsDurasiValid] = useState(true);

  useEffect(() => {
    setNama(localStorage.getItem("nama") || "");
    if (localStorage.getItem("durasi") === "3") {
      setDurasi({
        value: "3",
        label: "Latihan (durasi 3 menit)",
      });
    }
    if (localStorage.getItem("durasi") === "5") {
      setDurasi({
        value: "5",
        label: "5 menit",
      });
    }
    if (localStorage.getItem("durasi") === "10") {
      setDurasi({
        value: "10",
        label: "10 menit",
      });
    }
  }, []);

  const onClick = (e) => {
    let success = true;
    e.preventDefault();
    console.log(durasi);
    if (!durasi) {
      setIsDurasiValid(false);
      success = false;
    } else {
      setIsDurasiValid(true);
    }
    if (success) {
      localStorage.setItem("nama", nama);
      localStorage.setItem("durasi", durasi.value);
      router.push("/survey/1");
    }
  };

  return (
    <form className={styles.formContainer}>
      <div className={styles.formItem}>
        <label htmlFor="nama">ID</label>
        <input
          id="nama"
          type="text"
          placeholder="ID"
          onChange={(e) => {
            setNama(e.target.value);
          }}
          value={nama}
        />
      </div>
      <div className={styles.formItem}>
        <label>
          Durasi (dalam menit) <span className="gum">*</span>
        </label>
        <Select
          value={durasi}
          onChange={setDurasi}
          options={options}
          styles={customStyles}
        />
        {!isDurasiValid && (
          <p className="gum">
            Harap isi formulir ini dengan benar terlebih dahulu!
          </p>
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
