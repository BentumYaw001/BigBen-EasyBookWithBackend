import { ServicesData } from "./Data";
function ServicesMenu() {
  return (
    <>
      <div className="">
        <div className="ServicesMenu">
          {ServicesData.map((item) => {
            return (
              <>
                <div className="ServiceCatalogue">
                  <div className="Services">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ServicesMenu;
