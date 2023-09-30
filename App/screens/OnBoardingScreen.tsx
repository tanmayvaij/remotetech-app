import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Image,
  ViewToken,
} from "react-native";
import { OnBoardingScreenData } from "../data";
import OnBoardingScreenItem from "../components/OnBoardingScreenItem";
import { FontAwesome } from "@expo/vector-icons";
import { color, fontFamily, spacing } from "../theme";
import { useEffect, useState, useRef } from "react";

const styles = StyleSheet.create({
  screenStyle: {
    flexGrow: 1,
    backgroundColor: color.white,
  },
  brandingContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: spacing.sp20,
    borderBottomRightRadius: spacing.sp20,
    backgroundColor: color.blue500,
  },
  brandingImageStyle: {
    width: spacing.sp22,
    height: spacing.sp22,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: spacing.sp04,
  },
  buttonStyle: {
    backgroundColor: color.blue600,
    marginBottom: spacing.sp10,
    marginHorizontal: spacing.sp04,
    borderRadius: spacing.sp20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    elevation: 3,
  },
  pressedButtonStyle: {
    backgroundColor: color.blue700,
    elevation: 0,
  },
  lightButtonStyle: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.blue500,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 18,
    fontFamily: fontFamily.medium,
  },
  lightPressedButtonStyle: {
    elevation: 0,
  },
  lightButtonTextStyle: {
    color: color.blue500,
  },
  indicatorContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: spacing.sp14,
  },
  indicatorStyle: {
    width: spacing.sp10,
    height: spacing.sp03,
    borderRadius: spacing.sp20,
    marginHorizontal: spacing.sp02,
  },
});

interface ViewableItemsProps {
  viewableItems: ViewToken[];
}

const OnBoardingScreen = () => {
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const onViewCallBackChanged = useRef(
    ({ viewableItems }: ViewableItemsProps) => {
      if (viewableItems.length > 0)
        setVisibleItemIndex(viewableItems[0].index as number);
    }
  );

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const flatListRef = useRef<FlatList | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((carouselIndex + 1) % OnBoardingScreenData.length);
      flatListRef.current?.scrollToIndex({
        index: carouselIndex,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselIndex]);

  return (
    <View style={styles.screenStyle}>
      <View style={styles.brandingContainerStyle}>
        <Image
          style={styles.brandingImageStyle}
          source={require("../../assets/images/iconWithTextWhite.png")}
        />
      </View>
      <FlatList
        scrollEnabled={false}
        onViewableItemsChanged={onViewCallBackChanged.current}
        viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={OnBoardingScreenData}
        renderItem={({ item, index }) => (
          <OnBoardingScreenItem {...item} key={index} />
        )}
      />
      <View style={styles.indicatorContainerStyle}>
        {OnBoardingScreenData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorStyle,
              {
                backgroundColor:
                  visibleItemIndex === index ? color.blue500 : color.gray400,
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonStyle,
            styles.lightButtonStyle,
            pressed && styles.lightPressedButtonStyle,
          ]}
        >
          <Text style={[styles.buttonTextStyle, styles.lightButtonTextStyle]}>
            Login
          </Text>
          <FontAwesome
            name="sign-in"
            size={spacing.sp11}
            color={color.blue500}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.buttonStyle,
            pressed && styles.pressedButtonStyle,
          ]}
        >
          <Text style={[styles.buttonTextStyle]}>Register</Text>
          <FontAwesome
            name="pencil-square-o"
            size={spacing.sp11}
            color={color.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
