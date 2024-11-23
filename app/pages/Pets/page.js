"use client";
import React, { useState } from "react";
import DogsShop from "./Dogs/page";
import Link from "next/link";
import Birdspage from "./Birds/page";
import Aquariumpage from "./Aquarium/page";
import FarmAnimal from "./FarmAnimal/page";
function PetsPage() {
  const [activeCategory, setActiveCategory] = useState("dogs");

  const renderShopComponent = () => {
    switch (activeCategory) {
      case "dogs":
        return <DogsShop />;
      case "birds":
        return <Birdspage/> ;
      case "aquarium":
        return <Aquariumpage/> ;
      case "farm":
        return <FarmAnimal/> ;
      default:
        return <DogsShop /> ;
    }
  };
  return (
    <div className="petspage">
    <div className="petspageHeroSection">
      <div className="petspageContent">
        <h1 className="title">Our Pets</h1>
        <div className="categories">
          <div
            className="categoryContent"
            onClick={() => setActiveCategory("dogs")} // Set active category to 'dogs'
          >
            <div className="category">
              <img src="/image/pet-1.png" alt="Dogs & Cats" />
            </div>
            <h2 className="categoriesTitle">Dogs & Cats</h2>
          </div>
          <div
            className="categoryContent"
            onClick={() => setActiveCategory("birds")} // Set active category to 'birds'
          >
            <div className="category">
              <img src="/image/pet-2.png" alt="Birds" />
            </div>
            <h2 className="categoriesTitle">Birds</h2>
          </div>
          <div
            className="categoryContent"
            onClick={() => setActiveCategory("aquarium")} // Set active category to 'aquarium'
          >
            <div className="category">
              <img src="/image/pet-3.png" alt="Aquarium" />
            </div>
            <h2 className="categoriesTitle">Aquarium</h2>
          </div>
          <div
            className="categoryContent"
            onClick={() => setActiveCategory("farm")} // Set active category to 'farm'
          >
            <div className="category">
              <img src="/image/pet-4.png" alt="Farm Animals" />
            </div>
            <h2 className="categoriesTitle">Farm Animals</h2>
          </div>
        </div>
      </div>
    </div>
    {/* Render the selected shop component */}
    {renderShopComponent()}
  </div>
  );
}

export default PetsPage;
