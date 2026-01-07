import React, { useState } from "react";
import { Text, Box, Icon, Button } from "zmp-ui";
import { useSetRecoilState } from "recoil";
import { onboardingState } from "../../state";
import propTypes from "prop-types";

const IntroSlider = ({ data = [] }) => {
  const [currentActive, setCurrentActive] = useState(0);
  const setOnboarding = useSetRecoilState(onboardingState);

  const refs = data.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToActive = (i) => {
    setCurrentActive(i);
    if (refs[i] && refs[i].current) {
      refs[i].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const next = () => {
    const total = data.length;
    if (currentActive >= total - 1) {
      setOnboarding(false);
    } else {
      scrollToActive(currentActive + 1);
    }
  };

  return (
    <div className="carousel-wrapper">
      <Box m="0" p="10">
        <div className="carousel">
          {data.map((item, index) => (
            <div key={item.key} ref={refs[index]} className="w-full flex-shrink-0">
              <Box m={0}></Box>
              <Text size="large" bold className="text-blue-dark">
                {item.title}
              </Text>
              <Box m={0} mt={4}>
                <Text size="small" className="font-thin text-blue-dark-text">
                  {item.content}
                </Text>
              </Box>
            </div>
          ))}
        </div>

        <Box mx="0" mt="7" flex justifyContent="space-between" alignItems="center">
          <ul className="carousel-dots">
            {data.map((item, index) => (
              <li
                key={item.key}
                className={`carousel-dot${currentActive === index ? " carousel-dot-active" : ""
                  }`}
              />
            ))}
          </ul>
          <Button className="carousel-control" onClick={next}>
            <Icon icon="zi-arrow-right" />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

IntroSlider.propTypes = {
  data: propTypes.array,
};
export default IntroSlider;
