import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import img from "../../assets/img/soccer-players-celebrating-victory-with-trophee_720.jpg";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "How to add image?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 2,
    title: "How to be a Developer?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 3,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 4,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 5,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 6,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 7,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 8,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
  {
    id: 9,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },

  {
    id: 10,
    title: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab odit minus praesentium officiis, facere beatae aliquam repellat, culpa alias itaque quod eos nulla dolorum consectetur a hic quo saepe expedita impedit totam? Qui voluptatem perferendis quisquam quaerat nisi iure! Ratione quos eligendi, doloremque quas mollitia neque fugit culpa laudantium!",
    name: "Kunal",
    position: "Developer",
    date: "24 May 2023",
    tag: "Technology",
    img_url: { img },
  },
];

function Team() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"]);
  // console.log(cards);
  return (
    <div
      ref={targetref}
      className="relative h-[300vh] bg-[#0F0E0E] flex justify-center w-full"
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                name={card.name}
                position={card.position}
                date={card.date}
                tag={card.tag}
                img_url={card.img_url.img}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
