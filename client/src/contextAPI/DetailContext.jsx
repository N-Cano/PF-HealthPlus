/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const DetailContext = createContext();

export const useDetail = () => {
  return useContext(DetailContext);
};

export function DetailProvider({ children }) {
  const [detail, setDetail] = useState(null);

  const setDetailData = (data) => {
    setDetail(data);
  };

  return (
    <DetailContext.Provider value={{ detail, setDetailData }}>
      {children}
    </DetailContext.Provider>
  );
}
