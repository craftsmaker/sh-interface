import React from "react";
import {TouchableOpacity} from "react-native";
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
				<Screen name="Home" component={Home} initialParams={{environmentTemperature: "36°c"}}/>
				<Screen name="Fan" component={Fan} options={({route,navigation:{navigate}}) => (
					{
						headerLeft: () => (
							<TouchableOpacity onPress={() => navigate("Home", route?.params)} style={{paddingLeft:10}}>
								<AntDesign name="arrowleft" size={30} />
							</TouchableOpacity>
						)
					}
				)}/>
			</Navigator>
		</NavigationContainer>
	)
}