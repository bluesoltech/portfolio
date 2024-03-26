import React from "react";
import Service from "../../component/Service/Service";
import cyber from "../../assets/service/cyber.png";
import cyber2 from "../../assets/service/cyber2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"


const data = {
  title: "Cyber Security",
  hero_img_url: cyber,
  overview:
    "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies. Who needs cyber security? It is a mistake to believe that you are of no interest to cyber attackers. Everyone who is connected to the Internet needs cyber security. This is because most cyber attacks are automated and aim to exploit common vulnerabilities rather than specific websites or organisations.",
  why_img_url: cyber2,
  why_title: "How we can help you?",
  why_content:
    "Cybersecurity is the protection to defend internet-connected devices and services from malicious attacks by hackers, spammers, and cybercriminals. The practice is used by our bluesoltech companies to protect against phishing schemes, ransomware attacks, identity theft, data breaches, and financial losses. Our company bluesoltech monitor systems to protect personal data (PII, PHI, financial details etc.), trade secrets, intellectual property and any sensitive government information.",
  plans: [
    {
      plan_title: "Small",
      plan_price: "$1000",
      plan_price_inr: "$1000",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: ["Upto 1 application or asset"],
    },
    {
      plan_title: "Medium",
      plan_price: "$2000",
      plan_price_inr: "$1000",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: ["Upto 3 application or assets"],
    },
    {
      plan_title: "Large",
      plan_price: "$5000",
      plan_price_inr: "$1000",
      plan_headline: "Suitable for Enterprises",
      key: ["Upto 5 application or asset"],
    },
  ],
};

function CyberSecurity() {
  return <>
    {/* <TopTitle /> */}
    <Service data={data} pdf={apppdf}/>
  </>
}

export default CyberSecurity;
