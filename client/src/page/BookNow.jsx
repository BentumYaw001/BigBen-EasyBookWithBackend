import SpaIntro from "../components/SpaIntro";
import SpaLocation from "../components/SpaLocation";
import SpaServices from "../components/SpaServices";

function BookNowPage() {
  return (
    <>
      <div className="Spa">
        <SpaIntro />
        <SpaLocation />
        <SpaServices />
      </div>
    </>
  );
}

export default BookNowPage;
