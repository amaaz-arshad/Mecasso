import { Grid, TextField } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import "./FAQs.css";

export default function FAQs(props) {
  return (
    <div className="container mb-5">
      <Grid marginTop={8}>
        <div className="row g-5">
          <div className="col-md-6">
            <h3>Frequently Asked Questions</h3>
            <div className="my-5">
              <p style={{ fontWeight: "bold" }}>
                Lorem Ipsum is the printing and typesetting industry?
              </p>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text printer
                took a galley of type and scrambled it to make a type specimen.
              </p>
            </div>
            <div className="my-5">
              <p style={{ fontWeight: "bold" }}>
                Lorem Ipsum is simply dummy text of the typesetting industry?
              </p>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown book.
              </p>
            </div>
            <div className="my-5">
              <p style={{ fontWeight: "bold" }}>
                Lorem Ipsum is simply dummy text of the printing industry?
              </p>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ask">
              <h4>Ask a Question</h4>
              <Grid marginTop={4}>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    class="form-control"
                    placeholder="Type your message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="mb-2">
                  <button type="button" class="btn btn-success">
                    Send Message
                  </button>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
