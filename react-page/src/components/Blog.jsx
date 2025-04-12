import React from 'react';
import BlogCard from './BlogCard';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

// Import all 18 images from assets
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';
import blog9 from '../assets/blog9.jpg';
import blog10 from '../assets/blog10.jpg';
import blog11 from '../assets/blog11.jpg';
import blog12 from '../assets/blog12.jpg';
import blog13 from '../assets/blog13.jpg';
import blog14 from '../assets/blog14.jpg';
import blog15 from '../assets/blog15.jpg';
import blog16 from '../assets/blog16.jpg';
import blog17 from '../assets/blog17.jpg';
import blog18 from '../assets/blog18.jpg';

const blogData = [
  { img: blog1, name: 'Smita', likes: 1.3, views: 57 },
  { img: blog2, name: 'Puspa', likes: 1.1, views: 27 },
  { img: blog3, name: 'Mamali', likes: 1.2, views: 45 },
  { img: blog4, name: 'Sai', likes: 1.5, views: 67 },
  { img: blog5, name: 'Krishna', likes: 1.8, views: 77 },
  { img: blog6, name: 'Smita', likes: 2.3, views: 88 },
  { img: blog7, name: 'Puspa', likes: 1.3, views: 57 },
  { img: blog8, name: 'Mamali', likes: 1.1, views: 27 },
  { img: blog9, name: 'Sai', likes: 1.2, views: 45 },
  { img: blog10, name: 'Krishna', likes: 1.5, views: 67 },
  { img: blog11, name: 'Smita', likes: 1.8, views: 77 },
  { img: blog12, name: 'Puspa', likes: 2.3, views: 88 },
  { img: blog13, name: 'Mamali', likes: 1.3, views: 57 },
  { img: blog14, name: 'Sai', likes: 1.1, views: 27 },
  { img: blog15, name: 'Krishna', likes: 1.2, views: 45 },
  { img: blog16, name: 'Smita', likes: 1.5, views: 67 },
  { img: blog17, name: 'Puspa', likes: 1.8, views: 77 },
  { img: blog18, name: 'Mamali', likes: 2.3, views: 88 }
];

export default function Blog() {
    return (
      <div className="fixed-grid-container">
        {blogData.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    );
  }
