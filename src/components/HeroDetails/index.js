import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { heoresContext } from "../../context/heroesContext";

const HeroStyles = styled.div`
  label {
    display: inline-block;
    width: 3em;
    margin: 0.5em 0;
    color: #607d8b;
    font-weight: bold;
  }
  input {
    height: 2em;
    font-size: 1em;
    padding-left: 0.4em;
  }
  button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }
`;

const HeroDetails = () => {
  const params = useParams();
  const history = useHistory();
  const { heroes, setHeroes } = useContext(heoresContext);
  const [hero, setHero] = useState(
    heroes.find((h) => h.id === Number(params.id)),
  );

  const handleOnChange = (e) => {
    const changedHero = {
      ...hero,
      name: e.target.value,
    };
    setHero(changedHero);
    updateHeroesList(changedHero);
  };

  const updateHeroesList = (hero) => {
    return setHeroes(
      heroes.map((h) =>
        h.id === hero.id
          ? {
              ...hero,
            }
          : h,
      ),
    );
  };

  const handleGoBack = () => history.goBack();

  return (
    <HeroStyles>
      {hero && (
        <>
          <h2>{hero.name.toUpperCase()} Details</h2>
          <div>
            <span>id: </span>
            {hero.id}
          </div>
          <div>
            <label>
              name:
              <input
                onChange={handleOnChange}
                value={hero.name}
                placeholder="name"
              />
            </label>
          </div>
          <button onClick={handleGoBack}>go back</button>
        </>
      )}
    </HeroStyles>
  );
};

export default HeroDetails;
