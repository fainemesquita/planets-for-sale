import React from 'react';
import PlanetPreview from './PlanetPreview';
import planets from '../data/planets';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="planets-selector">
          {planets.map(planetData => <PlanetPreview key={planetData.id} {...planetData} />)}
        </div>
      </div>
    );
  }
}