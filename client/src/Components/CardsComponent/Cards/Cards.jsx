import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";
import Card from "../Card/Card";

const Cards = () => {
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);

    return (
        <div>
            <div >
                {doctors.map((doc) => (
                    <Card
                        name={doc.name}
                        specialty={doc.specialty}
                        price={doc.price}
                        key={doc.id}
                        image={doc.image}
                        description={doc.description}
                        id={doc.id}
                    />
                ))}
            </div>
        </div>
    )
}
export default Cards