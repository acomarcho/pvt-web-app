import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Game = () => {
  const router = useRouter();

  const [showImage, setShowImage] = useState<boolean>(false);
  const [lastShown, setLastShown] = useState<number>(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);

  const generateNewImage = () => {
    setTimeout(() => {
      setLastShown(new Date().getTime());
      setShowImage(true);
    }, Math.floor(Math.random() * 2000) + 1000);
  };

  const handleReaction = useCallback(() => {
    setShowImage(false);
    generateNewImage();
    const elapsedTime = new Date().getTime() - lastShown;
    setReactionTimes([...reactionTimes, elapsedTime]);
    localStorage.setItem(
      "listReaksi",
      JSON.stringify([...reactionTimes, elapsedTime])
    );
  }, [lastShown, reactionTimes])

  const onClick = useCallback(() => {
    if (showImage) {
      handleReaction();
    }
  }, [showImage, handleReaction])

  const onKeypress = useCallback((e: KeyboardEvent) => {
    if (showImage && (e.key === " " || e.key === "Enter")) {
      handleReaction();
    }
  }, [showImage, handleReaction]);

  useEffect(() => {
    if (!localStorage.getItem('nama') || !localStorage.getItem('durasi') || !localStorage.getItem('tingkatKantuk')) {
      router.push('/');
      return;
    }
    
    localStorage.setItem("listReaksi", JSON.stringify([]));

    const timer = setTimeout(() => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("keypress", onKeypress);
      
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
      }, 0);

      router.push("/app/results");
    }, parseInt(localStorage.getItem("durasi")!) * 1000);

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
        {reactionTimes.length > 0 && (
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
            style={{width: '100%'}}
            src="/board.png"
            alt="checkered board"
          />
        </div>
      )}
    </div>
  );
};

export default Game;
