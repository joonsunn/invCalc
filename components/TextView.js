import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const TextView = ({children, textAlign='auto'}) => {
  return (
	  <Text style={{...styles.container, textAlign}} >{children}</Text>
  )
}

const styles = StyleSheet.create({
	container: {
		fontSize: 24,
	}
})

export default TextView