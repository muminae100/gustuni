import { Link } from "react-router-dom";

const UpcomingEventsCard = () => {
  return (
    <>
      {/* <!-- events cards items here --> */}
      <div className="col-lg-3 col-6 e-container">
        {/* <!-- image link --> */}
        <Link to="/events/1">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="GUTSUNI"
            className="e-img"
            height="180px"
            width="100%"
          />
        </Link>
        {/* <!-- buy ticket link --> */}
        <a href="#" className="e-tlink bg-dark">
          <span className="e-ticon">
            <i className="fas fa-ticket"></i>
          </span>
          Buy Ticket
        </a>
        <h6 className="e-name text-black">Event Name</h6>
        <h6 className="e-location">
          <span className="e-icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <span className="e-locationb text-black"> Camp Lou, Antalya</span>
        </h6>
      </div>
    </>
  );
};

export default UpcomingEventsCard;
