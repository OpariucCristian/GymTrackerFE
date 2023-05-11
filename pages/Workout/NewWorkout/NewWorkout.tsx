import { Box, Button, Modal, Text, Input, FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import WorkoutTimer from "./WorkoutTimer/WorkoutTimer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import NewWorkoutExercise from "./NewWorkoutExercise";
import useToggle from "../../../hooks/toogle-hook";
import exerciseList from "../../../constants/exerciseList";
import ExerciseInputField from "./ExerciseInputField";
import NewWorkoutProps from "../../../models/PropModels/NewWorkoutProps";
import styles from "./NewWorkout.styles";
import * as Haptics from "expo-haptics";
import CustomExerciseInputField from "./CustomExerciseInputField/CustomExerciseInputField";
import { CustomExercise } from "../../../models/custom-exercise";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    handleDeleteExercise,
  } = props;

  const [newWorkoutNameSearch, setNewWorkoutNameSearch] = useState<string>("");
  const [customExerciseList, setCustomExerciseList] = useState<
    CustomExercise[]
  >([]);

  const exerciseListMemo = React.useMemo(() => exerciseList, []);

  const [isExerciseListModalOpen, toggleExerciseListModalOpen] =
    useToggle(false);

  const handleNewWorkoutNameSearchChange = (newName: string) => {
    setNewWorkoutNameSearch(newName);
  };

  const isNewWorkoutNotFinished = () => {
    const isNotFinished = newWorkout?.workoutExercises?.some(
      (exercise) => exercise.isExerciseCompleted === false
    );
    return isNotFinished;
  };

  const addCustomExercise = async (exercise: CustomExercise): Promise<void> => {
    try {
      const customExerciseList = await AsyncStorage.getItem(
        "customExerciseList"
      );
      if (customExerciseList) {
        const customExerciseListParsed = JSON.parse(customExerciseList);
        const updatedWorkoutList = [...customExerciseListParsed, exercise];
        const jsonValue = JSON.stringify(updatedWorkoutList);
        await AsyncStorage.setItem("customExerciseList", jsonValue);
        setCustomExerciseList(updatedWorkoutList);
      } else {
        const jsonValue = JSON.stringify([exercise]);
        await AsyncStorage.setItem("customExerciseList", jsonValue);
        setCustomExerciseList([exercise]);
      }
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const fetchCustomExerciseList = async (): Promise<void> => {
    try {
      const customExerciseList = await AsyncStorage.getItem(
        "customExerciseList"
      );
      if (customExerciseList) {
        const customExerciseListParsed = JSON.parse(customExerciseList);
        setCustomExerciseList(customExerciseListParsed);
      }
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchCustomExerciseList();
  }, []);

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
            onPress={() => handleSaveNewWorkout(newWorkout)}
            isDisabled={
              newWorkout?.workoutExercises?.length === 0 ||
              isNewWorkoutNotFinished()
            }
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
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
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
              handleDeleteExercise={handleDeleteExercise}
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
            <CustomExerciseInputField addCustomExercise={addCustomExercise} />
            {!newWorkoutNameSearch ? (
              <>
                <FlatList
                  data={[...customExerciseList, ...exerciseListMemo]}
                  renderItem={({ item, index }) => (
                    <ExerciseInputField
                      key={index}
                      name={item.name}
                      handleAddExercise={handleAddExercise}
                      workoutId={newWorkout?.workoutId || ""}
                      youtubeLink={item.youtubeLink || ""}
                      primaryMuscles={item.primaryMuscles}
                      secondaryMuscles={item.secondaryMuscles}
                    />
                  )}
                ></FlatList>
              </>
            ) : (
              <FlatList
                data={[
                  ...customExerciseList.filter((exercise) => {
                    return exercise.name
                      .toLowerCase()
                      .includes(newWorkoutNameSearch.toLowerCase());
                  }),
                  ...exerciseListMemo.filter((exercise) => {
                    return exercise.name
                      .toLowerCase()
                      .includes(newWorkoutNameSearch.toLowerCase());
                  }),
                ]}
                renderItem={({ item, index }) => (
                  <ExerciseInputField
                    key={index}
                    name={item.name}
                    handleAddExercise={handleAddExercise}
                    workoutId={newWorkout?.workoutId || ""}
                    youtubeLink={item.youtubeLink}
                    primaryMuscles={item.primaryMuscles}
                    secondaryMuscles={item.secondaryMuscles}
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
