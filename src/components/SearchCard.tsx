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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

function SearchCard() {
  const [stringSearch, setStringSearch] = React.useState("");
  const [citySearch, setCitySearch] = React.useState("");
  const [startDateSearch, setStartDateSearch] = React.useState("01/01/2023");
  const [endDateSearch, setEndDateSearch] = React.useState("12/31/2023");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  let dateValid = false;
  const navigate = useNavigate();

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).slice(1).join(", "),
    [selectedKeys]
  );

  const submitValues = () => {
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
                    <div className="filters space-x-2">
                      <Autocomplete
                        placeholder="Location: "
                        className="max-w-xs py-2"
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
                            <DropdownItem key="Budget">
                              On a budget
                            </DropdownItem>
                            <DropdownItem key="Seasonal">Seasonal</DropdownItem>
                            <DropdownItem key="Sport">Sport</DropdownItem>
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
