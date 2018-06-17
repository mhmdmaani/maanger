import React from 'react';
import {View,StyleSheet} from 'react-native';

export default class Container extends React.Component{
  render(){
    return(
      <View style={styles.Container}>
          {this.props.children}
      </View>
    )
  }
}
const styles = StyleSheet.create({
     container: {
       paddingLeft: 2,
       paddingRight:2,
       marginLeft: 5,
       marginRight: 5,
       backgroundColor: '#f0f0f0',
       flex:1
     }
});
