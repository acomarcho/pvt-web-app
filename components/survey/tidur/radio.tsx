import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("1");

  useEffect(() => {
    if (localStorage.getItem("kualitasTidur")) {
      setValue(localStorage.getItem("kualitasTidur") as string);
    } else {
      localStorage.setItem("kualitasTidur", '1');
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("kualitasTidur", v);
  };

  return (
    <ChakraProvider>
      <RadioGroup onChange={(v) => onChange(v)} value={value}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: " 9px",
            marginTop: "15px",
          }}
        >
          <Radio value="1"><p>Tidak nyenyak</p></Radio>
          <Radio value="2"><p>Cukup nyenyak</p></Radio>
          <Radio value="3"><p>Nyenyak</p></Radio>
          <Radio value="4"><p>Sangat nyenyak</p></Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
