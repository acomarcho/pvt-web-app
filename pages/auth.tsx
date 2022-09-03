import styles from "./auth.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

const Auth = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const authenticate = async () => {
    try {
      const { data } = await axios.post('/api/login', {
        username,
        password
      });
      setIsError(false);
      localStorage.setItem("token", data.token)
      router.push("/");
    } catch {
      setIsError(true);
    }
  }

  return (
    <div className={styles.authContainer}>
      <p>
        Untuk mulai menggunakan aplikasi ini, mohon isi formulir autentikasi
        berikut:
      </p>
      <form className={styles.formContainer}>
        <div className={styles.formItem}>
          <label htmlFor="username">
            Username <span className="gum">*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">
            Password <span className="gum">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>
      {isError && (<p className="gum" style={{marginTop: "15px"}}>
        Maaf, data yang Anda masukkan salah!
      </p>)}
      <div className={styles.buttonContainer}>
        <button disabled={!password || !username} onClick={authenticate}>Masuk</button>
      </div>
    </div>
  );
};

export default Auth;
