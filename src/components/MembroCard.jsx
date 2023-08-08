import React from "react";
import { useNavigate } from "react-router-dom";

export default function MembroCard(props) {
  const navigate = useNavigate();

  const handleClick = (evt) => {
    navigate(`/membros/${props.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group cursor-pointer hover:text-yellow-800 transition hover:scale-105 hover:translate-y-[-0.25rem] hover:shadow-lg hover:shadow-yellow-800 hover:bg-yellow-100 bg-slate-600 text-zinc-50 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[14%] 2xl:w-[11%] p-4 px-4 rounded-lg flex flex-col items-center gap-4 shadow-md ${props.shadowColor} border ${props.borderColor} hover:border-yellow-500`}
    >
      <img
        className={`shadow-md ${props.shadowColor} group-hover:shadow-yellow-800 transition rounded-full object-contain border ${props.borderColor} group-hover:border-yellow-600 aspect-square object-cover object-top`}
        src={props.img}
        alt={props.nome}
        width={1280}
      />
      <span className="font-medium text-lg sm:text-[16px] md:text-[16px] lg:text-[17px] xl:text-[16px] 2xl:text-[15px] text-center">
        {props.nome.split(" ").splice(0, 1)}{" "}
        {props.nome.split(" ").splice(-1, 1)}
      </span>
    </div>
  );
}
