import React, {Component} from 'react'
import {ReactMic} from 'react-mic'
import Button from '@material-ui/core/Button';

export default class VoiceRecorder extends Component {

        constructor(props){
            super(props)
            this.state={
                record: false
            }
        }


        startRecording= ()=>{
            this.setState({
                record: true
            });

        }

        stopRecording =()=>{
            this.setState({
                record: false
            });
        }

        onData(recordedVoice){
            console.log('we have a voice:',recordedVoice)
        }

        onStop(recordedVoice){
            console.log('recorded voice is:', recordedVoice)
        }
        
    render(){

        return(
            <div>
                <ReactMic
                record={this.state.record}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                strokeColor="#000000"
                backgroundColor="#FF4081" />
                <Button onClick={this.startRecording} variant="contained" color="primary">Start</Button>
                <Button onClick={this.stopRecording} variant="contained" color="secondary">Stop</Button>
            </div>
        );
    }
}