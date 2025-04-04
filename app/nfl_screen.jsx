import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const nbaScreen = () => {
    return (

    <View style={styles.mainContainer}>

    <View style={styles.arrowLinkContainer}> 
         <Link href="/intro_screen"> 
           <AntDesign name="arrowleft" size={40} color="#D70040"/>
         </Link>
      </View>

     <Text style={styles.mainTitle}>NFL</Text>



    </View>


    )
}

export default nbaScreen;



const styles = StyleSheet.create({

   mainContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
   },

   arrowLinkContainer: {
    position: 'absolute',
    top: 20,
    left: 30,
   },

  mainTitle: {
    fontSize: 50,
    textAlign: 'center',
    color: '#D70040',
    marginTop: 5,
    fontWeight: 'bold',
  }



})