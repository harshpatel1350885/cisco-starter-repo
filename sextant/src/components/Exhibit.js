import React, { Component } from 'react';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="ExhibitHeading">{this.props.heading}</h2>
            </div>
        );
    }
}

export default Exhibit;