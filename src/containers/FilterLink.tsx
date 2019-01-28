import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state: { visibilityFilter: string; }, ownProps: { filter: string; }) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; filter: string; }) => void, ownProps: { filter: string; }) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
