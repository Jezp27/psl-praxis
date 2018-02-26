import React, { Component } from 'react';
import './EnemiesOverview.css';

class EnemiesOverview extends Component {
    render() {
        return (<div className='enemies-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1>{this.props.name}</h1>
            <p className='enemies-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default EnemiesOverview;