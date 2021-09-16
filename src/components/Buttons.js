function Buttons(props){
    return(
        <button
            onClick={ () => console.log(props.text) }
            disabled={props.dis}
        >   {props.text}
        </button>
    );
}

export default Buttons
