// import React from 'react';
// import { PetProfileView } from './components/pet-profile-view/pet-profile-view.tsx';
// import pet1 from '../src/images/pet1.jpg';

// const App: React.FC = () => {
//   const pet = {
//     name: 'Buddy',
//     image: pet1, // Replace with a real image URL
//     breed: 'Golden Retriever',
//     age: '2 years old',
//     gender: 'Male',
//     about:
//       'Buddy is a loving and energetic Golden Retriever looking for his forever home. He\'s great with kids and other pets, fully vaccinated, and trained.',
//     shelterName: 'Happy Paws Shelter',
//     shelterAddress: '123 Pet Street',
//     viewingHours: '9 AM - 5 PM',
//     adoptionFee: 250,
//   };

//   return (
//     <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '16px' }}>
//       <h1 style={{ textAlign: 'center', fontFamily: 'Arial', marginBottom: '16px' }}>
//         Pet Adoption App
//       </h1>
//       <PetProfileView pet={pet} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { PetProfileView } from './components/pet-profile-view/pet-profile-view.tsx';
// import pet1 from '../src/images/pet1.jpg';

const App: React.FC = () => {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial' }}>
      <PetProfileView />
    </div>
  );
};

export default App;
