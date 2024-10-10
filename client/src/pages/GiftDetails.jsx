import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './GiftDetails.css';

const GiftDetails = () => {
  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: ""
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchGiftById = async () => {
      try {
        const res = await fetch(`http://localhost:3001/gifts/${id}`);
        const giftData = await res.json();
        setGift(giftData[0]); // Take the first item from the array
      } catch (err) {
        console.error(err);
      }
    };

    fetchGiftById();
  }, [id]);

  return (
    <div className="GiftDetails">
      <main id="gift-content" className="gift-info">
        <div className="image-container">
          <img id="image" src={gift.image} alt={gift.name} />
        </div>
        <div className="gift-details">
          <h2 id="name">{gift.name}</h2>
          <p id="submittedBy">{'Submitted By: ' + gift.submittedby}</p>
          <p id="pricePoint">{'Price: ' + gift.pricepoint}</p>
          <p id="audience">{'Great For: ' + gift.audience}</p>
          <p id="description">{gift.description}</p>
        </div>
      </main>
    </div>
  );
};

export default GiftDetails;