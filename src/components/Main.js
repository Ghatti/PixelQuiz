import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Custom Components
import IntroScreen from "./intro/IntroScreen";
import LoginScreen from "./login/LoginScreen";
import ForgotPasswordScreen from "./login/ForgotPassword/ForgotPassword";
import RegisterScreen from "./login/Register/RegisterScreen";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import AboutScreen from "./aboutApp/AboutScreen";
import HistoryScreen from "./history/HistoryScreen";
import SearchScreen from "./search/SearchScreen";
import QuizIntro from "./quizIntro/QuizIntro";
import Quiz from "./quiz/Quiz";
import QuizResult from "./quizResult/quizResult";
import ConfigsScreen from "./configs/ConfigsScreen";

//Routes
import {
  HOME,
  PROFILE,
  HISTORY,
  ABOUTAPP,
  SEARCH,
  INTRO,
  LOGIN,
  FORGOTPASSWORD,
  REGISTER,
  QUIZINTRO,
  QUIZ,
  QUIZRESULT,
  CONFIGS,
} from "../../appData/routes/Routes";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={INTRO}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={INTRO} component={IntroScreen} />
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={FORGOTPASSWORD} component={ForgotPasswordScreen} />
        <Stack.Screen name={REGISTER} component={RegisterScreen} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={PROFILE} component={Profile} />
        <Stack.Screen name={HISTORY} component={HistoryScreen} />
        <Stack.Screen name={ABOUTAPP} component={AboutScreen} />
        <Stack.Screen name={CONFIGS} component={ConfigsScreen} />
        <Stack.Screen name={SEARCH} component={SearchScreen} />
        <Stack.Screen name={QUIZINTRO} component={QuizIntro} />
        <Stack.Screen name={QUIZ} component={Quiz} />
        <Stack.Screen name={QUIZRESULT} component={QuizResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
