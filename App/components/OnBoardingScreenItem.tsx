import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { color, fontFamily, fontSize } from "../theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  componentStyle: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  contentStyle: {},
  titleStyle: {
    textAlign: "center",
    fontSize: fontSize.text2xl.fontSize,
    lineHeight: fontSize.text2xl.lineHeight,
    fontFamily: fontFamily.bold,
    color: color.blue900
  },
  subTitleStyle: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.textBase.fontSize,
    lineHeight: fontSize.textBase.lineHeight
  },
});

interface OnBoardingScreenItemProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const OnBoardingScreenItem: React.FC<OnBoardingScreenItemProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <View style={styles.componentStyle}>
      <Image style={styles.imageStyle} source={image} alt="" />
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default OnBoardingScreenItem;
