import React, { useEffect, useState } from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { fetchData, options } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ bodyPart, setExercises, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;

  const indexOfLastExercises = currentPage * exercisePerPage;

  const indexOfFirstExercises = indexOfLastExercises - exercisePerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercises,
    indexOfLastExercises
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: "1800px", behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercises(exercisesData);
    };
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography key={exercises.name} variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
