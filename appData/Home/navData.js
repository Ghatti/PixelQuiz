import { HOME, PROFILE, CONFIGS } from "../routes/Routes";

const navData = [
  {
    icon: require("../../assets/icons/homeNavbar/courses.png"),
    activeIcon: require("../../assets/icons/homeNavbar/coursesActive.png"),
    desc: "Quizzes",
    route: HOME,
  },
  {
    icon: require("../../assets/icons/homeNavbar/profile.png"),
    activeIcon: require("../../assets/icons/homeNavbar/profileActive.png"),
    desc: "Perfil",
    route: PROFILE,
  },
  {
    icon: require("../../assets/icons/homeNavbar/configs.png"),
    activeIcon: require("../../assets/icons/homeNavbar/configsActive.png"),
    desc: "Configs",
    route: CONFIGS,
  },
];

export default navData;
