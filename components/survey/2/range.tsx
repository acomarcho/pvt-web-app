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
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('tingkatLelah')) {
      setSliderValue(parseFloat(localStorage.getItem('tingkatLelah') as string));
    } else {
      localStorage.setItem('tingkatLelah', '50');
    }
  }, []);

  const onChange = (v: number) => {
    setSliderValue(v);
    localStorage.setItem('tingkatLelah', v.toString());
  }

  return (
    <ChakraProvider>
      <Slider
        id="slider"
        defaultValue={sliderValue}
        value={sliderValue}
        min={1}
        max={100}
        step={0.1}
        color="#0AA4E7"
        onChange={(v) => onChange(v)}
        marginTop={"45px"}
        marginBottom={"15px"}
      >
        {[10, 30, 50, 70, 90].map((num) => {
          return (
            <SliderMark value={num} mt="1" ml="-2.5" fontSize="sm" color="rgba(255, 255, 255, 0.8)" marginLeft={"-9px"} paddingTop={"8px"} key={num}>
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
