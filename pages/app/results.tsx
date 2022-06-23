import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/header"
import Subheading from "../../components/results/subheading";
import ResultCard from '../../components/results/resultCard'
import Button from "../../components/button";
import Thanks from '../../components/results/thanks'

const Results = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('nama') || !localStorage.getItem('durasi') || !localStorage.getItem('tingkatKantuk')) {
      router.push('/');
      return;
    }
    if (!localStorage.getItem("listReaksi") || localStorage.getItem('listReaksi') == '[]') {
      router.push('/');
      return;
    }
  }, [router])
  return <>
    <Header />
    <Subheading />
    <ResultCard />
    <Button text='Lihat ringkasan hasil tes' onClick={() => router.push('/app/summary')} marginTop='30px'/>
    <Thanks />
  </>
}

export default Results;