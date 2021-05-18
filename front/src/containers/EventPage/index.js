import { connect } from 'react-redux';
import {deleteEvent} from 'src/actions/curioset';

import EventPage from 'src/components/EventPage';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  name: state.curioset.name,
  category: state.curioset.category,
  description: state.curioset.description,
  website: state.curioset.website,
  address: state.curioset.address,
  dateTime: state.curioset.dateTime,
  price: state.curioset.price,
  longitude: state.curioset.longitude,
  latitude: state.curioset.latitude,
  idEvent: state.curioset.id,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  handleDelete: () => {
    dispatch(deleteEvent());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
