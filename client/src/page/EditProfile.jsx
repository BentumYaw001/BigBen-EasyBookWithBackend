import PictureUpload from "../components/PictureUpload";
import ProfileDetails from "../components/ProfileDetails";
import UploadModal from "../components/UploadModal";

function EditProfile() {
  return (
    <>
      <div className="ProfileEdit">
        <PictureUpload />
        <ProfileDetails />
        <UploadModal />
      </div>
    </>
  );
}

export default EditProfile;
