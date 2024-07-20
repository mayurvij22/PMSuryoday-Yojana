import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json";
import list2 from "../../public/list2.json";
import Cards2 from "./Cards2";

function SolarInfo() {
  const filterData = list.filter((data) => data.category === "none");
  const data = list2.filter((data) => data.category === "none");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="m-2 bg-white">
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl text-neutral-100 font-medium">
          Launch of National Portal
        </div>
        <div className="collapse-content">
          <p className="text-base text-white">
            Hon'ble Prime Minister of India, Shri Narendra Modi launched the
            National Portal for Rooftop Solar on 30/07/2022. Shri R. K. Singh,
            Union Minister for Power and NRE and Shri Krishan Pal Gurjar, MoS,
            Power and Heavy Industries were present. Shri Bhagwanth Khuba, MoS,
            MNRE joined virtually.
          </p>
          <div className="card-container">
            {data.map((item) => (
              <Cards2 className="bg-white" item={item} key={item.id} />
            ))}
          </div>
          <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {[
                {
                  step: "Step 1",
                  title: "Check Eligibility",
                  description:
                    "Verify eligibility criteria such as residency, property ownership, and financial status. Ensure your property meets the technical requirements for solar panel installation.",
                },
                {
                  step: "Step 2",
                  title: "Research and Choose a Solar Provider",
                  description:
                    "Research accredited and certified solar providers in your area. Obtain quotes and evaluate the services offered by different providers.",
                },
                {
                  step: "Step 3",
                  title: "Site Assessment",
                  description:
                    "Schedule a site assessment with a chosen solar provider. The provider will evaluate your roof's suitability, including sun exposure, roof condition, and available space.",
                },
                {
                  step: "Step 4",
                  title: "Financial Planning",
                  description:
                    "Explore financing options such as loans, grants, or incentives offered under the PM Solar Roof program. Determine the cost of the installation, potential savings on energy bills, and payback period.",
                },
                {
                  step: "Step 5",
                  title: "Apply for the Program",
                  description:
                    "Gather necessary documents such as proof of property ownership, income statements, and the solar provider's quote. Complete the application form available on the official website or through designated offices. Submit the application along with required documents.",
                },
                {
                  step: "Step 6",
                  title: "Wait for Approval",
                  description:
                    "The relevant authority will review your application. You may be contacted for additional information or clarification. Upon approval, you will receive an official confirmation.",
                },
                {
                  step: "Step 7",
                  title: "Schedule Installation",
                  description:
                    "Coordinate with the approved solar provider to schedule the installation. Ensure that the installation complies with local building codes and regulations.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`timeline-${
                      index % 2 === 0 ? "start" : "end"
                    } mb-10 ${index % 2 === 0 ? "md:text-end" : ""}`}
                  >
                    <time className="font-mono italic">{item.step}</time>
                    <div className="text-lg font-black">{item.title}</div>
                    {item.description}
                  </div>
                </li>
              ))}
              <hr />
            </ul>
          </div>
        </div>
      </div>
      <div className="slider-container m-10">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards className="bg-white" item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SolarInfo;
