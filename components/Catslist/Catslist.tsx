import { db } from "@/db";
import { FC } from "react";
import { Gender } from "@prisma/client";
import demoCat from "@/public/demo-cat.jpg";
import Image from "next/image";

export default async function CatsList() {
  const catsResult = await db.cat.findMany({
    where: { genderGroup: "MALE" },
  });
  const renderedCats = catsResult.map((cat) => {
    return (
      <div
        key={cat.id}
        className="flex max-w-[45%] bg-light-blue p-4 rounded-xl gap-4 overflow-hidden"
      >
        <Image alt="franek" src={demoCat} width={120}></Image>
        <div className="flex flex-col  ">
          <h3>{cat.name}</h3>
          <p>{cat.description.substring(0, 100)}...</p>
        </div>
      </div>
    );
  });
  return (
    <div className=" padding-y max-container flex justify-between flex-wrap gap-4">
      {renderedCats}
    </div>
  );
}
