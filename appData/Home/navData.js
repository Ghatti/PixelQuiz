import { HOME, PROFILE, CONFIGS } from "../routes/Routes";

const navData = [
  {
    icon: require("../../assets/icons/homeNavbar/courses.png"),
    activeIcon: require("../../assets/icons/homeNavbar/courses.png"),
    desc: "Quizzes",
    route: HOME,
  },
  {
    icon: require("../../assets/icons/homeNavbar/courses.png"),
    activeIcon: require("../../assets/icons/homeNavbar/courses.png"),
    desc: "Perfil",
    route: PROFILE,
  },
  {
    icon: require("../../assets/icons/homeNavbar/courses.png"),
    activeIcon: require("../../assets/icons/homeNavbar/courses.png"),
    desc: "Configs",
    route: CONFIGS,
  },
];

export default navData;
