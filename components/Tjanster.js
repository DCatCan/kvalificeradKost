import LS from "../styles/Layout.module.scss";
import { Tjanst } from "./Tjanst";

export const Tjanster = ({ tjanster, extraP }) => {
  return (
    <div className={LS.container_xl}>
      <ul className={`${LS.s_section} ${LS.flex}`}>
        <div className={LS.rubrik}>
          <h2>Mina tjänster</h2>
        </div>

        {tjanster.map((elem) => (
          <Tjanst
            tjanst={elem}
            key={elem.sId}
            extraPunkter={extraP.filter((el) => {
              return el.serviceId === elem.sId;
            })}
          />
        ))}
      </ul>
    </div>
  );
};
