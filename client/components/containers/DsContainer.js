import React, { Component } from 'react';
import InteractiveMenu from '../interactive/InteractiveMenu';
import Node from '../interactive/Nodes';


class DsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //displaying the mainMenu in the center of the screen on click of the menu button
        let mainMenu;
        if (this.props.menuOpen === true) {
            mainMenu = <div id='dropDown'>
                            <button onClick={this.props.dsTypeClick}>BST</button>
                            <button onClick={this.props.dsTypeClick}>Graph</button>
                            <button onClick={this.props.dsTypeClick}>LL</button>
                            <button onClick={this.props.dsTypeClick}>Queue</button>
                            <button onClick={this.props.dsTypeClick}>Stack</button>
                            <button onClick={this.props.dsTypeClick}>Tree</button>
                        </div>;
        }
        else {
            mainMenu = <div></div>
        }

        //displaying the interactiveMenu for the correct data structure
        let interactive;
        if (this.props.dsType === false) {
            interactive = <div></div>
        }
        else if (this.props.dsType !== undefined) {
            interactive = 
            <div>
                <InteractiveMenu dsType={this.props.dsType} interactiveClick={this.props.interactiveClick}/>
            </div>;
        }


        //ARROWS site https://eliav2.github.io/react-xarrows/
        //render nodes from ds
        const nodes = [];
        function nodeCreator(dsObject) {
            //recrusively loop through all nodes in dsObject
            nodes.push(
                <div>
                    <Node dataStructure={dsObject}/>
                </div>
            );
            if (dsObject.left !== null) nodeCreator(dsObject.left);
            if (dsObject.right !== null) nodeCreator(dsObject.right);
            return
        }
        if (this.props.dataStructure !== undefined) {
            nodeCreator(this.props.dataStructure);
        }
        


        //<InteractiveMenu />
        return(
            <div className='DsContainer'>
                {mainMenu}
                <div className='menu'>
                    {interactive}
                </div>
                {nodes}
            </div>
        )
    }
}

export default DsContainer;