import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import { Text } from "native-base";
const ProfilePage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Text>User</Text>
      <Text>User description</Text>
    </>
  );
};

export default ProfilePage;
