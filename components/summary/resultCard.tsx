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
    unit: "kali",
    toFixed: 0,
  },
  {
    name: "Major lapses",
    description: "Banyak waktu reaksi yang lebih besar dari 1000 milidetik",
    func: getMajorLapses,
    unit: "kali",
    toFixed: 0,
  },
  {
    name: "Mean RT",
    description: "Rata-rata waktu reaksi",
    func: getMeanRT,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Median RT",
    description: "Median waktu reaksi",
    func: getMedianRT,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Mean 1/RT",
    description: "1 dibagi rata-rata waktu reaksi",
    func: get1OverMeanRT,
    unit: "/ms",
    toFixed: 5,
  },
  {
    name: "Fastest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi tercepat",
    func: getFastest10RT,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Slowest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi terlambat",
    func: getSlowest10RT,
    unit: "ms",
    toFixed: 3,
  },
];

const ResultCard = () => {
  const [reactions, setReactions] = useState<number[]>([0]);

  useEffect(() => {
    if (localStorage.getItem("listReaksi")) {
      setReactions(JSON.parse(localStorage.getItem("listReaksi") as string));
    }
  }, []);

  return (
    <div className={styles.card}>
      {reactions.length > 0 &&
        statistics.map((stat) => {
          return (
            <div className={styles.cardInfo} key={stat.name}>
              <p>{stat.name}</p>
              <p>{stat.func(reactions).toFixed(stat.toFixed)} {stat.unit}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ResultCard;
