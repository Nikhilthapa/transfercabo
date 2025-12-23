"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "en" | "es-MX";

type Messages = Record<string, string>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isLoading: boolean;
};

const I18N_STORAGE_KEY = "preferred-locale";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const supportedLocales: Locale[] = ["en", "es-MX"];
const defaultLocale: Locale = "en";

const messagesByLocale: Record<Locale, Messages> = {
  en: {},
  "es-MX": {},
};

async function loadMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "es-MX":
      return (await import("./i18n/es-MX.json")).default as Messages;
    case "en":
    default:
      return (await import("./i18n/en.json")).default as Messages;
  }
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsInitialized(true);
      return;
    }

    const saved = window.localStorage.getItem(I18N_STORAGE_KEY) as
      | Locale
      | null;

    const initialLocale: Locale =
      saved && supportedLocales.includes(saved) ? saved : defaultLocale;

    setLocaleState(initialLocale);
    setIsLoading(true);
    
    // Check if messages are already cached
    if (messagesByLocale[initialLocale] && Object.keys(messagesByLocale[initialLocale]).length > 0) {
      // Use setTimeout to ensure loading state is visible briefly
      setTimeout(() => {
        setMessages(messagesByLocale[initialLocale]);
        setIsLoading(false);
        setIsInitialized(true);
      }, 50);
    } else {
      loadMessages(initialLocale).then((msgs) => {
        messagesByLocale[initialLocale] = msgs;
        setMessages(msgs);
        setIsLoading(false);
        setIsInitialized(true);
      });
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    if (!supportedLocales.includes(nextLocale)) return;
    setLocaleState(nextLocale);
    setIsLoading(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(I18N_STORAGE_KEY, nextLocale);
    }
    if (messagesByLocale[nextLocale]) {
      setMessages(messagesByLocale[nextLocale]);
      setIsLoading(false);
    } else {
      loadMessages(nextLocale).then((msgs) => {
        messagesByLocale[nextLocale] = msgs;
        setMessages(msgs);
        setIsLoading(false);
      });
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      if (messages && messages[key]) return messages[key];
      return key;
    },
    [messages]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      isLoading,
    }),
    [locale, setLocale, t, isLoading]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
};

export { supportedLocales, defaultLocale };


