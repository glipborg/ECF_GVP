import React, { useState } from 'react';
import './PostReview.css';

const PostReview = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-review" onClick={onClose}>
      <div className="modal-content-review" onClick={e => e.stopPropagation()}>
          <h2>Laissez votre avis</h2>
          <form>
            <div>
              <label>Votre nom</label>
              <input type="text" />
            </div>
            <div>
              <label>Votre avis</label>
              <textarea></textarea>
            </div>
            <button type="button" onClick={onClose}>Soumettre</button>
          </form>
      </div>
    </div>
  );
};

export default PostReview;
