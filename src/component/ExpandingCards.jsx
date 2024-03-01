import * as React from "react";
import { useState } from "react";
import "../App.css";

// interface Card {
//   id: number;
//   url: string;
//   title: string;
// }

// interface Props {
//   data: Array<Card>;
// }

const data = {};

const ExpandingCards = (data) => {
  const [activeId, setActiveId] = useState(1);
  const onClick = (id) => setActiveId(id);
  return (
    <div className="container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          style={{ backgroundImage: `url(${card.url})` }}
        >
          {/* <h3>{card.title}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
