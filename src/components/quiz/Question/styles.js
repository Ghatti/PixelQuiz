import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: "space-around",
  },
  questionText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: globalStyles.color.headerBlack,
  },
  bannerContainer: {
    width: "100%",
    height: 192,
    borderRadius: 8,
    borderColor: globalStyles.color.grey,
    borderWidth: 2,
    overflow: "hidden",
  },
  banner: {
    flex: 1,
    resizeMode: "cover",
  },
  outsideList: {
    height: "43%",
  },
  insideList: {
    height: "100%",
    justifyContent: "space-around",
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
