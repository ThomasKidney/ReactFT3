import react from 'react';
import './App.css';
import ProgressBar from './ProgressBar/ProgressBar';
import Body from './WelcomePage';
import Footer from './footer';
import Patient from './body';
import Patient2 from './body2';
import DateTime from "./date";

function Page1() {
    return(
        <>
            <DateTime/>
            <Body/>
            <Patient/>
            <Patient2/>
            <Footer/>    
        </>    
    );}


    export default Page1;