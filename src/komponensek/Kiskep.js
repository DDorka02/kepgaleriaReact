import "./Kiskep.css"

export default function Kiskep(props){
    return(
        <div className="kiskep">
            {console.log(props.adat)}
              <img src={props.adat.src} alt={props.adat.alt} />
        </div>
    )
}