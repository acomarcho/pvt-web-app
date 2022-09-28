import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("2");

  useEffect(() => {
    if (localStorage.getItem("kualitasTidurRumah")) {
      setValue(localStorage.getItem("kualitasTidurRumah") as string);
    } else {
      localStorage.setItem("kualitasTidurRumah", "2");
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("kualitasTidurRumah", v);
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
            <p>Tidak Nyenyak</p>
          </Radio>
          <Radio value="2">
            <p>Kurang Nyenyak</p>
          </Radio>
          <Radio value="3">
            <p>Nyenyak</p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
