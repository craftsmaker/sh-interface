import React,{useState,useEffect} from "react";
import {View,Text,Animated} from "react-native";
import {Svg,Rect} from "react-native-svg";
const AnimatedRect = Animated.createAnimatedComponent(Rect);

export default function Bar({value,cb}){
	const [barSizeAnimated,setSizeAnimated] = useState(new Animated.Value(0));
	
	cb(barSizeAnimated);

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