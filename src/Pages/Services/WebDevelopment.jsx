import React from "react";
import Service from "../../component/Service/Service";
import webimg from "../../assets/service/web.png";
import webimg2 from "../../assets/service/web2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"


const data = {
  title: "Web Development",
  hero_img_url: webimg,
  overview:
    "Websites are files stored on servers, which are computers that host (fancy term for “store files for”) websites. These servers are connected to a giant network called the Internet. Web development refers to the overall process of creating websites or web applications, including the project’s design, layout, coding, content creation, and functionality. It involves using a combination of programming languages, tools, and frameworks to bring a website or web application to life.",
  why_img_url: webimg2,
  why_title: "How we can help you?",
  why_content:
    "Our company bluesoltech helps you with website development, you can add your skills, credentials, experience, expertise and more in a single place. These details help you earn the trust and confidence of your visitors and serve as a reference point for customers interested in your business, making it easy for you to produce leads. If you are a developer or you want to become one, there are plenty available web development positions in leading development job search websites.",
  plans: [
    {
      plan_title: "Startup Plan",
      plan_price: "$1860",
      plan_price_inr: "₹3999",
      plan_headline: "",
      key: [
        "100% Responsive Design",
        "No. of Pages - Up to 5",
        "Custom Layout Design",
        "Google Location Map",
        "Language: Wordpress",
        "High Perfomance Design",
        "Google Analytics",
        "Integrated Contact Forms W/Captcha",
        "Social Media Buttons",
        "SEO, Wordpress Plugin",
        "E-Mail With Domain (Chargeable)",
        "Delivery 07 Days*",
      ],
    },
    {
      plan_title: "Basic",
      plan_price: "$235",
      plan_price_inr: "₹11999",
      plan_headline: "",
      key: [
        "100% Responsive Design",
        "No. of Pages - Up to 8",
        "Custom Layout Design",
        "Google Location Map",
        "Language :- HTML, CSS, JS (In Any Lang.)",
        "High Perfomance Design",
        "Google Analytics",
        "Integrated Contact Forms",
        "Social Media Buttons",
        "SEO Plugin",
        "SEO Semantic HTML code",
        "API Integration",
        "Click to Call/E-Mail",
        "Main Banner Management",
        "Event Calender (If Applicable)",
        "Event Booking",
        "XML Sitemap",
        "E-mail With Domain (Chargeable)",
        "Delivery 10 Days*",
      ],
    },
    {
      plan_title: "Standard",
      plan_price: "$355",
      plan_price_inr: "₹29,999",
      plan_headline: "",
      key: [
        "100% Responsive Design",
        "No. of Pages - Up to 15",
        "Custom Layout Design",
        "Google Location Map",
        "Language: HTML, CSS, JS,React, Angular, Java, Django, Python, Node, PHP, Laravel, Ad.Wordpress and Next.js.. Database:- MongoDB, SQL...(In Any Lang.) ",
        "High Perfomance Design",
        "Google Analytics",
        "Integrated Contact Forms",
        "Social Media Buttons",
        "SEO Plugin",
        "SEO Semantic HTML Code",
        "Click to Call / E-Mail",
        "Main Banner Management",
        "Event Calender (If Applicable)",
        "Event Booking (If Applicable)",
        "Free SSL Certification",
        "API Integration",
        "Brochure Management (If Applicable)",
        "E-Mail With Domain (Chargeable)",
        "URL Submission in SE's",
        "Website Training up to 2 Hours",
        "Delivery 15 Days*",
      ],
    },
    {
      plan_title: "Advance",
      plan_price: "$535",
      plan_price_inr: "₹49,999",
      plan_headline: "",
      key: [
        "100% Responsive Design",
        "No. of Pages - Up to 25",
        "Custom Layout Design",
        "Google Location Map",
        "Language: HTML, CSS, JS, React, Angular, Java, Django, Python, Node, PHP, Laravel, Ad.Wordpress and Next.js.. Database:- MongoDB, SQL...(In Any Lang.) ",
        "High Perfomance Design",
        "Google Analytics",
        "Integrated Contact Forms",
        "Social Media Buttons",
        "SEO Plugin",
        "SEO Semantic HTML Code",
        "On Page SEO",
        "Click to Call / E-Mail",
        "Main Banner Management",
        "Event Calender (If Applicable)",
        "Event Booking (If Applicable)",
        "Free SSL Certification",
        "API Integration",
        "Brochure Management (If Applicable)",
        "E-Mail With Domain (Chargeable)",
        "URL Submission in SE's",
        "Mobile-Friendly Design,",
        "Photo Gallary",
        "Video Gallary",
        "Social Media Integration",
        "Payment Gateway Integration",
        "Full Functional Website",
        "Website Creation Management",
        "Realtime Data Analytics",
        "Website Training up to 2 Hours",
        "Delivery 25 Days*",
      ],
    },
    {
      plan_title: "E-COMMERCE WEBSITE",
      plan_price: "₹14,999",
      plan_price_inr: "₹14,999",
      plan_headline: "",
      key: [
        "Beautiful Estore Design",
        "100 Products",
        "1 GB Storage",
        "5 GB Band width",
        "Payment Gateway",
        "Social Marketing",
        "Mobile Friendly Design",
        "Email Outlook",
        "Facebook Social Commerce",
        "Shopify, Wix, Big Commerce, Magento woo Commerce, Prestashop....",
      ],
    },
  ],
};

function WebDevelopment() {
  return <>
    {/* <TopTitle /> */}
    <Service data={data} pdf={apppdf} />
  </>
}

export default WebDevelopment;
