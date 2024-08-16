import React from "react";
import "./BlogPosts.css";

function BlogPosts() {
  const posts = [
    {
      title: "What Are Warts, and What Can I Do About Them?",
      author: "Brittany Oliver, MD, FAAD",
      date: "July 26, 2024",
      img: "https://www.clinikally.com/cdn/shop/articles/intradermal_nevus_2.png?v=1682686767",
    },
    {
      title: "What Is Hidradenitis Suppurativa?",
      author: "Lauren Henderson, MD",
      date: "July 22, 2024",
      img: "https://media.healthnews.com/images/featured-big/2023/04/Hidradenitis-Suppurativa.jpg",
    },
    {
      title: "Sunscreen: Everything You Need to Know",
      author: "Some Author",
      date: "July 20, 2024",
      img: "https://i2-prod.ok.co.uk/incoming/article26474815.ece/ALTERNATES/n615/2_GettyImages-142018656.jpg",
    },
  ];

  return (
    <div className="blog-posts">
      <h2>Filter Posts to Your Interest</h2>
      <div className="filter-buttons">
        <button>All</button>
        <button>Skin Care Basics</button>
        <button>Skin Conditions</button>
        <button>Symptoms</button>
        <button>Causes</button>
        <button>Diagnosis</button>
        <button>Prevention</button>
        <button>Treatment</button>
      </div>
      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={post.img} alt={post.title} />
            <h3>{post.title}</h3>
            <p>
              By {post.author} | {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
