import { FC } from "react";
import { useNavigate } from "react-router";
import { CardData } from "../../core/types";

interface CardProps {
  data: CardData;
}

const Card: FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  const { flag, country, population, region, capital } = data;

  const handleClick = () => {
    navigate(`/${country.toLowerCase()}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <picture className="max-h-44 w-full">
        <img
          src={flag}
          alt={`${country} flag`}
          className="object-cover h-[150px] w-full bg-white rounded-t-md shadow-md dark:bg-dark-blue"
        />
      </picture>
      <div className="max-h-44 h-full w-full rounded-b-md bg-white dark:bg-dark-blue dark:text-white p-6 shadow-md">
        <span className="text-lg font-bold">{country}</span>
        <div className="flex flex-col pt-4">
          <span>
            <strong className="font-semibold">Population: </strong>
            {population.toLocaleString("en-US")}
          </span>
          <span>
            <strong className="font-semibold">Region: </strong>
            {region}
          </span>
          <span>
            <strong className="font-semibold">Capital: </strong>
            {capital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
