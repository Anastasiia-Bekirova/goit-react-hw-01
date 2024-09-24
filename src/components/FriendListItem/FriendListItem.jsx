import clsx from 'clsx';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
   <div className={styles.friendListItem}>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
      <p className={clsx(styles.status, isOnline && styles.online, !isOnline && styles.offline)}>{isOnline ? "Online" : "Offline"}</p>
</div>
  );
};
export default FriendListItem;