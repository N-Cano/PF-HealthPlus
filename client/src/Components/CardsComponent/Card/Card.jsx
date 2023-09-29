import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <div key={props.id}>
            <div className="border-2 w-400 h-400 flex-col flex-wrap flex justify-start items-center  transition ease-in-out delay-150 bg-blue-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 ...">
                <Link to={`/detail/${props.id}`}>
                    IR A DETAIL
                </Link>
                <p> name:{props.name}</p>
                <p> specialty:{props.specialty}</p>
                <img className='block max-w-full h-auto ease-in ' src={props.image} alt="" />
            </div>
        </div>
    )
}
export default Card