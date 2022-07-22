import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 222,
  },
  banner: {
    flex: 1,
    resizeMode: "cover",
  },
  answerCardContainer: {
    justifyContent: "center",

    height: 58,

    paddingHorizontal: 24,

    backgroundColor: globalStyles.color.white,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: globalStyles.color.grey,
    borderRadius: 8,
  },
  correctAnswerCardContainer: {
    justifyContent: "center",

    height: 58,

    paddingHorizontal: 24,

    backgroundColor: "#FFF5EE",

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5BA092",
    borderRadius: 8,
  },
  wrongAnswerCardContainer: {
    justifyContent: "center",

    height: 58,

    paddingHorizontal: 24,

    backgroundColor: "#FFF5EE",

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EF4949",
    borderRadius: 8,
  },
  answerCardText: {
    fontFamily: globalStyles.font.main,
    fontSize: 16,
    color: globalStyles.color.headerBlack,
  },
});

export default styles;
