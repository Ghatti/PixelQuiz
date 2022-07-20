import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Custom Components
import IntroScreen from "./intro/IntroScreen";
import LoginScreen from "./login/LoginScreen";
import ForgotPasswordScreen from "./login/ForgotPassword/ForgotPassword";
import RegisterScreen from "./login/Register/RegisterScreen";
import Home from "./home/Home";
import QuizIntro from "./quizIntro/QuizIntro";

//Routes
import {
  HOME,
  INTRO,
  LOGIN,
  FORGOTPASSWORD,
  REGISTER,
  QUIZINTRO,
} from "../../appData/routes/Routes";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName={INTRO}
        initialRouteName={HOME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={INTRO} component={IntroScreen} />
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={FORGOTPASSWORD} component={ForgotPasswordScreen} />
        <Stack.Screen name={REGISTER} component={RegisterScreen} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={QUIZINTRO} component={QuizIntro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
