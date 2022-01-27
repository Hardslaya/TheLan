import SectionMeals from "./Meals/SectionMeals.js";
import SectionDrinks from "./Drinks/SectionDrinks.js";
import SectionTakeAway from "./TakeAway/SectionTakeAway.js";

const mealsList = [
    {
        name: "Sopa primavera",
        url: "sopaPrimavera.jpg",
        price: "8,99€",
    },
    {
        name: "Secreto a la naranja",
        url: "secretoNaranja.jpg",
        price: "12,99€",
    },
    {
        name: "Pote gallego",
        url: "poteGallego.jpg",
        price: "10,99€",
    },
    {
        name: "Ensalada de aguacate",
        url: "ensaladaAguacate.jpg",
        price: "11,99€",
    },
    {
        name: "Buñuelo de chocolate",
        url: "buñueloChocolate.jpg",
        price: "6,99€",
    },
    {
        name: "Macarones",
        url: "macaron.jpg",
        price: "4,99€",
    }
];

const starters = [
    {
        name: "Ensalada de aguacate",
        url: "ensaladaAguacate.jpg",
        price: "11,99€",
    },
    {
        name: "Sopa primavera",
        url: "sopaPrimavera.jpg",
        price: "8,99€",
    }
];

const mainCourse = [
    {
        name: "Secreto a la naranja",
        url: "secretoNaranja.jpg",
        price: "12,99€",
    },
    {
        name: "Pote gallego",
        url: "poteGallego.jpg",
        price: "10,99€",
    } 
];

const dessert = [
    {
        name: "Macarones",
        url: "macaron.jpg",
        price: "4,99€",
    }
];

const beverages = [
    {
        name: "Cerveza",
        price: "5,99€"
    }
]

const menu = [starters, mainCourse, dessert, beverages];

const Sections = () => {
    return (
        <main className="sections">
            <SectionMeals meals={mealsList}/>
            <SectionDrinks />
            <SectionTakeAway menu={menu}/>
        </main>
    );
}

export default Sections;