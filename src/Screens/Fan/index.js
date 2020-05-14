import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import globalStyles from "../../global";

export default function Fan({navigation: {navigate}}) {
	return(
		<View style={globalStyles.container}>
			<Text>Might</Text>
			<TouchableOpacity onPress={() => navigate("Home")}>
				<Text></Text>
			</TouchableOpacity>
		</View>
	)
}