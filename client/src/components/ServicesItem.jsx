import { SpaList } from "./Data";

function ServicesItem() {
  return (
    <>
      <div>
        <h4>
          Services <span>(12)</span>
        </h4>
        <div>
          {SpaList.map((item) => {
            return (
              <>
                <div className="ServicesItem">
                  <p>{item.style}</p>
                  <h5>{item.type}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ServicesItem;
