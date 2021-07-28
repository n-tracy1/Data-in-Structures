import React, { Component } from 'react';

class Node extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='nodes' style={this.props.dataStructure.style}>
                <span>{this.props.dataStructure.value}</span>
            </div>
        )
        
    }

}

export default Node;
