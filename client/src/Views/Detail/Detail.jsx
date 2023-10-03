import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  useEffect(() => {
    dispatch(getDoctor(id));
    setDetail(doctor);
  }, [dispatch]);

  return (
    <div>
      <div>

        <h1>{`${detail.name}`}</h1>

        <img src={detail.background_image || detail.image} alt="" />

        <div>
          <h2>specialty:{detail.specialty}</h2>
        </div>
        <div>
          <div>
            <h2>price: {detail.price}</h2>
          </div>

        </div>


        <h2>price: {detail.price}</h2>
      </div>
      <div>
        <h2>description:{detail.description}</h2>
      </div>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>




      </div>
    </div>
  );
};
export default Detail;
