import { useModalStore, useProfileStore } from "../page/Store";
import { useRef } from "react";

function UploadModal() {
  const { isOpen, closeModal } = useModalStore();
  const { setProfileImage, deleteImage } = useProfileStore();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Update store
      console.log("Uploaded Image URL:", imageUrl); // Debugging
      setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
    }
  };

  const handleDelete = () => {
    console.log("Deleting Image..."); // Debugging
    deleteImage(); // Update store
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input
    }
  };
  return (
    isOpen && (
      <div className="Modal">
        <button onClick={handleUploadClick}>Upload</button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <p onClick={handleDelete}>Delete</p>
        <p onClick={closeModal}>Close</p>
      </div>
    )
  );
}

export default UploadModal;
