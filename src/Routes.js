import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {CardStyleInterpolators,createStackNavigator} from "@react-navigation/stack";
import Home from "./Screens/Home";
import Fan from "./Screens/Fan";

const {Screen,Navigator} = createStackNavigator();
export default function Routes() {
	return(
		<NavigationContainer>
			<Navigator headerMode="none" screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
				<Screen name="Home" component={Home} />
				<Screen name="Fan" component={Fan}/>
			</Navigator>
		</NavigationContainer>
	)
}