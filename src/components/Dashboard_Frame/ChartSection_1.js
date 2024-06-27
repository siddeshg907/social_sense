import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ChartSection_1({ data }) {
  const barChartData = [
    { month: "January", projection: 1500, actual: 1200 },
    { month: "February", projection: 2000, actual: 1800 },
    { month: "March", projection: 2200, actual: 2000 },
    { month: "April", projection: 1800, actual: 1600 },
    { month: "May", projection: 2400, actual: 2200 },
    { month: "June", projection: 2800, actual: 2500 },
    { month: "July", projection: 3000, actual: 2800 },
    { month: "August", projection: 2600, actual: 2400 },
    { month: "September", projection: 2800, actual: 2600 },
    { month: "October", projection: 3200, actual: 3000 },
    { month: "November", projection: 2800, actual: 2600 },
    { month: "December", projection: 3500, actual: 3200 },
  ];

  const cardData = [
    {
      icon: <FaUsers className="text-4xl text-yellow-600" />,
      title: "Customers",
      value: data.totalCustomers,
      percentile: 85,
    },
    {
      icon: <FaShoppingCart className="text-4xl text-yellow-600" />,
      title: "Orders",
      value: data.totalOrders,
      percentile: 92,
    },
    {
      icon: <FaCreditCard className="text-4xl text-yellow-600" />,
      title: "Revenue",
      value: `$${data.totalRevenue.toFixed(2)}`,
      percentile: 78,
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-600" />,
      title: "Growth",
      value: `${data.growth}%`,
      percentile: 65,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        {cardData.map((card, index) => (
          <div key={index} className="flex items-center p-2 bg-white border rounded-lg shadow-md">
            <div className="flex items-center">
              {card.icon}
              <div className="ml-2">
                <p className="text-lg font-medium text-gray-600">{card.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{card.value}</p>
                <p className="text-sm font-semibold text-green-500 mt-1">{`${card.percentile}%`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow-lg mb-5">
        <h2 className="font-bold text-xl mb-4">Projection vs Actuals</h2>
        <div className="w-full h-64 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Bar dataKey="actual" stackId="stack" fill="#FFCC00" name="Actual" />
              <Bar dataKey="projection" stackId="stack" fill="#e0e0e0" name="Projection" />
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ChartSection_1;
