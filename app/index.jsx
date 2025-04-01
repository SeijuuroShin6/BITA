import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import MyLogo from "@/assets/images/trophy-logo.png";
import { Link } from 'expo-router';

const App = () => {


  return (      

     <View style={styles.container}>

     
     <View> 
      <Text style={styles.text}>BITA</Text>
     </View>

    <Text style={styles.slogan}>L'élite du <Text style={styles.span}>jeu</Text>, réunie en une seule <Text style={styles.span}>arène !</Text>
      </Text>     
    
    <Image source={MyLogo} style={styles.logoImage} resizeMode='contain'></Image> 

      <Link href="" asChild>
          <Pressable style={styles.loginButton}> 
            <Text style={styles.logButtonText}>CONNEXION</Text>
         </Pressable>
      </Link>

    <Link href="" asChild>
        <Pressable style={styles.registerButton}> 
          <Text style={styles.registerButtonText}>S'INSCRIRE</Text>
      </Pressable> 
     </Link>
  
      <Link href="/intro_screen" style={styles.inviteContainer} asChild> 
         <Pressable>
           <Text style={styles.inviteText}>Continuer en tant qu'invité</Text> 
        </Pressable>
      </Link>

  </View>      

  )
}

export default App


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
  },
   
  text: {
    color: '#D70040',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
   },
   
   slogan: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, 
    marginBottom: -100,
   },
   logoImage: {
    marginTop: 130,
    height: '300'
   },

   span: {
    color: '#D70040',
   },
   
   loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#D70040',
    borderRadius: 40,   
    fontWeight: '800',
    position: 'absolute',
    bottom: 150,
    left: 50,
   },

     logButtonText: {
     fontSize: 20,
     color: 'white',
     fontWeight: 'bold',
  },

   registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    width: '80%',
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 40,   
    position: 'absolute',
    bottom: 90,
    left: 50,
  },
  registerButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
 },

 inviteContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  bottom: 40,
},
  inviteText: {
   textAlign: 'center',
   paddingTop: 20,
   color: '#D70040',
 },
})