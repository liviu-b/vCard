import React from 'react';
import { VCard } from './components/VCard';
import { sampleContact } from './data/sampleContact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <VCard contact={sampleContact} />
    </div>
  );
}

export default App;