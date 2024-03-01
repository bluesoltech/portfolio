import React from "react";
import { useParams } from "react-router-dom";
import content from "../assets/blog/content.js";

function Blog() {
  const { id } = useParams();
  const blogPost = content.find((post) => post.id === parseInt(id));

  return (
    <div className="w-full bg-[#0F0E0E] min-h-screen flex justify-center">
      <div className="md:w-[65%] p-4">
        <div className="text-center text-3xl text-white mb-4">Title</div>
        <img src="" className="w-full h-[200px] mb-3"></img>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
        <p className="text-gray-500 mb-4 text-justify">
          Para 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          laborum, consectetur ea eligendi rem in deleniti. Aliquid veniam a
          fuga blanditiis consequatur magnam quisquam modi quibusdam consectetur
          voluptas voluptatum fugiat vel nam cumque fugit nulla minus officia
          impedit, aliquam iste dicta libero? Provident dolorem numquam
          accusamus deleniti autem tenetur. Enim, magnam nemo delectus repellat
          omnis laudantium minus consequuntur labore mollitia quibusdam,
          nesciunt modi! Porro perferendis dolore ea. Magnam laborum maxime
          ratione totam dolorum aperiam ipsa quidem cumque in, rerum esse,
          deserunt tenetur ex sequi harum minus! Iure, mollitia qui. Veritatis,
          eveniet et voluptatibus repudiandae nisi molestias saepe suscipit
          temporibus, corporis unde, amet rem id? Natus, aliquam iure enim hic
          sed, numquam suscipit neque illum provident beatae non nesciunt, magni
          voluptatibus?
        </p>
      </div>
    </div>
  );
}

export default Blog;
