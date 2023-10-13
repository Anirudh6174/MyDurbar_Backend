import "./App.css";
import "./Appx.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import ArtistForm from "./components/ArtistForm";
import ContactUs from "./components/ContactUs";
import ReactGA from "react-ga4";
import Instrumentalist from "./components/Instrumentalist";
import ArtistProfile from "./components/ArtistProfile";


function App() {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.send('pageview', {
    pagePath: window.location.pathname + window.location.search,
  });
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            component={Main}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/bookartist"}
            exact
            component={SearchPage}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/forartist"}
            exact
            component={ArtistForm}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/contactus"}
            exact
            component={ContactUs}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/wajidkhan"}
            exact
            component={Instrumentalist}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/artist/:artistName"}
            exact
            component={ArtistProfile}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
