import { createContext, useContext, useState, useEffect } from "react";
import * as d3 from "d3";
import data from "../sheets/presidents.csv";

const CsvContextProvider = createContext(null);
const CsvContext = ({ children }) => {
  const [presidents, setPresidents] = useState([]);
  const [selectedPresident, setSelectedPresident] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const csvArray = await d3.csv(data);
      setPresidents(csvArray);
      if (csvArray.length > 0) {
        setSelectedPresident(csvArray[0]);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    setSelectedPresident(selectedPresident);
  });

  return (
    <CsvContextProvider.Provider
      value={{
        presidents,
        setPresidents,
        value,
        setValue,
        selectedPresident,
        setSelectedPresident,
      }}
    >
      {children}
    </CsvContextProvider.Provider>
  );
};

export default CsvContext;

export const useCsvContext = () => {
  return useContext(CsvContextProvider);
};
