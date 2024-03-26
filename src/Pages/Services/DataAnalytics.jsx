import React from "react";
import Service from "../../component/Service/Service";
import dataimg from "../../assets/service/data.png";
import dataimg2 from "../../assets/service/data2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"

const data = {
  title: "Data Analytics",
  hero_img_url: dataimg,
  overview:
    "Businesses generate a lot of data, don't they? Tons and tons of it, every minute, every second, so much so that even Baa Baa Black Sheep's three bags full are not enough! Now, businesses have the opportunity to make sense of this raw data to draw meaningful conclusions, which can help them gain a competitive advantage in their field. This process of collecting, analyzing and interpreting raw data is called Data Analytics. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption",
  why_img_url: dataimg2,
  why_title: "How we can help you?",
  why_content:
    "Data analytics is a broad term that encompasses many diverse types of data analysis. And blue Soltech helps Any type of information can be subjected to data analytics techniques to get insight that can be used to improve things. Data analytics techniques can reveal trends and metrics that would otherwise be lost in the mass of information. This information can then be used to optimize processes to increase the overall efficiency of a business or system.",
  plans: [
    {
      plan_title: "Small",
      plan_price: "$1000",
      plan_price_inr: "₹1000",
      plan_headline: "Suitable for Small-Sized Organizations",
      key: ["Upto 1 application or asset"],
    },
    {
      plan_title: "Medium",
      plan_price: "$2000",
      plan_price_inr: "₹2000",
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: ["Upto 3 application or assets"],
    },
    {
      plan_title: "Large",
      plan_price: "$5000",
      plan_price_inr: "₹5000",
      plan_headline: "Suitable for Enterprises",
      key: ["Upto 5 application or asset"],
    },
  ],
};

function DataAnalytics() {
  return <>
    {/* <TopTitle /> */}
    <Service data={data} pdf={apppdf}/>
  </>

}

export default DataAnalytics;
