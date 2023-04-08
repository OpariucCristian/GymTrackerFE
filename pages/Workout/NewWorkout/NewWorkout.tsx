import { Box, Button, Modal, Text, Input, FlatList } from "native-base";
import React, { useState } from "react";
import WorkoutTimer from "../WorkoutTimer/WorkoutTimer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import NewWorkoutExercise from "./NewWorkoutExercise";
import useToggle from "../../../hooks/toogle-hook";
import exerciseList from "../../../constants/exerciseList";
import ExerciseInputField from "../ExerciseInputField";
import NewWorkoutProps from "../../../models/PropModels/NewWorkoutProps";
import styles from "./NewWorkout.styles";

const NewWorkout = (props: NewWorkoutProps) => {
  const {
    isNewWorkoutModalVisible,
    newWorkoutName,
    handleNewWorkoutNameChange,
    handleSaveNewWorkout,
    newWorkout,
    handleUpdateExercise,
    handleExitNewWorkoutModal,
    handleAddExercise,
    workoutUserTimerSeconds,
    workoutUserTimerKey,
    workoutTimerSecondsStart,
    handleAddSecondsUserTimer,
  } = props;

  const [newWorkoutNameSearch, setNewWorkoutNameSearch] = useState<string>("");

  const exerciseListMemo = React.useMemo(() => exerciseList, []);

  const [isExerciseListModalOpen, toggleExerciseListModalOpen] =
    useToggle(false);

  const handleNewWorkoutNameSearchChange = (newName: string) => {
    setNewWorkoutNameSearch(newName);
  };
  return (
    <React.Fragment>
      <Modal
        animationPreset={"slide"}
        style={styles.newWorkoutModal}
        isOpen={isNewWorkoutModalVisible}
      >
        <Box style={styles.newWorkoutModalHeaderContainer}>
          <Box style={styles.newWorkoutNameInputContainer}>
            <Input
              variant="ghost"
              placeholder="Workout name"
              style={styles.newWorkoutNameInput}
              value={newWorkoutName}
              onChangeText={(newName) => handleNewWorkoutNameChange(newName)}
            />

            <Box style={styles.workoutTimerContainer}>
              <WorkoutTimer startFromSeconds={workoutTimerSecondsStart} />
            </Box>
          </Box>

          <Button
            variant={"solid"}
            style={styles.createNewWorkoutButton}
            onPress={handleSaveNewWorkout}
            isDisabled={newWorkout?.workoutExercises?.length === 0}
          >
            <Text style={styles.createNewWorkoutButtonText}>
              Finish Workout
            </Text>
          </Button>
        </Box>

        <CountdownCircleTimer
          size={200}
          key={workoutUserTimerKey}
          isPlaying={!!workoutUserTimerSeconds}
          duration={workoutUserTimerSeconds}
          colors={["#e73213", "#8c200e", "#9dbeb7", "#7f9993"]}
          colorsTime={[
            workoutUserTimerSeconds / 1.5,
            workoutUserTimerSeconds / 2,
            workoutUserTimerSeconds / 4,
            0,
          ]}
          onComplete={() => {
            handleAddSecondsUserTimer(0);
          }}
        >
          {({ remainingTime }: any) => {
            return remainingTime ? (
              <Text style={styles.timerText}>{remainingTime}</Text>
            ) : (
              <React.Fragment>
                <Button
                  variant="ghost"
                  onPress={() => handleAddSecondsUserTimer(15)}
                >
                  00:15
                </Button>
                <Button
                  variant="ghost"
                  onPress={() => handleAddSecondsUserTimer(30)}
                >
                  00:30
                </Button>
                <Button
                  variant="ghost"
                  onPress={() => handleAddSecondsUserTimer(60)}
                >
                  01:00
                </Button>
              </React.Fragment>
            );
          }}
        </CountdownCircleTimer>

        <FlatList
          style={styles.newWorkoutExerciseList}
          data={newWorkout?.workoutExercises}
          renderItem={({ item, index }) => (
            <NewWorkoutExercise
              key={index}
              exercise={item}
              handleUpdateExercise={handleUpdateExercise}
            />
          )}
        />

        <Box style={styles.newWorkoutBottomActionsContainer}>
          <Button onPress={handleExitNewWorkoutModal} variant="secondary">
            <Text style={styles.exitNewWorkoutModalButtonText}>
              Cancel workout
            </Text>
          </Button>

          <Button onPress={() => toggleExerciseListModalOpen()}>
            <Text style={styles.newWorkoutNewExerciseButtonText}>
              Add new exercise
            </Text>
          </Button>
        </Box>

        <Modal
          isOpen={isExerciseListModalOpen}
          style={styles.exerciseListModal}
        >
          <Modal.CloseButton
            onPress={() => toggleExerciseListModalOpen()}
          ></Modal.CloseButton>
          <Box style={styles.exerciseListModalContentContainer}>
            <Box style={styles.searchForExerciseInputContainer}>
              <Input
                style={styles.searchForExerciseInput}
                placeholder="Seach for exercises"
                value={newWorkoutNameSearch}
                onChangeText={(searchQuery) =>
                  handleNewWorkoutNameSearchChange(searchQuery)
                }
              />
            </Box>

            {!newWorkoutNameSearch ? (
              <FlatList
                data={exerciseListMemo}
                renderItem={({ item, index }) => (
                  <ExerciseInputField
                    key={index}
                    name={item.name}
                    handleAddExercise={handleAddExercise}
                    workoutId={newWorkout?.workoutId || ""}
                    youtubeLink={item.youtubeLink}
                  />
                )}
              ></FlatList>
            ) : (
              <FlatList
                data={exerciseListMemo.filter((exercise) => {
                  return exercise.name
                    .toLowerCase()
                    .includes(newWorkoutNameSearch.toLowerCase());
                })}
                renderItem={({ item, index }) => (
                  <ExerciseInputField
                    key={index}
                    name={item.name}
                    handleAddExercise={handleAddExercise}
                    workoutId={newWorkout?.workoutId || ""}
                    youtubeLink={item.youtubeLink}
                  />
                )}
              ></FlatList>
            )}
          </Box>
        </Modal>
      </Modal>
    </React.Fragment>
  );
};

export default NewWorkout;
