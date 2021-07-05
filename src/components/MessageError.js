import { string, func } from "prop-types";

const MessageError = ({ message, close }) => (
  <div className="mt-2">
    <div className="alert alert-dismissible alert-primary">
      <button
        type="button"
        className="btn-close"
        onClick={() => close(false)}
      ></button>
      <h4>ERROR: {message}</h4>
    </div>
  </div>
);

MessageError.propTypes = {
  message: string.isRequired,
  close: func.isRequired,
};

export default MessageError;
