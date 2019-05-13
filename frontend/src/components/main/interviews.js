import React, {Component} from 'react'
//import VoiceRecorder from '../voiceRecorder/voiceRecorder'
//import LoginButton from  '../authentication/loginButton'
import ComplexGrid from '../reusable components/mediaPlayerView'
import SelectedListItem from '../reusable components/tabList'
import Grid from '@material-ui/core/Grid';
import ProgressTable from '../reusable components/progressTable'

class Interviews extends Component{

    render(){

        return(
            <div>
                {/* hello Interviews */}
                {/* <VoiceRecorder /> */}
                <br/>
                {/* <LoginButton /> */}
                <Grid 
                  container
                  spacing={10}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <SelectedListItem />
                    </Grid>
                    <Grid item>
                        {/* <ComplexGrid /> */}
                        <ProgressTable />

                    </Grid>
                </Grid>
            </div>
        );
    }
} 

export default Interviews;