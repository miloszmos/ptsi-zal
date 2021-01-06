import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { heoresContext } from "../../context/heroesContext";

const DashboardStyled = styled.div`
  [class*="col-"] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  [class*="col-"]:last-of-type {
    padding-right: 0;
  }
  a {
    text-decoration: none;
  }
  h3 {
    text-align: center;
    margin-bottom: 0;
  }
  h4 {
    position: relative;
  }
  .grid {
    margin: 0;
  }
  .col-1-4 {
    width: 15%;
  }
  .module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #3f525c;
    border-radius: 2px;
  }
  .module:hover {
    background-color: #eee;
    cursor: pointer;
    color: #607d8b;
  }
  .grid-pad {
    padding: 10px 0;
  }
  .grid-pad > [class*="col-"]:last-of-type {
    padding-right: 20px;
  }
  @media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px;
    }
  }
  @media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
  }
`;

const Dashboard = () => {
  const { heroes } = useContext(heoresContext);

  return (
    <DashboardStyled>
      <h3>Top Heroes</h3>
      <div className="grid grid-pad">
        {heroes.slice(1, 5).map((hero) => (
          <Link key={hero.id} to={`/detail/${hero.id}`} className="col-1-4">
            <div className="module hero">
              <h4>{hero.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
