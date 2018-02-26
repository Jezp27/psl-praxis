import React, { Component } from 'react';
import './EnemiesOverview.css';

class EnemiesOverview extends Component {
    render() {
        return (<div className='enemies-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1><a className='enemies-overview-enlaces' href={this.props.link}>{this.props.name}</a></h1>
            <p className='enemies-overview-text'>{this.props.overview}</p>
        </div>);
    }
}

export default EnemiesOverview;