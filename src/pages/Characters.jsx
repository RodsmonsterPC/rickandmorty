import React, { useEffect, useState } from "react";
import { getCharacters } from "../api/RickApi";
import CardCharacter from "../components/CardCharacter";
import styles from "../components/Styles/Main.module.scss";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      const { results } = data;
      setData(results);
    });
  }, []);

  return (
    <>
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.title}>
          <h1>The Rick and Morty Api</h1>
        </div>

        <div className={styles.container}>
          {data.map((info) => (
            <Link to={`/detail/${info.id}`}>
              <CardCharacter
                key={info.id}
                name={info.name}
                origin={info.origin}
                species={info.species}
                location={info.location}
                status={info.status}
                image={info.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Characters;
