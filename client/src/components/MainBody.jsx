import offers from "/src/assets/images/offers.svg";
import ServicesMenu from "/src/components/ServicesMenu.jsx";
import Content from "/src/components/Content.jsx";
function Mainbody() {
  return (
    <>
      <div className="MainBody">
        <div className="Offers">
          <img src={offers} alt="offers" />
        </div>
        <ServicesMenu />
        <Content />
      </div>
    </>
  );
}

export default Mainbody;
