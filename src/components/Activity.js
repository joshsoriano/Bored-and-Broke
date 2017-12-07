import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import SingleActivityModal from './SingleActivityModal.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    activityTitle: {
        margin: '5px',
        fontFamily: 'Open Sans',
    },
    activityDesc: {
        marginBottom: '10px',
        fontFamily: 'Open Sans',
    },
    textDetails: {
        paddingTop: '0px',
        color: '#2C3E4E',
    },
};

class Activity extends React.Component {
    constructor(props) {
      super(props)
      this.state = { activity: [] };
    }

    componentDidMount() {
      this.Activity();
    }

    Activity() {
      // Un-hardcode the activity id.
      this.setState({
        activity: this.props.actions.getActivity(2 /* id */)
      });
    }

    render() {
        const { classes, savedPage } = this.props;
        // this.props.savedPage

        return (
            <Col sx={12} sm={6} md={3}>
                <Thumbnail src="http://via.placeholder.com/350x250" alt="242x200">
                    <div className = {classes.textDetails}>
                        <h3 className = {classes.activityTitle}>Activity Title</h3>
                        <p className = {classes.activityDesc}>Activity Description</p>

                        <SingleActivityModal
                              savedAlready={ false } // when false nothing happens, when true the carousel goes away
                              readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                              userBio="New to LA and excited to explore!"
                              userTagline="Does anyone want to carpool?"
                        >
                        </SingleActivityModal>
                    </div>
                </Thumbnail>
            </Col>
        )
    }
};

Activity.propTypes = propTypes;
export default injectSheet(styles)(Activity);
