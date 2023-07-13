/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { MeetReducer, initialState } from "../utils/Reducer/MeetReducer";

const meetContext = createContext();

const MeetContextProvider = ({ children }) => {
  const [meetData, dispatch] = useReducer(MeetReducer, initialState);
  console.log(
    "🚀 ~ file: MeetContext.jsx:11 ~ MeetContextProvider ~ meetData:",
    meetData
  );

  return (
    <meetContext.Provider value={{ meetData, dispatch }}>
      {children}
    </meetContext.Provider>
  );
};

export const useMeetContext = () => useContext(meetContext);

export default MeetContextProvider;
