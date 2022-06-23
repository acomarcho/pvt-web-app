import { mean, median } from "simple-statistics";

export const getMinorLapses = (data: number[]): number => {
  return data.filter(num => num > 500).length;
}

export const getMajorLapses = (data: number[]): number => {
  return data.filter(num => num > 1000).length;
}

export const getMeanRT = (data: number[]): number => {
  return mean(data);
}

export const getMedianRT = (data: number[]): number => {
  return median(data);
}

export const get1OverMeanRT = (data: number[]): number => {
  return 1 / getMeanRT(data);
}

export const getFastest10RT = (data: number[]): number => {
  const sortedData = [...data].sort((a, b) => a - b).reverse();
  /* Ambil top 10% data */
  const top10Data = sortedData.slice(sortedData.length - Math.ceil(sortedData.length * 0.1));
  return mean(top10Data);
}

export const getSlowest10RT = (data: number[]): number => {
  const sortedData = [...data].sort((a, b) => a - b).reverse();
  console.log(sortedData);
  /* Ambil bottom 10% data */
  const bottom10Data = sortedData.slice(0, Math.ceil(sortedData.length * 0.1));
  return mean(bottom10Data);
}