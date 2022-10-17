import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import * as actions from "@redux/actions/weatherActions/weatherAction";

const mapStateToProps = (state: any) => {
  //TODO: update type when create types
  return { weatherData: state.weather };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
