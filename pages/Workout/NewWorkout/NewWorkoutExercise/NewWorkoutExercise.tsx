import { Box, Button, Text } from "native-base";
import React from "react";
import { WorkoutExercise } from "../../../../models/workout-exercise";
import CurrentWorkoutExerciseProps from "../../../../models/PropModels/CurrentWorkoutExerciseProps";
import styles from "./NewWorkoutExercise.styles";
import NewWorkoutExerciseSet from "./NewWokroutExerciseSet";
import { ExerciseSet } from "../../../../models/exercise-set";
import { generateUUID } from "../../../../utils/uuid";

const NewWorkoutExercise = (props: CurrentWorkoutExerciseProps) => {
  const { exercise, handleUpdateExercise, handleDeleteExercise } = props;

  const addEmptySet = (): void => {
    const emptySet: ExerciseSet = {
      reps: 0,
      weight: 0,
      setId: generateUUID(),
      isSetCompleted: false,
    };

    const updatedExercise: WorkoutExercise = {
      exercise: exercise.exercise,
      workoutId: exercise.workoutId,
      exerciseId: exercise.exerciseId,
      isExerciseCompleted: false,
      sets: [...exercise.sets, emptySet],
    };

    handleUpdateExercise(updatedExercise);
  };

  const updateSet = (set: ExerciseSet): void => {
    const updatedSets = exercise.sets.map((s) => {
      if (s.setId === set.setId) {
        return set;
      } else {
        return s;
      }
    });

    const updatedExercise: WorkoutExercise = {
      exercise: exercise.exercise,
      workoutId: exercise.workoutId,
      exerciseId: exercise.exerciseId,
      isExerciseCompleted: exercise.isExerciseCompleted,
      sets: updatedSets,
    };

    handleUpdateExercise(updatedExercise);
  };

  const deleteSet = (setId: string): void => {
    const updatedSets = exercise.sets.filter((s) => s.setId !== setId);

    const updatedExercise: WorkoutExercise = {
      exercise: exercise.exercise,
      workoutId: exercise.workoutId,
      exerciseId: exercise.exerciseId,
      isExerciseCompleted: exercise.isExerciseCompleted,
      sets: updatedSets,
    };

    handleUpdateExercise(updatedExercise);
  };

  const handleDeleteExercisePress = (): void => {
    handleDeleteExercise(exercise.exerciseId);
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseNameContainer}>
        <Text style={styles.exerciseName}>{exercise.exercise}</Text>
        <Button
          variant="ghost"
          colorScheme="primary"
          onPress={handleDeleteExercisePress}
        >
          X
        </Button>
      </Box>
      <Box style={styles.exerciseContainer}>
        {exercise.sets.map((set: ExerciseSet, setIndex: number) => {
          const isFirstSet = setIndex === 0;
          return (
            <NewWorkoutExerciseSet
              key={setIndex}
              set={set}
              updateSet={updateSet}
              deleteSet={deleteSet}
              setNumber={setIndex + 1}
              isFirstSet={isFirstSet}
            />
          );
        })}
      </Box>

      <Button style={styles.addNewSetButton} onPress={() => addEmptySet()}>
        <Text style={styles.addNewSetButtonText}>Add new set</Text>
      </Button>
    </React.Fragment>
  );
};

export default NewWorkoutExercise;
