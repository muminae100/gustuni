import { Link } from "react-router-dom";
import UpcomingEventsCard from "./UpcomingEventsCard";

const UpcomingEvents = () => {
  return (
    <>
    {/* Events section starts here  */}
    <div className="container-fluid mb-5">
          <section className="events-cont">
             {/* <!-- header --> */}
           <div className="heady">
            <span className="h6 text-black">Upcoming Events</span>
            <Link to="/events">View More &gt;</Link>
           </div>
           {/* <!-- events cards --> */}
           <div className="row">
            <UpcomingEventsCard />
            <UpcomingEventsCard />
            <UpcomingEventsCard />
            <UpcomingEventsCard />
           </div>
          </section>
    </div>
    {/* <!-- Events section ends here --> */}
    </>
  )
}

export default UpcomingEvents