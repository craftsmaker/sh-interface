import React,{useState} from "react";
import {View,Text} from "react-native";
import {Svg,Rect} from "react-native-svg";

export default function Bar({value}){
	let initialBarSize = "40%";

	const MAX_VALUE = 60;
	if (parseInt(value) < 20)
		initialBarSize = "100%";
	else if (parseInt(value) > MAX_VALUE)
		initialBarSize = "0%";
	else{
		let newBarSize = 100 - (parseInt(value) * 100) / MAX_VALUE
		initialBarSize = String(newBarSize)+"%";
	}
	
	// 60°c -> máx
	// 20°c -> min

	const [barSize,setBarSize] = useState(initialBarSize);

	return(
		<View style={{flex:1,backgroundColor: "#ECEDEF", borderRadius: 10,overflow: "hidden"}} >
			<Svg width="100px" height="100%">
				<Rect
					y={barSize} // the lesser the number is, higher the bar goes
					width="100%"
					height="100%"
					fill="#FB8359"
					
				/>
				<Text style={{textAlign: "center",fontSize: 20,fontWeight: "bold",textAlignVertical: 'center',height: "100%"}}>{value}</Text>	
			</Svg>
		</View>
	)
}