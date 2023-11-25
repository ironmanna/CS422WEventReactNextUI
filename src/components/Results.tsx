/*
import { useEffect } from "react";

function Results() {
    const NoConflictSort = {
        const sort = document.getElementsByclassNameName("sort-btn");
        var i;
        
        for (i = 0; i < sort.length; i++) {
            sort[i].addEventListener("click", function() {
            this.classNameList.toggle("active");
            var sortContent = this.nextElementSibling;
            if (sortContent.style.display === "block") {
                sortContent.style.display = "none";
            } else {
                sortContent.style.display = "block";
            }
            });
        }
    };

    const NoConflictDropDown = {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            } else {
            dropdownContent.style.display = "block";
            }
        });
        }
    };

    useEffect(() => {
        NoConflictDropDown();
        NoConflictSort();
    }, []);

  return (
        <>
            <div className="sidenav">
                <a>
                    <div className="search-container">
                        <form>
                            <input type="text" placeholder="Search..." name="search"><button type="submit"><i className="fa fa-search" style={{height: '15px'}}></i></button></input>
                        </form>
                    </div>
                </a>

                <button className="dropdown-btn">Location<i className="fa fa-caret-down"></i></button>
                <div className="dropdown-container">
                    <a href="#">Chicago</a>
                    <a href="#">New York</a>
                    <a href="#">San Francisco</a>
                </div>
                
                <div id="calendar" style={{height: '220px', paddingTop: '5px'}}>
                    {/*
                    <label for="startDate">Start Date</label>
                    <input type="date" id="startDate" value="01/01/2018" />
                    <label for="endDate">End Date</label>
                    <input type="date" id="endDate" value="12/31/2018" />-->
                    */
/*
                </div>
                
                <a>
                    <div className="slidecontainer">
                    <p>Price: </p>
                    <p style={{fontSize: '15px'}}>$0 <input type="range" min="0" max="999" value="0"> $999+ </input></p>
                    </div>
                </a>
                <a>
                    <div className="slidecontainer">
                    <p>Distance: </p>
                    <p style={{fontSize: '15px'}}>0 mi <input type="range" min="0" max="999" value="0"> 999+ mi </input></p>
                    </div>
                </a>
                <p style={{justifyContent: 'center', textAlign: 'center'}}>Type:<br></br>
                    <form style={{justifyItems: 'center', paddingLeft: '100px'}}>
                        <input type="checkbox" id="Art">
                            <label > Art</label><br></br>
                        </input>
                        <input type="checkbox" id="Music">
                            <label > Music</label><br></br>
                        </input>
                        <input type="checkbox" id="Sport">
                            <label > Sport</label><br></br>
                        </input>
                        <input type="checkbox" id="Food">
                            <label > Food</label>
                        </input>
                    </form>
                </p>
            </div>

        {/*event cards*/
/*
        <h4 className="title-with-sidenav" id="results-header">Results:</h4>

        <button className="sort-btn">Sort<i className="fa fa-caret-left"></i></button>
        <div className="sort-btn-container">
        <a href="#">Price(lower)</a>
        <a href="#">Price(higher)</a>
        <a href="#">Distance(closest)</a>
        <a href="#">Distance(farthest)</a>
        </div>

        <script>
        /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
/*
        </script>


        <div className="events-with-sidenav pl-5 pr-5">
        <div className="event-listing pl-4" data-event-id="1" data-category="cheap,popular">
            <div className="event-image">
            <img src="images/cupcakes.jpg" alt="Event Image" />
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
        <div className="event-listing pl-4" data-event-id="2" data-category="cheap,popular">
            <div className="event-image">
            <img src="images/fulton.jpg" alt="Event Image" />
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
        <div className="event-listing pl-4" data-event-id="3" data-category="popular">
            <div className="event-image">
            <img src="images/beer.jpg" alt="Event Image" />
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
        <div className="event-listing pl-4" data-event-id="4" data-category="cheap,popular,seasonal">
            <div className="event-image">
            <img src="images/christmas.jpg" alt="Event Image" />
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
        <div className="event-listing pl-4" data-event-id="5" data-category="popular">
            <div className="event-image">
                <img src="images/sushi.jpg" alt="Event Image" />
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
            <div className="event-listing pl-4" data-category="cheap" data-event-id="6">
            <div className="event-image">
                <img src="images/rock.jpg" alt="Event Image" />
            </div>
            <div className="event-details">
                <h2>Rock Under the Stars Festival</h2>
                <p>Date: Wednesday, November 15, 2023</p>
                <p>Location: LaSalle Street, Chicago, IL</p>
                <p>Price: $</p>
            </div>
            <button className="save-button">
                <span className="heart-icon">♡</span>
            </button>
            </div> 
            <div className="event-listing pl-4" data-category="popular" data-event-id="7">
            <div className="event-image">
                <img src="images/foodart.jpg" alt="Event Image" />
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
            <div className="event-listing pl-4" data-category="seasonal" data-event-id="8">
            <div className="event-image">
                <img src="images/wonderland.jpg" alt="Event Image" />
            </div>
            <div className="event-details">
                <h2>Winter Wonderland Gala</h2>
                <p>Date: Saturday, December 10, 2023</p>
                <p>Location: Division Street, Chicago, IL</p>
                <p>Price: $$$$</p>
            </div>
            <button className="save-button">
                <span className="heart-icon">♡</span>
            </button>
            </div>
        
        </div>
        </>
  );
}

export default Results;
*/

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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import React from "react";

function Results() {
  const state = useLocation();
  const [citySearch, setCitySearch] = React.useState("");
  const types = state.state.selectedValue
    .split(",")
    .map((value: string, index: number) => <li key={index}>{value.trim()}</li>);

  return (
    <>
      <div className="sidenav">
        <div className="relative">
          <Input type="Search" label="Search" />
          <i
            className="fa fa-search absolute top-1/2 left-3 transform -translate-y-1/2"
            style={{ height: "15px" }}
          ></i>
        </div>
        <Autocomplete
          placeholder="Location: "
          className="max-w-xs"
          value={citySearch}
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
              localeText={{ start: "Start Date", end: "End Date" }}
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
          <Checkbox defaultSelected>Art</Checkbox>
          <Checkbox defaultSelected>Food</Checkbox>
          <Checkbox defaultSelected>Music</Checkbox>
          <Checkbox defaultSelected>Sport</Checkbox>
          <Checkbox defaultSelected>Seasonal</Checkbox>
          <Checkbox defaultSelected>On a Budget</Checkbox>
        </div>
      </div>

      <h4 className="title-with-sidenav" id="results-header">
        Results:
      </h4>
      <div className="flex gap-4 events-with-sidenav">
        <Chip onClose={() => console.log("close")}>
          {state.state.citySearch}
        </Chip>
        {types.map((value: string, index: number) => (
          <Chip key={index} onClose={() => console.log("close")}>
            {value}
          </Chip>
        ))}
      </div>

      <div id="Sort" className="flex justify-end">
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
            <DropdownItem key="Lower">Price(Lower)</DropdownItem>
            <DropdownItem key="Higher">Price(Higher)</DropdownItem>
            <DropdownItem key="Closest">Distance(closest)</DropdownItem>
            <DropdownItem key="Farthest">Distance(farthest)</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

export default Results;
