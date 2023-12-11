import {
  View,
  StyleSheet,
  FlatList,
  ViewToken,
} from "react-native";
import { OnBoardingScreenNavigationProps, OnBoardingScreenData } from "../data";
import OnBoardingScreenItem from "../components/OnBoardingScreenItem";
import { FontAwesome } from "@expo/vector-icons";
import { color, fontFamily, spacing } from "../theme";
import { useEffect, useState, useRef } from "react";
import BrandHeader from "../components/BrandHeader";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
  screenStyle: {
    height: "100%",
    backgroundColor: color.white,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15
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
  const navigator = useNavigation<OnBoardingScreenNavigationProps>();

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
      <BrandHeader />

      {/* Sliding Cards */}
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

      {/* Scroll Indicators */}
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

      {/* Login/Register Buttons */}
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={() => navigator.navigate("USER_LOGIN_SCREEN")}
          text="Login"
          icon={
            <FontAwesome
              name="sign-in"
              size={20}
              color={color.blue500}
            />
          }
          light
          marginBottom={10}
          marginHorizontal={4}
        />
        <CustomButton
          onPress={() => navigator.navigate("USER_REGISTER_SCREEN")}
          text="Register"
          icon={
            <FontAwesome
              name="pencil-square-o"
              size={20}
              color={color.white}
            />
          }
          marginBottom={10}
          marginHorizontal={4}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
