import React from 'react';
import $ from 'jquery';
import * as activity from './backend/activity.js';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import NavigationBar from './NavigationBar.js';
import HomepageSettings from './HomepageSettings.js';
import SingleActivityModal from './SingleActivityModal.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#ECF0F1',
        textAlign: 'center',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    title: {
        color: '#2C3E50',
        fontSize: '36px',
    },
    logo_offwhite: {
        paddingLeft: '10px',
        color: '#ECF0F1',
    },
    user: {
        paddingRight: '10px',
        color: '#ECF0F1',
    },
    homepageSettings: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    zipAndCity: {
        marginRight: '120px',
        color: '#16A085',
    },
    pickRadius: {
        marginRight: '120px',
        color: '#ECF0F1',
    },
    priceRange: {
        color: '#ECF0F1',
    },
    resultsContainer: {
        padding: '25px',
    },
    row: {
        display: 'flex',
        marginBottom: '10px',
    },
    element: {
        marginLeft: '80px',
        marginRight: '80px',
    },
};

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activities: [] };
  }

  componentDidMount() {
    this.Homepage();
  }

  Homepage() {
    // For demo.
    this.setState({ activities: activity.retrieve() });
    // Eventually we will use this function to load the activities.
    // this.setState({ activities: database.getFutureActivities() });
  }

  render() {
    // Map through the activities list here.
    const { classes } = this.props;

    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.titleContainer }>
            <span className={ classes.title }>Your Activity Feed</span>
        </div>
        <div className={ classes.resultsContainer }>
            <div className={ classes.row }>

                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
            <div className={ classes.row }>
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
