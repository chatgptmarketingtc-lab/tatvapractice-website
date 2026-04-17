'use client';
import { createContext, useContext, useState } from 'react';
import BookDemoModal from './BookDemoModal';
import CareerFormModal from './CareerFormModal';

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      openDemo: () => setDemoOpen(true),
      openCareer: () => setCareerOpen(true),
    }}>
      {children}
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <CareerFormModal isOpen={careerOpen} onClose={() => setCareerOpen(false)} />
    </ModalContext.Provider>
  );
}
