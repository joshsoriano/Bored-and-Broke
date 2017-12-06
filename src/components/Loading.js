import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import eventExample from '../images/eventExample.png';
import NavigationBar from './NavigationBar.js';
<<<<<<< HEAD:src/Loading.js
import logo_offwhite from './images/logo-offwhite.png';
import { getUserID } from './userID';

import './styles.css';
=======
import logo_offwhite from '../images/logo-offwhite.png';
import { getUserID } from './userID';
import '../styles.css';
>>>>>>> master:src/components/Loading.js

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    background: {
        textAlign: 'center',
        // height: '900px',
        height: '900px',
        backgroundColor: '#ECF0F1',
    },
    spacer: {
        height: '25%',
    },
};

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(getUserID());
    const { classes } = this.props;
    return (
      <div className={ classes.background }>
        <div className={ classes.spacer }></div>
        <div className="spinner">
           <div className="cube1"></div>
           <div className="cube2"></div>
         </div>
      </div>
    );
  }
}
Loading.propTypes = propTypes;
export default injectSheet(styles)(Loading);
