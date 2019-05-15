import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import LoginButton from  '../authentication/loginButton'
import StrangerTabs from '../main/strangerTabs'

class Stranger extends Component{

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
                            
                            Overcome your fear of speaking in public or to strangers with <b>Intervoos</b>. Our platform helps
                            you practice talking to complete strangers in a <b>secure way</b> for <b> 2 minutes </b> at a time, 
                            enough to see drastic improvements in your impromptu speaking skills and overall confidence. 

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
                        <StrangerTabs />
                    </Grid>
                </Grid>
                <br/>
                <LoginButton />
            </div>
            
                // <div>
                //     hello GD's
                // </div>
        );
    }
} 

export default Stranger;

// import React, {Component} from 'react'

// class Stranger extends Component{

//     render(){

//         return(
//             <div>
//                 hello Stranger
//             </div>
//         );
//     }
// } 

// export default Stranger;