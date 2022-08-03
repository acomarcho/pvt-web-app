import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButtons = ({
  setIsDisabled,
}: {
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState<string>("2");

  useEffect(() => {
    if (!localStorage.getItem("agreement") || localStorage.getItem("agreement") === "2") {
      setIsDisabled(true);
    }
    if (localStorage.getItem("agreement")) {
      setValue(localStorage.getItem("agreement") as string);
    } else {
      localStorage.setItem("agreement", "2");
    }
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("agreement", v);
    if (v === "1") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
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
          <Radio value="1">
            <p>Ya, saya setuju</p>
          </Radio>
          <Radio value="2">
            <p>Tidak, saya tidak setuju</p>
          </Radio>
        </div>
      </RadioGroup>
    </ChakraProvider>
  );
};

export default RadioButtons;
