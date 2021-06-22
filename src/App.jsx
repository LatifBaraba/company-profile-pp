import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Preloader from './components/Common/Preloader';
import history from './history';

import Home from './components/Pages/Home';
// import Blog from './components/Pages/Blog';
// import BlogDetails from './components/Pages/BlogDetails';
import LinkDonasi from './components/Pages/LinkDonasi';
import { useDispatch } from 'react-redux'
import { fetchToken } from './redux/token/action'
const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchToken())
    }, [])

    const [loading, setloading] = useState(true);

    useEffect(() => {
        demoAsyncCall().then(() => setloading(false) );
    })

    const demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    const hashLinkScroll = () => {
        const { hash } = window.location;
        if (hash !== '') {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
    }

    return (
        <>
        <Router onUpdate={hashLinkScroll} history={history}>
            {/* <Switch> */}
                {loading ? <Preloader /> : ''}
                <Navigation />
                <Route path="/" exact component={Home} />
                {/* <Route path="/blog" exact component={Blog} />
                <Route path="/blog-details" exact component={BlogDetails} /> */}
                <Route path="/donasi" exact component={LinkDonasi}/>
            {/* </Switch> */}
        </Router>
        </>
    )
}

export default App;
