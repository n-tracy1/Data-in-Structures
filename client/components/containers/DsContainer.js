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
        function nodeCreator(dsObject, counter = 0) {
            //recrusively loop through all nodes in dsObject
            nodes.push(
                <div>
                    <Node id='test' dataStructure={dsObject} />
                </div>
            );
            if (dsObject.left !== null) nodeCreator(dsObject.left, counter + 1);
            if (dsObject.right !== null) nodeCreator(dsObject.right, counter + 1);
            return
        }
        if (this.props.dataStructure !== undefined) {
            nodeCreator(this.props.dataStructure);
        }

        //testing splitting these up so everything renders
        const lines = []
        function lineCreator(dsObject) {
            //recrusively loop through all nodes in dsObject
            //for some reason the lines using the normal dsObject.style.left and top are ofset by 50px
            if (dsObject.right !== null) {
                nodes.push(
                    <svg>
                        <line x1={parseInt(dsObject.style.left) + 25 + 'px'} y1={parseInt(dsObject.style.top) - 55 + 'px'} x2={parseInt(dsObject.right.style.left) + 25 + 'px'} y2={parseInt(dsObject.right.style.top) - 55 + 'px'} stroke='blue' strokeWidth='3.5'/>
                    </svg>     
                    );
            }
            if (dsObject.left !== null) {
                nodes.push(
                    <svg>
                        <line x1={parseInt(dsObject.style.left) + 23 + 'px'} y1={parseInt(dsObject.style.top) - 55 + 'px'} x2={parseInt(dsObject.left.style.left) + 23 + 'px'} y2={parseInt(dsObject.left.style.top) - 55 + 'px'} stroke='blue' strokeWidth='3.5'/>
                    </svg>     
                    );
            }
            
            if (dsObject.left !== null) lineCreator(dsObject.left);
            if (dsObject.right !== null) lineCreator(dsObject.right);
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
                {/* <svg viewBox='0 0 100 100' style={{position: 'absolute'}}> */}
                    {lines}
                {/* </svg> */}
                    
                
            </div>
        )
    }
}

export default DsContainer;