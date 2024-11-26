import React from 'react';
import './pet-profile-view.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export const PetProfileView: React.FC = () => {
  const pet = {
    name: 'Buddy',
    images: [
    'https://res.cloudinary.com/dphjjixjs/image/upload/v1732519425/adoptme-4x3-m_yp2jaf.jpg', 
    'https://res.cloudinary.com/dphjjixjs/image/upload/v1732519425/adoptme-4x3-m_yp2jaf.jpg', 
    'https://res.cloudinary.com/dphjjixjs/image/upload/v1732519425/adoptme-4x3-m_yp2jaf.jpg', 
    ],
    breed: 'Pitbull',
    age: '2 years',
    gender: 'Male',
    about:
      'Buddy is a loving and energetic Golden Retriever looking for his forever home. He\'s great with kids and other pets, fully vaccinated, and trained.',
    shelterName: 'Happy Paws Shelter',
    shelterAddress: '123 Pet Street',
    viewingHours: '9 AM - 5 PM',
    adoptionFee: 250,
    isAvailable: true,
  };

  return (
    <div className="pet-profile-container">
      <Carousel>
        {pet.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${pet.name} ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      
      <div className="pet-image-section">
        {/* <img src={pet.images} alt={pet.name} className="pet-image" /> */}
        <span className="like-button">❤️</span>
      </div>
    

      <div className="pet-details">
        <h2>{pet.name}</h2>
        <span className={`availability-badge ${pet.isAvailable ? 'available' : 'unavailable'}`}>
          {pet.isAvailable ? 'Available' : 'Unavailable'}
        </span>

        <p className="pet-breed-age">{`${pet.breed} • ${pet.age}`}</p>
        <div className="tags">
          <span className="tag gender">{pet.gender}</span>
          <span className="tag friendly">Friendly</span>
          <span className="tag trained">Trained</span>
        </div>
        <h3>About</h3>
        <p className="pet-about">{pet.about}</p>
        <ul className="pet-info">
          <li>
            <strong>Shelter:</strong> {pet.shelterName}, {pet.shelterAddress}
          </li>
          <li>
            <strong>Viewing Hours:</strong> {pet.viewingHours}
          </li>
          <li>
            <strong>Adoption Fee:</strong> ${pet.adoptionFee}
          </li>
        </ul>
        <div className="contact-shelter">
          <button className="contact-button call" onClick={() => alert('Calling shelter...')}>
            Call Shelter
          </button>
          <button className="contact-button email" onClick={() => alert('Emailing shelter...')}>
            Email Shelter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfileView;
