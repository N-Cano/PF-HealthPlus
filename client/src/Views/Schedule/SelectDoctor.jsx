
const SelectDoctor = ({ selectDoctor }) => {

    const handleChange = (e) => {
        selectDoctor(e.target.value);
    }

    return (
        <>
            <option value="">-- Select a Doctor --</option>
            <option value="3mxD0sfUAWOzt4hpWIHa">Josep Conde</option>
            <option value="7gBRp5ScJ8h4HEqOOCxl">Esmeralda Corral</option>
            <option value="CC0EqVMbB6xLw4pXmph4">Sarai de La Cruz</option>
            <option value="ErlDmNFdhBCnGGOQCCV5">Driss Guijarro</option>
            <option value="QO68cneJcP6tarU5u1iS">Valentin Alegre</option>
            <option value="QQTV9yqOruYp6ON93rjh">Cristobal Cabeza</option>
            <option value="jKg2XeQxhU8ZtJuW2pvr">Maria Angels Carreño</option>
            <option value="q4kJlnddYDdDlHLjciJ8">Luciano Requena</option>
            <option value="qQefaYCMllhEjmLw2Gcy">Andrés Giménez</option>
        </>
    );
};

export default SelectDoctor;
