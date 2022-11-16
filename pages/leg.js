import Image from "next/image";
import LS from "../styles/Layout.module.scss";

export default function leg() {
  return (
    <div className={LS.leg_container}>
      <Image
        src="/legitimation.png"
        layout={"fill"}
        objectFit={"contain"}
        quality={100}
      ></Image>
    </div>
  );
}
