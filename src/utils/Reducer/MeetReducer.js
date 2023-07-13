import meetData from "../../Data/MeetData";

const initialState = {
  meetData: meetData.meetups,
};

const MeetReducer = (state, { type, payload }) => {
  console.log("🚀 ~ file: MeetReducer.js:8 ~ MeetReducer ~ payload:", payload);
  switch (type) {
    case "Online": {
      return {
        ...state,
        meetData: meetData.meetups.filter(
          (meet) => meet.eventType === "Online"
        ),
      };
    }

    case "Offline": {
      return {
        ...state,
        meetData: meetData.meetups.filter(
          (meet) => meet.eventType === "Offline"
        ),
      };
    }

    case "Both": {
      return {
        ...state,
        meetData: meetData.meetups,
      };
    }

    case "SEARCH": {
      return {
        ...state,
        meetData: meetData.meetups.filter((meet) =>
          meet.title.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    }

    default:
      return state;
  }
};

export { initialState, MeetReducer };
