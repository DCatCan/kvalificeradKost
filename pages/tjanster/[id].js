import LS from "../../styles/Layout.module.scss";
import prisma from "../../data";
const service = ({ tjanst, punkter }) => {
  return (
    <div className={`${LS["container_xl"]} ${LS["flex-column"]} ${LS["id"]}`}>
      <div className={LS.id_inner}>
        <h1>{tjanst.serviceTitle}</h1>
        <br />
        <p>{tjanst.description}</p>
        <br />
        {punkter.length > 0 ? (
          <ul>
            {punkter.map((elem) => (
              <li className={LS.points} key={elem.id}>
                {elem.listComent}
              </li>
            ))}
          </ul>
        ) : null}
        <br />
        <p>{tjanst.price}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const id = parseInt(context.params.id);
  const tjanst = await prisma.services.findFirst({
    take: 1,
    where: {
      sId: id,
    },
  });
  const punkter = await prisma.listpoints.findMany({
    where: {
      serviceId: id,
    },
  });
  console.log(punkter);

  return {
    props: { tjanst, punkter },
  };
};

export default service;
