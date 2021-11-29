import React, { Children } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function AppText() {
	return (
		<Text style={styles.text}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: Platform.OS === 'android' ? 18 : 20,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier'
	}
})
