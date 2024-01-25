import React from "react";
import "./Home.css";
import Selects from "./Selects";
import RideTable from "./RideTable";
import { useApp } from "./contexts/AppContext";
import { useAuth } from "./contexts/AuthContext";

function Home() {
  const { rides } = useApp();
  const { currentUsername } = useAuth();

  return (
    <div className="home">
      <div className="homeHeader">
        <h1>{currentUsername} QuickDrive</h1>
        <nav>
          <a href="/profile">
            <li>
              <h3 className="h3-home">My Rides</h3>
            </li>
          </a>
        </nav>
      </div>

      <Selects />
      <RideTable rows={rides} />
    </div>
  );
}

export default Home;
