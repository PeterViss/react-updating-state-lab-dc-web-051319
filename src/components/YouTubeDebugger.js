import React, {Component} from 'react'; 

export default class YoutubeDebugger extends Component{
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    changing = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    


    resolutioning = () => {
        this.setState({
            settings:{
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }



    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.changing}>Settings</button>
                <button className="resolution" onClick={this.resolutioning}>Resolution</button>
            </div>

        )
    }
}
