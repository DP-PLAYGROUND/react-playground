import React, {lazy, Suspense} from 'react';
import './App.scss';
import {Link, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const About = lazy(() => import('./About/About'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>/
                <Link to="/about">About</Link>/
                <Link to="/contacts">Contacts</Link>
            </nav>

            <Routes>
                <Route path="/" element={
                    <Suspense>
                        <Home />
                    </Suspense>
                } />
                <Route path="about" element={
                    <Suspense>
                        <About />
                    </Suspense>
                } />
                <Route path="contacts" element={
                    <Suspense>
                        <Contacts />
                    </Suspense>
                } />
            </Routes>
        </>
    );
}

export default App;
