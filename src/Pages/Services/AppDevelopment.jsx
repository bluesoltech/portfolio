import React from "react";
import Service from "../../component/Service/Service";
import app from "../../assets/service/app.png";
import app2 from "../../assets/service/app2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"

const data = {
  title: "App Development",
  hero_img_url: app,
  overview:
    "Apps are developed for a certain platform, and the two most popular platforms today are iOS and Android. The iOS platform powers apps built for iPhone and iPad. To develop an app for iPhone or iPad, you need to use the Objective-C coding language and the Cocoa framework. You also need to use an IDE (integrated development environment) called Xcode. Note that Xcode only runs on the Mac, so you will need a Mac to make an iOS app. Android apps are developed with the Java coding language and the Android Software Development Kit, which runs on Mac, PC or Linux. You also need to use an IDE such as Eclipse There are other mobile platforms such as Windows Phone, but iOS and Android are definitely the most popular. Most training focuses on these platforms.",
  why_img_url: app2,
  why_title: "How we can help you?",
  why_content:
    "Our company bluesoltech Starting out on the app development journey can reveal an overwhelming number of development options. But with the right app development process to hand, it’s much easier. In this research piece, we’ll uncover some tried-and-tested approaches to the app development process that draw from academic papers, research, statistics, and examples. And we’ll include a review of the app development lifecycle and the app development steps while suggesting the best content to include in a PRD (Product Requirements Document) to use with developers",
  plans: [
    {
      plan_title: "Basic",
      plan_price: "$2560",
      plan_price_inr: "₹20000",
      plan_headline: "50% Upfront to get started with the work immediately",
      key: [
        "No. of Features Up to 7",
        "Wireframing",
        "Intuitive UI UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Ads Network Integration",
        "Firebase Integration",
        "In-App Purchase",
        "Publishing on App Store",
        "App Store Optimization",
        "Paid bug support ($350/m)",
        "Native iOS OR Android app",
        "Cross-Platform (Hybrid)",
        "Push Notifications",
        "Messaging API Integration (Live Chat)",
        "Regular App Updates",
        "Google Maps Integration",
        "Admin Panel",
        "Data Import/Export",
        "Web APIs and Online Database",
        "Picture Gallery/Product Display/ Showcase Services",
        "Product Categories/Sub Categories",
        "CrashAnalytics Integration",
        "Audio/Video Streaming",
        "Payment Gateways Integration",
        "Shopping Cart",
        "3rd Party APIs Integrations",
      ],
    },
    {
      plan_title: "Standard",
      plan_price: "$4160",
      plan_price_inr: "₹37000",
      plan_headline: "50% Upfront to get started with the work immediately",
      key: [
        "No. of Features Up to 10",
        "Wireframing",
        "Intuitive UI UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Ads Network Integration",
        "Firebase Integration",
        "In-App Purchase",
        "Publishing on App Store",
        "App Store Optimization",
        "1 Month free bug support",
        "Native iOS OR Android app",
        "Cross-Platform (Hybrid) On Demand",
        "Push Notifications",
        "Messaging API Integration (Live Chat)",
        "Regular App Updates",
        "Google Maps Integration",
        "Admin Panel",
        "Data Import/Export",
        "Web APIs and Online Database",
        "Picture Gallery/Product Display/ Showcase Services",
        "Product Categories/Sub Categories",
        "CrashAnalytics Integration",
        "Audio/Video Streaming",
        "Payment Gateways Integration",
        "Shopping Cart",
        "3rd Party APIs Integrations",
      ],
    },
    {
      plan_title: "Business",
      plan_price: "$10000",
      plan_price_inr: "₹50000",
      plan_headline: "25% Upfront to get started with the work immediately",
      key: [
        "No. of Features Up to 25",
        "Wireframing",
        "Intuitive UI UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Ads Network Integration",
        "Firebase Integration",
        "In-App Purchase",
        "Publishing on App Store",
        "App Store Optimization",
        "3 Month free bug support",
        "Native iOS OR Android app",
        "Cross-Platform (Hybrid) On Demand",
        "Push Notifications",
        "Messaging API Integration (Live Chat)",
        "Regular App Updates Yearly 1 Update",
        "Google Maps Integration",
        "Admin Panel",
        "Data Import/Export",
        "Web APIs and Online Database",
        "Picture Gallery/Product Display/Showcase Services On Demand",
        "Product Categories/Sub Categories",
        "CrashAnalytics Integration",
        "Audio/Video Streaming",
        "Payment Gateways Integration",
        "Shopping Cart",
        "3rd Party APIs Integrations",
      ],
    },
  ],
};

function AppDevelopment() {
  return <>
    {/* <TopTitle /> */}
    <Service disabled data={data} pdf={apppdf} pdfname="Bluesoltech-WebDevelopment-Quote"/>
  </>
}

export default AppDevelopment;
