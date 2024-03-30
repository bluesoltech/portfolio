import React from "react";
import Service from "../../component/Service/Service";
import seoimg from "../../assets/service/seo.png";
import seoimg2 from "../../assets/service/seo2.png";
// import TopTitle from "../TopTitle";
import apppdf from "../../assets/quote/app.pdf"


const data = {
  title: "SEO Optimization",
  hero_img_url: seoimg,
  overview:
    "SEO stands for search engine optimization. In simple terms, SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for -Products you sell, Services you provide. Information on topics in which you have deep expertise and/or experience. The better visibility your pages have in search results, the more likely you are to be found and clicked on. Ultimately, the goal of search engine optimization is to help attract website visitors who will become customers, clients or an audience that keeps coming back.",
  why_img_url: seoimg2,
  why_title: "How we can help you?",
  why_content:
    "SEO is a channel that drives the traffic you need to achieve key business goals (e.g., conversions, visits, sales). It also builds trust – a website that ranks well is generally regarded as authoritative or trustworthy, which are key elements Google wants to reward with better rankings. There are three types of SEO: Technical SEO: Optimizing the technical aspects of a website, On-site SEO: Optimizing the content on a website for users and search engines, Off-site SEO: Creating brand assets (e.g., people, marks, values, vision, slogans, catchphrases, colors) and doing things that will ultimately enhance brand awareness and recognition (i.e., demonstrating and growing its expertise, authority and trustworthiness) and demand generation, You maintain 100% control over content and technical optimizations. That’s not always true with off-site (you can’t control links from other sites or if platforms you rely on end up shutting down or making a major change), but those activities are still a key part of this SEO trinity of success.",
  plans: [
    {
      plan_title: "Small",
      plan_price: "$250",
      plan_price_inr: (
        <p className="flex flex-col justify-center text-center">
          <p>₹20000</p>
          <p className="text-[10px]">/month</p>
        </p>
      ),
      plan_headline: "Suitable for Small-Sized Organizations",
      key: [
        "Website review & analysis",
        "Website & Competitor Analysis",
        "Content Duplicity Check",
        "Initial Ranking Report",
        "Keywords Research",
        "Meta Tags Creation",
        "Canonicalization",
        "URL Structure",
        "Content Optimization",
        "Image Optimization",
        "Heading Tag Optimization",
        "Website Speed Optimization",
        "Sitemap Creation",
        "Google Analytics & Search Console Setup",
        "Blog Optimization",
        "Google Map Integration on website",
        "Google My Business Page Setup and Optimization",
        "Local Citations",
        "Local Classifieds",
        "Blog Posting (500 – 700 words)",
        "Article Writing(500 – 700 words)",
        "Onsite Blog (1000 – 1500 words)",
        "Guest Blogging",
        "Broken Backlink Building",
        "Resource Link Building",
        "Alerts and Mention",
        "Link Roundups",
        "Competitor Backlink Research",
        "Social Sharing – 30(Total)",
        "Blog Social Sharing",
        "Slide Submissions",
        "Text Infographic Creation",
        "Video Creation",
        "Keyword Ranking Report",
        "Google Analytics Report",
        "Acquired Links Report",
        "CLIENT SUPPORT - Email, Chat and Call",
      ],
    },
    {
      plan_title: "Medium",
      plan_price: "$400",
      plan_price_inr: (
        <p className="flex flex-col justify-center text-center">
          <p>₹30000</p>
          <p className="text-[10px]">/month</p>
        </p>
      ),
      plan_headline: "Suitable for Medium-Sized Organizations",
      key: [
        "Website review & analysis",
        "Website & Competitor Analysis",
        "Content Duplicity Check",
        "Initial Ranking Report",
        "Keywords Research",
        "Meta Tags Creation",
        "Canonicalization",
        "URL Structure",
        "Content Optimization",
        "Image Optimization",
        "Heading Tag Optimization",
        "Website Speed Optimization",
        "Sitemap Creation",
        "Google Analytics & Search Console Setup",
        "Blog Optimization - 5 Posts",
        "Google Map Integration on website",
        "Google My Business Page Setup and Optimization",
        "Local Citations - 10",
        "Local Classifieds - 5",
        "Blog Posting (500 – 700 words) - 3",
        "Article Writing(500 – 700 words) - 3",
        "Onsite Blog (1000 – 1500 words) - 3",
        "Guest Blogging",
        "Broken Backlink Building",
        "Resource Link Building",
        "Alerts and Mention",
        "Link Roundups",
        "Competitor Backlink Research",
        "Social Sharing – 40(Total)",
        "Blog Social Sharing",
        "Slide Submissions - 2",
        "Text Infographic Creation - 2",
        "Video Creation",
        " Q&A – 3",
        "Keyword Ranking Report",
        "Google Analytics Report",
        "Acquired Links Report",
        "CLIENT SUPPORT - Email, Chat and Call",
      ],
    },
    {
      plan_title: "Large",
      plan_price: "$600",
      plan_price_inr: (
        <p className="flex flex-col justify-center text-center">
          <p>₹45000</p>
          <p className="text-[10px]">/month</p>
        </p>
      ),
      plan_headline: "Suitable for Enterprises",
      key: [
        "Website review & analysis",
        "Website & Competitor Analysis",
        "Content Duplicity Check",
        "Initial Ranking Report",
        "Keywords Research",
        "Meta Tags Creation",
        "Canonicalization",
        "URL Structure",
        "Content Optimization",
        "Image Optimization",
        "Heading Tag Optimization",
        "Website Speed Optimization",
        "Sitemap Creation",
        "Google Analytics & Search Console Setup",
        "Blog Optimization - 5 Posts",
        "Google Map Integration on website",
        "Google My Business Page Setup and Optimization",
        "Local Citations - 15",
        "Local Classifieds - 10",
        "Blog Posting (500 – 700 words) - 4",
        "Article Writing(500 – 700 words) - 4",
        "Onsite Blog (1000 – 1500 words) - 4",
        "Guest Blogging",
        "Broken Backlink Building",
        "Resource Link Building",
        "Alerts and Mention",
        "Link Roundups",
        "Competitor Backlink Research",
        "Social Sharing – 50(Total)",
        "Blog Social Sharing",
        "Slide Submissions - 2",
        "Text Infographic Creation - 3",
        "Video Creation",
        " Q&A – 5",
        "Keyword Ranking Report",
        "Google Analytics Report",
        "Acquired Links Report",
        "CLIENT SUPPORT - Email, Chat and Call",
      ],
    },
  ],
};

function SeoOptimization() {
  return <>
  {/* <TopTitle /> */}
  <Service disabled data={data} pdf={apppdf} pdfname="Bluesoltech-WebDevelopment-Quote"/>
  </>
}

export default SeoOptimization;
