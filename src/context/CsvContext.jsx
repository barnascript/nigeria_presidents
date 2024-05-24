import { createContext, useContext, useState, useEffect } from "react";
import * as d3 from "d3";
import data from "../sheets/presidents.csv";

const CsvContextProvider = createContext({});

const CsvContext = ({ children }) => {
  const [presidents, setPresidents] = useState([]);
  const [selectedPresident, setSelectedPresident] = useState(null);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(presidents);

  useEffect(() => {
    const getData = async () => {
      try {
        const array = await d3.csv(data);
        console.log(array);
        setPresidents(array);

        if (array.length > 0) {
          setSelectedPresident(array[0]);
        }
      } catch (error) {
        console.error("Error loading CSV data:", error.message);
      }
    };

    getData();
  }, [data]);

  return (
    <CsvContextProvider.Provider
      value={{
        presidents,
        setPresidents,
        value,
        setValue,
        selectedPresident,
        setSelectedPresident,
        isLoading,
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
