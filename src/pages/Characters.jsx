import React, { useEffect, useState } from "react";
import { getCharacters } from "../api/RickApi";
import CardCharacter from "../components/CardCharacter";
import styles from "../components/Styles/Main.module.scss";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Characters() {
  const [data, setData] = useState([]);
  const [isLoading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoding(true);
    getCharacters()
      .then((data) => {
        const { results } = data;
        setData(results);
        setLoding(false);
      })
      .catch((error) => {
        setError(error);
        setLoding(false);
      });
  }, []);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && error && <h2>Hubo un erro al mostrar los personajes</h2>}
      {!isLoading && !error && (
        <div className={styles.mainContent}>
          <Navbar />
          <div className={styles.title}>
            <h1>The Rick and Morty Api</h1>
          </div>

          <div className={styles.container}>
            {data.map((info) => (
              <Link to={`/detail/${info.id}`} key={info.id}>
                <CardCharacter
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
      )}
    </>
  );
}

export default Characters;
