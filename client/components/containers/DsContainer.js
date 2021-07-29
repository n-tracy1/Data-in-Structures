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
                            <button key='bst' onClick={this.props.dsTypeClick}>BST</button>
                            <button key='gra' onClick={this.props.dsTypeClick}>Graph</button>
                            <button key='ll' onClick={this.props.dsTypeClick}>LL</button>
                            <button key='que' onClick={this.props.dsTypeClick}>Queue</button>
                            <button key='sta' onClick={this.props.dsTypeClick}>Stack</button>
                            <button key='tre' onClick={this.props.dsTypeClick}>Tree</button>
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
                <InteractiveMenu key='imenu' dsType={this.props.dsType} interactiveClick={this.props.interactiveClick}/>
            </div>;
        }


        //ARROWS site https://eliav2.github.io/react-xarrows/
        //render nodes from ds
        const nodes = [];
        function nodeCreator(dsObject, counter = 0, direction = 'r') {
            //recrusively loop through all nodes in dsObject
            nodes.push(
                <div>
                    <Node key={direction} id='test' dataStructure={dsObject} />
                </div>
            );
            if (dsObject.left !== null) nodeCreator(dsObject.left, counter + 1, direction + 'l');
            if (dsObject.right !== null) nodeCreator(dsObject.right, counter + 1, direction + 'r');
            return
        }
        if (this.props.dataStructure !== undefined) {
            nodeCreator(this.props.dataStructure);
        }

        //testing splitting these up so everything renders
        const lines = []
        function lineCreator(dsObject, direction = 'l') {
            //recrusively loop through all nodes in dsObject
            //for some reason the lines using the normal dsObject.style.left and top are ofset by 50px
            if (dsObject.right !== null) {
                nodes.push(
                    <svg>
                        <line key={direction} x1={parseInt(dsObject.style.left) + 25 + 'px'} y1={parseInt(dsObject.style.top) - 55 + 'px'} x2={parseInt(dsObject.right.style.left) + 25 + 'px'} y2={parseInt(dsObject.right.style.top) - 55 + 'px'} stroke='blue' strokeWidth='3.5'/>
                    </svg>     
                    );
            }
            if (dsObject.left !== null) {
                nodes.push(
                    <svg>
                        <line key={direction} x1={parseInt(dsObject.style.left) + 23 + 'px'} y1={parseInt(dsObject.style.top) - 55 + 'px'} x2={parseInt(dsObject.left.style.left) + 23 + 'px'} y2={parseInt(dsObject.left.style.top) - 55 + 'px'} stroke='blue' strokeWidth='3.5'/>
                    </svg>     
                    );
            }
            
            if (dsObject.left !== null) lineCreator(dsObject.left, direction + 'l');
            if (dsObject.right !== null) lineCreator(dsObject.right, direction + 'r');
            return
        }
        if (this.props.dataStructure !== undefined) {
            lineCreator(this.props.dataStructure);
        }


        //<InteractiveMenu />
        return(
            <div className='DsContainer'>
                {mainMenu}
                <div className='menu'>
                    {interactive}
                </div>
                {nodes}
                {lines}
            </div>
        )
    }
}

export default DsContainer;