import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { heoresContext } from "../../context/heroesContext";

const HeroesStyles = styled.div`
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #eee;
    margin: 0.5em;
    padding: 0.3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes a {
    text-decoration: none;
  }
  .heroes li:hover {
    color: #607d8b;
    background-color: #ddd;
    left: 0.1em;
  }
  .heroes li.selected {
    background-color: #cfd8dc;
    color: white;
  }
  .heroes li.selected:hover {
    background-color: #bbd8dc;
    color: white;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #405061;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: 0.8em;
    border-radius: 4px 0 0 4px;
  }
`;

const Heores = () => {
  const { heroes } = useContext(heoresContext);

  return (
    <HeroesStyles>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroes.map((h) => (
          <Link key={h.id} to={`/detail/${h.id}`}>
            <li>
              <span className="badge">{h.id}</span> {h.name}
            </li>
          </Link>
        ))}
      </ul>
    </HeroesStyles>
  );
};

export default Heores;
