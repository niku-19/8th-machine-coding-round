//style import
import { useMeetContext } from "../../Context/MeetContext";
import styles from "./Sort.module.css";

const Sort = () => {
  const { dispatch } = useMeetContext();
  const handleSortEvent = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <header className={styles.sort__header}>
      <h1 className={styles.event__heading}>Meetup Events</h1>
      <div className={styles.select__event__type}>
        <select
          name="event__type"
          id="event__type"
          className={styles.sort__select}
          placeholder="Select Event Type"
          onChange={(e) => handleSortEvent(e)}
        >
          <option disabled value="all">
            Select Event Type
          </option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Both">Both</option>
        </select>
      </div>
    </header>
  );
};

export default Sort;
