import { useState, useEffect } from "react";
import { ChakraProvider, Radio, RadioGroup } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const RadioButtons = ({
  setIsDisabled,
}: {
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState<string>("1");
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("agreement", "1");
  }, []);

  const onChange = (v: string) => {
    setValue(v);
    localStorage.setItem("agreement", v);
    if (v === "1") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      router.push('/');
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
