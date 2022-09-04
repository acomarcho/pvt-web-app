import { stat } from "fs";
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
  green: number;
  yellow: number;
  unit: string;
  toFixed: number;
}

const statistics: Statistic[] = [
  {
    name: "Minor lapses",
    description: "Banyak waktu reaksi yang lebih besar dari 500 milidetik",
    func: getMinorLapses,
    green: 20,
    yellow: 33,
    unit: "kali",
    toFixed: 0,
  },
  {
    name: "Major lapses",
    description: "Banyak waktu reaksi yang lebih besar dari 1000 milidetik",
    func: getMajorLapses,
    green: 5,
    yellow: 8,
    unit: "kali",
    toFixed: 0,
  },
  {
    name: "Mean RT",
    description: "Rata-rata waktu reaksi",
    func: getMeanRT,
    green: 464,
    yellow: 578,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Median RT",
    description: "Median waktu reaksi",
    func: getMedianRT,
    green: 385,
    yellow: 454,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Mean 1/RT",
    description: "1 dibagi rata-rata waktu reaksi",
    func: get1OverMeanRT,
    green: 0.0028,
    yellow: 0.0024,
    unit: "/ms",
    toFixed: 5,
  },
  {
    name: "Fastest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi tercepat",
    func: getFastest10RT,
    green: 262,
    yellow: 284,
    unit: "ms",
    toFixed: 3,
  },
  {
    name: "Slowest 10% RT",
    description: "Rata-rata persentil 10 waktu reaksi terlambat",
    func: getSlowest10RT,
    green: 1108,
    yellow: 1567,
    unit: "ms",
    toFixed: 3,
  },
];

// const statistics: Statistic[] = [
//   {
//     name: "Mean RT",
//     description: "Rata-rata waktu reaksi",
//     func: getMeanRT,
//     unit: "ms",
//     toFixed: 3,
//   },
//   {
//     name: "Minor lapses",
//     description: "Banyak waktu reaksi yang lebih besar dari 500 milidetik",
//     func: getMinorLapses,
//     unit: "kali",
//     toFixed: 0,
//   },
//   {
//     name: "Major lapses",
//     description: "Banyak waktu reaksi yang lebih besar dari 1000 milidetik",
//     func: getMajorLapses,
//     unit: "kali",
//     toFixed: 0,
//   },
// ]

const evaluateStat = (s: Statistic, val: Number) : string => {
  if (val <= s.green) {
    return "green"
  } else if (val <= s.yellow) {
    return "yellow"
  } else {
    return "red"
  }
}

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
          const indicator = evaluateStat(stat, stat.func(reactions));
          let indicatorStyle;
          if (indicator === "green") {
            indicatorStyle = styles.green;
          } else if (indicator === "yellow") {
            indicatorStyle = styles.yellow;
          } else {
            indicatorStyle = styles.red;
          }
          return (
            <div className={styles.cardInfo} key={stat.name}>
              <p>{stat.name}</p>
              <div className={styles.cardValue}>
                <p>{stat.func(reactions).toFixed(stat.toFixed)} {stat.unit}</p>
                <div className={`${indicatorStyle}`}></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ResultCard;
