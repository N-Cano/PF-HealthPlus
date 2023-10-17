import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useTheme } from "../../contextAPI/ThemeContext";

const ScheduleWithCalendar = () => {
  const { darkMode } = useTheme();

  const [completedDates, setCompletedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dates")
      .then((response) => {
        const dates = response.data;
        const completedDates = dates.map((date) => date.date);
        setCompletedDates(completedDates);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const selectedDateString = selectedDate.toISOString().split("T")[0];
    const filteredAppointments = completedDates.filter(
      (date) => date === selectedDateString
    );

    setAppointments(filteredAppointments);
  }, [selectedDate, completedDates]);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col justify-center items-center text-black">
      <h1 style={{ color: darkMode ? "white" : "" }}>Mis Citas</h1>

      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        style={{ color: darkMode ? "black" : "" }}
      />

      <h2 style={{ color: darkMode ? "white" : "" }}>
        Citas para el {selectedDate.toDateString()}:
      </h2>
      <ul>
        {appointments.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleWithCalendar;
