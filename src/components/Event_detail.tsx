import { useParams, useLocation, useNavigate } from "react-router-dom";
import Cupcake from "../images/cupcakes.jpg";
import Fulton from "../images/fulton.jpg";
import Beer from "../images/beer.jpg";
import Christmas from "../images/christmas.jpg";
import Sushi from "../images/sushi.jpg";
import Rock from "../images/rock.jpg";
import FoodArt from "../images/foodart.jpg";
import Wonderland from "../images/wonderland.jpg";
import ChiMaraton from "../images/chimarathon.jpg";
import Artshow from "../images/artshow.jpg";
import Beachconcert from "../images/beachconcert.jpg";
import Tacofestival from "../images/tacofestival.jpg";
import Basketball from "../images/basketball.jpg";
import Artsymiami from "../images/artsymiami.jpg";
import Hollywoodparty from "../images/hollywoodparty.jpg";
import Broadway from "../images/broadway.jpg";
import Bbqfest from "../images/bbqfest.jpg";
import Sportsshowdown from "../images/sportsshowdown.jpg";
import Beachartfest from "../images/beachartfest.jpg";
import Jazznight from "../images/jazznight.jpg";
import Nycmarathon from "../images/nycmarathon.jpg";
import Miamiseasonal from "../images/miamiseasonal.jpg";
import Laseasonal from "../images/laseasonal.jpg";
import Nyseasonal from "../images/nyseasonal.jpg";

function Event_details() {
  const { id } = useParams();
  const state = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/results");
  };

  const getNameImage = (index: number) => {
    switch (index) {
      case 0:
        return Cupcake;
      case 1:
        return Fulton;
      case 2:
        return Beer;
      case 3:
        return Christmas;
      case 4:
        return Sushi;
      case 5:
        return Rock;
      case 6:
        return FoodArt;
      case 7:
        return Wonderland;
      case 8:
        return ChiMaraton;
      case 9:
        return Artshow;
      case 10:
        return Beachconcert;
      case 11:
        return Tacofestival;
      case 12:
        return Basketball;
      case 13:
        return Artsymiami;
      case 14:
        return Hollywoodparty;
      case 15:
        return Broadway;
      case 16:
        return Bbqfest;
      case 17:
        return Sportsshowdown;
      case 18:
        return Beachartfest;
      case 19:
        return Jazznight;
      case 20:
        return Nycmarathon;
      case 21:
        return Miamiseasonal;
      case 22:
        return Laseasonal;
      case 23:
        return Nyseasonal;
      default:
        return Cupcake;
    }
  };

  return (
    <>
      {state.state && (
        <button className="search-button" onClick={handleButtonClick}>
          &lt; Search
        </button>
      )}

      <p>Event id: {id}</p>

      <main>
        <div className="myclassName" id="eventDetails">
          <div className="event-image">
            <img
              src={getNameImage(Number(id))}
              alt="Event Image"
              id="eventImage"
              style={{
                width: "800px",
                height: "300px",
                margin: "0 auto",
              }}
            />
          </div>
          {/* ...rest of your code... */}
        </div>
      </main>
    </>
  );
}

export default Event_details;
