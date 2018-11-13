import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PlanetsMenu from './PlanetsMenu';
import planets from '../data/planets';
export default class PlanetPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const planet = planets.filter((planet) => planet.id === id)[0];
    if (!planet) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${planet.cover})` };
    return (
      <div className="planet-full">
        <PlanetsMenu planets={planets}/>
        <div className="planet">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${planet.image}`}/>
            <h2 className="name">{planet.name}</h2>
          </div>
          <section className="description">
            This planet...
          </section>
          <section className="specs">
          <p className="age"><strong>Age: </strong>{planet.age}</p>
          <p className="size"><strong>Size: </strong>{planet.size}</p>
          <p className="inhabitants"><strong>Inhabitants: </strong>{planet.inhabitants}</p>
          <p className="availability"><strong>Availability: </strong>{planet.availability}</p>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}