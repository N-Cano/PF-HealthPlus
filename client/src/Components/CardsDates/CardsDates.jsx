import Dates from "./Dates/Dates";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";

const CardsDates = ({ dates }) => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div className="w-full flex flex-col h-full mt-20">
      <div className="border-2 min-h-[615px] h-full flex flex-col justify-center item-center bg-gray-100 rounded-2xl gap-6  p-4">
        {!dates.length ? (
          <h2
            className="text-center font-bold text-2xl"
            style={{ color: darkMode ? "black" : "" }}
          >
            {t("CARDSDATES.MESSAGE")}
          </h2>
        ) : (
          dates.map((user) => (
            <Dates
              doctorName={user.doctor}
              doctorId={user.doctorId}
              specialty={user.specialty}
              date={user.date}
              status={user.status}
              key={user.id}
              schedule={user.schedule}
              dateId={user.id}
              userId={user.userId}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default CardsDates;
