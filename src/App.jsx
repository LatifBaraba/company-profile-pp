import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Preloader from "./components/Common/Preloader";
import history from "./history";

import Home from "./components/Pages/Home";
// import Blog from './components/Pages/Blog';
// import BlogDetails from './components/Pages/BlogDetails';
import LinkDonasi from "./components/Pages/LinkDonasi";
import ProgramList from "./components/Pages/ProgramList";
import ProgramDetail from "./components/Pages/ProgramDetail";
import IncidentalProgram from "./components/Pages/IncidentalProgram";
import MainDonation from "./components/Pages/MainDonation";

import { useDispatch } from "react-redux";
import { fetchToken } from "./redux/token/action";
import NewsPage from "./components/Pages/NewsPage";
import Album from "./components/Pages/AlbumPage";
import StrukturTeam from "./components/Pages/TeamKami";
import NewsDetail from "./components/Pages/NewsDetail";
const App = () => {
  // const { url } = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToken());
  }, []);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    demoAsyncCall().then(() => setloading(false));
  });

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  };

  const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  };

  return (
    <>
      <Router onUpdate={hashLinkScroll} history={history}>
        {/* <Switch> */}
        {loading ? <Preloader /> : ""}
        {/* <Route path="/program" exact component={ProgramList} /> */}
       
        {window.location.href.split("/")[3] === "program" || window.location.href.split("/")[3] === "program-detail" ? (
          <>            
            <Route path="/program" exact component={ProgramList} />
            <Route path="/program-detail" exact component={ProgramDetail} />
            <Route
              path="/incidental-program"
              exact
              component={IncidentalProgram}
            />
          </>
        ) 
        : (
          <>
            <Navigation />
            <Route path="/" exact component={Home} />
            {/* <Route path="/blog" exact component={Blog} />
                <Route path="/blog-details" exact component={BlogDetails} /> */}
            
            <Route path="/donasi" exact component={LinkDonasi} />
            {/* <Route path="/main-donasi" exact component={MainDonation} /> */}
            <Route path="/news" exact component={NewsPage} />
            <Route path="/news/news-detail" exact component={NewsDetail} />
            <Route path="/albums" exact component={Album} />
            <Route path="/team-kami" exact component={StrukturTeam} />
            
          </>
        )}
        {/* </Switch> */}
      </Router>
    </>
  );
};

export default App;
