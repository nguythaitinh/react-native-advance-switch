# react-native-advance-switch

A cross-platform (iOS / Android) switch component for React Native.


## Getting Started

### Installing

`npm i react-native-advance-switch`

Or

`yarn add react-native-advance-switch`


### Basic Usage

![example](https://media.giphy.com/media/F4sDyTEI85PSlombpF/giphy.gif)
![example](https://media.giphy.com/media/gcJ5eYwZYzZVcv4ThC/giphy.gif)

```js
<Switch
	ActiveComponent={<Text style={{fontSize: (26), color: 'white', textAlign: 'center'}}>True</Text>}
	InactiveComponent={<Text style={{fontSize: (26), color: 'white', textAlign: 'center'}}>False</Text>}
	knobSize={78}
	indicatorContainerStyle={{height: 80, width: 180}}
	knobStyle={{height: 78, width: 78, borderRadius: 39}}
	containerStyle={{height: 80, width: 260, borderRadius: 40}}
	isActive={isActive}
	onPress={onSwitchPress}/>
```

### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `ActiveComponent`                                 | (Optional) The active component                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **required**<br>array: [] |
| `InactiveComponent`                                         | (Optional) The inactive component                                                                                                                                                         | number: 0  |
| `knobSize`                                   | (Optional) Size of the circle                                                                                                                                                                                                                                                                                         | function: () => {}                   |
| `knobStyle`               |	(Optional) Style of the circle
| `containerStyle` | (Optional) Component's container style
| `isActive` | Is active or not
| `onPress`	| On component pressed
