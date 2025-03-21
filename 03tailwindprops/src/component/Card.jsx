import React from "react";

function Card({
  userName = "DM",
  post = "Software Engineer, India",
  img = "image",
  myArray,
  data,
}) {
  console.log(userName);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto rounded-xl m-6"
          src={img}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              cum doloremque iure, autem sint magni exercitationem cupiditate
              soluta magnam minima!
            </p>
          </blockquote>
        </div>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{userName}</div>
          <div className="text-slate-700 dark:text-slate-500">{post}</div>
          <div className="text-slate-950 dark:text-slate-800">
            {myArray.age}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
