import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps219811Navigator from '../features/Maps219811/navigator';
import Additem219810Navigator from '../features/Additem219810/navigator';
import Maps219806Navigator from '../features/Maps219806/navigator';
import UserProfile219802Navigator from '../features/UserProfile219802/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps219811: { screen: Maps219811Navigator },
Additem219810: { screen: Additem219810Navigator },
Maps219806: { screen: Maps219806Navigator },
UserProfile219802: { screen: UserProfile219802Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
