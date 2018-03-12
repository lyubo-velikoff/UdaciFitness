import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function textButton({ children, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{children}</Text>
		</TouchableOpacity>
	)
}