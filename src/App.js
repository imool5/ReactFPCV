import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";
import Bio from "./Blocks/Bio"
import './App.scss';
import Dane from './Blocks/Dane';
import Experience from './Blocks/Experience';

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                
                 <Dane Header="Data urodzenia"><p>20 X 1996</p>  </Dane>
                 <Dane Header="Adres"> <p>Mochów 1B</p> </Dane>
                 <Dane Header="Telefon"> <p>511102880</p> </Dane>
                 <Dane Header="Email"><p> imiolekdj@gmail.com</p> </Dane>
                
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            {
        
              
            }
            
            <Bio text= "Czym się zajmuję?">
            <p>Student 7 semestru Inżynierii Biomedycznej</p>
            <p>DJ Imioł - Oprawa muzyczna, konferansjerka, oprawa świetlna imprez okolicznościowych</p>

            </Bio>
            <Experience items={myDetails.experience}></Experience>
          
          </section>
          
        </div>
      </div>
    );
  }
}

export default App;
const myDetails = {
  experience: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ],
  education: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ]
}