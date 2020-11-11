/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import Switch from './component/Switch';

const App: () => React$Node = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<StatusBar barStyle="dark-content"/>
			<SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Switch
					ActiveComponent={<Text style={{fontSize: (26), color: 'white', textAlign: 'center'}}>True</Text>}
					InactiveComponent={<Text style={{fontSize: (26), color: 'white', textAlign: 'center'}}>False</Text>}
					knobSize={78}
					indicatorContainerStyle={{height: 80, width: 180}}
					knobStyle={{height: 78, width: 78, borderRadius: 39}}
					containerStyle={{height: 80, width: 260, borderRadius: 40}}
					isActive={isActive}
					onPress={onSwitchPress}/>
			</SafeAreaView>
		</>
	);
	
	function onSwitchPress() {
		setIsActive(!isActive);
	}
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
