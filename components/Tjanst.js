import CS from "../styles/Service.module.scss";
import LS from "../styles/Layout.module.scss";
import { useRouter } from "next/router";

export const Tjanst = ({ tjanst, extraPunkter }) => {
  const router = useRouter();
  const path = `/tjanster/${tjanst.sId}`;
  const handleClick = () => {
    router.push(`${path}`);
  };
  return (
    <>
      <a
        href={path}
        onClick={handleClick}
        className={`${LS["col-md-4"]} ${CS["link"]}`}
      >
        <li key={tjanst.sId} className={`${LS["col-md-4"]} ${CS.card}`}>
          <h4 className={CS.title}>{tjanst.serviceTitle}</h4>
          <p className={CS.description}>{tjanst.description}</p>
          {extraPunkter.length > 0 ? (
            <ul>
              {extraPunkter.map((elem) => (
                <li className={CS.points} key={elem.id}>
                  {elem.listComent}
                </li>
              ))}
            </ul>
          ) : null}
          <p className={CS.price}>{tjanst.price} kr</p>
        </li>
      </a>
    </>
  );
};
