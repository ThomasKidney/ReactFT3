import React from 'react';
import Footer from './footer';
import Fond from './footer/PageBlur.png';
import Lune from './footer/Lune.svg';
import Close from './footer/Close.svg';
import Tete from './footer/Profil.svg';
import './page3.scss';
import {Link} from 'react-router-dom';

const Recap = () => {
    return(
        <div className="Recap">
            <div className="Rec">
                <p className="DeLa">Récapitulatif de la {""}
                    <strong className="Nuit">Nuit</strong></p>
            </div>
            <div className="LuCl">
                <img 
                    className="Lune"
                    src={Lune}
                />
                <Link to="/Page1">
                <img
                    className="Close"
                    src={Close}
                     />
                </Link>
            </div>
            <div className="Profil1">
                <img
                    className="Tete"
                    src={Tete}
                />
                <div className="Pres">
                    <p className="Nom1">Jeannine JANE</p>
                    <p className="Maladie1">Insomnie</p>
                </div>
                
            </div>

            <div className="Profil2">
                <img
                    className="Tete"
                    src={Tete}
                />
                <div className="Pres">
                    <p className="Nom2">Charles PEREZ</p>
                    <p className="Maladie2">Douleurs reinales</p>
                </div>

                
            </div>
            <div className="Profil3">
                <img
                    className="Tete"
                    src={Tete}
                />
                <div className="Pres">
                    <p className="Nom3">Emile LOTHARIO</p>
                    <p className="Maladie3">Foulure au poignet</p>
                </div>
               
            </div>
            <div className="Profil4">
                <img
                    className="Tete"
                    src={Tete}
                />
                <div className="Pres">
                    <p className="Nom4">Josiane POUTOU</p>
                    <p className="Maladie4">Difficultés à respirer</p>
                </div>
                
            </div>
            <div className="Profil5">
                <img
                    className="Tete"
                    src={Tete}
                />
                <div className="Pres">
                    <p className="Nom5">Pierre MOLLAT</p>
                    <p className="Maladie5">Indigestion</p>
                </div>
                
            </div>
            <Link className="Link" to="/Page1">
                <div className="ButtonF">
                    <p className="Fermer">Fermez</p>
                </div>
            </Link>
        </div>
    )
}

export default Recap;


