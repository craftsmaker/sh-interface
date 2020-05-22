import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { Foundation,FontAwesome5,Feather,Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import globalStyles from "../../global";
import styles from "./styles";

export default function Home({navigation: {navigate},route: {params}}) {
	// console.log("Params from home screen:", params)
	const mocks = {
		name: "Victor Guedes"
	}
	return(
		<View style={globalStyles.container}>
			<View style={{paddingTop: 30}}>
				<Text style={{fontSize: 12,color: "#9D9DA3"}}>Hello</Text>
				<Text style={{fontWeight: "bold", fontSize: 18, letterSpacing: 0.2}}>{mocks.name}</Text>
			</View>
			<View style={styles.graph}>
				<View  style={styles.graphChildren}>
					<Text style={{fontSize: 40, fontWeight: "bold"}}>{params.environmentTemperature}</Text>
				</View>
				<View style={styles.graphChildren}>
					<Text style={{fontSize: 10, color:"#9C9DA2"}}>Humidity</Text>
					<Text>Graph</Text>
				</View>
			</View>
			<View style={styles.column}>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<Foundation  name="lightbulb" style={styles.icon}/>
							<Text>Light</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<Entypo name="air" style={styles.icon}/>
							<Text>AC</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<FontAwesome5 name="temperature-low" style={styles.icon}/>
							<Text>Temperature</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<MaterialCommunityIcons name="fan" style={styles.icon}/>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<Feather name="wifi" style={styles.icon}/>
							<Text>WiFi</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan",{environmentTemperature: params.environmentTemperature})}>
							<AntDesign name="question" style={styles.icon}/>
							<Text>?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={{position: "absolute", bottom: 5,left: "40%",height: 10, width: "30%", backgroundColor: "black",borderRadius: 30}}/>
		</View>
	)
}