import LoginPage from '../components/Login/Login';
import RegisterPage from '../components/Register/Register';
import Homepage from '../components/Homepage/LandingPage';

const components = {
  login: {
    url: '/login',
    component: LoginPage,
  },
  register: {
    url: '/register',
    component: RegisterPage,
  },

  Homepage: {
    url: '/dashboard',
    component: Homepage,
  },
};

export default {
  guest: {
    allowedRoutes: [components.login, components.register],
    redirectRoutes: '/login',
  },
  user: {
    allowedRoutes: [components.Homepage],
    redirectRoutes: '/dashboard',
  },
};
