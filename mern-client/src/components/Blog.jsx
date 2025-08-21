import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Must-Read Fiction Books of 2025",
      excerpt:
        "From heartwarming tales to thrilling adventures, here are the best picks for this year...",
    },
    {
      id: 2,
      title: "Why Selling Old Books Helps the Environment",
      excerpt:
        "Recycling books is not just about making money—it’s also a step towards sustainability...",
    },
    {
      id: 3,
      title: "How to Build a Reading Habit in 30 Days",
      excerpt:
        "Struggling to read daily? Here are some easy tips to cultivate a lifelong habit of reading...",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center py-12">Bookstore Blog</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.excerpt}</p>
            <button className="text-blue-700 font-medium hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
