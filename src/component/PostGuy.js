import React from "react";
import Navbar from "./Navbar";

const PostGuy = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="my-3">Welcome to PostMann</h1>
      </div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="urlField"
            placeholder="Enter the URL"
          />
        </div>
        <label className="form-label">Request type:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="reqType"
            id="get"
            value="GET"
          />
          <label className="form-check-label" htmlFor="get">
            GET
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="reqType"
            id="post"
            value="POST"
            checked
          />
          <label className="form-check-label" htmlFor="post">
            POST
          </label>
        </div>
        {/* Contect type */}
        <br />
        <label className="form-label">Content type:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="conType"
            id="jsonRadio"
            value="json"
          />
          <label className="form-check-label" htmlFor="json">
            JSON
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="conType"
            id="paramsRadio"
            value="params"
            checked
          />
          <label className="form-check-label" htmlFor="params">
            Custom parameters
          </label>
        </div>
        {/* Parameters box */}
        <br />
        <form className="row g-3">
          <label htmlFor="url" className="form-label">
            Parameter 1:
          </label>
          <div className="col-md-4" style={{ marginTop: "5px" }}>
            <input
              type="text"
              className="form-control"
              id="parameterKey1"
              placeholder="Enter parameter 1 key"
            />
          </div>
          <div className="col-md-4" style={{ marginTop: "5px" }}>
            <input
              type="text"
              className="form-control"
              id="parameterValue2"
              placeholder="Enter parameter 1 value"
            />
          </div>
          <button
            style={{ marginTop: "5px" }}
            className="col-md-1 btn btn-primary"
          >
            +
          </button>
        </form>
        {/* JSON Request Box */}
        <br />
        <label htmlFor="jsonBox">Enter Request JSON:</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="requestJsonText"
            style={{ height: " 100px" }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary my-3">Submit</button>

        {/* Response  */}
        <br />
        <label htmlFor="jsonBox">Response:</label>
        <div className="form-floating">
          <textarea
            placeholder="Your response will appear here."
            className="form-control"
            id="requestJsonText"
            style={{ height: " 100px" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PostGuy;
