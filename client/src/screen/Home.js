import React from 'react'
import BreadCumb from '../components/BreadCumb';
// import Counter from '../components/Counter';
import GetReady from '../components/GetReady';
import Layer from '../components/Layer';
import MasterCards from '../components/MasterCards';
import Partners from '../components/Partners';
const Home = () => {
    return (
        <div>

            <BreadCumb />
            <Layer />
            <MasterCards />
            {/* <Counter /> */}
            <Partners />
            <GetReady />
        </div>
    )
}

export default Home
