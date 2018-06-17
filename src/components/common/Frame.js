import React from 'react';
import {Image , View,Text, StyleSheet} from 'react-native';

 export default class Frame extends React.Component {
    render(){
      return(
      <View style={styles.frame}>
            {this.props.children}
      </View>
    )
    }
 }
 const styles = StyleSheet.create({
   frame: {
     backgroundColor: "#fff",
     marginLeft: 5,
     marginRight: 5,
     borderRadius: 2,
     borderWidth: 1,
     borderColor: "#f0f0f0",
     shadowColor: "#f3f3f3",
     shadowOpacity: 0.2,
     shadowRadius: 2,
     padding: 2,
   }
 });
