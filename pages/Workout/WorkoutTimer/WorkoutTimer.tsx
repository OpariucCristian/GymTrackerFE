import { Box, Text } from "native-base";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

const WorkoutTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleMinutePassed = () => {
    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else if (minutes === 60) {
      setHours(hours + 1);
      setMinutes(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    handleMinutePassed();
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <Box>
      <Text style={styles.timerText}>
        {hours < 10 ? `0${hours}:` : `${hours}:`}
        {minutes < 10 ? `0${minutes}:` : `${minutes}:`}
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </Box>
  );
};

const styles = EStyleSheet.create({
  timerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "$darkGray",
  },
});

export default WorkoutTimer;
