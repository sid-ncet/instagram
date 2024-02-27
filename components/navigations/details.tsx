import { View, Text } from 'react-native'
import React from 'react'

const Details = (props:any) => {
  const value= JSON.stringify(props.data)
  console.log('value', value)
  const { heartNumber } = props.route.params || {};

  return (
    <View>
      <Text>details</Text>
      <Text>{JSON.stringify(props.data)}</Text>
    
    </View>
  )
}
export default Details