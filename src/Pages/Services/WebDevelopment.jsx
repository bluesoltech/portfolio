import React from "react";
import Service from "../../component/Service/Service";
import webimg from "../../assets/service/web.png";
import webimg2 from "../../assets/service/web2.png";

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
      plan_title: "Basic",
      plan_price: "$235",
      plan_price_inr: "₹30000",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: [
        "Quailty website (WordPress, Joomia, Drupal)",
        "100% Responsive",
        "Mobile-Friendly Design",
        "Custom Design",
        "Photo Gallery",
        "Video Galery",
        "Google Map",
        "Contact Phone Email Support",
        "Social Media Integration",
        "Photography Support",
        "Delivery Date 7 Days.",
      ],
    },
    {
      plan_title: "Advanced",
      plan_price: "$355",
      plan_price_inr: "₹50000",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: [
        "Fully Functional Website",
        "Online Store(Ecommerce)",
        "Mobile-Friendly Design",
        "Full functional Website",
        "PHP, Javascript, WordPress",
        "100% Responsive",
        "Custom Design",
        "Google Map",
        "Woocommerce Integration",
        "Contact Phone Email Support",
        "Social Media Integration",
        "Photography Support",
        "Payment Gateway Integration",
        "Delivery Date 7 Days",
      ],
    },
    {
      plan_title: "Premium ",
      plan_price: "$535",
      plan_price_inr: "₹80000",
      plan_headline: "Suitable for Enterprises",
      key: [
        "Fully Functional Website",
        "Online Store Ecommerce",
        "Mobile-Friendly Design",
        "Full functional Webelte",
        "PHP, Javascript, WordPress",
        "100% Responsive",
        "Custom Design",
        "Photo Gallery",
        "Video Gallery",
        "Google Map",
        "Woocommerce Integration",
        "Contact Phone Email+Support",
        "Social Media Integration",
        "Photography Support",
        "Payment Gateway Integration",
        "Delivery Date 7 Days",
      ],
    },
  ],
};

function WebDevelopment() {
  return <Service data={data} />;
}

export default WebDevelopment;
