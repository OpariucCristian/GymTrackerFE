import { Box, Button, Text } from "native-base";
import React from "react";
import { WorkoutExercise } from "../../../../models/workout-exercise";
import CurrentWorkoutExerciseProps from "../../../../models/PropModels/CurrentWorkoutExerciseProps";
import styles from "./NewWorkoutExercise.styles";
import NewWorkoutExerciseSet from "./NewWokroutExerciseSet";
import { ExerciseSet } from "../../../../models/exercise-set";
import { generateUUID } from "../../../../utils/uuid";

const NewWorkoutExercise = (props: CurrentWorkoutExerciseProps) => {
  const { exercise, handleUpdateExercise } = props;

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
      isExerciseCompleted: exercise.isExerciseCompleted,
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

    const areSetsCompleted = updatedSets.every((s) => s.isSetCompleted);

    const updatedExercise: WorkoutExercise = {
      exercise: exercise.exercise,
      workoutId: exercise.workoutId,
      exerciseId: exercise.exerciseId,
      isExerciseCompleted: areSetsCompleted,
      sets: updatedSets,
    };

    handleUpdateExercise(updatedExercise);
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.exercise}</Text>
        <Box style={styles.exerciseSetsInfo}>
          <Text style={styles.exerciseControlText}>Set</Text>
          <Text style={styles.exerciseControlText}>Weight</Text>
          <Text style={styles.exerciseControlText}>Reps</Text>
        </Box>

        {exercise.sets.map((set: ExerciseSet, setIndex: number) => {
          return (
            <Box style={styles.setContainer} key={setIndex}>
              <NewWorkoutExerciseSet
                set={set}
                updateSet={updateSet}
                setNumber={setIndex + 1}
              />
            </Box>
          );
        })}

        <Button onPress={() => addEmptySet()}>Add new set</Button>
      </Box>
    </React.Fragment>
  );
};

export default NewWorkoutExercise;
