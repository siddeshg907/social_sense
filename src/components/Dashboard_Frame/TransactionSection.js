import React, { useState } from 'react';
import { EditIcon, FilterXIcon, TrashIcon } from 'lucide-react'; // Assuming these icons are available
import customersData from '../../lib/customerData'; // Adjust the path as necessary

const TransactionSection = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleFilterChange = (value) => {
    setFilter(value);
    setShowFilterMenu(false); // Close the filter menu when an option is selected
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu); // Toggle filter menu visibility
  };

  // Filter and search logic
  const filteredData = customersData.filter((customer) =>
    customer.transactions.some(
      (transaction) =>
        (transaction.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by customer name
          transaction.amount.toString().toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filter === '' || filter === 'All' || transaction.status.toLowerCase() === filter.toLowerCase()) // Apply filter by status
    )
  );

  return (
    <div className="flex flex-col space-y-4">
      {/* Recent Transactions Header */}
      

      {/* Filter and Search Bar */}
      <div className="flex justify-between items-center space-x-4">
      <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={toggleFilterMenu}
              className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              aria-label="filter"
            >
              <FilterXIcon className="h-5 w-5 text-gray-600" />
            </button>
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    onClick={() => handleFilterChange('All')}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                      filter === 'All' ? 'font-semibold bg-gray-100' : ''
                    }`}
                    role="menuitem"
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleFilterChange('Paid')}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                      filter === 'Paid' ? 'font-semibold bg-gray-100' : ''
                    }`}
                    role="menuitem"
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => handleFilterChange('Pending')}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                      filter === 'Pending' ? 'font-semibold bg-gray-100' : ''
                    }`}
                    role="menuitem"
                  >
                    Pending
                  </button>
                </div>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Invoices Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank Account
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((customer) =>
              customer.transactions.map((transaction) => (
                <tr key={transaction.invoiceNumber}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.invoiceNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.dateOfBill}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <div>{customer.name}</div>
                        <div className="text-gray-500 text-sm">
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.bankAccount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-red-600 hover:text-red-900"
                      aria-label="delete"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="text-indigo-600 hover:text-indigo-900 ml-2"
                      aria-label="edit"
                    >
                      <EditIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionSection;
