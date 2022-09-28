import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("2");

  useEffect(() => {
    if (localStorage.getItem("tingkatKantuk")) {
      setValue(localStorage.getItem("tingkatKantuk") as string);
    } else {
      localStorage.setItem("tingkatKantuk", "2");
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("tingkatKantuk", v);
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
            <p>1 (Tidak mengantuk)</p>
          </Radio>
          <Radio value="2">
            <p>2 (Cukup mengantuk)</p>
          </Radio>
          <Radio value="3">
            <p>3 (Mengantuk)</p>
          </Radio>
          <Radio value="4">
            <p>4 (Sangat mengantuk)</p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
