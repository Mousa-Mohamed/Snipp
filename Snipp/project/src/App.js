import 'bootstrap/dist/css/bootstrap.min.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHome} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from "./Header";
import Landing from "./Landing";
import BackImages from "./BackImages";
import Images from "./Images";


export default function Project() {
    return (
        <>
            <Header />
            <Landing/>
            <BackImages/>
            <Images/>
        </>
    )
}
