import LS from "../styles/Layout.module.scss";
import IS from "../styles/Info.module.scss";
import Image from "next/image";

export const Info1 = () => {
  return (
    <div className={`${LS["container_xl"]} ${IS["info"]}`}>
      <div className={`${IS["info_imagediv"]}`}>
        <Image
          src="/linusLyfter.jpeg"
          width={395}
          height={702}
          quality={100}
          alt="power"
        ></Image>
        <div className={IS.test}></div>
        <div className={IS.test2}></div>
        <div className={IS.test3}></div>
      </div>

      <div className={IS.info_textdiv}>
        <h2>Vem är jag?</h2>
        <p>
          Mitt namn är Linus Jacobsson och jag har en stor passion för
          näringslära, fysisk aktivitet och dess kliniska betydelse för
          människans hälsa.
        </p>
        <p>
          Mitt intresse för mat har alltid varit stort. Jag började laga all mat
          i hemmet sen 16 års ålder då jag fick lära mig en hel del kulinarisk
          kunskap som jag bär med mig än idag.
        </p>
        <p>
          Snart därpå väckte intresset för näringslära, livsmedelskemi och dess
          samverkan med GOD MAT. Jag insåg att en välsmakande kost kan vara
          näringsriktig för att hjälpa en med sina mål.
        </p>
        <p>
          Idag jobbar jag heltid som primärvårdsdietist för Region Stockholm,
          med ambitioner att nå ut till flera individer via friskvärden.
        </p>
      </div>
    </div>
  );
};

export const Info2 = () => {
  return (
    <div className={`${LS["container_xl"]} ${IS["info"]}`}>
      <div className={IS.info_textdiv}>
        <h2>Principer och metoder jag följer</h2>
        <p>
          <b> - Evidens och beprövad erfarenhet</b>
          är grunden till all nutritionsbehandling. Aldrig någonsin kommer min
          praktik grunda sig på företeelser som inte är bekräftade av vetenskap.
          Detta för att garantera patienter nutritionsbehandling av högsta klass
          som har effekt och är hållbara på sikt.
        </p>
        <p>
          <b> - Personcentrering</b>
          handlar om att se mottagaren för behandling som en individ med
          rättigheter, ett intellekt och en god förståelse för sig själv.
          Tillsammans blir vi två, där en av oss är expert på
          nutritionsbehandling och den andra är expert på den som ska behandlas.
          Kombinationen av våra expertiser tillåter den bästa möjliga
          behandlingen för <u>just dig</u> .
        </p>
        <p>
          <b> - Kognitiv beteendeterapi (KBT) </b>
          är en psykologisk modell vars syfte är att kartlägga varför en agerar,
          känner, tänker och beter som den gör. Detta gör modellen genom att
          identifiera ovanstående ting i ”femfaktormodellen”. Arbetssättet har
          visat sig vara kliniskt effektivt på att hjälpa till i
          livsstilsförändringar. Eftersom en kosthållning oftast förknippas med
          en livsstil, är det av god relevans att arbeta med KBT som dietist.
        </p>
        <p>
          <b> - Motiverande samtal (MI)</b>
          är mitt val av samtalsmetodik som jag baserar min professionella
          konversation på. Vetenskapen lyder att vårdgivare som använder sig av
          motiverande samtal har större framgång i sin behandling., Min
          erfarenhet bekräftar detta. Således använder jag alltid MI med mina
          klienter.
        </p>
      </div>
      <div className={`${IS["info_imagediv"]}`}>
        <Image
          src="/linusVan.png"
          width={600}
          height={900}
          quality={100}
          alt="{frendlyPower}"
        ></Image>
        <div className={IS.test}></div>
        <div className={IS.test2}></div>
        <div className={IS.test3}></div>
      </div>
    </div>
  );
};
