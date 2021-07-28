import React, { Component } from 'react';



class MainMenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const menuButton = 
            <button onClick={this.props.mainMenuClick}>
                <div></div>
                <div></div>
                <div></div>
            </button>;
        return (
            <div id='mainMenu'>
                {menuButton}
            </div>
        )
    }
}

export default MainMenu;