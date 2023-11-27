import "../styles/mainLayout.css";
import React, { useEffect } from "react";
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
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import DataSet from "../events.json";

interface eventProps {
  id: number;
  img: string;
  name: string;
  date: string;
  location: string;
  price: string;
  types: string[];
  distance: number;
  description: string;
}

function Recommended() {
  const events: eventProps[] = DataSet;
  const [filteredEvents, setFilteredEvents] = React.useState(events);
  const navigate = useNavigate();
  const [liked, setLiked] = useState<boolean[]>(
    new Array(events.length).fill(false)
  );

  const filterEvents = () => {
    let filtered = events.filter((event) => {
      if (
        event.types.includes("Popular") &&
        event.location.includes("Chicago")
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredEvents(filtered);
  };

  const handleButtonClick = (eventId: number) => {
    let fromSearch = false;
    navigate("/event/" + eventId, { state: fromSearch });
  };

  const handleLikeClick = (eventId: number) => {
    const arrayOfLikes = JSON.parse(
      localStorage.getItem("likedEvents") || "[]"
    );

    const newLiked = [...liked];
    newLiked[eventId] = !newLiked[eventId];
    if (newLiked[eventId]) {
      arrayOfLikes.push(eventId);
    } else {
      const index = arrayOfLikes.indexOf(eventId);
      if (index > -1) {
        arrayOfLikes.splice(index, 1);
      }
    }

    localStorage.setItem("likedEvents", JSON.stringify(arrayOfLikes));
    setLiked(newLiked);
  };

  useEffect(() => {
    filterEvents();
    const arrayOfLikes = JSON.parse(
      localStorage.getItem("likedEvents") || "[]"
    );
    const newLiked = [...liked];
    for (let i = 0; i < arrayOfLikes.length; i++) {
      newLiked[arrayOfLikes[i]] = true;
    }
    setLiked(newLiked);
  }, []);

  const getNameImage = (index: number) => {
    switch (index) {
      case 1:
        return Cupcake;
      case 2:
        return Fulton;
      case 3:
        return Beer;
      case 4:
        return Christmas;
      case 5:
        return Sushi;
      case 6:
        return Rock;
      case 7:
        return FoodArt;
      case 8:
        return Wonderland;
      case 9:
        return ChiMaraton;
      case 10:
        return Artshow;
      case 11:
        return Beachconcert;
      case 12:
        return Tacofestival;
      case 13:
        return Basketball;
      case 14:
        return Artsymiami;
      case 15:
        return Hollywoodparty;
      case 16:
        return Broadway;
      case 17:
        return Bbqfest;
      case 18:
        return Sportsshowdown;
      case 19:
        return Beachartfest;
      case 20:
        return Jazznight;
      case 21:
        return Nycmarathon;
      case 22:
        return Miamiseasonal;
      case 23:
        return Laseasonal;
      case 24:
        return Nyseasonal;
      default:
        return Cupcake;
    }
  };

  return (
    <>
      <h1 className="pl-1 pb-2 pt-10 text-3xl">Popular around you</h1>

      <div className="events pl-5 pr-5">
        {filteredEvents.map((event) => (
          <div
            className="event-listing pl-4 mb-2"
            data-event-id={event.id}
            role="button"
            onClick={() => handleButtonClick(event.id)}
          >
            <div className="event-image">
              <img src={getNameImage(event.id)} alt="Event Image" />
            </div>
            <div className="event-details">
              <h2>{event.name}</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Distance: {event.distance} mi</p>
              <p>Types: {event.types.map((type) => type).join(", ")}</p>
              <p>Price: {event.price}</p>
            </div>
            <Button
              isIconOnly
              aria-label="Like"
              className="m-3"
              style={{ backgroundColor: "transparent" }}
              onClick={() => handleLikeClick(event.id)}
            >
              <HeartIcon
                fill={liked ? "black" : "currentColor"}
                filled={liked[event.id]}
              />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recommended;
