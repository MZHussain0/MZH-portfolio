import instafud from "../../assets/brave_1tCI7NE0Jp.png";
import pfolio from "../../assets/brave_OmzlGKK1Ag.png";
import todo from "../../assets/brave_XYMiVwxqof.png";

export const projects = [
  {
    title: "InstaFood App",
    description:
      "A simple yet interactive Food app with updating cart functionality along the adding and removing item from the cart along with total price update.",
    image: instafud,
    tags: "React, React Hooks",
    source: "https://github.com/MZHussain0/food-order-app",
    visit: "https://instafud.netlify.app/",
    id: 0,
  },
  {
    title: "HyperTodo",
    description:
      "A simple yet sleek designed todo app. It has featuring of editing task ,deleting task, completed task along with dark/ligth theme. It also has a feature to dynamically change the accent colors of the app based on color slider",
    image: todo,
    tags: "React, tailwindcss, scss",
    source: "https://github.com/MZHussain0/HyperTodo",
    visit: "https://hypedtodo.netlify.app",
    id: 1,
  },
  {
    title: "Portfolio",
    description:
      "Beautifully designed portfolio app with lots of animations and neon color accents. ",
    image: pfolio,
    tags: "React, vanilla css",
    source: "https://github.com/MZHussain0/MZH-portfolio",
    visit: "https://zakirhussain.netlify.app/",
    id: 2,
  },
];
