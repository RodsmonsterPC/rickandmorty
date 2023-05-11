import React, { useEffect, useState } from "react";
import { getCharacterId, getCharacters } from "../api/RickApi";
import { useParams } from "react-router";
import styles from "../components/Styles/DetailCard.module.scss";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacterId(id).then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <Link to="/">Back</Link>
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
          <p>Origin: {data.origin.name}</p>
          <p>Location: {data.location.name}</p>
          <p>Created: {data.created}</p>
        </div>
      </div>
    </>
  );
}

export default Detail;
