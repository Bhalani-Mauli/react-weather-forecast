import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import * as actions from "@redux/actions/weatherActions/weatherAction";

const mapStateToProps = (state: any) => {
  const { weather: weatherReducer } = state;
  const { weather, current } = weatherReducer;
  return {
    weatherData: weather?.weatherData.slice(current, current + 3),
    cityData: weather?.cityData,
    errorMessage: weatherReducer.errorMessage,
    unit: weatherReducer.unit,
    unitMap: weatherReducer.unitMap,
    switchMap: {
      metric: false,
      imperial: true,
    },
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
