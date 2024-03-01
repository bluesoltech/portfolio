import React from "react";
import Service from "../../component/Service/Service";
import graphicimg from "../../assets/service/graphic.png";
import graphicimg2 from "../../assets/service/graphic2.png";

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
      plan_price: "$50",
      plan_price_inr: "₹4000",
      plan_headline: "Suitable for Freelancer",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 2 Modern Logo Concept (NO MASCOT)",
        "Included 1 Dedicated Designer",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Delivering High-Resolution Logo",
        "Design in Languages: EN, DE, AR, ES & others",
        "Unlimited Revisions",
        "Print & Digital Format: AI, JPG, PNG, PDF",
        "Delivery Time 24-48 Hours",
        "Full Copyright Transfer",
        "No Hidden Charges",
        "Money Back Guarantee",
        "Client Satisfaction Guaranteed",
        "1 Year File Backup",
        "24/7 Customer Support",
        "After Service Support",
      ],
    },
    {
      plan_title: "Advanced",
      plan_price: "$200",
      plan_price_inr: "₹15000",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 6 Modern Logo Concepts to Choose From",
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
        "Design in Languages: EN, DE, AR, ES & others",
        "Unlimited Revisions",
        "Print & Digital Format: AI, EPS, SVG, PDF, JPG, PNG (Recommended Format)",
        "Delivery Time 24-48 Hours",
        "Full Copyright Transfer",
        "Money Back Guarantee",
        "1 Year File Backup",
        "24/7 Customer Support",
        "After Service Support",
      ],
    },
    {
      plan_title: "Executive",
      plan_price: "$500",
      plan_price_inr: "₹40000",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 10 Modern Logo Concepts to Choose From",
        "Included 5 Dedicated Designer",
        "Design any Type of Logo",
        "Advanced Branding Research",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Logo Usage Guidelines",
        "Delivering High-Resolution Logo",
        "Include Social Media Kit Design",
        "Design in Languages: EN, DE, AR, ES & others",
        "Unlimited Revisions",
        "Print & Digital Format: AI, EPS, SVG, PDF, JPG, PNG (Recommended Format)",
        "Delivery Time 48-72 Hours",
        "Full Copyright Transfer",
        "No Hidden Charges",
        "Money Back Guarantee",
        "Client Satisfaction Guaranteed",
        "1 Year File Backup",
        "24/7 Customer Support",
        "After Service Support",
      ],
    },
    {
      plan_title: "Leading",
      plan_price: "$1000",
      plan_price_inr: "₹80000",
      plan_headline: "Suitable for Enterprises",
      key: [
        "Research -> Concept -> Review -> Finalize",
        "Get 20 Modern Logo Concepts to Choose From",
        "Included 10 Dedicated Designer",
        "Design any Type of Logo",
        "Advanced Branding Research",
        "Logo Transparency",
        "Free 3D Mockup",
        "Professional Fonts and Color Codes",
        "Scalable to Any Size Logo (Website, App, Favicon)",
        "Horizontal & Vertical Versions",
        "Logo Usage Guidelines",
        "Included Animated Logo",
        "Delivering High-Resolution Logo",
        "Included Social Media Kit Design",
        "Included 2 Stationery Design",
        "Design in Languages: EN, DE, AR, ES & others",
        "Unlimited Revisions",
        "Print & Digital Format: AI, EPS, SVG, PDF, JPG, PNG (Recommended Format)",
        "Delivery Time 3-5 Days",
        "Full Copyright Transfer",
        "No Hidden Charges",
        "Money Back Guarantee",
        "Client Satisfaction Guaranteed",
        "1 Year File Backup",
        "24/7 Customer Support",
        "After Service Support",
      ],
    },
  ],
};

function GraphicDesign() {
  return <Service data={data} />;
}

export default GraphicDesign;
