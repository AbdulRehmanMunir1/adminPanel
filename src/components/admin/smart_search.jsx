import React, { useState } from 'react';

// Mock data for demonstration
const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher' },
  // Add more rows as needed
];

const ContentRetriever = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(mockData);

  // Function to filter data based on query
  const filterData = (query) => {
    // Simple filter for demonstration
    return mockData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Update the displayed data based on query
  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    setData(filterData(value));
  };

  return (
    <div className="w-full p-3 ">
      <div className="p-3 mb-4">
        <h1 className="text-2xl font-extrabold mb-4 tracking-tighter">Smart <span className='text-pur border-b-2 border-pur rounded-sm'>Content</span> Retriever</h1>
        <input
          type="text"
          placeholder="Search for content..."
          value={query}
          onChange={handleInputChange}
          className="w-full p-3 border bg-zinc-700 border-zinc-600 rounded-lg outline-none "
        />
      </div>

      {/* Content section */}
      <div className="overflow-auto">
        {data.length > 0 ? (
          <table className="min-w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-1 py-3 text-left text-xs font-medium uppercase tracking-tighter">ID</th>
                <th className="px-1 py-3 text-left text-xs font-medium uppercase tracking-tighter">Name</th>
                <th className="px-1 py-3 text-left text-xs font-medium uppercase tracking-tighter">Email</th>
                <th className="px-1 py-3 text-left text-xs font-medium uppercase tracking-tighter">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y ">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-1 py-3 whitespace-nowrap text-sm font-medium">{item.id}</td>
                  <td className="px-1 py-3 whitespace-nowrap text-sm">{item.name}</td>
                  <td className="px-1 py-3 whitespace-nowrap text-sm">{item.email}</td>
                  <td className="px-1 py-3 whitespace-nowrap text-sm">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-primary">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ContentRetriever;
