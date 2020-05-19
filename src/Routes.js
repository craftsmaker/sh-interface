import React from "react";
import {View,Text,TouchableOpacity,Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {CardStyleInterpolators,createStackNavigator} from "@react-navigation/stack";
import {AntDesign} from "@expo/vector-icons";
import Home from "./Screens/Home";
import Fan from "./Screens/Fan";

const {Screen,Navigator} = createStackNavigator();
export default function Routes() {
	return(
		<NavigationContainer>
			<Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,headerTransparent:true,headerTitle:null}}>
				<Screen name="Home" component={Home} />
	<Screen name="Fan" component={Fan} options={{headerLeft: ({onPress}) => (<TouchableOpacity onPress={onPress} style={{paddingLeft:10}}><AntDesign name="arrowleft" size={30} /></TouchableOpacity>)}}/>
			</Navigator>
		</NavigationContainer>
	)
}