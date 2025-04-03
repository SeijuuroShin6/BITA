import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import bbBall from "@/assets/images/basketball-logo.png";
import bsbBall from "@/assets/images/baseball-logo.png";
import fbBall from "@/assets/images/american-football-logo.png";




const introScreen = () => {
    return (
<View style={styles.mainContainer}> 

       <View style={styles.introTextContainer}>
         <Text style={styles.introText}>Baseball, Basketball ou Football Américain</Text>
       </View>
   

  <View style={styles.linkContainer}>

      <View style={styles.doubleBallsContainer}>
            
            <View style={styles.linkBallsContainer}> 
                <Link href="/nba_screen"> 
                   <Image style={styles.ballsLogo} source={bbBall}></Image>
                </Link>
            </View>

            <View style={styles.linkBallsContainer}> 
                <Link href="/nfl_screen"> 
                   <Image style={styles.ballsLogo} source={fbBall}></Image>
                </Link>
            </View>

      </View>


        <View style={styles.singleBallContainer}> 

            <View style={styles.linkBallsContainer}> 
              <Link href="/mlb_screen"> 
                 <Image style={styles.ballsLogo} source={bsbBall}></Image>
              </Link>
            </View>
        
        </View>
    
  </View>


       <View style={styles.outroTextContainer}>
         <Text style={styles.outroText}>Choisis ton <Text style={styles.spanText}>arène</Text>, deviens <Text style={styles.spanText}>l'expert !</Text></Text>
       </View>

</View>
    )
}

export default introScreen;


const styles = StyleSheet.create({
   mainContainer: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
   },

  introTextContainer: {
    marginTop: 130,
    justifyContent: 'center',
  },

  introText: {
   fontSize: 37,
   fontWeight: 'bold',
   textAlign: 'center',
  },

  linkContainer: {
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   marginTop: 60,
   width: '100%',
  },

  doubleBallsContainer: {
   flexDirection: 'row',
   alignItems:'center',
   justifyContent: 'center',
   gap: 20,
  }, 

  singleBallContainer: {
   flexDirection: 'row',
   alignItems:'center',
   justifyContent: 'center',
   }, 

  linkBallsContainer: {
    height: 180,
    width: 180,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D70040',
    borderRadius: 100,
  },

   ballsLogo: {
    height: 120, 
    width: 120,
    resizeMode: 'contain',
   }, 

  
  outroTextContainer: {
   position: 'absolute',
   bottom: 100,
  },

  outroText: {
   fontSize: 40,
   fontWeight: 'bold',
   textAlign: 'center',
  },

  spanText:  {
    color: '#D70040',
  }

})