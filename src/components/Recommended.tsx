import "../styles/mainLayout.css";
import cupcake from "../images/cupcakes.jpg";
import fulton from "../images/fulton.jpg";
import beer from "../images/beer.jpg";
import christmas from "../images/christmas.jpg";
import sushi from "../images/sushi.jpg";
import foodart from "../images/foodart.jpg";

function Recommended() {
  return (
    <>
      <h1 className="pl-1 pb-0.75 pt-10 text-3xl">Popular around you</h1>

      <div className="events pl-5 pr-5">
        <div className="event-listing pl-4" data-event-id="1">
          <div className="event-image">
            <img src={cupcake} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>Cupcake Day Festival</h2>
            <p>Date: Friday, November 1, 2023</p>
            <p>Location: Wacker Drive, Chicago, IL</p>
            <p>Price: free</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
        <div className="event-listing pl-4" data-event-id="2">
          <div className="event-image">
            <img src={fulton} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>Fulton Market Food Festival</h2>
            <p>Date: Friday, November 1, 2023</p>
            <p>Location: Fulton & Morgan St, Chicago, IL</p>
            <p>Price: free</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
        <div className="event-listing pl-4" data-event-id="3">
          <div className="event-image">
            <img src={beer} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>The Festival of Wood and Barrel Aged Beer</h2>
            <p>Date: Friday, November 1, 2023</p>
            <p>Location: Michigan Avenue, Chicago, IL</p>
            <p>Price: $-$$</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
        <div className="event-listing pl-4" data-event-id="4">
          <div className="event-image">
            <img src={christmas} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>Christmas Market</h2>
            <p>Date: Friday, November 10, 2023</p>
            <p>Location: State Street, Chicago, IL</p>
            <p>Price: $</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
        <div className="event-listing pl-4" data-event-id="5">
          <div className="event-image">
            <img src={sushi} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>Sushi and Sashimi Food festival</h2>
            <p>Date: Saturday, November 18, 2023</p>
            <p>Location: Lake Shore Drive, Chicago, IL</p>
            <p>Price: $$-$$$</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
        <div
          className="event-listing pl-4"
          data-category="popular"
          data-event-id="7"
        >
          <div className="event-image">
            <img src={foodart} alt="Event Image" />
          </div>
          <div className="event-details">
            <h2>International Food and Art Extravaganza</h2>
            <p>Date: Saturday, November 20, 2023</p>
            <p>Location: Randolph Street, Chicago, IL</p>
            <p>Price: $$</p>
          </div>
          <button className="save-button">
            <span className="heart-icon">♡</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Recommended;
