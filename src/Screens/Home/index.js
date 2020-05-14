import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import globalStyles from "../../global";
import styles from "./styles";

export default function Home({navigation: {navigate}}) {
	const mocks = {
		name: "Victor Guedes",
		temperature: "34°c"
	}

	return(
		<View style={globalStyles.container}>
			<View>
				<Text>Hello</Text>
				<Text>{mocks.name}</Text>
			</View>
			<View style={styles.graph}>
				<View  style={styles.graphChildren}>
					<Text style={{fontSize: 40, fontWeight: "bold"}}>{mocks.temperature}</Text>
				</View>
				<View style={styles.graphChildren}>
					<Text style={{fontSize: 10, color:"#9C9DA2"}}>Humidity</Text>
					<Text>Graph</Text>
				</View>
			</View>
			<View style={styles.column}>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonSelection}>
						<TouchableOpacity style={styles.button} onPress={() => navigate("Fan")}>
							<Text>Fan</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}