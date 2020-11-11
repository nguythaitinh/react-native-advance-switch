import React, { useRef, memo } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Transition, Transitioning } from "react-native-reanimated";

type Props = {
	isActive: boolean,
	activeColor?: string,
	inActiveColor?: string,
	containerStyle?: any,
	onPress: any,
	ActiveComponent?: any,
	InactiveComponent?: any,
	knobStyle: any,
	indicatorContainerStyle?: any,
	knobSize?: number
};

const transition = <Transition.Change/>;

function Switch(
	{
		isActive = true,
		activeColor = '#5CC41C',
		inActiveColor = '#E66348',
		containerStyle = {},
		onPress,
		ActiveComponent = <Text style={[styles.titleText, {}]}>True</Text>,
		InactiveComponent = <Text style={[styles.titleText, {}]}>False</Text>,
		knobStyle = {},
		indicatorContainerStyle = {},
		knobSize=20
	}: Props
) {
	const myRef = useRef(null);
	
	return (
		<TouchableWithoutFeedback onPress={() => {
			myRef && myRef?.current?.animateNextTransition()
			onPress && onPress()
		}}>
			<Transitioning.View
				transition={transition}
				ref={myRef}
				style={[styles.container, isActive ? {
					backgroundColor: activeColor
				} : {
					backgroundColor: inActiveColor
				}, containerStyle]}>
				<View style={[{
					width: (40),
					alignItems: 'center',
					justifyContent: 'center'
				}, isActive ? {} : {
					marginLeft: (knobSize),
				}, indicatorContainerStyle]}>
					{isActive ? ActiveComponent :
						InactiveComponent}
				</View>
				{
					isActive ? <View
						style={{
							justifyContent: 'center',
							position: 'absolute',
							right: 1
						}}>
						{renderCircle()}
					</View> : <View
						style={{
							justifyContent: 'center',
							position: 'absolute',
							left: 1
						}}>
						{renderCircle()}
					</View>
				}
			</Transitioning.View>
		</TouchableWithoutFeedback>
	);
	
	function renderCircle() {
		return <View style={[{
			height: (20),
			width: (20),
			borderRadius: (20 / 2),
			backgroundColor: 'white'
		}, knobStyle]}/>
	}
}

export default memo(Switch)

const styles = StyleSheet.create({
	container: {
		height: (22),
		width: (65),
		borderRadius: (11),
		backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center'
	},
	titleText: {
		fontSize: (13),
		color: 'white',
		marginLeft: (8)
	}
});