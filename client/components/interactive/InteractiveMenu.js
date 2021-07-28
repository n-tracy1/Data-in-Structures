import React, { Component } from 'react';

class InteractiveMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let interactiveMenu;
        //Once full functionality is built out, this if statement and inner code will be redundant
        if (this.props.dsType === undefined) {
            interactiveMenu = <form></form>;
        }
        //Will need to check what kind of dsType has been chosen - I think I'll have to hardcode all these out unfortunately
        else if (this.props.dsType === 'BST') {
            interactiveMenu = 
            <form onSubmit={this.props.interactiveClick}>
                <input type='text'></input>
                <div>
                    <button id='addNode'>Add Node</button>
                    <button id='deleteNode'>Delete Node</button>
                    <button id='findValue'>Find Value</button>
                </div>
                
            </form>
        }
 
        return(
            <div id='InteractiveMenu'>
                {interactiveMenu}
            </div>
        )
    }
}

export default InteractiveMenu;