import { useModalStore, useProfileStore } from "../page/Store";
import Camera from "/src/assets/images/camera.svg";

function PictureUpload() {
  const { ProfileImage } = useProfileStore();
  const { toggleModal } = useModalStore();

  return (
    <>
      <div className="PictureUpload">
        <p>Edit Profile</p>
        <div className="Upload">
          <div className="ProfilePicture">
            <img src={ProfileImage} alt="" />
          </div>
          <img
            src={Camera}
            alt=""
            className="ProfileCamera"
            onClick={toggleModal}
          />
        </div>
      </div>
    </>
  );
}

export default PictureUpload;
