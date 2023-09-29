import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getDoctorName , getDoctors } from '../../../redux/actions';


export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

function handleInputChange(e){ 
    setName(e.target.value);   //setea el valor ingresado
}    
function handleSubmit(){
    name.length === 0? dispatch(getDoctors()) : dispatch(getDoctorName(name));//name es lo q está escribiendo el usuario
        setName(''); 
}
        return (
        <div  type="search">
            <input 
            placeholder='Search by breed name' 
            onChange={handleInputChange} 
            type="search" 
            value={name} />
            <button  type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
}