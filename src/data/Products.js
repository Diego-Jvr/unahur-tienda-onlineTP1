import er from "../assets/images/Elden-Ring-Header.jpg"
import cyberpunk from "../assets/images/cyberpunk2077header.jpg"
import rdr2 from "../assets/images/rdr2header.jpg"
import mc from "../assets/images/minecraftheader.jpg"
import tw3 from "../assets/images/tw3header.jpg"
import hades from "../assets/images/hadesheader.jpg"
import hk from "../assets/images/hkheader.jpg"
import sv from "../assets/images/svheader.jpg"
import gow from "../assets/images/gowheader.jpg"
import p2 from "../assets/images/portalheader.jpg"
import terraria from "../assets/images/terrariaheader.jpg"
import celeste from "../assets/images/celesteheader.jpg"

const products = [  
  {
    id: 1,
    name: "Elden Ring",
    category: "RPG",
    price: 60000,
    image: er,
    description: "Explora las Tierras Intermedias en un enorme mundo abierto.",
    stock: 8,
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    category: "Acción",
    price: 50000,
    image: cyberpunk,
    description: "Aventura futurista en Night City.",
    stock: 5,
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    category: "Aventura",
    price: 55000,
    image: rdr2,
    description: "Vive la historia del lejano oeste.",
    stock: 10,
  },
  {
    id: 4,
    name: "Minecraft",
    category: "Sandbox",
    price: 30000,
    image: mc,
    description: "Construye y sobrevive en un mundo infinito.",
    stock: 20,
  },
  {
    id: 5,
    name: "The Witcher 3",
    category: "RPG",
    price: 35000,
    image: tw3,
    description: "Conviértete en Geralt de Rivia.",
    stock: 6,
  },
  {
    id: 6,
    name: "Hades",
    category: "Roguelike",
    price: 25000,
    image: hades,
    description: "Escapa del inframundo.",
    stock: 7,
  },
  {
    id: 7,
    name: "Hollow Knight",
    category: "Metroidvania",
    price: 20000,
    image: hk,
    description: "Explora Hallownest.",
    stock: 0,
  },
  {
    id: 8,
    name: "Stardew Valley",
    category: "Simulación",
    price: 18000,
    image: sv,
    description: "Administra tu propia granja.",
    stock: 15,
  },
  {
    id: 9,
    name: "God of War",
    category: "Acción",
    price: 50000,
    image: gow,
    description: "Kratos y Atreus enfrentan a los dioses.",
    stock: 4,
  },
  {
    id: 10,
    name: "Portal 2",
    category: "Puzzle",
    price: 15000,
    image: p2,
    description: "Resuelve desafíos con portales.",
    stock: 12,
  },
  {
    id: 11,
    name: "Terraria",
    category: "Sandbox",
    price: 22000,
    image: terraria,
    description: "Explora, construye y combate.",
    stock: 9,
  },
  {
    id: 12,
    name: "Celeste",
    category: "Plataformas",
    price: 17000,
    image: celeste,
    description: "Escala la montaña Celeste.",
    stock: 3,
  },
];

export default products;