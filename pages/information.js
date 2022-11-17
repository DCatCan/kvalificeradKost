import LS from "../styles/Layout.module.scss";
import IS from "../styles/Info.module.scss";
import Image from "next/image";

export default function information() {
  return (
    <div className={`${LS["container_xl"]}`}>
      <div className={`${LS["row"]} ${LS["info_page"]}`}>
        <div className={`${LS["info_page_imagediv"]}`}>
          <Image
            src="/linus.png"
            width={600}
            height={900}
            quality={100}
            alt="Power"
          ></Image>
        </div>
        <div className={LS.info_page_textdiv}>
          <h2> Vad är en dietist?</h2>

          <p>
            En dietist har undergått en treårig, <b>tvärvetenskaplig </b>
            universitetsutbildning på dietistprogrammet. Utbildningen omfattar
            huvudsakligen biokemi, fysiologi, näringslära, yrkesspecifik
            psykologi, nutrition och klinisk nutrition., , Endast tre
            universitet i Sverige erbjuder utbildningen, nämligen Göteborg-,
            Uppsala-, och Umeå Universitet. Efter dessa tre år på utbildningen
            har man rätt till en dietist legitimation, dvs en skyddad
            yrkestitel. Denna legitimation utfärdas av socialstyrelsen.
            Dietister kan jobba i ett brett spann av nutritions relaterade
            yrken. Slutenvård, primärvård, friskvård, livsmedelsutveckling och
            forskning är exempel på sysselsättningar dietister lämpas att anta.
          </p>
        </div>
        {/* <div className={LS.info_page_textdiv}>
          <h2>Varför är en legitimation viktigt?</h2>
          <p>
            Dietister har studerat evidensbaserad näringslära och en
            samtalsmetodik som effektiviserar förmedlandet av denna lära. Dessa
            kunskaper används inom frisk- primär- och slutenvården för att
            effektivisera åtgärder med en ökad följsamhet hos våra
            patienter/klienter. Vikten av följsamhet till livsstilsförändringar
            är essentiell för kliniska resultat av god kvalité
          </p>
        </div> */}
      </div>

      <div className={`${LS["row"]} ${LS["info_page"]}`}>
        <div className={LS.info_page_textdiv}>
          <h2>Principer och metoder... </h2>
          <p>
            <b> - Evidens och beprövad erfarenhet </b>
            är grunden till all nutritionsbehandling. Aldrig någonsin kommer min
            praktik grunda sig på företeelser som inte är bekräftade av
            vetenskap. Detta för att garantera patienter nutritionsbehandling av
            högsta klass som har effekt och är hållbara på sikt.
          </p>
          <p>
            <b> - Personcentrering</b>
            handlar om att se mottagaren för behandling som en individ med
            rättigheter, ett intellekt och en god förståelse för sig själv.
            Tillsammans blir vi två, där en av oss är expert på
            nutritionsbehandling och den andra är expert på den som ska
            behandlas. Kombinationen av våra expertiser tillåter den bästa
            möjliga behandlingen för <u>just dig</u> .
          </p>
        </div>
        <div className={`${LS["info_page_imagediv"]}`}>
          <Image
            src="/linusVan.png"
            width={600}
            height={900}
            quality={100}
            alt="merPower"
          ></Image>
        </div>
        <div className={LS.info_page_textdiv}>
          <h2>... som jag följer</h2>
          <p>
            <b> - Kognitiv beteendeterapi (KBT) </b>
            är en psykologisk modell vars syfte är att kartlägga varför en
            agerar, känner, tänker och beter som den gör. Detta gör modellen
            genom att identifiera ovanstående ting i ”femfaktormodellen”.
            Arbetssättet har visat sig vara kliniskt effektivt på att hjälpa
            till i livsstilsförändringar. Eftersom en kosthållning oftast
            förknippas med en livsstil, är det av god relevans att arbeta med
            KBT som dietist.
          </p>
          <p>
            <b> - Motiverande samtal (MI) </b>
            är mitt val av samtalsmetodik som jag baserar min professionella
            konversation på. Vetenskapen lyder att vårdgivare som använder sig
            av motiverande samtal har större framgång i sin behandling. Min
            erfarenhet bekräftar detta. Således använder jag alltid MI med mina
            klienter.
          </p>
        </div>
      </div>
    </div>
  );
}
