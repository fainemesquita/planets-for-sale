import React from 'react';
import { Link } from 'react-router';

export default class PlanetPreview extends React.Component {
  render() {
    return (
      <Link to={`/planet/${this.props.id}`}>
        <div className="planet-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <p className="status">{this.props.status}</p>
        </div>
      </Link>
    );
  }
}