/** @format */

// Import images from your assets folder
import BananaImage from "./assets/Banana🍌.png";
import BlackberryImage from "./assets/Blackberry.png";
import BlueberryImage from "./assets/Blueberry.png";
import CherryImage from "./assets/Cherries🍒.png";
import AppleImage from "./assets/redApple.png";
import GrapeImage from "./assets/Grapes🍇.png";
import PearImage from "./assets/Pear🍐.png";
import StrawberryImage from "./assets/Strawberry🍓.png";
import MangoImage from "./assets/mango.png";
import PeachImage from "./assets/Peach.png";
import PineappleImage from "./assets/Pineapple.png";
import FigImage from "./assets/Fig.png";
import PomegranateImage from "./assets/Pomegranate.png";
import OrangeImage from "./assets/Orange.png";
import BeetrootImage from "./assets/Beetroot .png";
import PotatoImage from "./assets/potatoes.png";
import TomatoImage from "./assets/tomatoes.png";
import OnionImage from "./assets/onion.png";
import GreenBroccoliImage from "./assets/GreenBroccoli.png";
import BroccoliImage from "./assets/brockoly.png";
import CarrotImage from "./assets/Carrot.png";
import CabbageImage from "./assets/cabbage.png";
import ChickenImage from "./assets/checken.png";
import BeefImage from "./assets/beef.png";
import ChickenThighImage from "./assets/Chicken-meat-Buffalo.png";
import CroissantImage from "./assets/croissant.png";
import PanAuChocolatImage from "./assets/PanAuChocolat.png";
import CookiesImage from "./assets/cookies.png";
import WaffelsImage from "./assets/waffels.png";
import CupCakeImage from "./assets/cupcake.png";
import DonatesImage from "./assets/donates.png";
import EggsImage from "./assets/Eggs.png";
import CheeseImage from "./assets/cheese.png";
import CreamMilkImage from "./assets/CreamMilk.png";
import MilkImage from "./assets/milk.png";
import ButterImage from "./assets/butter.png";

export const categories = [
  {
    category: "Fruits",
    items: [
      {
        name: "Banana",
        img: BananaImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Blackberry",
        img: BlackberryImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Blueberry",
        img: BlueberryImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Cherry",
        img: CherryImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Apple",
        img: AppleImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Grape",
        img: GrapeImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Pear",
        img: PearImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Strawberry",
        img: StrawberryImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Mango",
        img: MangoImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Peach",
        img: PeachImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Pineapple",
        img: PineappleImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Fig",
        img: FigImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Pomegranate",
        img: PomegranateImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Orange",
        img: OrangeImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Vegetables",
    items: [
      {
        name: "Beetroot",
        img: BeetrootImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Potato",
        img: PotatoImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Tomato",
        img: TomatoImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Onion",
        img: OnionImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Green Broccoli",
        img: GreenBroccoliImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Broccoli",
        img: BroccoliImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Carrot",
        img: CarrotImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Cabbage",
        img: CabbageImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Meats",
    items: [
      {
        name: "Chiken",
        img: ChickenImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Beef",
        img: BeefImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Chicken Thigh",
        img: ChickenThighImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Bakery",
    items: [
      {
        name: "Croissant",
        img: CroissantImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Pan au Chocolat",
        img: PanAuChocolatImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Cookies",
        img: CookiesImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Waffels",
        img: WaffelsImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Cup Cake",
        img: CupCakeImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Donates",
        img: DonatesImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Eggs",
    items: [
      {
        name: "Eggs",
        img: EggsImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Dairy",
    items: [
      {
        name: "Cheese",
        img: CheeseImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "CreamMilk",
        img: CreamMilkImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Milk",
        img: MilkImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
      {
        name: "Butter",
        img: ButterImage,
        price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      },
    ],
  },
  {
    category: "Deals & Sales",
    items: [],
  },
];
