import React from "react";

function Info() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Information</h2>
        <p className="mb-4">
          The PM Suryoday Yojana is a government initiative aimed at promoting
          the use of solar energy in households and businesses. By installing
          solar panels, you can significantly reduce your electricity bills and
          contribute to a greener environment.
        </p>
        <h3 className="text-xl font-semibold mb-4">Benefits of Solar Energy</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Cost Savings: Reduce your electricity bills by generating your own
            power.
          </li>
          <li>
            Environmentally Friendly: Solar energy is a clean and renewable
            resource.
          </li>
          <li>
            Low Maintenance: Solar panels require minimal maintenance once
            installed.
          </li>
          <li>
            Government Incentives: Avail subsidies and incentives provided by
            the government.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
        <p className="mb-4">
          To apply for the PM Suryoday Yojana, you need to follow these steps:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Visit the official website and fill out the application form.</li>
          <li>
            Provide necessary documents such as ID proof and property details.
          </li>
          <li>
            Schedule a site visit for assessment by an authorized
            representative.
          </li>
          <li>
            Once approved, choose a solar panel installer and proceed with
            installation.
          </li>
        </ol>
        <p className="mb-4">
          For more details, you can contact our support team or visit the
          nearest authorized dealer.
        </p>
      </div>
    </div>
  );
}

export default Info;
