import React, { useState, useEfect }  from "react";


//Componentes
import Form from "./componentes/Form";
import Header from "./componentes/Header";
import HeroContainer from "./componentes/HeroContainer";
//import Hero from "./componentes/Hero";



const  App = () => {
//State
const [heroName, setHeroName] = useState ("");
const [heroData, setHeroData] = useState(null);

//Effect


//Funciones
const handleChange = ({ value })=>{
  setHeroName(value);
};

const handleSearchHero = async e => {
  e.preventDefault();
  const token = "10220790119295053"
  const response = await fetch (
    `https://www.superheroapi.com/api.php${token}/search/${heroName}`
  )
  const {result} = await response.json();
  setHeroData(result);
  


}

  return (
    <div className="App"> 
      <Header />
      <Form handleChange={handleChange} 
      handleSearchHero={handleSearchHero} 
      heroName={heroName}
      />

      {/* <HeroContainer>
        {heroData
        ? heroData.map(hero=>(
          <Hero key={hero.id} name={hero.name} avatar={hero.image.url}  />
        ))
        :null }
      </HeroContainer> */}
     </div>


  );
}

export default App;
