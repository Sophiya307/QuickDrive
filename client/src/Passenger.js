import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Avatar, Tab, Tabs } from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { EventSeat } from "@material-ui/icons";
import "./Profile.css";
import PassengerPopup from "./PassengerPopup";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FaStar } from "react-icons/fa";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};
const reviews = [];

function Passenger({ joined, requested, reviews }) {
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleOpen(id) {
    setInfo(id);
    setOpen(true);
  }

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div>
      <PassengerPopup open={open} handleClose={handleClose} info={info} />
      <Tabs
        className="passengerTabs"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{ marginLeft: "0.5em" }}
      >
        <Tab label="Joined " icon={<EventSeat />} />
        <Tab label="Requested " icon={<AnnouncementIcon />} />
        <Tab label="Reviews " icon={<StarBorderIcon />} />
      </Tabs>

      <div value={value} hidden={value !== 0}>
        {joined.length === 0 && (
          <p className="placeholderContent">
            You will see rides that you have joined here!
          </p>
        )}
        {joined &&
          joined.map((ride) => (
            <div className="myRideContainer" key={ride._id}>
              <div className="myRide">
                <h4>
                  {new Date(ride.pickupTime).toLocaleString("en-SG", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </h4>
                {`${ride.pickup} to ${ride.dropoff}`}
              </div>
              {ride.riders.map((rider) => (
                <Tooltip key={rider._id} title={rider.username} placement="top">
                  <Avatar
                    alt={rider.username}
                    src={`/image/${rider.profileImageName}`}
                  />
                </Tooltip>
              ))}
            </div>
          ))}
      </div>
      <div value={value} hidden={value !== 1}>
        {requested.length === 0 && (
          <p className="placeholderContent">
            You will see your requested rides here!
          </p>
        )}
        {requested &&
          requested.map((ride) => (
            <div className="myPassengerContainer" key={ride._id}>
              <div className="myRide">
                <h4>
                  {new Date(ride.pickupTime).toLocaleString("en-SG", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </h4>
                {`${ride.pickup} to ${ride.dropoff}`}
              </div>
              {ride.riders.map((rider) => (
                <Tooltip key={rider._id} title={rider.username} placement="top">
                  <Avatar
                    alt={rider.username}
                    src={`/image/${rider.profileImageName}`}
                  />
                </Tooltip>
              ))}
              <button onClick={() => handleOpen(ride._id)}>CANCEL</button>
            </div>
          ))}
      </div>
      
      <div value={value} hidden={value !== 2}>
      {joined.length === 0 && (
          <p className="placeholderContent">
            You can review your rides here!
          </p>
        )}
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        <br/>
          <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      />
      <br/>
      <button
        style={styles.button}
      >
        Submit
      </button>
    
      
    </div>
  </div>
    
  );
}

const styles = {
  container: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
   
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px #4c4440",
    borderRadius: 5,
    width: 300,
    padding: 10,
    backgroundColor: "#4c4440",    // Added background color
    color: "#fff",                // Set text color to black
    cursor: "pointer" 
  }

};

export default Passenger;
