import Info from "./Info.js";
import Image from "./Image.js";

const SectionMeals = ({ menu }) => {
    return (
        <section className="sections sections__meals">
                <Info />
                <Image menu={menu}/>
        </section>
    );
}

export default SectionMeals;