import React, { Component } from 'react';

class getIP extends Component { 
    constructor(props) {
        super(props);
        this.state = {      
            url: props.url,      
            address: "test"    
        };
    }

    getAddress() {
        const response = fetch('http://api.ipify.org/?format=json');
        const data = response.json();
        this.setState({
            address: data
        });
    }

    render() {
        return (
            <div className="AddressDisplay">
                {this.state.address}
            </div>
        );
    }

}

export default getIP;