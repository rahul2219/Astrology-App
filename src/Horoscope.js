import { DisplayRow } from './DisplayRow';
import './Horoscope.css';

export function Horoscope(props){
    console.log(props.horoscopeDetails);

    return(
        // Show the user his/her horoscope details.
        <><h1 className='horoscope-heading'>Your Horoscope Details.</h1><div className="horoscope-table">

            <div className='table-headings'>
                <div><b>Name</b></div>
                <div><b> Nakshatra</b></div>
                <div><b> NakshatraLord</b></div>
                <div><b>Nakshatra_pad</b></div>
                <div><b>House</b></div>
                <div><b>NormDegree</b></div>
                <div><b>Planet_awastha</b></div>
                <div><b>Sign</b></div>
                <div><b>SignLord</b></div>
                <div><b>Speed</b></div>
                <div><b>FullDegree</b></div>
                {/* <div><b>IsPlanetSet</b></div> */}
                <div><b>IsRetro</b></div>
            </div>
            {/* We are mapping through the props we got and displaying each row*/}
            <div className='horoscope-details'>
                {props.horoscopeDetails.map((row) => (
                    <DisplayRow row={row} />
                ))}
            </div>
        </div></>
    )
}