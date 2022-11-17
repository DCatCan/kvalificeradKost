import LS from "../styles/Layout.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export const Footercomp = () => {
  const router = useRouter();
  const path = `/leg`;

  const legClick = () => {
    router.push(`${path}`);
  };
  return (
    <div className={LS.footer}>
      <div className={`${LS["col-lg-4"]} ${LS["socialaMedier"]}`}>
        <h4>Följ mig på:</h4>
        <a href="https://www.instagram.com/linusfoods/">
          <Image
            src="/instagram.svg"
            width={30}
            height={30}
            alt="instagramLogo"
          ></Image>
        </a>
      </div>
      <div className={`${LS["col-lg-4"]} ${LS["socialaMedier"]}`}>
        <h4>Länkar:</h4>
        <a href={path} onClick={legClick}>
          Dietist Leg.
        </a>
      </div>

      <div className={`${LS["col-sm-4"]}`}></div>
    </div>
  );
};
