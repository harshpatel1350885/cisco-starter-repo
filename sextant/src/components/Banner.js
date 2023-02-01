import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.header}</h1>
            </div>
        );
    }
}

export default Banner;