"use client";
import React from "react";
import TestFrequencyChart from "../_components/TestFrequencyChart";
import SubjectFrequencyChart from "../_components/SubjectFrequencyChart";
import UserAccessChart from "../_components/UserAccessChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
        </div>
      </header>
      <main className="flex">
        <section className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                Total Users
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                1,234
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                Total Sales
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                $12,345
              </div>
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <ul className="mt-4">
              <li className="py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">
                  User John Doe registered.
                </span>
              </li>
              <li className="py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">
                  New sale: $200.
                </span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Test Frequency
              </h2>
              <TestFrequencyChart />
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Subject Frequency
              </h2>
              <SubjectFrequencyChart />
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              User Access Over Time
            </h2>
            <UserAccessChart />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
