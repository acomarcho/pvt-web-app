import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("Handphone");

  useEffect(() => {
    if (localStorage.getItem("device")) {
      setValue(localStorage.getItem("device") as string);
    } else {
      localStorage.setItem("device", "Handphone");
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("device", v);
  };

  return (
    <ChakraProvider>
      <RadioGroup onChange={(v) => onChange(v)} value={value}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "9px",
            marginTop: "15px",
          }}
        >
          <Radio value="Handphone">
            <p>Handphone</p>
          </Radio>
          <Radio value="Tablet">
            <p>Tablet</p>
          </Radio>
          <Radio value="Komputer">
            <p>Komputer</p>
          </Radio>
          <Radio value="Laptop">
            <p>Laptop</p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
