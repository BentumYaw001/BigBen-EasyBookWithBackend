import { SpecialistData } from "./Data";
import star from "/src/assets/images/star.svg";
function SpecialistItem() {
  return (
    <>
      <div>
        <h4>
          Specialist <span> (18)</span>
        </h4>
      </div>
      <div className="BrandPersonnel">
        {SpecialistData.map((item) => {
          return (
            <>
              <div className="SpecialistDetails">
                <img
                  src={item.img}
                  alt={item.name}
                  className="SpecialPersonnel"
                />
                <div className="Star SpecialistRate">
                  <img src={star} alt="" />
                  <p>{item.rating}</p>
                </div>
                <h4>{item.name}</h4>
                <p>{item.brand}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SpecialistItem;
