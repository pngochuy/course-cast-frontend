"use client";
import React from "react";
import UserTable from "../_components/UserTable";
import MentorTable from "../_components/MentorTable";

function ManageUser() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Users and Mentors
          </h1>
        </div>
      </header>
      <main className="flex">
        <section className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Users
            </h2>
            <UserTable />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Mentors
            </h2>
            <MentorTable />
          </div>
        </section>
      </main>
    </div>
  );
}

export default ManageUser;
