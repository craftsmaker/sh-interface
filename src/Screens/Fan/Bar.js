import React,{useState,useEffect} from "react";
import {View,Text,Animated} from "react-native";
import {Svg,Rect} from "react-native-svg";
const AnimatedRect = Animated.createAnimatedComponent(Rect);

export default function Bar({value}){
	const [barSizeAnimated,setSizeAnimated] = useState(new Animated.Value(0));
	
	// value as being a teoretical environment temperature
	useEffect(() => {
		const MAX_VALUE = 60;
		let newBarSize = parseInt(value) / MAX_VALUE;
		// console.log(newBarSize.toFixed(2)," vs ", barSizeAnimated)
		handleBarSize(parseFloat(newBarSize.toFixed(2)));
	
	},[value])
	

	const handleBarSize = (value) => {
		Animated.spring(barSizeAnimated, {
			toValue: value,
			useNativeDriver: true
		}).start()
	}

	return(
		<View style={{flex:1,backgroundColor: "#ECEDEF", borderRadius: 10,overflow: "hidden", position: "relative", alignItems: "center"}} >
			<Text style={{position: "absolute",fontSize: 20,fontWeight: "bold",textAlignVertical: 'center',height: "100%",zIndex: 2}}>{value}</Text>	
			<Svg width="100px" height="100%">
				<AnimatedRect
					y={barSizeAnimated.interpolate({
						inputRange: [0,1],
						outputRange: ["100%","0%"]
					})} // the lesser the number is, higher the bar goes
					width="100%"
					height="100%"
					fill="#FB8359"
				/>
				
			</Svg>
		</View>
	)
}