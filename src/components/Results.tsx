import { useLocation } from "react-router-dom";
import { Chip } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
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
import { HeartIcon } from "./HeartIcon";
import { useNavigate } from "react-router-dom";
import { SearchTypeForDetails } from "../types/types";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";

import DataSet from "../events.json";

import React, { useEffect } from "react";

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

function Results() {
  const state = useLocation();
  const [stringSearch, setStringSearch] = React.useState("");
  const [citySearch, setCitySearch] = React.useState("");
  const [startDateSearch, setStartDateSearch] = React.useState("01/01/2023");
  const [endDateSearch, setEndDateSearch] = React.useState("12/31/2023");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));
  const events: eventProps[] = DataSet;
  const [filteredEvents, setFilteredEvents] = React.useState(events);
  const [liked, setLiked] = React.useState<boolean[]>(
    new Array(events.length).fill(false)
  );
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  let dateValid = false;
  const navigate = useNavigate();

  const filterEvents = () => {
    let types = [...selectedKeys];
    let filtered = events.filter((event) => {
      if (event.location.includes(citySearch)) {
        if (event.name.includes(stringSearch)) {
          if (startDateSearch && endDateSearch) {
            let startDate = new Date(startDateSearch);
            let endDate = new Date(endDateSearch);
            let eventDate = new Date(event.date);
            if (eventDate >= startDate && eventDate <= endDate) {
              console.log(types);
              if (types.length > 0) {
                let found = false;
                types.forEach((key) => {
                  if (event.types.includes(key)) {
                    found = true;
                  }
                });
                console.log("found " + found);
                console.log(event.types + " instead of " + selectedKeys);
                return found;
              } else {
                return true;
              }
            } else {
              console.log("1");
              console.log(eventDate + " instead of " + startDate);
              console.log(eventDate + " instead of " + endDate);
              return false;
            }
          } else {
            if (selectedKeys.size > 0) {
              let found = false;
              [...selectedKeys].forEach((key) => {
                if (event.types.includes(key)) {
                  found = true;
                }
              });
              console.log("found2 " + found);
              console.log(event.types + " instead of " + selectedKeys);
              return found;
            } else {
              return true;
            }
          }
        } else {
          console.log("2");
          console.log(event.name + " instead of " + stringSearch);
          return false;
        }
      } else {
        console.log("3");
        console.log(event.location + " instead of " + citySearch);
        return false;
      }
    });
    setFilteredEvents(filtered);
  };

  const handleButtonClick = (eventId: number) => {
    // Use the 'history' object to navigate to the event details page
    let fromSearch = true;
    let selectedValue =
      selectedKeys.size > 0 ? [...selectedKeys].join(", ") : "";
    const searchInput: SearchTypeForDetails = {
      stringSearch,
      citySearch,
      startDateSearch,
      endDateSearch,
      selectedValue,
      fromSearch,
      dateValid,
    };
    navigate("/event/" + eventId, { state: searchInput });
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

  const setDates = () => {
    const startDate = dayjs(value[0]);
    const endDate = dayjs(value[1]);
    setStartDateSearch(startDate.format("YYYY/MM/DD"));
    setEndDateSearch(endDate.format("YYYY/MM/DD"));
    console.log(value);
    console.log(startDateSearch);
    console.log(endDateSearch);
    console.log(startDate.format("YYYY/MM/DD"));
    console.log(endDate.format("YYYY/MM/DD"));
    if (startDate.isValid() && endDate.isValid()) {
      dateValid = true;
    }
  };

  useEffect(() => {
    setCitySearch(state.state.citySearch);
    setStringSearch(state.state.stringSearch);
    dateValid = state.state.dateValid;
    if (dateValid) {
      setStartDateSearch(state.state.startDateSearch);
      setEndDateSearch(state.state.endDateSearch);
      console.log(state.state.startDateSearch);
      console.log(state.state.endDateSearch);
      setValue([
        dayjs(state.state.startDateSearch),
        dayjs(state.state.endDateSearch),
      ]);
    }
    const selectedValueArray = state.state.selectedValue.split(", ");
    setSelectedKeys(new Set(selectedValueArray));
  }, []);

  useEffect(() => {
    filterEvents();
  }, [citySearch, stringSearch, startDateSearch, endDateSearch, selectedKeys]);

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

  const handleSort = (sortType: string) => {
    let sortedEvents = [...filteredEvents];
    if (sortType == "Lower") {
      let freeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "free"
      );
      let oneEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$"
      );
      let onetwoEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$-$$"
      );
      let twoEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$"
      );
      let twothreeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$-$$$"
      );
      let threeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$"
      );
      let threefourEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$-$$$$"
      );
      let fourEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$$"
      );
      sortedEvents = [
        ...freeEvents,
        ...oneEvents,
        ...onetwoEvents,
        ...twoEvents,
        ...twothreeEvents,
        ...threeEvents,
        ...threefourEvents,
        ...fourEvents,
      ];
    } else if (sortType == "Higher") {
      let freeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "free"
      );
      let oneEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$"
      );
      let onetwoEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$-$$"
      );
      let twoEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$"
      );
      let twothreeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$-$$$"
      );
      let threeEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$"
      );
      let threefourEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$-$$$$"
      );
      let fourEvents = [...filteredEvents].filter(
        (event) => event.price.toLowerCase() === "$$$$"
      );
      sortedEvents = [
        ...fourEvents,
        ...threefourEvents,
        ...threeEvents,
        ...twothreeEvents,
        ...twoEvents,
        ...onetwoEvents,
        ...oneEvents,
        ...freeEvents,
      ];
    } else if (sortType == "Closest") {
      sortedEvents.sort((a, b) => a.distance - b.distance);
    } else if (sortType == "Farthest") {
      sortedEvents.sort((a, b) => b.distance - a.distance);
    }
    setFilteredEvents(sortedEvents);
  };

  return (
    <>
      <div className="sidenav">
        <div className="relative flex items-center">
          <Input
            type="Search"
            label="Search"
            endContent={
              <SearchIcon
                className="text-default-400 "
                strokeWidth={2.5}
                size={20}
                style={{ margin: "auto" }}
              />
            }
          />
        </div>
        <Autocomplete
          placeholder="Location: "
          className="max-w-xs"
          inputValue={citySearch}
          onInputChange={(city) => setCitySearch(String(city))}
        >
          <AutocompleteItem key="Chicago">Chicago</AutocompleteItem>
          <AutocompleteItem key="Dallas">Dallas</AutocompleteItem>
          <AutocompleteItem key="Los Angeles">Los Angeles</AutocompleteItem>
          <AutocompleteItem key="Miami">Miami</AutocompleteItem>
          <AutocompleteItem key="New York">New York</AutocompleteItem>
        </Autocomplete>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{
                start: "Start Date",
                end: "End Date",
              }}
              onChange={(newValue) => {
                setValue(newValue as DateRange<Dayjs>);
                setDates();
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Slider
          label="Price"
          color="foreground"
          size="sm"
          step={20}
          hideValue={true}
          marks={[
            {
              value: 0,
              label: "Free",
            },
            {
              value: 20,
              label: "$",
            },
            {
              value: 40,
              label: "$$",
            },
            {
              value: 60,
              label: "$$$",
            },
            {
              value: 80,
              label: "$$$$",
            },
          ]}
          defaultValue={20}
          maxValue={80}
          className="max-w-md w-4/5 mx-auto"
        />

        <Slider
          label="Distance (mi)"
          color="foreground"
          size="sm"
          step={1}
          maxValue={999}
          minValue={0}
          defaultValue={0}
          className="max-w-md w-4/5 mx-auto mt-16"
        />

        <div className="flex flex-col items-left p-10">
          Type:<br></br>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Art")}
            isSelected={selectedKeys.has("Art")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Art"]));
              } else {
                selectedKeys.delete("Art");
                setSelectedKeys(new Set([...selectedKeys]));
              }
            }}
          >
            Art
          </Checkbox>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Food")}
            isSelected={selectedKeys.has("Food")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Food"]));
              } else {
                selectedKeys.delete("Food");
                setSelectedKeys(new Set([...selectedKeys]));
              }
            }}
          >
            Food
          </Checkbox>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Music")}
            isSelected={selectedKeys.has("Music")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Music"]));
              } else {
                selectedKeys.delete("Music");
                setSelectedKeys(new Set([...selectedKeys]));
              }
            }}
          >
            Music
          </Checkbox>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Budget")}
            isSelected={selectedKeys.has("Budget")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Budget"]));
              } else {
                selectedKeys.delete("Budget");
                setSelectedKeys(new Set([...selectedKeys]));
              }
              console.log(selectedKeys);
            }}
          >
            On a Budget
          </Checkbox>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Seasonal")}
            isSelected={selectedKeys.has("Seasonal")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Seasonal"]));
              } else {
                selectedKeys.delete("Seasonal");
                setSelectedKeys(new Set([...selectedKeys]));
              }
            }}
          >
            Seasonal
          </Checkbox>
          <Checkbox
            defaultSelected={state.state.selectedValue.includes("Sport")}
            isSelected={selectedKeys.has("Sport")}
            onValueChange={(value) => {
              if (value) {
                setSelectedKeys(new Set([...selectedKeys, "Sport"]));
              } else {
                selectedKeys.delete("Sport");
                setSelectedKeys(new Set([...selectedKeys]));
              }
            }}
          >
            Sport
          </Checkbox>
        </div>
      </div>

      <div className="flex title-with-sidenav ">
        <h4 id="results-header">Results:</h4>
        <div className="flex gap-4">
          {citySearch && (
            <Chip
              onClose={() => {
                setCitySearch("");
              }}
            >
              {citySearch}
            </Chip>
          )}
          {[...selectedKeys].map((value: string) => (
            <Chip
              onClose={() => {
                selectedKeys.delete(value);
                setSelectedKeys(new Set([...selectedKeys]));
              }}
            >
              {value}
            </Chip>
          ))}
        </div>

        <div id="Sort" className="absolute right-10">
          <Dropdown>
            <DropdownTrigger>
              <Button>Sort</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection={false}
            >
              <DropdownItem key="Lower" onClick={() => handleSort("Lower")}>
                Price(Lower)
              </DropdownItem>
              <DropdownItem key="Higher" onClick={() => handleSort("Higher")}>
                Price(Higher)
              </DropdownItem>
              <DropdownItem key="Closest" onClick={() => handleSort("Closest")}>
                Distance(closest)
              </DropdownItem>
              <DropdownItem
                key="Farthest"
                onClick={() => handleSort("Farthest")}
              >
                Distance(farthest)
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="events-with-sidenav pl-5 pr-5">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="event-listing pl-4"
            data-category={event.types}
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

export default Results;
