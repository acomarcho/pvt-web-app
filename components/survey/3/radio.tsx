import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("1");

  useEffect(() => {
    if (localStorage.getItem("kesiapanKerja")) {
      setValue(localStorage.getItem("kesiapanKerja") as string);
    } else {
      localStorage.setItem("kesiapanKerja", '1');
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("kesiapanKerja", v);
  };

  return (
    <ChakraProvider>
      <RadioGroup onChange={(v) => onChange(v)} value={value}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: " 9px",
            marginTop: "30px",
          }}
        >
          <Radio value="1"><p>Sangat siap</p></Radio>
          <Radio value="2"><p>Siap</p></Radio>
          <Radio value="3"><p>Cukup siap</p></Radio>
          <Radio value="4"><p>Tidak siap</p></Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
