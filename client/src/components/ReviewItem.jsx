import { ReviewData } from "./Data";
import FiveStar from "./FiveStar";

function ReviewItem() {
  return (
    <>
      <div className="ReviewItem">
        <h4>Reviews</h4>
        {ReviewData.map((item) => {
          return (
            <div className="ReviewItemList">
              <>
                <img src={item.img} alt={item.name} />
                <div>
                  <h5>{item.name}</h5>
                  <FiveStar />
                  <p>{item.message}</p>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ReviewItem;
