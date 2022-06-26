
import { useState } from 'react';
import './App.css';
import { Horoscope } from './Horoscope';
import { UserDate } from './UserDate';

function App() {
  const[userDob,setUserDob] = useState(true);
  const [horoscopeDetails,setHoroscopeDetails] = useState('');

  return (
    <div className="App">
      {/* We need to show input details to the user if the userDob is true else we need to show the horoscope details of the user based on birth details*/}
        {userDob?<UserDate userDob={userDob} setUserDob = {setUserDob} setHoroscopeDetails={setHoroscopeDetails} />:<Horoscope horoscopeDetails={horoscopeDetails}/>}
    </div>
  );
}

export default App;



//   var request = $.ajax({
//   url: "https://json.astrologyapi.com/v1/"+api,
//   method: "POST",
//   dataType:'json',
//   headers: {
//   "authorization": "Basic " + btoa(userId+":"+apiKey),
//   "Content-Type":'application/json'
//   },
//   data:JSON.stringify(data)
//   });

//   request.then( function(resp){
//   console.log(resp);
//   }, function(err){
//   console.log(err);
//   });
 

