import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";
import Service from "../page/services/Service";
import Contact from "../page/contact/Contact";
import Portfolio from "../page/portfolio/Portfolio";
import Teams from "../page/teams/Teams";
import Login from "../page/login/Login";
import Post from "../page/post/Post";
const Home = lazy(() => import('../page/Home'))
const About =lazy(()=>import('../page/about/About'))

function RouteComp() {
    return <div>
        <BrowserRouter>
            <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<Post />} />
            </Routes>
            </Suspense>
        </BrowserRouter>
    </div>
}

export default RouteComp