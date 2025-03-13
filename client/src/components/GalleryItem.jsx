import { Gallery } from "./Data";

function GalleryItem() {
  return (
    <>
      <div>
        <h4>
          Gallery <span>(15)</span>
        </h4>
      </div>
      <div className="Gallery">
        {Gallery.map((item) => {
          return (
            <>
              <img src={item.img} alt="" />
            </>
          );
        })}
      </div>
    </>
  );
}

export default GalleryItem;
