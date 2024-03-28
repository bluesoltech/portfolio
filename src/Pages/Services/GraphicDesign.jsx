import React from "react";
import Service from "../../component/Service/Service";
import graphicimg from "../../assets/service/graphic.png";
import graphicimg2 from "../../assets/service/graphic2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"


const data = {
  title: "Graphic Design",
  hero_img_url: graphicimg,
  overview:
    "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs to optimize the user experience.",
  why_img_url: graphicimg2,
  why_title: "How we can help you?",
  why_content: (
    <div className="text-sm flex flex-col gap-5">
      <h1 className="text-md">
        Whether they’re working on print magazine ads, product labels, or
        webpage layouts, graphic designers typically use software programs to
        craft compelling visual assets. Using carefully chosen colors, images,
        typography, and other elements, graphic designers can help a company
        establish a cohesive brand identity and communicate that identity to its
        customers.
      </h1>
      <ul className="list-decimal list-inside">
        <p className="mb-4">
          Whether they’re working on print magazine ads, product labels, or
          webpage layouts, graphic designers typically use software programs to
          craft compelling visual assets. Using carefully chosen colors, images,
          typography, and other elements, graphic designers can help a company
          establish a cohesive brand identity and communicate that identity to
          its customers.
          <br /> 8 types of graphic design-
        </p>
        <li>Branding design</li>
        <li>UX design</li>
        <li>UI design</li>
        <li>Environmental design</li>
        <li>Information design</li>
        <li>Marketing and/or advertising design</li>
        <li>Packaging design</li>
        <li>Print design</li>
      </ul>
    </div>
  ),
  plans: [
    {
      plan_title: "Basic",
      plan_price: "$2560",
      plan_price_inr: "₹5999",
      plan_headline: "Suitable for Freelancer",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 2 Modern Logo Concept (NO MASCOT)",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Delivering High-Resolution Logo",
        "Design in All Languages: (Illustrater, Photoshop, Figma)",
        "Unlimited Revisions",
        "Print & Digital Format: (AI, JPG, PNG, PDF)",
        "Full Copyright Transfer",
        "15 Posts (Festive & Promo)",
        "Client Satisfaction",
        "1 Year File Backup",
        "24x7 Customer Support",
        "After Service Support",
      ],
    },
    {
      plan_title: "Standard",
      plan_price: "$4160",
      plan_price_inr: "₹9999",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 6 Modern Logo Concepts to Choose From",
        "Design any Type of Logo",
        "Advanced Branding Research",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Logo Usage Guidelines",
        "Delivering High-Resolution Logo",
        "Unlimited Revisions",
        "Full Copyright Transfer",
        "Design in All Languages: (Illustrater, Photoshop, Figma)",
        "Print & Digital in All Formats: (AI, EPS, SVG, PDF, JPG, PNG...)",
        "20 Posts + 1 Reel Per Week",
        "Company Brochure [2 Pages]",
        "Envelope / Letterhead / Visiting card / ID card",
        "Company Brochure [2 pages]",
        "Client Satisfaction",
        "1 Year File Backup",
        "24x7 Customer Support",
        "After Service Support",
      ],
    },
    {
      plan_title: "Advanced",
      plan_price: "$10000",
      plan_price_inr: "₹19,999",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 10 Modern Logo Concepts to Choose From",
        "Included 3 Dedicated Designer",
        "Design any Type of Logo",
        "Advanced Branding Research",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Logo Usage Guidelines",
        "Delivering High-Resolution Logo",
        "Design in All Languages: (Illustrater, Photoshop, Figma)",
        "Unlimited Revisions",
        "Print & Digital In All Formats: (AI, EPS, SVG, PDF, JPG, PNG...)",
        "25 Posts + 2 Reel Per Week",
        "Company & Product Introduction (1 Video each)",
        "Envelope / Letterhead / Visiting card / ID Card",
        "Company Brochure [4 Pages]",
        "5 Stationery Design",
        "Client Satisfaction",
        "1 Year File Backup",
        "24x7 Customer Support",
        "After Service Support",
      ],
    },
  ],
};

function GraphicDesign() {
  return<>
    {/* <TopTitle /> */}
    <Service data={data} pdf={apppdf}/>
  </>

}

export default GraphicDesign;
