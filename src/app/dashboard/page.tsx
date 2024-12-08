import React from "react";
import { FaTachometerAlt, FaCar, FaChartBar, FaWallet, FaInbox, FaCalendarAlt, FaCog, FaQuestionCircle, FaMoon } from "react-icons/fa"; // Import icons
import Image from "next/image";

// Dashboard Component
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <nav>
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">Main Menu</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-blue-500 text-lg">
              <FaTachometerAlt className="text-xl" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaCar className="text-xl" />
              <span>Car Rent</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaChartBar className="text-xl" />
              <span>Insight</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaWallet className="text-xl" />
              <span>Reimburse</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaInbox className="text-xl" />
              <span>Inbox</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaCalendarAlt className="text-xl" />
              <span>Calendar</span>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold mb-4">Preferences</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-lg">
              <FaCog className="text-xl" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaQuestionCircle className="text-xl" />
              <span>Help & Center</span>
            </li>
            <li className="flex items-center space-x-2 text-lg">
              <FaMoon className="text-xl" />
              <span>Dark Mode</span>
            </li>
          </ul>
          <button className="mt-6 text-gray-500 hover:text-gray-800 text-lg">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {/* Details Rental */}
          <div className="col-span-1 lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
            <div className="relative mb-6">
              <Image src="/Maps.png" alt="Map" width={600} height={400} />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <Image src="/image 8.png" alt="Car" width={100} height={60} />
              <div>
                <h3 className="text-lg font-semibold">Nissan GT-R</h3>
                <p className="text-gray-500">Sport Car</p>
                <span className="text-sm text-gray-400">#9761</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold">Pick-Up</p>
                <p className="text-gray-600">Location: Kota Semarang</p>
                <p className="text-gray-600">Date: 20 July 2022</p>
                <p className="text-gray-600">Time: 07:00</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Drop-Off</p>
                <p className="text-gray-600">Location: Kota Semarang</p>
                <p className="text-gray-600">Date: 21 July 2022</p>
                <p className="text-gray-600">Time: 01:00</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Total Rental Price</p>
              <p className="text-xl font-bold">$80.00</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            {/* Top 5 Car Rental */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Top 5 Car Rentals</h2>
              <div className="flex flex-col sm:flex-row items-center space-x-4 mb-4">
                <div className="relative">
                  <Image src="/donutchart.png" alt="Donut Chart" width={150} height={150} />
                </div>
                <ul className="space-y-2 mt-4 sm:mt-0">
                  <li className="flex justify-between">
                    <span><b>Sport Car</b></span>
                    <span>17,439</span>
                  </li>
                  <li className="flex justify-between">
                    <span><b>SUV</b></span>
                    <span>9,478</span>
                  </li>
                  <li className="flex justify-between">
                    <span><b>Coupe</b></span>
                    <span>18,197</span>
                  </li>
                  <li className="flex justify-between">
                    <span><b>Hatchback</b></span>
                    <span>12,510</span>
                  </li>
                  <li className="flex justify-between">
                    <span><b>MPV</b></span>
                    <span>14,406</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <Image src="/image 8.png" alt="Nissan GT-R" width={60} height={40} />
                  <span>Nissan GT-R</span>
                  <span>$80.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <Image src="/image 7.png" alt="Koenigsegg" width={60} height={40} />
                  <span>Koenigsegg</span>
                  <span>$99.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <Image src="/Car.png" alt="Rolls-Royce" width={60} height={40} />
                  <span>Rolls-Royce</span>
                  <span>$96.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <Image src="/Car (2).png" alt="CR-V" width={60} height={40} />
                  <span>CR-V</span>
                  <span>$80.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
