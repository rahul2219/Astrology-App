import { useState } from "react";
import './UserDate.css';

export function UserDate(props){
    const[date,setDate] = useState('');
    const[fetchDetails,setFetchDetails] = useState(false);
    const[month,setMonth] = useState('');
    const[year,setYear] = useState('');
    const[tzone,setTzone] = useState('');
    const[lat,setLat] = useState('');
    const[long,setLong] = useState('');
    const[minute,setMinute] = useState('');
    const[hour,setHour] = useState('');
    const [enteredWrong,setEnteredWrong] = useState(false);

    // We use this below function to check if user has entered valid details or not.

    const checkValidDetails = ()=>{
        if(date < 1 || date > 31){
            console.log(false);
            return false;  
        }
        if(month < 1 || month > 12){
            console.log(false);
            return false;
        }
        if(year < 1000 || year > 2021){
            console.log(false);
            return false;
        }
        if(tzone > 14 || tzone < -12){
            console.log(false);
            return false;
        }
        if(minute < 0 || minute > 60){
            console.log(false);
            return false;
        }
        if(hour >= 24 || hour < 0){
            console.log(false);
            return false;
        }
        if(lat < -90 || lat > 90){
            console.log(false);
            return false;
        }
        if(long < -180 || long > 180){
            console.log(false);
            return false;
        }
        if(date === '' || year === '' || month === '' || lat === '' || long === '' || minute === '' || hour === '' || tzone === ''){
            console.log(false);
            return false;
        }
        console.log(true);
        return true;
    }

    const handleClick=()=>{
        const fetchData = async()=>{
            var api = 'planets';
            var userId = '619953';
            var apiKey = 'c6548f32c457b0a166ad3bddd94824cc';
            // We collect the details from the state
            var data = {
            day:date,
            month:month,
            year:year,
            hour:hour,
            min:minute,
            lat:lat,
            lon:long,
            tzone:tzone
            };
            // We fetch the api url finally if the entered details are valid.
            let response = await fetch("https://json.astrologyapi.com/v1/"+api,{
              method: "POST",
            //   We get apikey and userId to the mail after registering successfully
              headers: {
                "authorization": "Basic " + btoa(userId+":"+apiKey),
                "Content-Type":'application/json'
                },
              body:JSON.stringify(data)
            })
            let parsedRespon = await response.json();
            console.log(parsedRespon);
            // We make it false because now we want to show the user his horoscope details.
            props.setUserDob(false);
            props.setHoroscopeDetails(parsedRespon);
        }
        if(checkValidDetails() === true){
            setFetchDetails(true);
            fetchData();
        }
        else{
            console.log("No");
            setEnteredWrong(true);
        }
    }
    // We update the state with the entered details by user
    const handleChange = (e)=>{
        if(e.target.getAttribute('attr') === 'Date'){
          setDate(e.target.value);
         
        }
        else if(e.target.getAttribute('attr') === 'Month'){
            setMonth(e.target.value);
           
        }
        else if(e.target.getAttribute('attr') === 'Year'){
            setYear(e.target.value);
           
        }
        else if(e.target.getAttribute('attr') === 'Hour'){
            setHour(e.target.value);
        
        }
        else if(e.target.getAttribute('attr') === 'Minute'){
            setMinute(e.target.value);
     
        }
        else if(e.target.getAttribute('attr') === 'Lat'){
            setLat(e.target.value);
        }
        else if(e.target.getAttribute('attr') === 'Long'){
            setLong(e.target.value);
        }
        else if(e.target.getAttribute('attr') === 'Tzone'){
            setTzone(e.target.value);
        }
    }
    return(
        <><h1>Enter Your Details here.</h1><div className="userInput">
            <div className='userDetails'>
                <input type="text" placeholder='Enter Date' attr="Date" onChange={handleChange} />
                <input type="text" placeholder='Enter Month' attr="Month" onChange={handleChange} />
                <input type="text" placeholder='Enter Year' attr="Year" onChange={handleChange} />
                <input type="text" placeholder='Enter Hour' attr="Hour" onChange={handleChange} />
                <input type="text" placeholder='Enter Minute' attr="Minute" onChange={handleChange} />
                <input type="text" placeholder='Enter Latitude' attr="Lat" onChange={handleChange} />
                <input type="text" placeholder='Enter Longitude' attr="Long" onChange={handleChange} />
                <input type="text" placeholder='Enter TimeZone' attr="Tzone" onChange={handleChange} />
                {/* We use inline conditions to choose which button we need to show to user based on situation */}
                {enteredWrong?<input className='submit-button' type="submit" value="Wrong!! Enter Details Corrctly to Proceed" onClick={handleClick} />: fetchDetails?<input className='submit-button' type="submit" value="Fetching Details..."/>:<input className='submit-button' type="submit" value="Submit" onClick={handleClick} />}              
            </div>
        </div></>
    )
}