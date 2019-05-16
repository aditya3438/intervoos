import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import LoginButton from  '../authentication/loginButton'
import GroupDiscussionTabs from '../main/gdTabs'
class GroupDiscussion extends Component{

    render(){

        return(
            <div style={{ marginTop: 20, padding: 3 }}>
                <Grid container spacing={400} justify="center">
                    <Box
                        boxShadow={5}
                        bgcolor="background.paper"
                        m={2}
                        p={2}
                        style={{ width: '30rem', height: '10rem' }}
                    >
                        <Typography className="register" variant="h6" color="default" fontWeight ="">
                            
                            Intervoos's platform enables you to participate in an online Group Discussion (GD).
                            Though a virtual GD cannot completely emulate an actual GD, it will help you in more ways than one to prepare yourself to face the actual GD.
                            The online GD will be held every alternate day at 6:00 pm

                        </Typography>
                    </Box>
                </Grid>
                <Grid 
                  container
                  spacing={10}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ minHeight: '10vh' }}
                >
                    <Grid item>
                        <GroupDiscussionTabs />
                    </Grid>
                </Grid>
                <br/>
                {/* <LoginButton /> */}
            </div>
            
                // <div>
                //     hello GD's
                // </div>
        );
    }
} 

export default GroupDiscussion;