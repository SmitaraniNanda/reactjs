import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUser, FaHeart, FaEye } from 'react-icons/fa';
import '../App.css'; // CSS for styles

export default function BlogCard({ img, name, likes, views }) {
  return (
    <Card className="blog-card shadow-sm">
      <div className="image-wrapper">
        <Card.Img variant="top" src={img} className="blog-image" />
      </div>
      <div className="blog-footer d-flex justify-content-between align-items-center px-3 py-2">
        {/* Name on the left */}
        <div className="d-flex align-items-center">
          <FaUser className="me-1 text-primary" />
          <span className="fw-semibold">{name}</span>
        </div>

        {/* Likes + Views on the right */}
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center">
            <FaHeart className="me-1 text-danger" />
            <span>{likes}k</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEye className="me-1 text-muted" />
            <span>{views}k</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
