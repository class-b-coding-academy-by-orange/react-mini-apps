import React, { Component } from "react";
import './CommentCard.css';

class CommentCard extends Component {
  render() {
    const {id, username, picture, location, postBody, createdTime}  = this.props.info;
    return (
      <div
        className="card mb-3 border-0"
        style={{ maxWidth: "700px", maxHeight: "200px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={picture}
              class="card-img"
              alt={"profile " + id + " image"} 
              style={{ height: "87%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title ct">
                <a href="#">{username}</a> .{" "}
                <small className="text-muted">{location}</small>
              </h5>
              <p className="card-text cb">
                {postBody}
              </p>
              <p className="card-text cf">
                <small className="text-muted">
                  <a href="#">Like</a> . <a href="#">Replay</a> . Last updated {createdTime}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentCard;
