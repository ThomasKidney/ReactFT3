import  React, { useState , useEffect } from 'react'
import "./footer.scss";
import Logo from "./components/Korian.png"




export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="Heure">
            <p className="JD"> {date.toLocaleTimeString()}</p>
            <p className="Bien"><center>Bienvenue{" "} <strong className="Noemie">Noémie,</strong></center>
voici les tâches qui vous attendent aujourd’hui</p>
            <img 
                className="logo"
                src={Logo}/>
            <p className="Date"> {date.toLocaleDateString()}</p>
        </div>
    )
}
export default DateTime;