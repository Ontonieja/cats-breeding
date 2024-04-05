import { db } from "@/db";
import { FC } from "react";
import { Gender } from "@prisma/client";
import demoCat from "@/public/demo-cat.jpg";
import Image from "next/image";
import Button from "../Base/Button/Button";

export default async function CatsList() {
  const catsResult = await db.cat.findMany({
    where: { genderGroup: "MALE" },
  });
  const renderedCats = catsResult.map((cat) => {
    return (
      <div
        key={cat.id}
        className=" xl:w-[45%] flex max-sm:flex-col bg-light-blue p-6 rounded-xl w-full sm:gap-8  sm:h-[223px]   "
      >
        <Image
          alt="franek"
          src={demoCat}
          className=" max-sm:self-center w-[200px] rounded-xl "
        ></Image>

        <div className="flex flex-col ">
          <h3 className="text-3xl font-madimi max-sm:self-center max-sm:mt-2">
            {cat.name}
          </h3>
          <p>{cat.description.substring(0, 100)}...</p>
          <div className="mt-8 max-sm:self-center">
            <Button type="button" buttonStyle="whiteBlue">
              Zobacz
            </Button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className=" padding-y max-container flex lg:justify-between flex-wrap w-full gap-8 ">
      {renderedCats}
    </div>
  );
}
