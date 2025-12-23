"use client";

import { useI18n } from "@/lib/i18n";
import LoadingOverlay from "./LoadingOverlay";

export default function I18nLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useI18n();

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      {!isLoading ? (
        <div style={{ opacity: 1, transition: 'opacity 0.2s ease-in-out' }}>
          {children}
        </div>
      ) : (
        <div style={{ display: 'none' }}>{children}</div>
      )}
    </>
  );
}

