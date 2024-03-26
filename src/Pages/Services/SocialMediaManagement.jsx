import React from "react";
import Service from "../../component/Service/Service";
import webimg from "../../assets/service/web.png";
import webimg2 from "../../assets/service/web2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"


const data = {
  title: "Social Media Marketing",
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
      plan_price: "₹17,999",
      plan_price_inr: "₹17,999",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: [
        <p className="text-white">FACEBOOK</p>,
        "Facebook Business Manager Set Up",
        "Custom Audience Creation",
        "Customization Of Ad Placements",
        "Facebook Analytics Report Creation",
        "Ad Campaign Monitoring",
        "Traffic Monitoring",
        "Monthly Report",
        <p className="text-white uppercase">Instagram</p>,
        "Audience Research",
        "Instagram Ads Creative Creation & Design",
        "Instagram Ads Monitoring And Management"
      ],
    },
    {
      plan_title: "Standard",
      plan_price: "$535",
      plan_price_inr: "₹34,999",
      plan_headline: "Suitable for Enterprises",
      key: [
        <p className="text-white">FACEBOOK</p>,
        "Facebook Business Manager Set Up",
        "Custom Audience Creation",
        "Customization Of Ad Placements",
        "Facebook Analytics Report Creation",
        "Ad Campaign Monitoring",
        "Traffic Monitoring",
        "Monthly Report",
        <p className="text-white uppercase">Instagram</p>,
        "Audience Research",
        "Instagram Ads Creative Creation & Design",
        "Instagram Ads Monitoring And Management",
        <p className="text-white uppercase">YOUTUBE</p>,
        "Youtube Ad Account Set Up",
        "Skippable In-Stream Ads",
        "Non-Skippable In-Stream Ads",
        "Bumper Ads",
        "Detailed Audience Creation",
        "Custom Audience Creation",
        "A/B Testing Of Targeting",
        "Remarketing Video Ads",
        "Monthly Report",
      ],
    },
    {
      plan_title: "Advance",
      plan_price: "₹64,999",
      plan_price_inr: "₹64,999",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: [
        <p className="text-white">FACEBOOK</p>,
        "Facebook Business Manager Set Up",
        "Pixel Installation",
        "Custom Conversion Creation Remarketing",
        "Custom Audience Creation",
        "Instant Experience Ads Creation",
        "Customization Of Ad Placements",
        "A/B Testing Of Ad Set, Creative & Placement",
        "Creation Of Automated Rules",
        "Facebook Analytics Report Creation",
        "Ad Campaign Monitoring",
        "Catalogue Creation",
        "Dynamic Ads Creation",
        "Traffic Monitoring",
        "Creation Of Automated Rules",
        "Monthly Report",
        <p className="text-white uppercase">TWITTER</p>,
        "Tweet Engagement Ads",
        "Video Or GIF View Ads",
        "Awareness Ads",
        "Website Conversion Ads",
        "In-stream Video View Ads",
        "Follower Ads",
        "App Install Ads",
        "App Re-engagement",
        "Audience Creation",
        "Monthly Report",
        <p className="text-white uppercase">INSTAGRAM</p>,
        "Audience Research",
        "Instagram Ads Creative Creation & Design",
        "Instagram Ads Monitoring And Management",
        <p className="text-white uppercase">LINKEDIN</p>,
        "Campaign Manager Account Set Up",
        "Linkedin Insight Tag Installation",
        "Creation Of Custom Conversion",
        "Ads Monitoring",
        "Monthly Report",
        <p className="text-white uppercase">YOUTUBE</p>,
        "Youtube Ad Account Set Up",
        "Skippable In-Stream Ads",
        "Non-Skippable In-Stream Ads",
        "Bumper Ads",
        "Discovery Ads",
        "Youtube Video Sequence Ads",
        "Detailed Audience Creation",
        "Custom Audience Creation",
        "A/B Testing Of Targeting",
        "Remarketing Video Ads",
        "Video Ads With Promotion Of Your Products",
        "Monthly Report",
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
