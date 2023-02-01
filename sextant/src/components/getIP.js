import React, { Component } from 'react';

class getIP extends Component { 
    constructor(props){
        this.state = {
            url: props.url,
            ipaddr: null
        };
        const response = fetch(this.state.url);
        this.setState({ ipaddr: response.ip })
    }
        render() {
            return (
                <div className="getIP">
                    <h1 className="Address">{this.state.ipaddr}</h1>
                </div>
            );
        }
}

export default getIP;