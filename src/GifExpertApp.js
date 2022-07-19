import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp () {
  const [categories, setCategories] = useState(['One Piece']);

  // const handleAdd = () => {
    // setCategories('HunterXHunter', ...categories);
    // setCategories(categories => [...categories, 'HunterXHunter']);
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr/>
      <ol>
        { categories.map((category) => (
            <GifGrid key={category} category={category} />
          )
        )}
      </ol>
    </>
  )
}
