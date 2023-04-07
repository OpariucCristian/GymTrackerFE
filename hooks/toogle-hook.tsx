import { useState } from "react";

const useToggle = (
  initialState: boolean = false
): [boolean, () => void, (value: boolean) => void] => {
  const [visible, setVisibility] = useState<boolean>(initialState);

  const toggle = (): void => {
    setVisibility((prev: boolean) => !prev);
  };

  const setToggleStatus = (value: boolean): void =>
    setVisibility(Boolean(value));

  return [visible, toggle, setToggleStatus];
};

export default useToggle;
