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
                    <button key='adn' id='addNode'>Add Node</button>
                    <button key='deln' id='deleteNode'>Delete Node</button>
                    <button key='fvb' id='findValue'>Find Value</button>
                    <button key='dfpb' id='depthFirstPre'>Depth First Pre</button>
                    <button key='dgib' id='depthFirstIn'>Depth First In</button>            
                    <button key='dfpob' id='depthFirstPost'>Depth First Post</button>            
                    <button key='bfb' id='breadthFirst'>Breadth First</button>  
                    <button key='prbb' id='preBuilt'>Pre-Built</button>          
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