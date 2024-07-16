import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";
import Service from "../page/services/Service";

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
            </Routes>
            </Suspense>
        </BrowserRouter>



    </div>
}

export default RouteComp