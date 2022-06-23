import { useState, useEffect } from "react";
import {
  getMinorLapses,
  getMajorLapses,
  getMeanRT,
  getMedianRT,
  get1OverMeanRT,
  getFastest10RT,
  getSlowest10RT,
} from "../../utils/statistics";
import styles from "./resultCard.module.css";

interface Statistic {
  name: string;
  description: string;
  func: (data: number[]) => number;
  unit: string;
  toFixed: number;
}

const statistics: Statistic[] = [
  {
    name: "Minor lapses",
    description: "Banyak waktu reaksi yang lebih besar dari 500 milidetik",
    func: getMinorLapses,
    unit: "kali percobaan",
    toFixed: 0
  },
  {
    name: "Major lapses",
    description: "Banyak waktu reaksi yang lebih besar dari 1000 milidetik",
    func: getMajorLapses,
    unit: "kali percobaan",
    toFixed: 0
  },
  {
    name: "Mean RT",
    description: "Rata-rata waktu reaksi",
    func: getMeanRT,
    unit: "milidetik",
    toFixed: 3
  },
  {
    name: "Median RT",
    description: "Median waktu reaksi",
    func: getMedianRT,
    unit: "milidetik",
    toFixed: 3
  },
  {
    name: "Mean 1/RT",
    description: "1 dibagi rata-rata waktu reaksi",
    func: get1OverMeanRT,
    unit: "/milidetik",
    toFixed: 5
  },
  {
    name: "Fastest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi tercepat",
    func: getFastest10RT,
    unit: "milidetik",
    toFixed: 3
  },
  {
    name: "Slowest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi terlambat",
    func: getSlowest10RT,
    unit: "milidetik",
    toFixed: 3
  },
];

const ResultCard = () => {
  const [reactions, setReactions] = useState<number[]>([0]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (localStorage.getItem("listReaksi")) {
      setReactions(JSON.parse(localStorage.getItem("listReaksi") as string));
    }
  }, []);

  return (
    <div className={styles.card}>
      <h1>{statistics[page].name}</h1>
      <p>{statistics[page].description}</p>
      <div className={styles.detail}>
        <p>
          <span>{statistics[page].func(reactions).toFixed(statistics[page].toFixed)}</span>{" "}
          {statistics[page].unit}
        </p>
      </div>
      <div className={styles.buttons}>
        <button
          disabled={page === 0}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          ←
        </button>
        <button
          disabled={page === statistics.length - 1}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
