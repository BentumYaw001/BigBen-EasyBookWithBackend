import { SpaNavItem } from "./Data";
import { useSpaStore } from "../page/Store";

function SpaServices() {
  const { activeComponent, setActiveComponent } = useSpaStore();

  return (
    <div className="SpaServices">
      <div className="SpaNav">
        {SpaNavItem.map((item) => (
          <p
            key={item.id}
            onClick={() => setActiveComponent(item.id)}
            className="nav-link"
            style={{
              fontWeight: activeComponent === item.id ? "bold" : "normal",
              color: activeComponent === item.id ? " hsl(174, 100%, 29%)" : "",
            }}
          >
            {item.name}
          </p>
        ))}
      </div>

      <div>
        {SpaNavItem.map((item) =>
          item.id === activeComponent ? (
            <div key={item.id}>{item.path}</div>
          ) : null
        )}
      </div>

      <div className="BookNow Appointment">Book Appointment</div>
    </div>
  );
}

export default SpaServices;
