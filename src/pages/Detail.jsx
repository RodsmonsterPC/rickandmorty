import React, { useEffect, useState } from "react";
import { getCharacterId, getCharacters } from "../api/RickApi";
import { useParams } from "react-router";
import styles from "../components/Styles/DetailCard.module.scss";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCharacterId(id)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
        setLoding(false);
      });
  }, []);

  return (
    <>
      <Link to="/">Back</Link>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && error && <h2>Hubo un erro al mostrar los personajes</h2>}
      {!isLoading && !error && (
        <div className={styles.detailContainer}>
          <div>
            <img src={`${data.image}`} alt="" />
          </div>
          <div className={styles.infoCard}>
            <h1>{data.name}</h1>
            <p>
              {data.species}-{data.status}
            </p>
          </div>
          <div className={styles.extraInfo}>
            <p>{data.gender}</p>
            {/* <p>Origin: {data.origin.name}</p>
          <p>Location: {data.location.name}</p> */}
            <p>Created: {data.created}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
