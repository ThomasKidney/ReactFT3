import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Korian from "./components/Korian.png"

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    infirmier: {
      position: 'absolute',
      top: 80,
      width: 180,
      height: 180
    },
    aide: {
      position: 'absolute',
      top: 80,
      left: 190,
      width: 180,
      height: 180
    },
    medecin: {
      position: 'absolute',
      top: 280,
      width: 180,
      height: 180
    },
    animateur: {
        position: 'absolute',
        top: 280,
        left: 190,
        width: 180,
        height: 180
      },
      psychologue: {
        position: 'absolute',
        top: 480,
        width: 180,
        height: 180
      },
      externe: {
        position: 'absolute',
        top: 480,
        left: 190,
        width: 180,
        height: 180
      },
      text: {
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        left: 20,
        top: 40,
        marginTop: 40, 
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        fontFamily: "Century Gothic",
      },
      titre: {
        fontSize: 32,
        right: 20,
        left: 80,
        top: 130,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute', 
        fontFamily: "Century Gothic",
      },
      Logo:{
          width: 75,
          height: 50,
          position: 'absolute',
          top: 650,
            left: 160
      }
  });

function WelcomePage(props) {
  let history = useHistory();

    return (
        <SafeAreaView>
            <Text style={styles.text}>Bienvenue dans l'application Korian</Text>
            <Text style={styles.titre}>Qui êtes-vous?</Text>
        <View style={styles.container}>
    <Image
      style={styles.background}
      source={{ uri: '' }}
    />

    <Link to="/Page5">
    <Image
        React={() => history.push ('/HomePage')}
        style={styles.infirmier}
        source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824818634374381578/infirmier.png' }}
      />
        </Link>


    <Image

      style={styles.aide}
      source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824821133064536134/AideSoignant.png' }}
    />
    <Image
      style={styles.medecin}
      source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824821154237644800/medecin.png' }}
    />
    <Image
      style={styles.animateur}
      source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824822294412132372/animateur.png' }}
    />
    <Image
      style={styles.psychologue}
      source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824822422652846122/psychologue.png' }}
    />
    <Image
      style={styles.externe}
      source={{ uri: 'https://cdn.discordapp.com/attachments/635829307352285198/824822455507484673/externe.png' }}
    />
    <Image 
    style={styles.Logo}
        source={Korian}
    />
  </View>
  </SafeAreaView>
    
  );
    
}


export default WelcomePage;