import { Provider } from "react-redux";

import store from "@redux/store";
import { Theme } from "@utils/index";
import { Dashboard } from "@pages/index";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Dashboard />
      </Theme>
    </Provider>
  );
}

export default App;
