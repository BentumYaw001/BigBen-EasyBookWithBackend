import { TopSpecialist } from "./Data";

function TopSpecialistSection() {
  return (
    <>
      <div className="Contents">
        <div className="Specialist">
          <p>Top Specialist</p>
          <span>view all</span>
        </div>
        <div className="SpecialistGrid">
          <div className="TopSpecialist">
            {TopSpecialist.map((item) => {
              return (
                <>
                  <div className="SpecialistId">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p className="Tag">{item.tag}</p>
                  </div>
                </>
              );
            })}
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSpecialistSection;
