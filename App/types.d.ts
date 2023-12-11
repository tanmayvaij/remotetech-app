import {
  InputModeOptions,
  ImageSourcePropType,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";

interface ResourceProviderProps {
  children: React.JSX.Element;
}

interface CustomButtonProps {
  onPress: () => void;
  text?: string;
  icon?: React.ReactNode;
  light?: boolean;
  marginHorizontal?: number;
  marginVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  size?: "sm";
}

interface CustomTextInputProps {
  placeholder?: string;
  labelText?: string;
  inputMode?: InputModeOptions;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  errorMessage?: string;
}

interface FormContainerProps extends CustomButtonProps {
  children: React.ReactNode;
}

interface OnBoardingScreenItemProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

interface DeviceCardProps {
  _id: string;
  deviceName: string;
  ipAddress: string;
  roomNumber: string;
  addedOn: string;
}
