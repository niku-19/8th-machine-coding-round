/* eslint-disable react/prop-types */
//style import

import { NavLink } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = ({ data }) => {
  // const eventDate = new Date(data?.eventStartTime);
  // console.log("🚀 ~ file: EventCard.jsx:8 ~ EventCard ~ eventDate:", eventDate);

  return (
    <div className={styles.card}>
      <div className={styles.card__image__container}>
        <NavLink to={`/meetup/${data?.id}`}>
          <img
            src={data?.eventThumbnail}
            alt="event-1"
            className={styles.card__image}
          />
        </NavLink>
      </div>
      <div className={styles.event__details}>
        <p className={styles.event__date}>Event Date</p>
        <h2 className={styles.event__title}>{data?.title}</h2>
      </div>
      <div className={styles.event__type}>{data?.eventType}</div>
    </div>
  );
};

export default EventCard;
