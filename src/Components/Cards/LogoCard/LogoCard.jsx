import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const LogoCard = () => {
  return (
    <ul className="flex justify-between">
      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/hundred.png"}
          alt={"logos"}
          height={56}
          width={176}
        />
        <Paragraph
          text={"Finsweet Users"}
          className={"Body-One text-DarkBlue "}
        />
      </li>

      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/lgone.png"}
          alt={"logos"}
          height={56}
          width={176}
        />
      </li>
      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/lgtwo.png"}
          alt={"logos"}
          height={32}
          width={162}
        />
      </li>
      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/lgthree.png"}
          alt={"logos"}
          height={32}
          width={162}
        />
      </li>
      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/lgfour.png"}
          alt={"logos"}
          height={32}
          width={162}
        />
      </li>
      <li className="flex flex-col">
        <IMG
          src={"/Images/PartnerLogos/lgfive.png"}
          alt={"logos"}
          height={32}
          width={162}
        />
      </li>
    </ul>
  );
};

export default LogoCard;
