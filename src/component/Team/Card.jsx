import React from "react";
function Card({ id, title, content, tag, img_url, name, position, date }) {
  return (
    <div className="relative flex flex-col justify-between card w-[300px] h-[500px] text-white border-white border-[1px] p-2 rounded">
      <div>
        <h1 className="w-full text-center text-2xl mb-3">{title}</h1>
        <p className="w-full text-justify text-sm text-gray-500">
          {content}{" "}
          <a href={`/blog/${id}`} className="underline hover:text-white">
            read more
          </a>
        </p>
      </div>
      <div className="w-full h-[15%] border-[1px] border-white rounded p-2 flex justify-between">
        <div className="flex">
          <img
            src={img_url}
            className="w-[50px] h-[50px] rounded-[50%] mr-4"
          ></img>
          <div className="">
            <div className="text-white">{name}</div>
            <div className="text-gray-500 text-sm flex">
              {position} - {date}
            </div>
          </div>
        </div>
        <div className="absolute right-0 mr-4 text-sm bg-white text-black w-fit h-fit rounded-lg px-3 hover:bg-gray-300">
          {tag}
        </div>
      </div>
    </div>
  );
}

export default Card;
