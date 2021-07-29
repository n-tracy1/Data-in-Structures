import React, { Component } from 'react';
import MainMenu from '../interactive/MainMenu';
import DsContainer from './DsContainer';
import BST from '../methods/BST';

const dataStructures = {
    BST: BST
}

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            dsType: false,
            dataStructure: undefined
        };
        this.mainMenuClick = this.mainMenuClick.bind(this);
        this.dsTypeClick = this.dsTypeClick.bind(this);
        this.interactiveClick = this.interactiveClick.bind(this);
    }

    //top left main menu clicking functionality
    mainMenuClick() {
        //if state.menuOpen is false, the menu won't display - clicking the menu icon will change it to true and display it as well as set dsType to false
        if (this.state.menuOpen === false) this.setState({menuOpen: true, dsType: false, dataStructure: undefined});
        else this.setState({menuOpen: false})
        return;
    }

    //drop down menu click functionality
    dsTypeClick(e) {
        //assign to datastructure (ds) the text content of the button which corresponds to the datastructures object at top of current file
        let ds = e.target.textContent;
        this.setState({dsType: ds,  menuOpen: false});
        return;
    }

    //data structure interactive menu click functionality - this may work with imported data for modularity
    interactiveClick(e) {
        e.preventDefault()
        
        // extract out the input from the text field, the type of functionality from the button clicked, and the data structure object in state for ease of use
        const input = parseInt(e.target[0].value);
        const functionality = e.nativeEvent.submitter.id;
        const currDataStruct = this.state.dataStructure;
        console.log('the interactive buttons have been clicked', functionality);
        // this sets the initial ds on the first addNode click
        if (currDataStruct === undefined && input !== '' && functionality === 'addNode') {
            const newDs = new dataStructures[this.state.dsType](input)
            this.setState({dataStructure: newDs});
            console.log('Data structure has been set');
            return;
        }
        //add nodes to BST
        else if (functionality === 'addNode' && this.state.dataStructure !== undefined) {
            currDataStruct.addNode(input, currDataStruct.style.top, currDataStruct.style.left);
            this.setState({datastructure: currDataStruct});
            //place autosizer here
            const tempDataStructure = currDataStruct.autoBalancer(this.state.dataStructure);
            this.setState({dataStructure: tempDataStructure});
        }

        else if (functionality === 'preBuilt' /*&& this.state.dataStructure !== undefined*/) {
            console.log('prebuilt has been clicked');
            const newDs = new dataStructures[this.state.dsType](10)
            newDs.preBuilt();
            const tempDataStructure = newDs.autoBalancer(newDs);
            this.setState({dataStructure: tempDataStructure});
        }
        // then a bunch ds logic will follow based on what type of ds is being used
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