import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import bbBall from "@/assets/images/basketball-logo.png";
import bsbBall from "@/assets/images/baseball-logo.png";
import fbBall from "@/assets/images/american-football-logo.png";

// <Image style={{resizeMode: 'center'}} source={bsbBall}></Image>


const introScreen = () => {
    return (
<View style={styles.mainContainer}> 

       <View style={styles.introContainer}>
         <Text style={styles.introText}>Baseball, Basketball ou Football Américain</Text>
       </View>
   

       <View style={styles.linkContainer}>

          <Link href="/nba_screen" style={[styles.linkBallsContainer, styles. nbaBallContainer]}> 
          <Pressable>
          </Pressable>
          </Link>

          <Link href="/nfl_screen" style={[styles.linkBallsContainer, styles. nflBallContainer]}> 
          <Pressable>
          </Pressable>
          </Link>

          <Link href="/mlb_screen" style={[styles.linkBallsContainer, styles. mlbBallContainer]}> 
          <Pressable>
          </Pressable>
          </Link>
       </View>


       <View>
         <Text>Choisis ton <Text style={styles.spanText}>arène</Text>, deviens <Text style={styles.spanText}>l'expert !</Text></Text>
       </View>

</View>
    )
}

export default introScreen;


const styles = StyleSheet.create({
   mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
   },

  introContainer: {
    justifyContent: 'center',
  },

  introText: {
   fontSize: 35,
   fontWeight: 'bold',
   textAlign: 'center',
  },

  linkContainer: {
   position: 'relative',
   justifyContent: 'center',
   alignItems: 'center',
  },

  linkBallsContainer: {
    height:  '200',
    width:  '200',
    backgroundColor: '#D70040',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nbaBallContainer: {
    position: 'absolute',
    left: 40,
  }, 

  nflBallContainer: {
    position: 'absolute',
    right: 40,
  }, 
  
  mlbBallContainer: {
    position: 'absolute',
    left: 0,
    top: 30,
  }, 
  




  outroText: {
   fontSize: 50,
   fontWeight: 'bold',
   textAlign: 'center',
  },

  spanText:  {
    color: '#D70040',
  }

})