import classes from './HCard.module.css'
 

const HCard = (props) => {
    let width = props['width'];
    return <div style={{ width: width}} className={classes.main}>
        Hey I am Horizontal Card 
    </div>
}

export default HCard