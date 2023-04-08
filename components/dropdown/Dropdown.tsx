import { Box } from "native-base";
import React, { FC, useState } from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from "./Dropdown.styles";

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

export default Dropdown;
