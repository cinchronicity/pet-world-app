import React from 'react';

interface Pet {
  name: string;
  image: string;
  breed: string;
  age: string;
  gender: string;
  about: string;
  shelterName: string;
  shelterAddress: string;
  viewingHours: string;
  adoptionFee: number;
}

interface PetProfileProps {
  pet: Pet;
}

export const PetProfileView: React.FC<PetProfileProps> = ({ pet }) => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <img
        src={pet.image}
        alt={pet.name}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h2>{pet.name}</h2>
        <p>{`${pet.breed} • ${pet.age}`}</p>
        <div style={{ display: 'flex', gap: '8px', margin: '8px 0' }}>
          <span style={{ background: '#e1f7d5', padding: '4px 8px', borderRadius: '4px' }}>
            {pet.gender}
          </span>
          <span style={{ background: '#ffebb5', padding: '4px 8px', borderRadius: '4px' }}>
            Friendly
          </span>
          <span style={{ background: '#c9d6ff', padding: '4px 8px', borderRadius: '4px' }}>
            Trained
          </span>
        </div>
        <h3>About</h3>
        <p>{pet.about}</p>
        <ul>
          <li>Shelter: {pet.shelterName}, {pet.shelterAddress}</li>
          <li>Available: {pet.viewingHours}</li>
          <li>Adoption Fee: ${pet.adoptionFee}</li>
        </ul>
        <div style={{ marginTop: '16px' }}>
          <button
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#6c63ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => alert('Calling shelter...')}
          >
            Call Shelter
          </button>
          <button
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '8px',
              border: '1px solid #6c63ff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => alert('Emailing shelter...')}
          >
            Email Shelter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfileView;
