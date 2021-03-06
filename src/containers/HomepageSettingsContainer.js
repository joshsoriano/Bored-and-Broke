import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import HomepageSettings from '../components/HomepageSettings'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    activity: state.demo.activity,
    activities: state.demo.activities,
    is_first_time: state.demo.is_first_time,
    saved_activities: state.demo.saved_activities,
    tagline: state.demo.tagline,
    user: state.demo.user,
    users: state.demo.users,
    is_update_needed: state.demo.is_update_needed,
    settings: state.demo.settings,
    ready_to_redirect: state.demo.ready_to_redirect
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageSettings);
