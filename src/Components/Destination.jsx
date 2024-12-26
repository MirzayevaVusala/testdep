import top1 from "../images/top1.jpg";
import top2 from "../images/top2.jpg";
import top3 from "../images/top3.jpg";
import top4 from "../images/top4.jpg";
import top5 from "../images/top5.jpg";
import top6 from "../images/top6.jpg";
import top7 from "../images/top7.jpg";
import top8 from "../images/top8.jpg";
import top9 from "../images/top9.jpg";
import top10 from "../images/top10.jpg";
import "./DestinationStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Destination = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [filteredDestinations, setFilteredDestinations] = useState([
    "Rome", "Florence", "Venice", "Cinque Terre" ,"Milan","Capri","Sardinia","Tuscany, Italy","Sicily","Amalfi Coast"
  ]);
  const navigate = useNavigate();

  const handleAddToFavorites = (destination) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(destination)) {
        const updatedFavorites = [...prevFavorites, destination];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };
  const handleSearchResults = (results) => {
    setFilteredDestinations(results); 
  };

  return (
    <main>
      <div className="destination">
        <h1>Popular Destinations</h1>
        
        <Search data={["Rome", "Florence", "Venice", "Cinque Terre","Milan","Capri","Sardinia","Tuscany, Italy","Sicily","Amalfi Coast"]} onSearchResults={handleSearchResults} />
      
        <div className="destination-item">
          <div className="des-text" >
         
            <h2>Rome</h2>
            <p>
              A standard stop on many European vacation itineraries, Rome is
              not to be missed. Italy's capital city is a globally renowned
              cultural and historical powerhouse, boasting everything from
              ancient ruins and tranquil parks to Michelin-starred restaurants.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Rome")}>
              Add to Favorites
            </button>
          </div>
        
          <div className="image">
            <img alt="topimg1" src={top1} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Florence</h2>
            <p>
              Situated in the scenic Tuscan valley, Florence woos travelers
              with old-world avenues leading to lovely piazzas big and small.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Florence")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg2" src={top2} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Venice</h2>
            <p>
              There are few destinations in the world that are quite like
              Venice. Its uniqueness can largely be attributed to the canals
              that run through this northern Italian city like roads.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Venice")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg3" src={top3} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Cinque Terre</h2>
            <p>
              Cinque Terre, located on Italy's northern Ligurian coast, is made
              up of five idyllic towns – Manarola, Monterosso, Vernazza, Corniglia,
              and Riomaggiore.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Cinque Terre")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg4" src={top4} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Amalfi Coast</h2>
            <p>
              The journey to the cliffside Amalfi Coast involves heart-stopping,
              hairpin turns on narrow roads, but travelers agree this is part of
              the fun. The region covers more than 30 miles of coastline and is
              home to 13 colorful seaside towns, each with its own story.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Amalfi Coast")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg5" src={top5} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Sicily</h2>
            <p>
              As the location of several ancient Greek legends, Sicily has an
              almost mythical quality. Once you visit for yourself, you'll see
              why so many writers were inspired by this island, which happens
              to be the largest in the Mediterranean.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Sicily")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg6" src={top6} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Tuscany, Italy</h2>
            <p>
              If you're looking for jaw-dropping scenery, Tuscany is really all
              it's cracked up to be. Italy's famous countryside offers travelers
              spectacular landscapes dotted with romantic villas and castles
              equipped with wineries and superb restaurants.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Tuscany")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg7" src={top7} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Sardinia</h2>
            <p>
              Sardinia provides the best of both worlds. Costa Smeralda is all
              about luxury, with its lush beaches and coves overlooking yacht-filled
              waters. And away from all of the glitz and glamour of Costa Smeralda,
              you'll find a more laid-back side of the island, including small
              medieval towns where Sardinians still practice sheepherding.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Sardinia")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg8" src={top8} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Capri</h2>
            <p>
              For centuries, this small island off the coast of southern Italy has
              attracted plenty of famous faces, from emperors to movie stars, due
              to its gorgeous scenery. Some of Capri's most amazing sights are
              best seen by boat, including the Faraglioni rock formations and
              the Blue Grotto.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Capri")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg9" src={top9} />
          </div>
        </div>

        <div className="destination-item">
          <div className="des-text">
            <h2>Milan</h2>
            <p>
              Italy's second-largest city is best known for its high fashion,
              playing host to Milan Fashion Week each year and home to iconic
              fashion houses including Giorgio Armani, Prada and Versace.
            </p>
            <button className="favorite-btn" onClick={() => handleAddToFavorites("Milan")}>
              Add to Favorites
            </button>
          </div>
          <div className="image">
            <img alt="topimg10" src={top10} />
          </div>
        </div>
         <button className="go-to-favorites" onClick={goToFavorites}>
          Go to Favorites
        </button>
      </div>
    </main>
  );
};

export default Destination;
