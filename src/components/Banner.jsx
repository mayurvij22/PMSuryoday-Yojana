import React, { useRef } from "react";

function Banner() {
  const scrollRef = useRef(null);

  const scrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8853508/pexels-photo-8853508.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-justify font-extrabold p-6 md:p-12 lg:p-24">
          <div className="max-w-fit text-sky-50 bg-black bg-opacity-75 p-6 rounded-lg shadow-lg">
            <h1 className="mb-5 text-5xl font-bold text-center">
              PM Suryoday Yojana
            </h1>
            <p className="mb-6 font-bold">
              पीएम नरेंद्र मोदी ने 22 जनवरी के दिन अयोध्या में रामलला की प्राण
              प्रतिष्ठा पूर्ण करने के बाद तुरंत ही देश के परिवारों को सौर ऊर्जा
              का उपयोग करने का बढ़ावा देने हेतु पीएम सूर्योदय योजना की घोषणा कर
              दी थी। Pradhanmantri Suryoday Yojana 2024 के कारण आने वाले समय में
              भारत देश renewable energy source का उपयोग करने वाला बड़ा देश बनकर
              उभर सकता है।
            </p>
            <p className="mb-6 font-bold">
              Pradhan Mantri Suryoday Yojana (PMSY) Benefits प्रधानमंत्री
              सूर्योदय योजना (PMSY) के कारण भारत देश ऊर्जा क्षेत्र में
              आत्मनिर्भर व सशक्त बन पाएगा। गरीब एवं माध्यम परिवारों को अधिक लाइट
              बिल आने से उसका पेमेंट करने की चिंता नहीं रहेगी। केंद्र सरकार
              द्वारा लाभार्थियों को अधिक से अधिक सब्सिडी का लाभ उपलब्ध करवाया
              जाएगा। Pradhanmantri Suryoday Scheme 2024 के तहत देश के 1 करोड़
              परिवारों को लाभान्वित किया जा सकेगा। एकबार सोलर रूफ़टोप पैनल
              इंस्टॉल होने के बाद उनकी क्षमता के अनुसार लाभार्थी अपने घर में
              अधिक लाइट, पंखे और एसी का इस्तेमाल भी कर सकेगा। पीएम सूर्योदय
              योजना में ऑनलाइन आवेदन की सुविधा उपलब्ध करवाई जाएगी ताकि लाभार्थी
              अपने घर बैठे बैठे ही Online Registration कर अधिक Subsidy का लाभ
              उठा सकेगा।
            </p>
            <h2 className="mb-3 text-3xl font-bold text-center">
              Key Features of PM Suryoday Yojana:
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Provides financial assistance and subsidies for installing solar
                rooftop panels.
              </li>
              <li>
                Aims to make India self-reliant and strong in the energy sector.
              </li>
              <li>
                Benefits over 1 crore families by reducing electricity bills and
                promoting sustainable energy practices.
              </li>
              <li>
                Facilitates easy online application and registration for maximum
                convenience of beneficiaries.
              </li>
              <li>
                Ensures that even low-income families can afford solar energy
                solutions through increased government subsidies.
              </li>
            </ul>
            <div className="text-center">
              <button
                className="btn bg-stone-50 text-black m-3 hover:bg-stone-200 transition duration-300"
                onClick={scrollToContent}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Target section to scroll to */}
      <div ref={scrollRef} className="mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6">
          How to Apply for PM Suryoday Yojana
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          fringilla nulla. Sed eu dui diam. Donec ultricies sed justo eu
          venenatis. Vestibulum non feugiat mauris, sit amet fringilla risus.
          Fusce id dui sit amet risus feugiat laoreet. Sed eget felis at est
          facilisis posuere. Nunc eleifend quam id semper cursus.
        </p>
      </div>
    </div>
  );
}

export default Banner;
