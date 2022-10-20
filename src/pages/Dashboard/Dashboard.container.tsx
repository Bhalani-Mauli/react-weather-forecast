import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import * as actions from "@redux/actions/weatherActions/weatherAction";

const mapStateToProps = (state: any) => {
  const { weather, current } = state.weather;
  return {
    weatherData: weather?.weatherData.slice(current, current + 3),
    cityData: weather?.cityData,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
