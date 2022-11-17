import CS from "../styles/News.module.scss";
import { forwardRef } from "react";
import { server } from "../config";
import { useRouter } from "next/router";

export const Article = ({ nyhet, visibility }) => {
  const router = useRouter();
  const path = `/news/${nyhet.nId}`;
  const handleClick = () => {
    router.push(`/news/${nyhet.nId}`);
  };

  return (
    <>
      <li
        key={nyhet.nId}
        className={`${CS.carousel__slide} ${CS.fade}`}
        data-visible={`${visibility}`}
      >
        {nyhet.hasOwnProperty("title") ? <h3>{nyhet.title}</h3> : ""}
        <p className="">{nyhet.body}</p>
        <a href={path} onClick={handleClick}>
          Läs mer här!
        </a>
      </li>
    </>
  );
};
