import React, {Component} from 'react'
//import VoiceRecorder from '../voiceRecorder/voiceRecorder'
//import LoginButton from  '../authentication/loginButton'
import ComplexGrid from '../reusable components/mediaPlayerView'
import SelectedListItem from '../reusable components/tabList'
import Grid from '@material-ui/core/Grid';
// import ProgressTable from '../reusable components/progressTable'
import ProgressTabView from '../reusable components/progressTabView'
import InterviewTabs from '../main/interviewTabs'

class Interviews extends Component{

    render(){

        return(
            <div>
                {/* hello Interviews */}
                {/* <VoiceRecorder /> */}
                {/* <LoginButton /> */}
                <Grid 
                  container
                  spacing={10}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ minHeight: '10vh' }}
                >
                    <Grid item>
                        <InterviewTabs />
                    </Grid>
                    {/* <Grid item>
                        <SelectedListItem />
                    </Grid> */}
                </Grid>
            </div>
        );
    }
} 

export default Interviews;

                    // <Grid item>
                    //     {/* <ComplexGrid /> */}
                    //     <ProgressTabView />
                    // </Grid>