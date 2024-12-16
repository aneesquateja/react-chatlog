// import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';     //  TimeStamp is a separate component
import PropTypes from 'prop-types';
import App from '../App';

const ChatEntry = ({sender, body, timeStamp}) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
