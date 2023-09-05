import { createSlice } from "@reduxjs/toolkit";

/* Fotos dos Membros */
// import felipeVDLImg from "../imgs/membros/felipe-vdl.jpg";
import ismaelImg from "../imgs/membros/ismael.jpg";
import lucianoImg from "../imgs/membros/luciano.jpeg";
import victorImg from "../imgs/membros/victor.jpeg";
import marceloImg from "../imgs/membros/marcelo.jpeg";
import marcoBragaImg from "../imgs/membros/marco-braga.jpg";
import marcosMurdockImg from "../imgs/membros/marcos-murdock.jpg";
import eddyImg from "../imgs/membros/eddy.jpeg";
// import jorgeMedeirosImg from "../imgs/membros/jorge-medeiros.jpg";

const initialState = [
  {
    id: "tecnologia",
    membros: [
      {
        id: "felipe-vidal",
        nome: "Felipe Emanoel de Carvalho Vidal",
        img: "https://github.com/felipe-vdl.png",
        biografia: "",
        github: "https://github.com/felipe-vdl",
        linkedin:
          "https://www.linkedin.com/in/felipe-vidal-326063242/" /* twitter: 'https://twitter.com/', youtube: 'https://youtube.com/', twitch: 'https://twitch.tv/', instagram: 'https://instagram.com/', facebook: 'https://facebook.com/', reddit: 'https://reddit.com/' */,
      },
      { id: "victor-mussel", nome: "Victor Mussel", img: victorImg },
      { id: "ismael-lima", nome: "Ismael Lima", img: ismaelImg },
      { id: "edwin-lima", nome: "Edwin Lima", img: eddyImg },
      { id: "luciano-junior", nome: "Luciano Júnior", img: lucianoImg },
      { id: "marcelo-miranda", nome: "Marcelo Miranda", img: marceloImg },
      {
        id: "marco-braga",
        nome: "Marco Braga",
        img: marcoBragaImg,
      },
      { id: "marcos-murdock", nome: "Marcos Murdock", img: marcosMurdockImg },
      { id: "jorge-medeiros", nome: "Jorge Medeiros", img: "https://github.com/medeirosjorge.png", github: "https://github.com/medeirosjorge" },
    ],
    titulo: "",
    shadowColor: "shadow-indigo-800",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-500",
    textColor: "text-indigo-100",
  },
];

const equipesSlice = createSlice({
  name: "equipes",
  initialState,
  reducers: {},
});

export default equipesSlice.reducer;
