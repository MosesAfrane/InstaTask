import React from "react";
import { useState } from "react";
import axios from "axios";

function Import({ user, setImport }) {
  const onClick = () => {
    const importBox = document.getElementById("importBox");

    if (importBox.value.includes(".ics")) {
      setImport(false);
      axios
        .put("http://localhost:5000/users/update/calendar", {
          user: user,
          calendarLink: importBox.value,
        })
        .then((res) => console.log(res.data));
    } else {
      window.alert("Please submit a valid .ics URL.");
    }
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 className="title">Import Your Calendar:</h1>
          <h5 className="subtitle">
            Please provide the .ics link from canvas so we can display it in the
            app. <br />
          </h5>
          <div className="field">
            <label className="label is-medium">Calendar Link</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                id="importBox"
                style={{ color: "black" }}
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                id="import-submit"
                onClick={onClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Import;
