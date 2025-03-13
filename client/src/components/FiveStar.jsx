import Five from "/src/assets/images/star.svg";

function FiveStar() {
  return (
    <div className="FiveStar">
      {[...Array(5)].map((_) => (
        <img src={Five} alt="stars" />
      ))}
    </div>
  );
}

export default FiveStar;
