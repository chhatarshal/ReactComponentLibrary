const InputDate = (props) => {

      

    return (
        <input 
        className={props.class}
        type={props.type || 'date'}       
        >   
        {props.children}</input>)
}

export default InputDate
