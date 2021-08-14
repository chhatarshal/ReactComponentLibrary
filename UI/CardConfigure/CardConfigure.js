import HCard from '../../UI/HCard/HCard';
import CardHolder from '../../UI/CardHolder/CardHolder';

const CardConfigure = (props) => {
   
    return <CardHolder>
       {[...Array(props['count'])].map((e, i) => <HCard key={i}/>)}
    </CardHolder>
}

export default CardConfigure;