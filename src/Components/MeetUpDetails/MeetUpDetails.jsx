import { useParams } from "react-router-dom";
import { useMeetContext } from "../../Context/MeetContext";
//stykles import

import styles from "./MeetUpDetails.module.css";

const MeetUpDetails = () => {
  const { meetData } = useMeetContext();
  const { id } = useParams();
  const meetUpDetails = meetData?.meetData?.find(
    (eachMeet) => eachMeet.id === id
  );
  console.log(
    "🚀 ~ file: MeetUpDetails.jsx:7 ~ MeetUpDetails ~ meetUpDetails:",
    meetUpDetails
  );

  return (
    <div className="container">
      <div className={styles.grid__container}>
        <div className={styles.right__side}>
          <h1>{meetUpDetails?.title}</h1>
          <p>hosted by:- {meetUpDetails?.hostedBy}</p>
          <div className="image__container">
            <img src={meetUpDetails?.eventThumbnail} alt="" />
          </div>
          <p>details : {meetUpDetails?.eventDescription}</p>
          <h2>Additional Information</h2>
          <p>Dress Code : {meetUpDetails?.additionalInformation?.dressCode}</p>
          <p>
            Age Restriction :
            {meetUpDetails?.additionalInformation?.ageRestrictions}
          </p>
          <h3>Event Tag</h3>
          <div className={styles.btn}>
            {meetUpDetails?.eventTags?.map((eachTag, i) => (
              <p className={styles.event__btn} key={i}>
                {eachTag}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.left__side}>
          <div className={styles.card}>
            <div className="start__time">
              <h3>Start Time</h3>
              <p>{meetUpDetails?.eventStartTime}</p>
            </div>
            <div className="end__time">
              <h3>End Time</h3>
              <p>{meetUpDetails?.eventEndTime}</p>
            </div>
            <p>price : {meetUpDetails?.price}</p>
          </div>
          <h2>Speaker</h2>
          <div className={styles.card__container}>
            {meetUpDetails?.speakers?.map((eachMeet, i) => {
              return (
                <div className={styles.card} key={i}>
                  <div className={styles.speaker__image}>
                    <img
                      src={eachMeet?.image}
                      className={styles.image}
                      alt=""
                    />
                  </div>
                  <p>name : {eachMeet?.name}</p>
                  <p>designation : {eachMeet?.designation}</p>
                </div>
              );
            })}
          </div>
          <button>Rsvp</button>
        </div>
      </div>
    </div>
  );
};

export default MeetUpDetails;
