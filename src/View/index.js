import Welcome from "./welcome.js";
import Register from "./register.js";
import Home from "./home.js";
import EditProfile from "./editProfile.js";
import Profile from "./viewProfile.js";

const components = {
    welcome: Welcome,
    register: Register,
    home: Home,
    edit: EditProfile,
    profile: Profile,
};

localStorage.setItem("templates", JSON.stringify(components));

export { components };