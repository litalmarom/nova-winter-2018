import React, { Component } from "react";
import Router from "./Router";
import {
  StackNavigation as StackNav,
  TabNavigation as TabNav,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/styles.js";
const { nearBlack, red } = colors;

const defaultRouteConfig = {
  navigationBar: {
    tintColor: "white", // colour of scene title and hamburger menu
    backgroundColor: nearBlack
  }
};

class NavigationLayout extends Component {
  render() {
    return (
      <TabNav
        id="main"
        navigatorUID="main"
        initialTab="companies"
        tabBarColor={nearBlack}
      >
        <TabItem
          id="userProfile"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-contact")}
        >
          <StackNav
            id="userProfile"
            navigatorUID="userProfile"
            initialRoute={Router.getRoute("userProfile")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="companies"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-globe")}
        >
          <StackNav
            id="companies"
            navigatorUID="companies"
            initialRoute={Router.getRoute("companiesSearch")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="myProjects"
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-briefcase")
          }
        >
          <StackNav
            id="myProjects"
            navigatorUID="myProjects"
            initialRoute={Router.getRoute("myProjects")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNav>
    );
  }

  renderIcon(isSelected, iconName) {
    return (
      <Icon name={iconName} size={24} color={isSelected ? red : "white"} />
    );
  }
}

export default NavigationLayout;
