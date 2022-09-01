import gohan from "./productosIMG/Gohan.JPG";
import empanadas from "./productosIMG/Empanadas.JPG";
import piezas from "./productosIMG/Piezas.JPG";

const productos = [
    {
        id: 1,
        img: [ gohan ],
        name: "Gohan Surima",
        description: "fjsdfjsdmfsdf",
        stock: 5,

    },
    {
        id: 2,
        img: [ empanadas ],
        name: "Empanadas Chinas",
        description: "fjsdfjsdmfsdf",
        stock: 5,

    },
    {
        id: 3,
        img: [ piezas ],
        name: "Piezas",
        description: "fjsdfjsdmfsdf",
        stock: 5,
        
    }
];

//Promesa
export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
        reject(err => console.log(err));
    })
}, 3000);

