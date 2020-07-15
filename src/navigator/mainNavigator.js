import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging78585Navigator from '../features/Messaging78585/navigator';
import CalendarView78584Navigator from '../features/CalendarView78584/navigator';
import EmailAuth78583Navigator from '../features/EmailAuth78583/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging78585: { screen: Messaging78585Navigator },
CalendarView78584: { screen: CalendarView78584Navigator },
EmailAuth78583: { screen: EmailAuth78583Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
