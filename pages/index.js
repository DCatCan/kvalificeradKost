import LS from "./../styles/Layout.module.scss";
import { server } from "../config";
import { Kontakt } from "../components/Kontakt";
import { Tjanster } from "../components/Tjanster";
import prisma from "../data";
import { useEffect, useState } from "react";
import { Info1, Info2 } from "../components/Information";

export const getServerSideProps = async () => {
  // const nyheter = await prisma.News.findMany();
  const tjanster = await prisma.Services.findMany();
  const ep = await prisma.listpoints.findMany();

  return {
    props: { tjanster, ep },
  };
};
async function handleSubmit(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const req = await fetch(`${server}/api/servicereq`, options);
}

export default function Home({ nyheter, tjanster, ep }) {
  const [anyNews, setAnyNews] = useState(false);
  // useEffect(() => {
  //   if (nyheter.length > 0) {
  //     setAnyNews(true);
  //   } else {
  //     setAnyNews(false);
  //   }
  // }, [nyheter]);

  return (
    <>
      <div className={`${LS["container_xl"]} `} id={LS["section1"]}>
        <div className={`${LS["container_m"]} ${LS["flex-column"]}`}>
          <h3>Kvalificerad Kost</h3>
          <h4>Linus Jacobsson, Leg. Dietist </h4>
        </div>
      </div>
      <br />
      <Info1 />
      <br />

      <Tjanster tjanster={tjanster} extraP={ep} />
      <br />
      <Kontakt tjanster={tjanster} onSubmitChange={handleSubmit} />
      <br />
    </>
  );
}

