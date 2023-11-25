import "../styles/mainLayout.css";
//import eventImage from "../images/event.jpg";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { SearchType } from "../types/types";
import { useNavigate } from "react-router-dom";

function SearchCard() {
  const [stringSearch, setStringSearch] = React.useState("");
  const [citySearch, setCitySearch] = React.useState("");
  const [startDateSearch, setStartDateSearch] = React.useState("01/01/2023");
  const [endDateSearch, setEndDateSearch] = React.useState("12/31/2023");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));
  const navigate = useNavigate();

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).slice(1).join(", "),
    [selectedKeys]
  );

  const submitValues = () => {
    console.log(stringSearch);
    console.log(citySearch);
    console.log(startDateSearch);
    console.log(endDateSearch);
    console.log(selectedValue);
    const searchInput: SearchType = {
      stringSearch,
      citySearch,
      startDateSearch,
      endDateSearch,
      selectedValue,
    };
    navigate("/results", { state: searchInput });
  };

  return (
    <>
      <div className="searchCard">
        {/*
        <div className="imageContainer">
          <img id="eventImage" src={eventImage} alt="Event Image" />
        </div>
        */}
        <div className="card">
          <Card className="max-w-[1500px]">
            <CardBody className="flex justify-center items-center">
              <div className="card-body">
                <h5 className="card-title">
                  Welcome to WEvent! <br />A place to find your next event
                </h5>
                <div className="parent-container">
                  <form>
                    <Input
                      type="text"
                      placeholder="Search"
                      value={stringSearch}
                      onChange={(event) =>
                        setStringSearch(event.currentTarget.value)
                      }
                    />
                    <div className="filters">
                      <Autocomplete
                        placeholder="Location: "
                        className="max-w-xs"
                        value={citySearch}
                        onInputChange={(city) => setCitySearch(String(city))}
                      >
                        <AutocompleteItem key="Chicago">
                          Chicago
                        </AutocompleteItem>
                        <AutocompleteItem key="Dallas">Dallas</AutocompleteItem>
                        <AutocompleteItem key="Los Angeles">
                          Los Angeles
                        </AutocompleteItem>
                        <AutocompleteItem key="Miami">Miami</AutocompleteItem>
                        <AutocompleteItem key="New York">
                          New York
                        </AutocompleteItem>
                      </Autocomplete>

                      <div id="dates">
                        <label>Start Date</label>
                        <input
                          type="date"
                          id="startDate"
                          onChange={(e) => setStartDateSearch(e.target.value)}
                        />
                        <label>End Date</label>
                        <input
                          type="date"
                          id="endDate"
                          onChange={(e) => setEndDateSearch(e.target.value)}
                        />
                      </div>

                      <div id="types">
                        <Dropdown>
                          <DropdownTrigger>
                            <Button>
                              Types:
                              <ChevronDownIcon className="h-5 w-5" />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Multiple selection example"
                            variant="flat"
                            closeOnSelect={false}
                            disallowEmptySelection={false}
                            selectionMode="multiple"
                            selectedKeys={selectedKeys}
                            onSelectionChange={(newSelection) => {
                              setSelectedKeys(newSelection as Set<string>);
                            }}
                          >
                            <DropdownItem key="Art">Art</DropdownItem>
                            <DropdownItem key="Food">Food</DropdownItem>
                            <DropdownItem key="Music">Music</DropdownItem>
                            <DropdownItem key="Sport">Sport</DropdownItem>
                            <DropdownItem key="Budget">
                              On a budget
                            </DropdownItem>
                            <DropdownItem key="Seasonal">Seasonal</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="search-container">
                <Button
                  className="search-button"
                  color="success"
                  onClick={() => submitValues()}
                >
                  Search
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
