import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MyLogo from "@/assets/images/trophy-logo.png"


const App = () => {
  return (      

     <View style={styles.container}>
     
     <View style={styles.title}> 
      <Text style={styles.text}>BITA</Text>
     </View>

    <Text style={styles.slogan}>L'élite du <Text style={styles.span}>jeu</Text>, réunie en une seule <Text style={styles.span}>arène !</Text>
      
      
      </Text>     
    <Image source={MyLogo} style={styles.logoImage} resizeMode='center'></Image> 

      <TouchableOpacity style={styles.loginButton}> 
         <Text style={styles.logButtonText}>CONNEXION</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.registerButton}> 
      <Text style={styles.registerButtonText}>S'INSCRIRE</Text>
     </TouchableOpacity>
  
      <Text style={styles.inviteText}>Continuer en tant qu'invité</Text>
      
  </View>      

  )
}

export default App


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
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
    paddingTop: 60,
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
  },
  registerButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
 },

 inviteText: {
  textAlign: 'center',
  paddingTop: 20,
  color: '#D70040',
  fontWeight: 'light'
 }
})