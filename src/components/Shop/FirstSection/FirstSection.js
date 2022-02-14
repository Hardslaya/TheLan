import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function FirstSection() {
  return (
    <div className="firstsection">
      <h2>Complete Gaming Solution</h2>

      <div className="cards">
        <Card1 />

        <Card2 />

        <Card3 />
      </div>

      <a href="#" className="button">View all the Products</a>
    </div>
  );
}

export default FirstSection;