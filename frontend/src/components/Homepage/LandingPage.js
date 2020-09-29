import React, { useState, useEffect } from 'react';
import ConsumerProfile from '../../views/Tables/Consumer_Profile';
import PerfectScrollbar from 'perfect-scrollbar';
import NotificationAlert from 'react-notification-alert';
import { components } from 'react-select/dist/react-select.cjs.prod';
import { Route, Switch, Redirect } from 'react-router-dom';

// core components
import AdminNavbar from '../../components/Navbars/AdminNavbar';
import Footer from '../../components/Footer/Footer.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import FixedPlugin from '../../components/FixedPlugin/FixedPlugin.js';
import Admin from '../../layouts/Admin';
import routes from '../../routes';

function LandingPage(props) {
  const [sidebarMini, setSidebarMini] = useState(true);
  const [backgroundColor, setbackgroundColor] = useState('blue');
  const notificationAlert = React.useRef();
  const mainPanel = React.useRef();
  let ps;

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      const ps = new PerfectScrollbar(mainPanel.current);
    }
    return () => {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
      if (props.history.action === 'PUSH') {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
      }
    };
  }, []);
  const minimizeSidebar = () => {
    let message = 'Sidebar mini ';
    if (document.body.classList.contains('sidebar-mini')) {
      setSidebarMini(false);
      message += 'deactivated...';
    } else {
      setSidebarMini(true);
      message += 'activated...';
    }
    document.body.classList.toggle('sidebar-mini');
    let options = {};
    options = {
      place: 'tr',
      message: message,
      type: 'info',
      icon: 'now-ui-icons ui-1_bell-53',
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  const handleColorClick = (color) => {
    setbackgroundColor(color);
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  return (
    <>
      <div>
        <div className='wrapper'>
          <NotificationAlert ref={notificationAlert} />
          <Sidebar
            {...props}
            routes={routes}
            minimizeSidebar={minimizeSidebar}
            backgroundColor={backgroundColor}
          />
          <div className='main-panel' ref={mainPanel}>
            <AdminNavbar {...props} brandText={getActiveRoute(routes)} />
            <Switch>
              {getRoutes(routes)}
              <Redirect from='/admin' to='/admin/dashboard' />
            </Switch>
            {
              // we don't want the Footer to be rendered on full screen maps page
              window.location.href.indexOf('full-screen-maps') !== -1 ? null : (
                <Footer fluid />
              )
            }
          </div>
          <FixedPlugin
            handleMiniClick={minimizeSidebar}
            sidebarMini={sidebarMini}
            bgColor={backgroundColor}
            handleColorClick={handleColorClick}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
