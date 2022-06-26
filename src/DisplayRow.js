import './DisplayRow.css'
export function DisplayRow(props){
    console.log(props.row.isRetro);
    return(
        <div className="row">
            <div><span className='span'>{props.row.name}</span></div>
            <div><span>{props.row.nakshatra}</span></div>
            <div><span>{props.row.nakshatraLord}</span></div>
            <div><span>{props.row.nakshatra_pad}</span></div>
            <div><span>{props.row.house}</span></div>
            <div><span>{props.row.normDegree}</span></div>
            <div><span>{props.row.planet_awastha}</span></div>
            <div><span>{props.row.sign}</span></div>
            <div><span>{props.row.signLord}</span></div>
            <div><span>{props.row.speed}</span></div>
            <div><span>{props.row.fullDegree}</span></div>
            {/* <div><span>{props.row.is_planet_set}</span></div> */}
            <div><span>{props.row.isRetro}</span></div>
        </div>
    )
}