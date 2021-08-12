import React, { useEffect, Suspense } from 'react'
import HomeContactUs from '../HomeContactUs';
import HomeCopyright from './HomeCopyright';
const Banner = React.lazy(() => import('./Banner'));
const HomeHorizontal = React.lazy(() => import('./HomeHorizontal'));
const HomeNeed = React.lazy(() => import('./HomeNeed'));
const HomeSolution = React.lazy(() => import('./HomeSolution'));
const NavBar = React.lazy(() => import('../NavBar'));

function Home() {
    useEffect(() => {
        document.getElementsByTagName('title')[0].innerHTML = 'FirstSense';
    }, [])
    return (
        <div className="home">
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
                <Banner />
                <HomeSolution />
                <HomeNeed />
                <HomeHorizontal />
                <HomeContactUs />
                <HomeCopyright />
            </Suspense>
        </div>
    )
}

export default Home;
