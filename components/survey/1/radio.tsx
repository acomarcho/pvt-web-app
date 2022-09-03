import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = () => {
  const [value, setValue] = useState<string>("5");

  useEffect(() => {
    if (localStorage.getItem("tingkatKantuk")) {
      setValue(localStorage.getItem("tingkatKantuk") as string);
    } else {
      localStorage.setItem("tingkatKantuk", "5");
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
            <p>
              <strong>Sangat, sangat</strong> waspada
            </p>
          </Radio>
          <Radio value="2">
            <p>
              <strong>Sangat</strong> waspada
            </p>
          </Radio>
          <Radio value="3">
            <p>Waspada</p>
          </Radio>
          <Radio value="4">
            <p>
              <strong>Agak</strong> waspada
            </p>
          </Radio>
          <Radio value="5">
            <p>
              <strong>Tidak</strong> dalam keadaan waspada, namun juga{" "}
              <strong>tidak</strong> dalam keadaan mengantuk mengantuk
            </p>
          </Radio>
          <Radio value="6">
            <p>
              Ada <strong>sedikit</strong> rasa kantuk
            </p>
          </Radio>
          <Radio value="7">
            <p>
              Mengantuk, tapi <strong>tidak butuh usaha</strong> untuk tetap
              terjaga
            </p>
          </Radio>
          <Radio value="8">
            <p>
              Mengantuk, <strong>butuh usaha</strong> untuk tetap terjaga
            </p>
          </Radio>
          <Radio value="9">
            <p>
              <strong>Sangat</strong> mengantuk,{" "}
              <strong>perlu usaha besar</strong> untuk tetap terjaga
            </p>
          </Radio>
          <Radio value="10">
            <p>
              <strong>Sangat</strong>, <strong>sangat</strong> mengantuk,{" "}
              <strong>sangat sulit</strong> untuk terjaga
            </p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
