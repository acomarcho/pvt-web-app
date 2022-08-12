import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";

const Range = () => {
  const [sliderValue, setSliderValue] = useState<number>(5);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('tingkatKantuk')) {
      setSliderValue(parseInt(localStorage.getItem('tingkatKantuk') as string));
    } else {
      localStorage.setItem('tingkatKantuk', '5');
    }
  }, []);

  const onChange = (v: number) => {
    setSliderValue(v);
    localStorage.setItem('tingkatKantuk', v.toString());
  }

  return (
    <ChakraProvider>
      <Slider
        id="slider"
        defaultValue={sliderValue}
        value={sliderValue}
        min={1}
        max={10}
        color="#0AA4E7"
        onChange={(v) => onChange(v)}
        marginTop={"45px"}
        marginBottom={"15px"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
          return (
            <SliderMark value={num} mt="1" ml="-2.5" fontSize="sm" color="rgba(255, 255, 255, 0.8)" marginLeft={"-5px"} paddingTop={"8px"} key={num}>
              {num}
            </SliderMark>
          );
        })}
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="#0AA4E7"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </ChakraProvider>
  );
};

export default Range;
