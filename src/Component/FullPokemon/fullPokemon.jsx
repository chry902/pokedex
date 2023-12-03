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
  const baseHeight = 10 * pokemonData.height || 10;

  const baseAbilities = "ancora da imparare";
  const baseType = "speciale";
  const baseImage =
    pokemonData?.sprites?.other?.home.front_default ||
    pokemonData?.sprites?.front_default ||
    pokDefault;
  const experiece = pokemonData.base_experience || 500;
  const typeColor = pokemonData.types || [];
  const firstType = typeColor.length > 0 ? typeColor[0] : null;
  const firstTypeClass =
    firstType && firstType.type ? firstType.type.name : "grass";
  const hp =
    pokemonData && pokemonData.stats ? pokemonData.stats[0].base_stat : 300;
  const attack =
    pokemonData && pokemonData.stats ? pokemonData.stats[1].base_stat : 300;

  const defense =
    pokemonData && pokemonData.stats ? pokemonData.stats[2].base_stat : 300;
  const spAttack =
    pokemonData && pokemonData.stats ? pokemonData.stats[3].base_stat : 300;
  const spDefense =
    pokemonData && pokemonData.stats ? pokemonData.stats[4].base_stat : 300;
  const speed =
    pokemonData && pokemonData.stats ? pokemonData.stats[5].base_stat : 300;

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

  console.log(
    "hp",
    hp,
    "attac",
    attack,
    "defense",
    defense,
    "spAttac",
    spAttack,
    "spDefense",
    spDefense,
    "speed",
    speed
  );

  return (
    <div className="card_container ">
      <div className="card_img_background">
        <Image
          src={getTypeImage(firstTypeClass).bgImg}
          alt={baseName || baseName}
          width="100%"
          height="100%"
          priority={true}
        />
      </div>
      <div className="style_card_wrapper">
        <div className="style_card">
          <div className="pokemon_image_Contaienr flex justify-center">
            <Image
              src={baseImage}
              alt={baseName}
              width={200}
              height={200}
              placeholder="empty"
              priority={true}
            />
          </div>

          <div className="w-full flex flex-col justify-evenly ">
            <div className="w-full flex  flex-col justify-center items-center">
              <h3 className="mb-3 ext-5xl">{baseName.toUpperCase()}</h3>
              <progress
                className="progress w-56"
                value={experiece}
                max="500"
              ></progress>
            </div>
            <div className=" poke_data_wrapper">
              <p className="base_weigth flex justify-center text-xl">
                {baseWeight}Kg
              </p>
              <div className="divisor"></div>
              <div className="base_type gap-x-4  ">
                {pokemonData?.types?.map((type, i) => (
                  <div
                    className=" flex justify-center flex-col items-center "
                    key={i}
                  >
                    <div
                      className={`${type.type.name}  icon type-badge  rounded-full p-3 flex items-center `}
                    >
                      <Image
                        src={getTypeImage(type.type.name).img}
                        alt={type.type.name || baseType}
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                    <p className="type_under_image_type">
                      {type.type.name.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="divisor"></div>
              <p className="base_heigth flex justify-center text-xl">
                {baseHeight}cm
              </p>
            </div>
            <div className="flex flex-row items-center m-1 flex-wrap">
              <p>mosse:</p>
              {pokemonData?.abilities?.map((ability, i) => (
                <h2
                  className={`${
                    "background_" + firstTypeClass
                  }  type-badge text-lg rounded-2xl p-2 flex items-center m-1 text-white`}
                  key={i}
                >
                  {ability.ability.name || baseAbilities}
                </h2>
              ))}
            </div>
          </div>
          <div className="stats_wrapper">
            <div className="hp_wrapper">
              <p>Hp</p>
              <progress
                className="progress progress-error w-56"
                value={hp}
                max="250"
              ></progress>
            </div>
            <div className="attack_wrapper">
              <p>Attack</p>
              <progress
                className="progress progress-info w-56"
                value={attack}
                max="250"
              ></progress>
            </div>
            <div className="defense_wrapper">
              <p>Defesa</p>
              <progress
                className="progress progress-warning w-56"
                value={defense}
                max="250"
              ></progress>
            </div>
            <div className="spatk_wrapper">
              <p>Special-Attack</p>
              <progress
                className="progress progress-primary w-56"
                value={spAttack}
                max="250"
              ></progress>
            </div>
            <div className="spdef_wrapper">
              <p>Special-Defense</p>
              <progress
                className="progress progress-secondary w-56"
                value={spDefense}
                max="250"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FullPokemon;
