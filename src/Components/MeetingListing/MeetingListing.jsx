import { useMeetContext } from "../../Context/MeetContext";
import EventCard from "../EventCard/EventCard";
import Sort from "../Sort/Sort";

//style import
import styles from "./MeetingListing.module.css";

const MeetingListing = () => {
  const { meetData } = useMeetContext();

  return (
    <div>
      <Sort />
      <div className={styles.grid__container}>
        {meetData?.meetData?.map((eachMeet) => (
          <EventCard key={eachMeet.id} data={eachMeet} />
        ))}
      </div>
    </div>
  );
};

export default MeetingListing;
