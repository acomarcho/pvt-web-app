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
            flexDirection: "row",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
            }}
          >
            <Radio value="1">
              <p>1</p>
            </Radio>
            <Radio value="2">
              <p>2</p>
            </Radio>
            <Radio value="3">
              <p>3</p>
            </Radio>
            <Radio value="4">
              <p>4</p>
            </Radio>
            <Radio value="5">
              <p>5</p>
            </Radio>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
            }}
          >
            <Radio value="6">
              <p>6</p>
            </Radio>
            <Radio value="7">
              <p>7</p>
            </Radio>
            <Radio value="8">
              <p>8</p>
            </Radio>
            <Radio value="9">
              <p>9</p>
            </Radio>
            <Radio value="10">
              <p>10</p>
            </Radio>
          </div>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
