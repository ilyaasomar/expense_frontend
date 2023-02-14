import {
  useState,
  useEffect,
  createContext,
  useContext,
  useTransition,
} from "react";
import { getTransections } from "../services/transectionService";
export const TransectinContext = createContext();
const TransectionContextProvider = ({ children }) => {
  const [transections, setTransectins] = useState();
  // const getTransections = async () => {
  //   const { data } = await getTransections();
  //   return data;
  // };
  useEffect(() => {
    const { data } = getTransections();
    setTransectins(data);
  }, []);

  return (
    <TransectinContext.Provider
      values={{ transections }}
    ></TransectinContext.Provider>
  );
};

export default TransectionContextProvider;
