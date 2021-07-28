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
            <form>
                <input type='text'></input>
                <button>Add Node</button>
                <button>Delete Node</button>
                <button>Find Value</button>
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