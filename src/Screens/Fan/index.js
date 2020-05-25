import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,Slider, Animated} from "react-native";
import Bar from "./Bar";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import globalStyles from "../../global";
import styles from "./styles";
import { Use } from "react-native-svg";

export default function Fan() {
	const [animationState,setAnimationState] = useState();
	const [direction,setDirection] = useState(INITIAL_DIRECTION);
	const INITIAL_SPEED = 10;
	const INITIAL_DIRECTION = 10;
	const [fan,setFan] = useState({speed: INITIAL_SPEED,temperature: "10°C"});

	const getEnvironmentTemperatureFromSpeed = (speed) => {
		const MAX_TEMP = 60;

		return MAX_TEMP - speed + "°c";
	}

	return(
		<View style={[globalStyles.container,{paddingTop: 80}]}>
			<View style={{flex: 1, flexDirection: "row"}}>
				<View style={[styles.column,{justifyContent: "center",alignItems: "center"}]}>
					<View>
						<MaterialCommunityIcons name="fan" style={{position: "relative", right: 30, color: "#EAEBEE", fontSize: 50}}/>
					</View>
					<View>
						<Text style={{fontSize: 60, fontWeight: "bold"}}>{fan?.temperature}</Text>
						<Text style={{color: "#9D9DA3",fontSize: 12}}>Temperature</Text>
					</View>
				</View>
				<View style={[styles.column,{justifyContent: "center",alignItems: "center"}]}>
					<Bar cb={value => setAnimationState(value)}/>
				</View>
			</View>
			<View style={{flex:1,paddingBottom: 80}}>
				<View style={styles.column}>
					<View style={[styles.row, {paddingLeft: 15, alignItems: "flex-end"}]}>
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
					<View style={[styles.row, {paddingLeft: 15, alignItems: "flex-end"}]}>
						<Text>Speed</Text>
						<Text>{fan?.speed}</Text>
					</View>
					<View style={{flex:1}}>
						<Slider
						    style={{width: "100%", height: 40}}
						    value={INITIAL_SPEED}
						    minimumValue={0}
						    maximumValue={60}
						    onValueChange={value => {
								console.log(value);
								if(animationState){
									Animated.spring(animationState,{ // zero = empty, 100 = full
										toValue: (100 - parseInt(value) * 1.7) /100,
										useNativeDriver:true
									}).start();
								}
								setFan({temperature: getEnvironmentTemperatureFromSpeed(parseInt(value)), speed: parseInt(value)})
							}}
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