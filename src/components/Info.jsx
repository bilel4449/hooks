import React from "react";
import { Link, useParams } from "react-router-dom";

const Info = ({ list }) => {
  const { id } = useParams();
  const item = list.find((el) => el.id == id);

  return (
    <div>
      <h1>{item.title}</h1>
      <img className="info" src={item.url} alt="" />

      <iframe className="bonde" src={item.bonde}
      ></iframe>
      <h3>{item.description}</h3>
      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
};

export default Info;
