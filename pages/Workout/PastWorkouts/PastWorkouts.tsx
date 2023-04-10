import { Box, Text, Button } from "native-base";
import React from "react";
import { Animated, ImageBackground, View } from "react-native";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { Workout } from "../../../models/workout-list";
import styles from "./PastWorkouts.styles";
import { WorkoutExercise } from "../../../models/workout-exercise";

interface PasWorkoutsProps {
  workoutList: Workout[];
  handleStartWorkout: (id: string) => void;
  handleDeleteWorkout: (id: string) => void;
}

const PastWorkouts = (props: PasWorkoutsProps) => {
  const { workoutList, handleStartWorkout, handleDeleteWorkout } = props;

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    workoutId: string
  ) => {
    return (
      <Box
        style={{
          alignContent: "center",
          justifyContent: "center",
          width: 70,
        }}
      >
        <Button
          style={styles.deleteWorkoutCardButton}
          variant="secondary"
          onPress={(id) => handleDeleteWorkout(workoutId)}
        >
          X
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box style={styles.pastWorkoutsTextContainer}>
        <Text style={styles.pastWorkoutsText}>Your past workouts</Text>
      </Box>
      <ScrollView style={styles.workoutListContainer}>
        <Box>
          {workoutList.length !== 0 &&
            workoutList?.reverse().map((workout: Workout, index: number) => {
              const id = workout.workoutId || "";
              return (
                <Swipeable
                  friction={3}
                  overshootFriction={50}
                  renderRightActions={(progress, workoutId) =>
                    renderRightActions(progress, id)
                  }
                  key={index}
                >
                  <Box style={styles.workoutCard}>
                    <ImageBackground
                      source={workout.image}
                      resizeMode="cover"
                      style={styles.backgroundImage}
                    >
                      <View style={styles.darkness}>
                        <Box style={styles.workoutHeader}>
                          <Text style={styles.workoutTitle}>{`${
                            workout?.workoutName
                              ? workout?.workoutName
                              : `Workout ${index + 1}`
                          }`}</Text>

                          <Button
                            variant={"solid"}
                            style={styles.startWorkoutButton}
                            onPress={() => handleStartWorkout(id)}
                          >
                            <Text style={styles.startWorkoutButtonText}>
                              Start
                            </Text>
                          </Button>
                        </Box>

                        <Box style={styles.exercisesContainer}>
                          <ScrollView
                            horizontal={true}
                            style={styles.exercisesContainerScrollable}
                          >
                            {workout
                              ? workout?.workoutExercises.map(
                                  (
                                    exercise: WorkoutExercise,
                                    exerciseIndex: number
                                  ) => {
                                    return (
                                      <Box
                                        key={exerciseIndex}
                                        style={styles.exerciseContainer}
                                      >
                                        <Text
                                          style={styles.workoutExerciseTitle}
                                        >
                                          {exercise.exercise}
                                        </Text>
                                        <Text
                                          style={styles.workoutExerciseDetails}
                                        >
                                          Sets: {exercise.sets.length}
                                        </Text>
                                        {/* <Text
                                          style={styles.workoutExerciseDetails}
                                        >
                                          Weight: {exercise.weight} kg {"\n"}
                                        </Text> */}
                                      </Box>
                                    );
                                  }
                                )
                              : null}
                          </ScrollView>
                        </Box>
                      </View>
                    </ImageBackground>
                  </Box>
                </Swipeable>
              );
            })}
        </Box>
      </ScrollView>
    </>
  );
};

export default PastWorkouts;
