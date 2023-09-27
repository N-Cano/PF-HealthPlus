
const Card = (props) => {
    return (
        <div key={props.id}>
            <p> name:{props.name}</p> 
            <p> specialty:{props.specialty}</p>
            <p> price:{props.price}</p>
            <p> imagen:{props.imagen}</p>
        </div>
    )
}
export default Card