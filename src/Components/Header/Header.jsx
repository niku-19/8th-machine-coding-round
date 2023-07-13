import { BiSearch } from "react-icons/bi";

//styles import
import styles from "./Header.module.css";
import { useMeetContext } from "../../Context/MeetContext";

const Header = () => {
  const { dispatch } = useMeetContext();

  const handleSearch = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <header className={styles.brand__header}>
      <h1 className={styles.brand__name}>Meetup</h1>
      <div className={styles.input__search}>
        <BiSearch className={styles.search__icon} />
        <input
          type="text"
          placeholder="Search for Event"
          className={styles.meet__search__inp}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </header>
  );
};

export default Header;
