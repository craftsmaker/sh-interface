import React,{useState} from "react";
import {View,Text} from "react-native";
import {Svg,Rect} from "react-native-svg";

export default function Bar({value}){
	const [barSize,setBarSize] = useState("40%");

	return(
		<View style={{flex:1,backgroundColor: "#ECEDEF", borderRadius: 10,overflow: "hidden"}} >
			<Svg width="100px" height="100%">
				<Rect
					y={barSize} // the lesser the number is, higher the bar goes
					width="100%"
					height="100%"
					fill="#FB8359"
					
				/>
				<Text style={{textAlign: "center",fontSize: 20,fontWeight: "bold",textAlignVertical: 'center',height: "100%"}}>25</Text>	
			</Svg>
		</View>
	)
}