import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> My Component!! </Text>
      </View>
    )
  }
}

module.exports = MyComponent
