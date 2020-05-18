import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,Slider} from "react-native";
import Bar from "./Bar";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import globalStyles from "../../global";
import styles from "./styles";

export default function Fan({navigation: {navigate}}) {
	const [state,setState] = useState(0);
	const [isEnabled,setIsEnabled] = useState(false);
	const [speed,setSpeed] = useState(0);
	const [direction,setDirection] = useState(45)
	const INITIAL_SPEED = 10;
	const INITIAL_DIRECTION = 10;

	let timer;

	
	const mocks = {
		temperature: "27°c"
	}
	return(
		<View style={globalStyles.container}>
			<Text>Might</Text>
			<View style={{flex: 2, flexDirection: "row"}}>
				<View style={[styles.column,{justifyContent: "center",alignItems: "center"}]}>
					<View>
						<MaterialCommunityIcons name="fan" style={{position: "relative", right: 30, color: "#EAEBEE", fontSize: 50}}/>
					</View>
					<View>
						<Text style={{fontSize: 60, fontWeight: "bold"}}>{mocks.temperature}</Text>
						<Text style={{color: "#9D9DA3",fontSize: 12}}>Temperature</Text>
					</View>
				</View>
				<View style={[styles.column,{justifyContent: "center",alignItems: "center"}]}>
					<View>
						<Bar/>
					</View>
				</View>
			</View>
			<View style={{flex:1,paddingBottom: 80}}>
				<View style={styles.column}>
					<View style={[styles.row, {paddingLeft: 15}]}>
						<Text>Direction</Text>
						<Text>{direction}°</Text>
					</View>
					<View style={{flex:1}}>
						<Slider
						    style={{width: "100%", height: 40}}
						    value={INITIAL_DIRECTION}
						    minimumValue={0}
						    maximumValue={60}
						    onValueChange={value => setDirection(parseInt(value))}
						    minimumTrackTintColor="#FA784F"
						    maximumTrackTintColor="black"
						    thumbTintColor="#FA784F"
						  />
					</View>
				</View>
				<View style={styles.column}>
					<View style={[styles.row, {paddingLeft: 15}]}>
						<Text>Speed</Text>
						<Text>{speed}</Text>
					</View>
					<View style={{flex:1}}>
						<Slider
						    style={{width: "100%", height: 40}}
						    value={INITIAL_SPEED}
						    minimumValue={0}
						    maximumValue={60}
						    onValueChange={value => setSpeed(parseInt(value))}
						    minimumTrackTintColor="#FA784F"
						    maximumTrackTintColor="black"
						    thumbTintColor="#FA784F"
						  />
					</View>
				</View>
			</View>
		</View>
	)
}