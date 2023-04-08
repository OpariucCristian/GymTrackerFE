import { Box, Button, Modal, Text, Input, FlatList } from "native-base";
import React, { useState } from "react";
import WorkoutTimer from "../WorkoutTimer/WorkoutTimer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import CurrentWorkoutExercise from "../CurrentWorkoutExercise";
import useToggle from "../../../hooks/toogle-hook";
import exerciseList from "../../../constants/exerciseList";
import ExerciseInputField from "../ExerciseInputField";
import EStyleSheet from "react-native-extended-stylesheet";
import NewWorkoutProps from "../../../models/PropModels/NewWorkoutProps";

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
            <CurrentWorkoutExercise
              sets={item.sets}
              weight={item.weight}
              exercise={item.exercise}
              reps={item.reps}
              key={index}
              workoutId={item.workoutId}
              exerciseId={item.exerciseId}
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

const styles = EStyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  newWorkoutButton: {
    marginTop: "10%",
    marginBottom: "2.5%",
    width: "65%",
  },
  pastWorkoutsTextContainer: {
    backgroundColor: "$backgroundColor",
  },

  pastWorkoutsText: {
    fontSize: 33,
    paddingTop: 33 - 33 * 0.75,
    color: "#fff",
    fontWeight: "600",
    marginLeft: "10%",
    marginTop: "10%",
  },
  newWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  newWorkoutButtonContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "$backgroundColor",
    alignItems: "center",
    width: "100%",
  },
  workoutHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
    marginLeft: "6%",
  },
  startWorkoutButton: {
    width: "28%",
    marginRight: "10%",
  },
  startWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  deleteWorkoutButton: {
    width: "28%",
  },
  workoutExercise: {
    marginTop: "2%",
    marginLeft: "2%",
    display: "flex",
  },
  workoutCard: {
    display: "flex",
    width: "80%",
    borderRadius: 10,
    border: "1px solid black",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: "10%",
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseDetails: {
    fontSize: 12,
    color: "white",
  },
  exercisesContainerScrollable: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
  },
  exercisesContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
    height: "50%",
    marginTop: "4%",
  },

  exerciseContainer: {
    color: "white",
    marginLeft: "1rem",
  },
  backgroundImage: {
    position: "relative",
    zIndex: -1,
    width: "100%",
    height: "11rem",
    borderRadius: 10,
  },
  darkness: {
    backgroundColor: "rgba(0,0,0,0.15)",
    width: "100%",
    height: 200,
  },
  deleteWorkoutCardButton: {
    right: "25%",
    height: "10.8rem",
    marginTop: "60%",
    zIndex: 1,
  },
  currentWorkoutInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginTop: "13%",
    marginLeft: "3%",
    marginBottom: "2%",
  },
  currentWorkoutModalTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  currentWorkoutButtonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
  },
  exitNewWorkoutModalButtonText: {
    fontWeight: "600",
  },
  newWorkoutModalHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3%",

    flexDirection: "row",
    width: "95%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  createNewWorkoutButton: {
    width: "40%",
  },
  createNewWorkoutButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  newWorkoutModalTitle: {
    width: "60%",
  },
  newExerciseInputFields: {
    marginTop: "5%",
  },
  newWorkoutNameInputContainer: {
    display: "flex",
    gap: "-1rem",
    width: "50%",
  },
  newWorkoutNameInput: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  newWorkoutModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "$backgroundColor",
  },
  exerciseListModal: {
    display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "$backgroundColor",
  },
  exerciseListModalContentContainer: {
    width: "100%",
    height: "85%",
    gap: "10%",
  },
  searchForExerciseInputContainer: {
    width: "80%",
    alignSelf: "center",
  },
  searchForExerciseInput: {
    color: "white",
  },
  newWorkoutNewExerciseButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  timerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "$darkGray",
  },
  workoutTimerContainer: {
    marginTop: "3%",
    marginLeft: "6%",
  },
  newWorkoutExerciseList: {
    width: "80%",
    alignSelf: "center",
  },
  newWorkoutBottomActionsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "10%",
  },
});

export default NewWorkout;
