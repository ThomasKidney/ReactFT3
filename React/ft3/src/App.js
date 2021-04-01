
import {
    HashRouter,Route, Switch,
} from "react-router-dom";
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import './App.css';
import ProgressBar from './ProgressBar/ProgressBar';
import Body from './WelcomePage';
import Footer from './footer';
import Patient from './body';
import Patient2 from './body2';
import DateTime from "./date";
import WelcomePage from "./page2";
import Page1 from "./Page1";
import Page5 from "./Page5"
import './App.scss';

function App(){
    return(
 
    <HashRouter>
      <Switch>
        <Route exact path="/Page1" >
          <DateTime/>
          <Body/>
          
          <Patient/>
          <Patient2/>
          <Footer/>
          
        </Route>
        <Route exact path="/" >
              <WelcomePage/>
        </Route>

        <Route exact path="/Page5" >
              <Page5/>
        </Route>

      </Switch>
    </HashRouter>

    );
}

export default App;