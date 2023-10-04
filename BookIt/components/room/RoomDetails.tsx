"use client";
import { IRoom } from "@/backend/models/room";
import React from "react";
import StarRatings from "react-star-ratings";
import RoomImageSLider from "./RoomImageSLider";
import RoomFeatures from "./RoomFeatures";
import BookingDatePicker from "./BookingDatePicker";
import NewReview from "../review/NewReview";
import ListReviews from "../review/ListReviews";

interface Props {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room?.name}</h2>
      <p>{room?.address}</p>

      <div className="ratings mt-auto mb-3">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="1px"
          name="rating"
        />
        <span id="no_of_reviews">({room?.numOfReviews} Reviews)</span>
      </div>

      <RoomImageSLider images={room?.images} />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>
           {room?.description}
          </p>
          <RoomFeatures room={room} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />
          //TODO Room Map
        </div>
      </div>
      <NewReview />
      <ListReviews />
    </div>
  );
};

export default RoomDetails;
