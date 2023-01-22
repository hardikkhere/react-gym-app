import React, { useState } from "react";
import { Box } from "@mui/system";
import Herobanner from "../Components/HeroBanner";
import Exercises from "../Components/Exercises";
import SearchExercies from "../Components/SearchExercies";
import "../App.css";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Herobanner />
      <SearchExercies
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
