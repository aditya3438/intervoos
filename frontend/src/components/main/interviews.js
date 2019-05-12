import React, {Component} from 'react'
import VoiceRecorder from '../voiceRecorder/voiceRecorder'
import LoginButton from  '../authentication/loginButton'

class Interviews extends Component{

    render(){

        return(
            <div>
                {/* hello Interviews */}
                <VoiceRecorder />
                <br/>
                <LoginButton />
            </div>
        );
    }
} 

export default Interviews;