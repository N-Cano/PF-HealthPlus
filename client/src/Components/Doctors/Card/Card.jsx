import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <div key={props.id}>
            <div className="border">
                <Link to={`/detail/${props.id}`}>
                    IR A DETAIL
                </Link>
            <p> name:{props.name}</p> 
            <p> specialty:{props.specialty}</p>
            <img className='w-12 ' src={props.image} alt=""/>
            </div>
        </div>
    )
}
export default Card