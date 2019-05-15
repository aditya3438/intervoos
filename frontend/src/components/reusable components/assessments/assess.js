import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnswerFields from './answerFIelds/answerFIelds'
import TextFields from './answerFIelds/textFields'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Assessment(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Q.1 Float is shaped like a …………………  </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <TextFields />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Q.2 Scientists from …………………… have worked on the project so far </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <TextFields />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Q.3 By …………………… the war was firmly in control of the axis powers </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <AnswerFields />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Assessment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Assessment);
