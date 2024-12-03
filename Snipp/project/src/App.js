import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Header from "./Header";
import Landing from "./Landing";
import BackImages from "./BackImages";
import Images from "./Images";
import Services from "./Services";
import Subscribe from "./Subscribe";
import Works from "./Works";
import Customers from "./Customers";


export default function Project() {
    return (
        <>
            <Header />
            <Landing/>
            <BackImages/>
            <Images/>
            <Services/>
            <Subscribe/>
            <Works/>
            <Customers/>
        </>
    )
}
