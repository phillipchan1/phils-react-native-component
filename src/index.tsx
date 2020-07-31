import * as React from 'react'
import { View, Text } from 'react-native'

export default class MyComponent extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> My Component using typescript!! 2.3 </Text>
      </View>
    )
  }
}

module.exports = MyComponent
