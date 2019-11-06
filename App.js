import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PinView from 'react-native-pin-view';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text> THIS WORKS </Text>
      </View>
    )
  }
}

// type Props = {};
// export default class Master extends Component<Props> {
//   constructor(props) {
//     super(props);
//     this.onComplete = this.onComplete.bind(this);
//     this.state = {
//         pin: "896745"
//     };
//   }
//   onComplete(inputtedPin, clear) {
//     if (val !== this.state.pin) {
//       clear();
//     } else {
//       console.log("Pin is correct");
//     }
//   }
//   onPress(inputtedPin, clear, pressed) {
//     console.log("Pressed: "+ pressed);
//     console.log("inputtedPin: "+ inputtedPin);
//     // clear();
//   }
//   render() {
//     return (
//       <View style={{
//         flex           : 1,
//         backgroundColor: '#f1f1f1',
//         justifyContent : 'center'
//       }}>
//         <PinView
//         onPress={this.onPress}
//         onComplete={this.onComplete}
//         pinLength={this.state.pin.length}
//         // pinLength={6} // You can also use like that.
//         />
//       </View>
//     );
//   }
// }