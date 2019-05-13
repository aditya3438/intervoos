import React, {Component} from 'react'
//import VoiceRecorder from '../voiceRecorder/voiceRecorder'
//import LoginButton from  '../authentication/loginButton'
import ComplexGrid from '../main/mediaPlayerView'
import SelectedListItem from './tabList'
import Grid from '@material-ui/core/Grid';

class Interviews extends Component{

    render(){

        return(
            <div>
                {/* hello Interviews */}
                {/* <VoiceRecorder /> */}
                <br/>
                {/* <LoginButton /> */}
                <Grid container spacing={24}>
                    <Grid item>
                        <SelectedListItem />
                    </Grid>
                    <Grid item>
                        <ComplexGrid />
                    </Grid>
                </Grid>
            </div>
        );
    }
} 

export default Interviews;