import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctors } from "../../redux/actions";
import { useEffect } from "react";

const SelectDoctor = ({ selectDoctor }) => {
    const handleChange = (e) => {
        selectDoctor(e.target.value);
    }

    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);

    return (
        <>
            < option value="" > --Select a Doctor--</option >
            {
                doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                    </option>
                ))
            }
        </>
    );
};

export default SelectDoctor;
