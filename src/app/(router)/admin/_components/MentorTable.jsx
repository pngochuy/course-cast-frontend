import React from "react";

function MentorTable() {
  const mentors = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Brown", email: "bob@example.com" },
    // Add more mentors as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor) => (
            <tr key={mentor.id}>
              <td className="border px-4 py-2">{mentor.name}</td>
              <td className="border px-4 py-2">{mentor.email}</td>
              <td className="border px-4 py-2">
                <button className="text-blue-600 hover:text-blue-900">
                  Edit
                </button>{" "}
                |
                <button className="text-red-600 hover:text-red-900 ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MentorTable;
