'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isModalOpen: boolean;
  modalContext: { hsCode?: string; country?: string; requirement?: string };
  openDemoModal: (ctx?: { hsCode?: string; country?: string; requirement?: string }) => void;
  closeDemoModal: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('vi');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<{
    hsCode?: string;
    country?: string;
    requirement?: string;
  }>({});

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('tradeintel_locale') as Language | null;
      if (saved === 'vi' || saved === 'en') {
        setLangState(saved);
      }
    } catch {
      // Ignore storage access errors in strict environments
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem('tradeintel_locale', next);
      document.documentElement.lang = next;
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };

  const openDemoModal = (ctx?: { hsCode?: string; country?: string; requirement?: string }) => {
    setModalContext(ctx || {});
    setIsModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isModalOpen,
        modalContext,
        openDemoModal,
        closeDemoModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within a LanguageProvider');
  }
  return ctx;
}
