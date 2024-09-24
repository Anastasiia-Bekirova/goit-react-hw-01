
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
    <div className={styles.text}>
        <img className={styles.avatar}
      src={image}
      alt={name}
    />
    <p className={styles.name}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={styles.list}>
    <li className={styles.listItem}>
      <span className={styles.spanHeader}>Followers</span>
      <span className={styles.spanNumber}>{stats.followers}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.spanHeader}>Views</span>
      <span className={styles.spanNumber}>{stats.views}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.spanHeader}>Likes</span>
      <span className={styles.spanNumber}>{stats.likes}</span>
    </li>
  </ul>
    </div>
  );
};
export default Profile;