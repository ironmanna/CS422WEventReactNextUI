function Event_details() {
  return (
    <>
      <a href="results.html">
        <button className="search-button">&lt; Search</button>{" "}
        {/* Search button under the header */}
      </a>

      <main>
        <div className="myclassName" id="eventDetails">
          <img
            src=""
            id="eventImage"
            style={{
              width: "800px",
              height: "300px",
              margin: "0 auto",
              display: "block",
            }}
          />
          <h2 id="eventName" style={{ textAlign: "center" }}>
            {" "}
          </h2>
          <div style={{ textAlign: "center" }}>
            <p id="eventDescription"></p>
          </div>
          <div>
            <div className="box" id="eventDate" style={{ textAlign: "center" }}>
              <p></p>
            </div>
          </div>

          <div>
            <div
              className="box"
              id="eventLocation"
              style={{ textAlign: "center" }}
            >
              <p></p>
            </div>
          </div>

          <div>
            <b>
              <div
                className="box"
                id="eventCost"
                style={{ textAlign: "center" }}
              >
                <p></p>
              </div>
            </b>
          </div>
        </div>
      </main>
    </>
  );
}

export default Event_details;
