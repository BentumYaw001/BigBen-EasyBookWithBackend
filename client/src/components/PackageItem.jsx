import { PackageData } from "./Data";

function PackagesItem() {
  return (
    <>
      <div className="PackagesItem">
        <h4>
          Packages <span>(20)</span>
        </h4>
        <div className="ReviewItem">
          {PackageData.map((item) => {
            return (
              <>
                <div className="ReviewItemList">
                  <img src={item.img} alt="" />
                  <div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.message}</p>
                    </div>
                    <div>
                      <span>GHC{item.price}</span>
                      <div className="BookNow">BookNow </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PackagesItem;
