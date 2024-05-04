"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";
import Image from "next/image";

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
}
const getRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const recipes = await getRecipes();
  const cuisines: Array<string> = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Spanish",
    "Indian",
    "Japanese",
    "Mexican",
    "Russian",
  ];

  return (
    <>
      <div className=" px-10 py-10 flex flex-wrap  bg-orange-50 hover:scale-105 ease-in duration-200 gap-2 fancyGradient scroll-hidden">
        {cuisines.map((cuisine, index) => (
          <Badge
            key={`${cuisine}-${index}`}
            variant={"outline"}
            className=" border border-orange-800 rounded-full px-2 py-1 my-2 hover:cursor-pointer bg-orange-100 hover:scale-110 ease-in duration-200"
          >
            {cuisine}
          </Badge>
        ))}
      </div>
      <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {
          // <Skeleton className="w-[100px] h-[20px] rounded-full" />
          recipes.map((recipe, index) => (
            <Card
              key={`${recipe.name}-${index}`}
              className=" max-w-68 md:max-w-none mx-auto bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient "
            >
              <CardHeader>
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={300}
                  height={300}
                  className="flex bg-cover rounded-md shadow-xl"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="px-4 flex fle uppercase lg:text-3xl py-2 relative font-bold line-clamp-2">
                  {recipe.name}
                </CardTitle>
              </CardContent>
              <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                <div className="flex gap-5">
                  <p className="text-lg px-3">Serves</p>
                  <p className="text-gray-800">{recipe.servings}</p>
                </div>
                <div className="flex gap-5">
                  <p className="text-lg px-3">Prep Time</p>
                  <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                </div>
                <div className="flex gap-5">
                  <p className="text-lg px-3">Cook Time</p>
                  <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                </div>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </>
  );
}
