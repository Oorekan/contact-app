import ReactDOM from "react-dom";
import "./Contact.css";

const name = "Oorekan";
const avatar =
  "https://i.pinimg.com/originals/61/f9/62/61f962ee16a7b537efa701d3863ee1fc.jpg";
const online = false;

const Contact = () => (
  <div className="Contact">
    <img className="avatar" src={avatar} alt="avatar" />
    <div>
      <h3 className="name">{name}</h3>
      <div className="status">
        {online ? (
          <div className="status-online"></div>
        ) : (
          <div className="status-offline"></div>
        )}
        <p className="status-text">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(Contact(), document.getElementById("root"));

export default Contact;
