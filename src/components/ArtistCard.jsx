import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Rating } from "primereact/rating";

export default function ArtistCard({ artist, onArtistClick }) {
  return (
    <div className="CustomCard">
      <div className="fourCardStyleNoBorder">
        <img
          className="CardImageBlog"
          onClick={() => onArtistClick(artist)}
          height="220px"
          width="130px"
          alt=""
          src={artist.coversrc}
        />
        <h5 className="subsCardHeading">{artist.Name}</h5>
        <Badge className="CustomCardBadge" pill bg="dark" text="light">
          {artist.category}
        </Badge>
        <p className="sp-card-genre">{artist.GenrePerformed}</p>
        <div className="ap-rating">
          <Rating value={artist.rating} cancel={false} stars={5} />
        </div>
        <div className="ap-info">
          <div className="sp-info-wrapper">
            <div className="ap-infoRow">
              <span className="pi pi-home">{artist.Location}</span>
              <div>
                <span className="pi pi-tag">{artist.Category}</span>
              </div>
            </div>
            <div className="ap-infoRow">
              <div>
                <span className="pi pi-money-bill">₹{artist.Price}</span>
              </div>
              <div>
                <span className="pi pi-globe">{artist.experience}</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="warning"
          onClick={() => onArtistClick(artist)}
          size="sm"
          style={{
            minWidth: 50,
            display: "block",
            alignSelf: "center",
            margin: 20,
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
