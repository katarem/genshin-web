import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(//"http://localhost:8080/characters/", {
          "https://z99hj4dx-8080.uks1.devtunnels.ms/characters/",{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => setCharacterList(response.data))
      .catch((error) => console.error("error fetching entities: ", error));
  }, []);
  return (
    <div className="mainPage">
      <h1>Personajes de la api</h1>
      <div className="characterGrid">
        {characterList.map(character => 
          ShowCharacter(character, navigate))
        }
      </div>
    </div>
  );
}

function ShowCharacter(character, navigate){
  return (
    
    (<img className="characterImg" key={character.id} src={character.icon} onClick={() => navigate(`/characters/${character.id}`)}></img>)


  )


}


export default Home;
