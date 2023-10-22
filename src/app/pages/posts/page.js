import Author from "@/components/_child/author";
import Related from "@/components/_child/related";
import Image from "next/image";
import React from "react";

const PostsPage = () => {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author />
      </div>
      <div className="post py-10">
        <h1 className="font-bold text-2xl text-center pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque
          dicta temporibus quasi impedit maiores vero reprehenderit, tempore
          aspernatur omnis?
        </h1>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro
          ipsum aliquam unde autem eligendi dolorem ad aliquid voluptatum, nam
          dolorum possimus, distinctio iusto maiores veniam nulla quam?
          Distinctio, quae.
        </p>
        <div className="py-10">
          <Image
            src={
              "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={900}
            height={600}
          />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            molestias vero vel architecto est labore officiis iusto? Qui quasi
            at ad asperiores itaque, distinctio a fuga repellat similique
            tempora voluptatem, natus necessitatibus impedit dolores libero
            expedita hic facilis voluptates recusandae deleniti cum laborum quam
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            molestias vero vel architecto est labore officiis iusto? Qui quasi
            at ad asperiores itaque, distinctio a fuga repellat similique
            tempora voluptatem, natus necessitatibus impedit dolores libero
            expedita hic facilis voluptates recusandae deleniti cum laborum quam
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            molestias vero vel architecto est labore officiis iusto? Qui quasi
            at ad asperiores itaque, distinctio a fuga repellat similique
            tempora voluptatem, natus necessitatibus impedit dolores libero
            expedita hic facilis voluptates recusandae deleniti cum laborum quam
          </p>
        </div>
      </div>
      <Related />
    </section>
  );
};

export default PostsPage;
