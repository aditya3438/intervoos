import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import LoginButton from  '../authentication/loginButton'
import TestPrepTabs from '../main/testPrepTabs'

class TestPrep extends Component{

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
                            
                            Tests of english are no more a thing to fear. <b>Intervoos</b> first in class AI tutor technology helps
                            you get your highest possible score in tests like IELTS in the shortest possible time at your convenience. 

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
                        <TestPrepTabs />
                    </Grid>
                </Grid>
                <br/>
                <LoginButton />
            </div>
        );
    }
} 

export default TestPrep;
