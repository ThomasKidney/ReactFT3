import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import PageBlurr from './footer/PageBlur.png';
import './PageBlur.css';

function PageBlur (){
    return(
        <div>
        <img className="PageBlurr" 
        src={PageBlurr} />
    </div>

    )
    
}

    export default PageBlur;