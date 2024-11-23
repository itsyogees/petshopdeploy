"use client";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";  
import { MdStarRate } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";
const PetDetails = () => {
  const [count, setCount] = useState(1); // Initial value is set to 1

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const reviews = [
    {
      id: 1,
      userName: "Elisa Joe",
      date: "Nov 9, 2023",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut labore Lorem",
      profileImage: "/image/reviewProfile.png",
    },
    {
      id: 2,
      userName: "John Doe",
      date: "Oct 15, 2023",
      rating: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut labore Lorem",
      profileImage: "/image/reviewProfile.png",
    },
    {
      id: 3,
      userName: "Hanna",
      date: "Oct 15, 2023",
      rating: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut labore Lorem",
      profileImage: "/image/reviewProfile.png",
    },
  ];
  return (
    <div className="petDetails">
      <div className="petDetailsContainer">
        <div className="petDetailsContent">
          <div className="detailsSection">
            <div className="detailsSectionContent">
              <div className="detailsImgSection">
                <img src="/image/details-1.png" alt="" />
                <img src="/image/details-2.png" alt="" />
                <img src="/image/details-3.png" alt="" />
                <img src="/image/details-5.png" alt="" />
              </div>
              <div className="detailsImgSection2">
                <img src="/image/home-1.png" alt="" />
              </div>
            </div>
            <div className="addCard">
              <div className="addCardContent">
                <div className="addPlusBtn">
                  <button onClick={decrement}>
                    <FaMinus />
                  </button>
                  <span>{count}</span>
                  <button onClick={increment}>
                    <FaPlus />
                  </button>
                </div>
                <div className="addWishList">ADD WISHLIST</div>
              </div>
              <div className="ContactBtn">
                <Link href='/pages/PetDetails/Contact'>CONTACT</Link>
              </div>
              <div className="description">
                <div className="descriptionHead">
                  <h2>Description</h2>
                </div>
                <div className="descriptionContent">
                  <p>
                    Blanditiis dolorem voluptatem consequuntur explicabo
                    accusamus fugiat maxime. Eum vel fugit voluptatibus ex
                    dolorum dolorem cupiditate. Et sed minus repudiandae. Cum
                    aliquid aut voluptatem possimus ipsa.
                  </p>
                  <div className="petFeatureList">
                    <ul>
                      <li>
                        Longum tempus warantum: Product warantum pro 2 annis.
                      </li>
                      <li>
                        Impact resistentiam: Designa productum ut impacta ab
                        collisione sustineant.
                      </li>
                      <li>
                        Notitia securitatis: Prospicere salutem users' notitia
                        et personalis notitia
                      </li>
                      <li>
                        Dedicavit ministros: Provide professionales et dedicatos
                        ministros officia
                      </li>
                      <li>
                        Impact resistentiam: Designa productum ut impacta ab
                        collisione sustineant.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsSection1">
            <div className="detailsSectionHead">
              <div className="detailsHead">
                <h2>Dog Baby</h2>
                <div className="rating">
                  <span>4.0</span>{" "}
                  {[...Array(4)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}{" "}
                  <span>20 Reviews</span>
                </div>
              </div>
              <div className="detailsHead2">
                <CiShare2 />
              </div>
            </div>

            <div className="detailsSectionContent">
              <h2>$60.00 USD</h2>
              <p>$80.00 USD</p>
            </div>

            <hr />
            <div className="petContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.{" "}
              </p>
            </div>
            <div className="petContent">
              <h2>Age: 2 Month</h2> <h2>Color: Cream</h2>
            </div>

            <div className="petFeature">
              <div className="petFeatureHead">
                <h2>Outstanding Features</h2>
              </div>
              <div className="petFeatureContent">
                <p>
                  Blanditiis dolorem voluptatem consequuntur explicabo accusamus
                  fugiat maxime. Eum vel fugit voluptatibus ex dolorum dolorem
                  cupiditate. Et sed minus repudiandae. Cum aliquid aut
                  voluptatem possimus ipsa.
                </p>
              </div>
              <div className="petFeatureList">
                <ul>
                  <li>Longum tempus warantum: Product warantum pro 2 annis.</li>
                  <li>
                    Impact resistentiam: Designa productum ut impacta ab
                    collisione sustineant.
                  </li>
                  <li>
                    Notitia securitatis: Prospicere salutem users' notitia et
                    personalis notitia
                  </li>
                  <li>
                    Dedicavit ministros: Provide professionales et dedicatos
                    ministros officia
                  </li>
                  <li>
                    Impact resistentiam: Designa productum ut impacta ab
                    collisione sustineant.
                  </li>
                </ul>
              </div>
            </div>
            <div className="petFeature">
              <div className="petFeatureHead">
                <h2>About Dog Baby</h2>
              </div>
              <div className="petFeatureContent">
                <p>
                  Blanditiis dolorem voluptatem consequuntur explicabo accusamus
                  fugiat maxime. Eum vel fugit voluptatibus ex dolorum dolorem
                  cupiditate. Et sed minus repudiandae. Cum aliquid aut
                  voluptatem possimus ipsa.
                </p>
              </div>
              <div className="petFeatureList">
                <ul>
                  <li>Longum tempus warantum: Product warantum pro 2 annis.</li>
                  <li>
                    Impact resistentiam: Designa productum ut impacta ab
                    collisione sustineant.
                  </li>
                  <li>
                    Notitia securitatis: Prospicere salutem users' notitia et
                    personalis notitia
                  </li>
                  <li>
                    Dedicavit ministros: Provide professionales et dedicatos
                    ministros officia
                  </li>
                  <li>
                    Impact resistentiam: Designa productum ut impacta ab
                    collisione sustineant.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="reviewContainer">
          <h3>Reviews</h3>
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div className="reviewContent">
                <div className="reviewProfile">
                  <img src={review.profileImage} width={55} height={90} />
                </div>

                <div className="reviewDetails">
                  <div className="userName">
                    <h4>{review.userName}</h4>
                    <p>{review.date}</p>
                  </div>

                  <div className="reviewRating">
                    <div className="reviewStars">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <MdStarRate key={starIndex} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviewData">
                <p>{review.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="alsoLike">
          <div className="alsoLikeHead">
            <h2>You Might Also Like</h2>
          </div>
          <div className="alsoLikeContent">
          <div className="tabCards">
                 
                <div className="tabCard">
                  <img src="/image/tap-1.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-2.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-3.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-4.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
