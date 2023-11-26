import { useParams, useLocation, useNavigate } from "react-router-dom";
import Cupcake from "../images/cupcakes.jpg";
import Fulton from "../images/wide_lrg_fulton-market-district-mary-ellen-bleeden-01.jpg";
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
import TopNavbar from "./TopNavbar";
import { Image, Button } from "@nextui-org/react";
import DataSet from "../events.json";
import React, { useEffect } from "react";
import { SearchType } from "../types/types";
import { HeartIcon } from "./HeartIcon";

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

function Event_details() {
  const { id } = useParams<{ id: string }>();
  const state = useLocation();
  const navigate = useNavigate();
  const events: eventProps[] = DataSet;
  const [eventSelected, setEventSelected] = React.useState(events[0]);
  const [stringSearch, setStringSearch] = React.useState("");
  const [citySearch, setCitySearch] = React.useState("");
  const [startDateSearch, setStartDateSearch] = React.useState("01/01/2023");
  const [endDateSearch, setEndDateSearch] = React.useState("12/31/2023");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));
  const [liked, setLiked] = React.useState<boolean[]>(
    new Array(events.length).fill(false)
  );
  let dateValid = false;

  const handleButtonClick = () => {
    let selectedValue =
      selectedKeys.size > 0 ? [...selectedKeys].join(", ") : "";
    const searchInput: SearchType = {
      stringSearch,
      citySearch,
      startDateSearch,
      endDateSearch,
      selectedValue,
      dateValid,
    };
    navigate("/results", { state: searchInput });
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

  const handleLikeClick = (eventId: number) => {
    if ((eventId === 0 && id === "0") || eventId === parseInt(id || "0")) {
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
    }
  };

  useEffect(() => {
    setEventSelected(events.find((event) => event.id === parseInt(id!))!);
    if (state.state) {
      setCitySearch(state.state.citySearch);
      setStringSearch(state.state.stringSearch);
      dateValid = state.state.dateValid;
      if (dateValid) {
        setStartDateSearch(state.state.startDateSearch);
        setEndDateSearch(state.state.endDateSearch);
      }
      const selectedValueArray = state.state.selectedValue.split(", ");
      setSelectedKeys(new Set(selectedValueArray));
    }
    const arrayOfLikes = JSON.parse(
      localStorage.getItem("likedEvents") || "[]"
    );
    const newLiked = [...liked];
    for (let i = 0; i < arrayOfLikes.length; i++) {
      newLiked[arrayOfLikes[i]] = true;
    }
    setLiked(newLiked);
  }, []);

  return (
    <>
      <TopNavbar />
      {state.state && (
        <Button
          className="search-button"
          color="success"
          onClick={handleButtonClick}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          &lt; Search
        </Button>
      )}

      <main>
        <div
          className="myclassName"
          id="eventDetails"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div
            className="event-image"
            style={{ width: "60%", height: "50vh", margin: "auto" }}
          >
            <Image
              width="100%"
              alt="Event Image"
              src={getNameImage(parseInt(id || "0"))}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              <p className="text-5xl">{eventSelected.name}</p>
              <Button
                isIconOnly
                aria-label="Like"
                className="m-3"
                style={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  right: "0",
                }}
                onClick={() => handleLikeClick(parseInt(id || "0"))}
              >
                <HeartIcon
                  fill={liked ? "black" : "currentColor"}
                  filled={liked[parseInt(id || "0")]}
                />
              </Button>
            </div>
            <p>{eventSelected.description}</p>
            <p>{eventSelected.date}</p>
            <p>{eventSelected.location}</p>
            <p>{eventSelected.distance}</p>
            <p>{eventSelected.types.join(", ")}</p>
            <p>{eventSelected.price}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Event_details;
