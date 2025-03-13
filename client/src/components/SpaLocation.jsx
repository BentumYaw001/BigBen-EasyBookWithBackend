import { SpaAddress } from "./Data";
import clock from "/src/assets/images/clock.svg";
import location from "/src/assets/images/location.svg";

function SpaLocation() {
  return (
    <>
      <div className="SpaLocation">
        <div className="SpaLocale">
          <img src={location} alt="location" />
          <p>2222 Kasoa Rd. Mingleton, Accra 56086</p>
        </div>
        <div className="SpaLocale">
          <img src={clock} alt="clock" />
          <p>20 min | 1.0km | Mon Sun | 10am - 10pm</p>
        </div>
        <div className="SpaAddress">
          {SpaAddress.map((item) => {
            return (
              <>
                <div className="SpaAddressItem">
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SpaLocation;
