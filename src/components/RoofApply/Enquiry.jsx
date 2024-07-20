import React from "react";

function Enquiry() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-4xl my-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Enquiry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Offices</h3>
            <p>Find our offices at the following locations:</p>
            <ul className="list-disc list-inside">
              <li>Office 1: 123 Solar St, Green City, Country</li>
              <li>Office 2: 456 Renewable Rd, Eco Town, Country</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Find a Dealer</h3>
            <p>Locate an authorized dealer near you:</p>
            <ul className="list-disc list-inside">
              <li>Dealer 1: 789 Sun Blvd, Solar City, Country</li>
              <li>Dealer 2: 101 Energy Ave, Power Town, Country</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Enquiries</h3>
            <p>
              For any enquiries, please fill up the form below, and we will get
              back to you:
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <p>Need support? Contact our support team at:</p>
            <ul className="list-disc list-inside">
              <li>Email: support@example.com</li>
              <li>Phone: +123-456-7890</li>
            </ul>
          </div>
        </div>

        <form>
          <h3 className="text-xl font-semibold mb-4">Your Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="postcode"
              >
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="enquiryType"
            >
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select...</option>
              <option value="general">General Enquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
