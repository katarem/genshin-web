/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "../css/App.css";
import "../css/CharacterView.css";
import axios from "axios";
import { useParams } from "react-router";

// eslint-disable-next-line react/prop-types
function CharacterView() {
  const { characterId } = useParams(); 
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(//`http://localhost:8080/characters/${character}`, {
          `https://z99hj4dx-8080.uks1.devtunnels.ms/characters/${characterId}`,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error("error fetching entity: ", error));
  }, [characterId]);



  
  return (
    <>
      <h1>{data.name}</h1>
      <table>
      <tbody>
        <tr>
          <td>
            <h3>Title</h3>
          </td>
          <td>{data.title}</td>
        </tr>
        <tr>
          <td>
            <h3>Birthday</h3>
          </td>
          <td>{data.birthday}</td>
        </tr>
        <tr>
          <td>
            <h3>Element</h3>
          </td>
          <td>{data.element}</td>
        </tr>
        <tr>
          <td>
            <h3>Weapon</h3>
          </td>
          <td>{data.weapon}</td>
        </tr>
        </tbody>
      </table>
      <img src={data.splashArt}></img>
    </>
  );
}

export default CharacterView;
