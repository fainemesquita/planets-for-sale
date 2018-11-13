import React from 'react';
import { Link } from 'react-router';

export default class PlanetsMenu extends React.Component {
  render() {
    return (
      <nav className="planets-menu">
        {this.props.planet.map(menuPlanet => {
          return <Link key={menuPlanet.id} to={`/planet/${menuPlanet.id}`} activeClassName="active">
            {menuPlanet.name}
          </Link>;
        })}
      </nav>
    );
  }
}