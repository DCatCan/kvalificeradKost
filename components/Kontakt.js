import LS from "./../styles/Layout.module.scss";
import KS from "./../styles/Kontakt.module.scss";
import { useState } from "react";
import { server } from "../config";
import { useRouter } from "next/router";

export const Kontakt = ({ tjanster, onSubmitChange }) => {
  const router = useRouter();

  const [details, setDetails] = useState({
    fId: "",
    fullName: "",
    email: "",
    telephone: "",
    serviceId: 1,
    notified: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={` ${KS["kontakt"]}  `}>
      <div className={` ${KS["kontakt_info"]}`}>
        <h2>Kontaktinformation</h2>
        <h4>Telefon</h4>
        <p>0760550515</p>
        <h4>E-post</h4>
        <p>Linus.jacobsson@kvalificeradKost.com</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            onSubmitChange({ details }),
            e.target.reset(),
            router.push("/");
        }}
        className={`${LS["flex-column"]} ${KS["form"]}`}
      >
        <input
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleChange}
          placeholder="För- och Efternamn"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Epost"
          required
        />
        <input
          type="tel"
          name="telephone"
          id="telephone"
          required
          onChange={handleChange}
          placeholder="Telefon"
        />
        <select id="serviceId" name="serviceId" onChange={handleChange}>
          {tjanster.map((elem) => (
            <option value={elem.sId} key={elem.sId} id={elem.sId}>
              {elem.serviceTitle}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
