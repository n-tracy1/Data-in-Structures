import React, { Component } from 'react';
import InteractiveMenu from '../interactive/InteractiveMenu';

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
        else if (this.props.dataStructure !== undefined) {
            interactive = <div>
                <InteractiveMenu dsType={this.props.dsType} interactiveClick={this.props.interactiveClick}/>
            </div>;
        }


//<InteractiveMenu />

        return(
            <div className='DsContainer'>
                {mainMenu}
                <div className='menu'>
                    {interactive}
                </div>
            </div>
        )
    }
}

export default DsContainer;