import React, { Component } from 'react';
import MainMenu from '../interactive/MainMenu';
import DsContainer from './DsContainer';

const dataStructures = {
    BST: {
        value: 10,
        right: null,
        left: null,
    }
}

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            dsType: false
        };
        this.mainMenuClick = this.mainMenuClick.bind(this);
        this.dsTypeClick = this.dsTypeClick.bind(this);
        this.interactiveClick = this.interactiveClick.bind(this);
    }

    //top left main menu clicking functionality
    mainMenuClick() {
        if (this.state.menuOpen === false) this.setState({menuOpen: true, dsType: false});
        else this.setState({menuOpen: false})
        return console.log(this.state.menuOpen);
    }

    //drop down menu click functionality
    dsTypeClick(e) {
        console.log(this.state);
        console.log(e.target.textContent);
        let ds = e.target.textContent;
        this.setState({dsType: ds, dataStructure: dataStructures[ds], menuOpen: false});
        return;
    }

    //data structure interactive menu click functionality - this may work with imported data for modularity
    interactiveClick(e) {
        e.preventDefault()
        console.log(e);
        return;
    }

    render() {
        return(
            <div>
                <header>
                    <MainMenu key='mainMenu' menuOpen={this.state.menuOpen} mainMenuClick={this.mainMenuClick}/>
                    <h1>Data Structure Visualizer</h1>
                </header>
                <DsContainer 
                    menuOpen={this.state.menuOpen} 
                    dsType={this.state.dsType} 
                    dsTypeClick={this.dsTypeClick} 
                    dataStructure={this.state.dataStructure}
                    interactiveClick={this.interactiveClick}
                    />
            </div>
        )
    }

}

export default MainContainer;