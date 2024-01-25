import React from 'react'

export const Review = () => {
  return (
    <div>
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
        <Tab label="Joined" icon={<EventSeat />} />
        <Tab label="Requested" icon={<AnnouncementIcon />} />
        <Tab label="Review" icon={<AnnouncementIcon />} />
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
    </div>
        
    </div>
  );
}
