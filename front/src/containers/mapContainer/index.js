import { connect } from 'react-redux';
import Map from 'src/components/Map';


const mapStateToProps = (state) => ({
  list: state.list
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
