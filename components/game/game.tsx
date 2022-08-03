import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import {
  getMinorLapses,
  getMajorLapses,
  getMeanRT,
  getMedianRT,
  get1OverMeanRT,
  getFastest10RT,
  getSlowest10RT,
} from "../../utils/statistics";
import axios from "axios";

const timeoutTime = 30; /* in seconds */

const Game = () => {
  const router = useRouter();
  const newImageTimer = useRef<NodeJS.Timeout | null>(null);
  const imageTimeoutTimer = useRef<NodeJS.Timeout | null>(null);

  const [showImage, setShowImage] = useState<boolean>(false);
  const [lastShown, setLastShown] = useState<number>(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);

  const generateNewImage = () => {
    newImageTimer.current = setTimeout(() => {
      setLastShown(new Date().getTime());
      setShowImage(true);
    }, Math.floor(Math.random() * 2000) + 1000);

    clearTimeout(imageTimeoutTimer.current!);

    imageTimeoutTimer.current = setTimeout(() => {
      reactionTimeout();
    }, timeoutTime * 1000);
  };

  const reactionTimeout = useCallback(() => {
    /* Reaksi gagal! */
    setShowImage(false);
    const elapsedTime = timeoutTime * 1000;
    const oldReactionTimes = JSON.parse(localStorage.getItem("listReaksi")!) as number[];
    setReactionTimes([...oldReactionTimes, elapsedTime]);
    localStorage.setItem(
      "listReaksi",
      JSON.stringify([...oldReactionTimes, elapsedTime])
    );
    generateNewImage();
  }, [reactionTimes]);

  const handleReaction = useCallback(() => {
    setShowImage(false);
    generateNewImage();
    const elapsedTime = new Date().getTime() - lastShown;
    setReactionTimes([...reactionTimes, elapsedTime]);
    localStorage.setItem(
      "listReaksi",
      JSON.stringify([...reactionTimes, elapsedTime])
    );
  }, [lastShown, reactionTimes]);

  const onClick = useCallback(() => {
    if (showImage) {
      handleReaction();
    } else {
      clearTimeout(newImageTimer.current!);
      generateNewImage();
    }
  }, [showImage, handleReaction]);

  const onKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        if (showImage) {
          handleReaction();
        } else {
          clearTimeout(newImageTimer.current!);
          generateNewImage();
        }
      }
    },
    [showImage, handleReaction]
  );

  useEffect(() => {
    if (
      localStorage.getItem("agreement") !== "1" ||
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("tingkatKantuk")
    ) {
      router.push("/");
      return;
    }

    localStorage.setItem("listReaksi", JSON.stringify([]));

    const timer = setTimeout(async () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("keypress", onKeypress);

      clearTimeout(newImageTimer.current!);
      clearTimeout(imageTimeoutTimer.current!);

      router.push("/app/results");

      console.log("Saving data to spreadsheet ...");

      /* Simpan hasil! */
      const nama = localStorage.getItem("nama");
      const device = localStorage.getItem("device");
      const durasi = localStorage.getItem("durasi");
      const tingkatKantuk = localStorage.getItem("tingkatKantuk");
      const tingkatLelah = localStorage.getItem("tingkatLelah");
      const kesiapanKerja = localStorage.getItem("kesiapanKerja");
      const reactions = localStorage.getItem("listReaksi");
      const listReaksi = JSON.parse(
        localStorage.getItem("listReaksi") as string
      ) as number[];
      const banyakPercobaan = listReaksi.length;
      const minorLapses = getMinorLapses(listReaksi);
      const majorLapses = getMajorLapses(listReaksi);
      const meanRT = getMeanRT(listReaksi);
      const medianRT = getMedianRT(listReaksi);
      const mean1OverMeanRT = get1OverMeanRT(listReaksi);
      const fastest10RT = getFastest10RT(listReaksi);
      const slowest10RT = getSlowest10RT(listReaksi);

      await axios.post("/api/sheets", {
        nama,
        device,
        durasi,
        tingkatKantuk,
        tingkatLelah,
        kesiapanKerja,
        reactions,
        banyakPercobaan,
        minorLapses,
        majorLapses,
        meanRT,
        medianRT,
        mean1OverMeanRT,
        fastest10RT,
        slowest10RT,
      });
    }, parseInt(localStorage.getItem("durasi")!) * 1000 * 60);

    generateNewImage();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", onClick);
      window.removeEventListener("keypress", onKeypress);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener("click", onClick);
    window.addEventListener("keypress", onKeypress);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("keypress", onKeypress);
    };
  }, [onClick, onKeypress, handleReaction]);

  return (
    <div>
      <div style={{ marginTop: "15px" }}>
        {reactionTimes.length === 0 && (
          <p>
            Silakan tekan tombol space bar, enter, atau klik kiri pada mouse
            setiap kali muncul gambar garis hitam dan putih.
          </p>
        )}
        {reactionTimes.length > 0 &&
          reactionTimes[reactionTimes.length - 1] === timeoutTime * 1000 && (
            <p>
              Reaksi Anda terlalu lama, melebihi{" "}
              <span className="gum">{timeoutTime} detik!</span>
            </p>
          )}
        {reactionTimes.length > 0 &&
          reactionTimes[reactionTimes.length - 1] !== timeoutTime * 1000 && (
            <p>
              Reaksi terakhir Anda membutuhkan waktu{" "}
              <span className="mint">
                {reactionTimes[reactionTimes.length - 1] / 1000} detik
              </span>
              .
            </p>
          )}
      </div>
      {showImage && (
        <div style={{ marginTop: "45px" }}>
          <img
            style={{ width: "100%" }}
            src="/board.png"
            alt="checkered board"
          />
        </div>
      )}
    </div>
  );
};

export default Game;
