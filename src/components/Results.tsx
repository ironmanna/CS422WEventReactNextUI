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
    dayjs(state.state.startDateSearch),
    dayjs(state.state.endDateSearch),
  ]);
  const [priceMax, setPriceMax] = React.useState(80);
  const [distanceMax, setDistanceMax] = React.useState(999);
  const [sortCriteria, setSortCriteria] = React.useState("");
  let dateValid = (value[0]?.isValid && value[1]?.isValid) || false;
  const navigate = useNavigate();

  const getPriceTranslated = (price: string) => {
    switch (price) {
      case "Free":
        return 0;
      case "$":
        return 20;
      case "$-$$":
        return 30;
      case "$$":
        return 40;
      case "$$-$$$":
        return 50;
      case "$$$":
        return 60;
      case "$$$-$$$$":
        return 70;
      case "$$$$":
        return 80;
      default:
        return 0;
    }
  };

  const filterEvents = () => {
    let types = [...selectedKeys];
    //console.log(priceMax);
    //console.log(distanceMax);
    let nameToSearch = stringSearch.toLowerCase();
    let cityToSearch = citySearch.toLowerCase();
    let filtered = events.filter((event) => {
      let location = event.location.toLowerCase();
      //console.log(location);
      //console.log(cityToSearch);
      if (location.includes(cityToSearch)) {
        let name = event.name.toLowerCase();
        if (name.includes(nameToSearch)) {
          if (startDateSearch && endDateSearch) {
            let startDate = new Date(startDateSearch);
            let endDate = new Date(endDateSearch);
            let eventDate = new Date(event.date);
            if (eventDate >= startDate && eventDate <= endDate) {
              //console.log(types);
              if (types.length > 0) {
                let found = false;
                types.forEach((key) => {
                  if (event.types.includes(key)) {
                    found = true;
                  }
                });
                //console.log("found " + found);
                //console.log(event.types + " instead of " + selectedKeys);

                if (found) {
                  let price = getPriceTranslated(event.price);
                  //console.log("Event price: ", price);
                  if (event.distance <= distanceMax) {
                    if (event.price == "Free") {
                      return true;
                    } else {
                      if (price <= priceMax) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              } else {
                let price = getPriceTranslated(event.price);
                //console.log("Event price: ", price);
                if (event.distance <= distanceMax) {
                  if (event.price == "Free") {
                    return true;
                  } else {
                    if (price <= priceMax) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                } else {
                  return false;
                }
              }
            } else {
              //console.log("1");
              //console.log(eventDate + " instead of " + startDate);
              //console.log(eventDate + " instead of " + endDate);
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
              //console.log("found2 " + found);
              //console.log(event.types + " instead of " + selectedKeys);
              if (found) {
                let price = getPriceTranslated(event.price);
                //console.log("Event price: ", price);
                if (event.distance <= distanceMax) {
                  if (event.price == "Free") {
                    return true;
                  } else {
                    if (price <= priceMax) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                } else {
                  return false;
                }
              } else {
                return false;
              }
            } else {
              let price = getPriceTranslated(event.price);
              //console.log("Event price: ", price);
              if (event.distance <= distanceMax) {
                if (event.price == "Free") {
                  return true;
                } else {
                  if (price <= priceMax) {
                    return true;
                  } else {
                    return false;
                  }
                }
              } else {
                return false;
              }
            }
          }
        } else {
          //console.log("2");
          //console.log(event.name + " instead of " + stringSearch);
          return false;
        }
      } else {
        //console.log("3");
        //console.log(event.location + " instead of " + citySearch);
        return false;
      }
    });
    handleSort(filtered);
  };

  const handleButtonClick = (eventId: number) => {
    // Use the 'history' object to navigate to the event details page
    let fromSearch = true;
    let selectedValue =
      selectedKeys.size > 0 ? [...selectedKeys].join(", ") : "";
    let dateValidProps = dateValid ? true : false;
    const searchInput: SearchTypeForDetails = {
      stringSearch,
      citySearch,
      startDateSearch,
      endDateSearch,
      selectedValue,
      fromSearch,
      dateValidProps,
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

  const setDates = (newValue: DateRange<Dayjs>) => {
    const startDate = dayjs(newValue[0]);
    const endDate = dayjs(newValue[1]);
    setStartDateSearch(startDate.format("YYYY/MM/DD"));
    setEndDateSearch(endDate.format("YYYY/MM/DD"));
    //console.log(value);
    //console.log(startDateSearch);
    //console.log(endDateSearch);
    //console.log(startDate.format("YYYY/MM/DD"));
    //console.log(endDate.format("YYYY/MM/DD"));
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
      //console.log(state.state.startDateSearch);
      //console.log(state.state.endDateSearch);
      setValue([
        dayjs(state.state.startDateSearch),
        dayjs(state.state.endDateSearch),
      ]);
    }
    const selectedValueArray = state.state.selectedValue.split(", ");
    if (selectedValueArray[0] !== "") {
      setSelectedKeys(new Set(selectedValueArray));
    } else {
      setSelectedKeys(new Set());
    }
  }, []);

  useEffect(() => {
    filterEvents();
  }, [
    citySearch,
    stringSearch,
    startDateSearch,
    endDateSearch,
    selectedKeys,
    priceMax,
    distanceMax,
    sortCriteria,
  ]);

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

  const handleSort = (filteredEvents: eventProps[]) => {
    let sortedEvents = [...filteredEvents];
    let sortType = sortCriteria;
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
    } else if (sortType == "Relevance") {
      sortedEvents.sort((a, b) => a.id - b.id);
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
            onChange={(event) => setStringSearch(event.target.value)}
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
              defaultValue={
                dateValid
                  ? [value[0], value[1]]
                  : [dayjs("2022-04-17"), dayjs("2022-04-21")]
              }
              onChange={(newValue) => {
                setValue(newValue as DateRange<Dayjs>);
                setDates(newValue as DateRange<Dayjs>);
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Slider
          label="Max Price"
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
          value={priceMax}
          onChange={(value) => {
            if (typeof value === "number") {
              setPriceMax(value);
            }
          }}
        />

        <Slider
          label="Max Distance (mi)"
          color="foreground"
          size="sm"
          step={10}
          maxValue={999}
          minValue={0}
          defaultValue={0}
          className="max-w-md w-4/5 mx-auto mt-16"
          value={distanceMax}
          onChange={(value) => {
            if (typeof value === "number") {
              setDistanceMax(value);
            }
          }}
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
              //console.log(selectedKeys);
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
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "#426c55",
                  borderColor: "#426c55",
                  color: "white",
                }}
              >
                {sortCriteria === "Lower"
                  ? "Sort by Price(Lower)"
                  : sortCriteria === "Higher"
                  ? "Sort by Price(Higher)"
                  : sortCriteria === "Closest"
                  ? "Sort by Distance(Closest)"
                  : sortCriteria === "Farthest"
                  ? "Sort by Distance(Farthest)"
                  : sortCriteria === "Relevance"
                  ? "Sort by Relevance"
                  : "Sort by"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection={false}
            >
              <DropdownItem
                key="Relevance"
                onClick={() => {
                  setSortCriteria("Relevance");
                  filterEvents();
                }}
              >
                Relevance
              </DropdownItem>
              <DropdownItem
                key="Lower"
                onClick={() => {
                  setSortCriteria("Lower");
                  filterEvents();
                }}
              >
                Price(Lower)
              </DropdownItem>
              <DropdownItem
                key="Higher"
                onClick={() => {
                  setSortCriteria("Higher");
                  filterEvents();
                }}
              >
                Price(Higher)
              </DropdownItem>
              <DropdownItem
                key="Closest"
                onClick={() => {
                  setSortCriteria("Closest");
                  filterEvents();
                }}
              >
                Distance(closest)
              </DropdownItem>
              <DropdownItem
                key="Farthest"
                onClick={() => {
                  setSortCriteria("Farthest");
                  filterEvents();
                }}
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

export default Results;
