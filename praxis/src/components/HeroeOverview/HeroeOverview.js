import React, { Component } from 'react';
import './HeroeOverview.css';

class HeroeOverview extends Component {
    render() {
        return (<div className='heroe-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1><a className='heroe-overview-enlaces' href={this.props.link}>{this.props.name}</a></h1>
            <p className='heroe-overview-text'>{this.props.overview}</p>
        </div>);
    }
}

export default HeroeOverview;