import { Box, Pressable } from "native-base";
import React, { FC, useState } from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
interface Props {
  label: string;
  youtubeLink?: string;
  children: React.ReactNode;
}

const Dropdown: FC<Props> = ({ label, children, youtubeLink }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      <Box style={styles.drowndownContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
          <Text style={styles.buttonText}>{label}</Text>
          {youtubeLink && (
            <Text
              style={styles.youtubeIcon}
              onPress={() => Linking.openURL(`${youtubeLink}`)}
            >
              <FontAwesomeIcon size={30} icon={faYoutube} />
            </Text>
          )}

          {visible ? (
            <FontAwesomeIcon style={styles.arrowIcon} icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon style={styles.arrowIcon} icon={faAngleDown} />
          )}
        </TouchableOpacity>

        {visible && <Box style={styles.childrenDropdown}>{children}</Box>}
      </Box>
    </React.Fragment>
  );
};

const styles = EStyleSheet.create({
  drowndownContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderRadius: 5,
    backgroundColor: "#f2f3f5",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  button: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonText: {
    flex: 1,
  },
  childrenDropdown: {
    position: "relative",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  youtubeIcon: { marginRight: 15, marginTop: 10 },
  arrowIcon: { marginTop: 5 },
});

export default Dropdown;
