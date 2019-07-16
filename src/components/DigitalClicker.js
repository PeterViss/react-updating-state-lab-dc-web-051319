import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    adding = () => {
        this.setState(stater => ({
        timesClicked: stater.timesClicked + 1
        }))
    }


    render(){
        return (
            <div>
                <button onClick={this.adding}>
                    {this.state.timesClicked}
                </button>
            </div>
        )
    }
}
