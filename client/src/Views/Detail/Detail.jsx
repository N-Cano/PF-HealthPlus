
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDoctor } from '../../redux/actions';

const Detail = () => {
const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);

  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);




    const [detail, setDetail] = useState({});
    const {id} = useParams()
    useEffect(() => {
      axios
      .get(`http://localhost:3001/doctors/${id}`)
      .then(({ data }) => {
        setDetail(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de videogame:", error);
      })
    },[id])

    return (
        <div >
  <div >
    <h1>{`${detail.name} Details`}</h1>
    <h2 >ID: {detail.id}</h2>
    <img src={detail.background_image || detail.image} alt="" />

    <div >
      <h2>specialty:{detail.specialty}</h2>
    </div>
    <div>
      <div>
        <h2>price: {detail.price}</h2>
       
    </div>
    <div>
        <h2>description:{detail.description}</h2>
        
        </div>
     
      </div>
                <div>
                <Link to="/home">
                <button>Home</button>
                </Link>
                </div>
      </div>


  </div>
    )
}
export default Detail

