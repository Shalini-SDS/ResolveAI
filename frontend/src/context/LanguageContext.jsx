import { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: { home: 'Home', dashboard: 'Dashboard', login: 'Login', register: 'Register', reportIssue: 'Report Issue' },
    landing: { heroTitle: 'AI-powered civic action for every neighborhood', heroSubtitle: 'ResolveAI helps citizens, officers, and admins turn local issues into visible, trackable solutions.', ctaPrimary: 'Report Issue', ctaSecondary: 'View Community Issues', stats: 'Trusted by 12+ cities' },
    common: { theme: 'Theme', language: 'Language', loading: 'Loading...', error: 'Something went wrong', success: 'Saved successfully' }
  },
  ta: {
    nav: { home: 'முகப்பு', dashboard: 'டாஷ்போர்டு', login: 'உள்நுழை', register: 'பதிவு', reportIssue: 'சிக்கலைப் புகாரளி' },
    landing: { heroTitle: 'ஒவ்வொரு சுற்றுப்புறத்திற்கும் AI-சக்தி வாய்ந்த சிவில் நடவடிக்கை', heroSubtitle: 'ResolveAI குடிமக்கள், அதிகாரிகள் மற்றும் நிர்வாகிகளுக்கு உள்ளூர் சிக்கல்களை தெளிவான, கண்காணிக்கக்கூடிய தீர்வுகளாக மாற்ற உதவுகிறது.', ctaPrimary: 'சிக்கலைப் புகாரளி', ctaSecondary: 'சமூக சிக்கல்களைப் பார்க்க', stats: '12+ நகரங்களில் நம்பகமானது' },
    common: { theme: 'தீம்', language: 'மொழி', loading: 'ஏற்றப்படுகிறது...', error: 'ஏதோ தவறாகிவிட்டது', success: 'வெற்றிகரமாக சேமிக்கப்பட்டது' }
  },
  hi: {
    nav: { home: 'होम', dashboard: 'डैशबोर्ड', login: 'लॉगिन', register: 'रजिस्टर', reportIssue: 'समस्या रिपोर्ट करें' },
    landing: { heroTitle: 'हर पड़ोस के लिए AI-संचालित नागरिक कार्रवाई', heroSubtitle: 'ResolveAI नागरिकों, अधिकारियों और प्रशासकों को स्थानीय समस्याओं को दृश्यमान, ट्रैक करने योग्य समाधानों में बदलने में मदद करता है।', ctaPrimary: 'समस्या रिपोर्ट करें', ctaSecondary: 'समुदाय की समस्याएँ देखें', stats: '12+ शहरों द्वारा भरोसेमंद' },
    common: { theme: 'थीम', language: 'भाषा', loading: 'लोड हो रहा है...', error: 'कुछ गलत हो गया', success: 'सफलतापूर्वक सहेजा गया' }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('resolveai-language') || 'en');

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] || translations.en }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
