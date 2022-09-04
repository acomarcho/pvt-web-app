import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("2");

  useEffect(() => {
    if (localStorage.getItem("tingkatLelah")) {
      setValue(localStorage.getItem("tingkatLelah") as string);
    } else {
      localStorage.setItem("tingkatLelah", "2");
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("tingkatLelah", v);
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
          <Radio value="1">
            <p>Tidak memerlukan</p>
          </Radio>
          <Radio value="2">
            <p>Sedikit memerlukan</p>
          </Radio>
          <Radio value="3">
            <p>Memerlukan</p>
          </Radio>
          <Radio value="4">
            <p>Sangat memerlukan</p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
