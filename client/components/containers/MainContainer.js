import React, { Component } from 'react';
import MainMenu from '../interactive/MainMenu';
import DsContainer from './DsContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <header>
                    <MainMenu />
                    <h1>Data Structure Visualizer</h1>
                </header>
                <DsContainer />
            </div>
        )
    }

}

export default MainContainer;