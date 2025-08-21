// About.js
import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 py-12">
        About Our Book Store
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
        Welcome to <span className="font-semibold text-blue-500" >Harine's Book Store</span>, your one-stop 
        destination for discovering, reading, and sharing books online.  
        Our mission is to make books accessible to everyone, whether you are looking 
        to buy, sell, or explore new reads.  
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Book Store"
          className="rounded-lg shadow-lg"
        />

        {/* Content Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Started with a passion for books, our platform connects readers and 
            sellers in one place. From timeless classics to the latest releases, 
            we bring together a wide collection of books for every age and interest.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Read books easily in one place.</li>
            <li>Discover new authors and genres every day.</li>
            <li>Secure transactions and trusted sellers.</li>
            <li>Enjoy reading instantly with our digital collection.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
          Join Our Community
        </h2>
        <p className="text-gray-600">
          Become a part of our growing community of readers and book lovers.  
          Sign up today, share your favorite reads, and help others find theirs!
        </p>
      </div>
    </div>
  );
};

export default About;
