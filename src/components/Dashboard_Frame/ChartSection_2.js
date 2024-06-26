import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ResponsivePie } from "@nivo/pie";

import customersData from "../../lib/customerData"; // Update the path as necessary

function ChartSection_2() {
  // Prepare data for this year (2024)
  const thisYearData = Array(12)
    .fill(0)
    .map((_, index) => {
      const month = new Date(2024, index).toLocaleString("default", {
        month: "short",
      });
      const customerCount = customersData.filter((customer) => {
        const transactionsThisMonth = customer.transactions.filter(
          (transaction) => {
            const transactionDate = new Date(transaction.dateOfBill);
            return (
              transactionDate.getFullYear() === 2024 &&
              transactionDate.getMonth() === index
            );
          }
        );
        return transactionsThisMonth.length > 0;
      }).length;

      return { month, customerCount };
    });

  // Static data for last year (2023)
  const lastYearData = [
    { month: "Jan", customerCount: 45 },
    { month: "Feb", customerCount: 35 },
    { month: "Mar", customerCount: 50 },
    { month: "Apr", customerCount: 30 },
    { month: "May", customerCount: 48 },
    { month: "Jun", customerCount: 60 },
    { month: "Jul", customerCount: 20 },
    { month: "Aug", customerCount: 35 },
    { month: "Sep", customerCount: 50 },
    { month: "Oct", customerCount: 40 },
    { month: "Nov", customerCount: 60 },
    { month: "Dec", customerCount: 30 },
  ];

  // Prepare data for age distribution
  const ageData = customersData.reduce((acc, customer) => {
    let ageGroup;
    if (customer.age >= 15 && customer.age <= 25) {
      ageGroup = "15-25";
    } else if (customer.age >= 26 && customer.age <= 35) {
      ageGroup = "26-35";
    } else if (customer.age >= 36 && customer.age <= 45) {
      ageGroup = "36-45";
    } else {
      ageGroup = ">45";
    }

    if (acc[ageGroup]) {
      acc[ageGroup]++;
    } else {
      acc[ageGroup] = 1;
    }
    return acc;
  }, {});

  const ageChartData = Object.keys(ageData).map((ageGroup) => ({
    id: ageGroup,
    label: `${ageGroup} Years Old`,
    value: ageData[ageGroup],
  }));

  const COLORS = ["#FFD700", "#FFCC00", "#FFA500", "#FFFFFF"]; // Colors for age groups

  return (
    <div className="flex">
      {/* Line Chart */}
      <div className="w-1/2 h-96 mr-4 bg-white rounded p-10">
        <h2 className="font-bold text-xl mb-4">Total customers</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={thisYearData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="customerCount"
              name="This Year"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              data={lastYearData}
              dataKey="customerCount"
              name="Last Year"
              stroke="#FFCC00"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-1/2 h-96 bg-white p-2 rounded">
        <h2 className="font-bold text-xl mb-4">Customer Segmentations</h2>
        <ResponsivePie
          data={ageChartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={COLORS}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableRadialLabels={false}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          legends={[
            {
              anchor: "right",
              direction: "column",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ChartSection_2;
