import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import NavigationBar from './NavigationBar.js';
import HomepageSettings from '../containers/HomepageSettingsContainer';
import Activity from '../containers/ActivityContainer.js';
import { getUserID, getUserName, getPrice, getUserLocation } from './userID';
import BioModal from '../containers/BioModalContainer.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#ECF0F1',
        textAlign: 'center',
        minHeight: '100vh',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    title: {
        color: '#2C3E50',
        fontSize: '36px',
        fontFamily: 'Open Sans',
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

  componentWillMount() {
    if(getUserID() === null) {
      window.location = "/LoginCreateAccount";
    }
  }

  componentDidMount() {
    this.Homepage();
  }

  Homepage() {
    const myId = getUserID();
    let location = getUserLocation();
    let price = getPrice();

    this.props.actions.getUser(myId);
    if (price === null) {
        price = 0;
    }
    if (location === null) {
        location = "Los Angeles";
    }
    this.props.actions.getActivities(myId, price, location);
  }


  render() {
    // Map through the activities list here.
    const { classes } = this.props;

    let activityDetails = this.props.activities.map(item => (
        <Activity
            activityName={item.name}
            activityPrice={item.price}
            activityDate={item.date}
            activityLocation={item.location}
            savedPage={true}
            activityLink={item.link}
            activityDescription={item.description}
            activityImage={item.image_url}
            activityId={item.id}
            activitySource={item.source}
            activityQueryCity={item.query_city}
        />
    ));

    let final = [];
    let rowsArray = [];
    for (let i = 0; i < activityDetails.length; i++) {
        rowsArray.push(activityDetails[i]);
        if(i % 4 === 3 && i > 0 || (i === activityDetails.length - 1)) {
            final.push(<div className={classes.row}> {rowsArray} </div>);
            rowsArray = [];
        }
        if(activityDetails.length < 4 && i === activityDetails.length - 1) {
            final.push(<div className={classes.row}> {rowsArray} </div>);
        }
    }
    return (
      <div className={ classes.main }>
        <BioModal />
        <NavigationBar />
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.resultsContainer }>
            {final}
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
