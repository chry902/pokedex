"use client";
import styles from "./styles.css";

import Image from "next/image";
import useStore from "@/app/store/useStore";
//---------------------------------------------------------------------
//png typs
import bug from "@/../public/pokeTypes/bug.svg";
import dark from "@/../public/pokeTypes/dark.svg";
import dragon from "@/../public/pokeTypes/dragon.svg";
import electric from "@/../public/pokeTypes/electric.svg";
import fairy from "@/../public/pokeTypes/fairy.svg";
import fighting from "@/../public/pokeTypes/fighting.svg";
import fire from "@/../public/pokeTypes/fire.svg";
import flying from "@/../public/pokeTypes/flying.svg";
import ghost from "@/../public/pokeTypes/ghost.svg";
import grass from "@/../public/pokeTypes/grass.svg";
import ground from "@/../public/pokeTypes/ground.svg";
import ice from "@/../public/pokeTypes/ice.svg";
import normal from "@/../public/pokeTypes/normal.svg";
import poison from "@/../public/pokeTypes/poison.svg";
import psychic from "@/../public/pokeTypes/psychic.svg";
import rock from "@/../public/pokeTypes/rock.svg";
import steel from "@/../public/pokeTypes/steel.svg";
import water from "@/../public/pokeTypes/water.svg";
//-------------------------------------------------------------------
//imgTyps
import imgBug from "@/../public/pokeBackGroundImageTypes/bug.jpeg";
import imgDark from "@/../public/pokeBackGroundImageTypes/dark.jpeg";
import imgDragon from "@/../public/pokeBackGroundImageTypes/dragon.jpeg";
import imgElectric from "@/../public/pokeBackGroundImageTypes/electric.jpeg";
import imgFairy from "@/../public/pokeBackGroundImageTypes/fairy.jpeg";
import imgFighting from "@/../public/pokeBackGroundImageTypes/fighting.jpeg";
import imgFire from "@/../public/pokeBackGroundImageTypes/fire.jpeg";
import imgFlying from "@/../public/pokeBackGroundImageTypes/dragon.jpeg";
import imgGhost from "@/../public/pokeBackGroundImageTypes/ghost.jpeg";
import imgGrass from "@/../public/pokeBackGroundImageTypes/grass.jpeg";
import imgGround from "@/../public/pokeBackGroundImageTypes/ground.jpeg";
import imgIce from "@/../public/pokeBackGroundImageTypes/ice.jpeg";
import imgNormal from "@/../public/pokeBackGroundImageTypes/normal.jpeg";
import imgPoison from "@/../public/pokeBackGroundImageTypes/poison.jpeg";
import imgPsychic from "@/../public/pokeBackGroundImageTypes/psychic.jpeg";
import imgRock from "@/../public/pokeBackGroundImageTypes/rock.jpeg";
import imgSteel from "@/../public/pokeBackGroundImageTypes/steel.jpeg";
import imgWater from "@/../public/pokeBackGroundImageTypes/water.jpeg";

//------------------------------------------------------------------
import pokDefault from "@/../public/default.png";

const FullPokemon = () => {
  const { pokemonData } = useStore();
  const baseName = pokemonData.name || "bulbasaur";
  const baseWeight = pokemonData.weight || "1";
  const baseAbilities = "ancora da imparare";
  const baseType = "speciale";
  const baseImage =
    pokemonData?.sprites?.other?.home.front_default ||
    pokemonData?.sprites?.front_default ||
    pokDefault;

  const typeColor = pokemonData.types || [];
  const firstType = typeColor.length > 0 ? typeColor[0] : null;
  const firstTypeClass =
    firstType && firstType.type ? firstType.type.name : "grass";

  const getTypeImage = (type) => {
    switch (type) {
      case "bug":
        return { img: bug, bgImg: imgBug };
      case "dark":
        return { img: dark, bgImg: imgDark };
      case "dragon":
        return { img: dragon, bgImg: imgDragon };
      case "electric":
        return { img: electric, bgImg: imgElectric };
      case "fairy":
        return { img: fairy, bgImg: imgFairy };
      case "fighting":
        return { img: fighting, bgImg: imgFighting };
      case "fire":
        return { img: fire, bgImg: imgFire };
      case "flying":
        return { img: flying, bgImg: imgFlying };
      case "ghost":
        return { img: ghost, bgImg: imgGhost };
      case "grass":
        return { img: grass, bgImg: imgGrass };
      case "ground":
        return { img: ground, bgImg: imgGround };
      case "ice":
        return { img: ice, bgImg: imgIce };
      case "normal":
        return { img: normal, bgImg: imgNormal };
      case "poison":
        return { img: poison, bgImg: imgPoison };
      case "psychic":
        return { img: psychic, bgImg: imgPsychic };
      case "rock":
        return { img: rock, bgImg: imgRock };
      case "steel":
        return { img: steel, bgImg: imgSteel };
      case "water":
        return { img: water, bgImg: imgWater };
      default:
        return null;
    }
  };
  //const { imgTypes, bgImg } = getTypeImage(type.type.name);
  console.log("firstTypeClass", firstTypeClass);

  return (
    <div className="card_container ">
      <div className="card_img_background">
        <Image
          src={getTypeImage(firstTypeClass).bgImg}
          alt={baseName || baseName}
          width="100%"
          height="100%"
        />
      </div>
      <div className="style_card">
        <div className="pokemon_image_Contaienr">
          <Image
            src={baseImage}
            alt={baseName}
            width={250}
            height={250}
            placeholder="empty"
            priority={true}
          />
        </div>
        <div className="w-full flex flex-col jjustify-evenly ">
          <h3 className="mb-3 ext-5xl">Nome: {baseName}</h3>
          <p className=""> Peso: {baseWeight}Kg</p>
          <div className="flex flex-row items-center m-1">
            <p>mosse:</p>
            {pokemonData?.abilities?.map((ability, i) => (
              <div
                className={`${
                  "background_" + firstTypeClass
                }  type-badge  rounded-full p-3 flex items-center m-1 text-withe`}
                key={i}
              >
                {ability.ability.name || baseAbilities}
              </div>
            ))}
          </div>
          <div className=" w-full flex  items-center `">
            <p>Types</p>
            {pokemonData?.types?.map((type, i) => (
              <div
                key={i}
                className={`${type.type.name} icon type-badge  rounded-full p-3 flex items-center m-2`}
              >
                <Image
                  src={getTypeImage(type.type.name).img}
                  alt={type.type.name || baseType}
                  width={30}
                  height={30}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FullPokemon;
