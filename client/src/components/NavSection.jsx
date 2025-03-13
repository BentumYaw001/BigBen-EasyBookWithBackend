import Location from "/src/assets/images/location.svg";
import { useEffect } from "react";
import notification from "/src/assets/images/bell.svg";
import search from "/src/assets/images/search.svg";
import filter from "/src/assets/images/Vector2.svg";
import { useCurrentTimeStore } from "../page/Store";

function NavSection() {
  const { greeting, city, country, updateTime } = useCurrentTimeStore();

  useEffect(() => {
    updateTime();
  }, []);
  return (
    <>
      <div className="NavSection">
        <div className="Location">
          <div>
            <p>location</p>
            <div className="LocaleSpot">
              <img src={Location} alt="location" />
              {city && country ? (
                <p>
                  {city}, {country}.
                </p>
              ) : (
                <p>Fetching location...</p>
              )}
            </div>
          </div>
          <img src={notification} alt="notification" />
        </div>
        <div className="Greatings">
          <h4>{greeting} Bentum</h4>
        </div>
        <div className="Search">
          <img src={search} alt="search" />
          <input type="search" name="" id="" placeholder="search" />
          <img src={filter} alt="filter" className="Filter" />
        </div>
      </div>
    </>
  );
}

export default NavSection;
