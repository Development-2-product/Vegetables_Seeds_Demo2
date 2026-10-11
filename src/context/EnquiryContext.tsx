import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface EnquiryFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  product: string;
  quantity: string;
  message: string;
}

interface EnquiryContextValue {
  isOpen: boolean;
  prefillProduct: string | null;
  openModal: (product?: string) => void;
  closeModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillProduct, setPrefillProduct] = useState<string | null>(null);

  const openModal = useCallback((product?: string) => {
    setPrefillProduct(product ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPrefillProduct(null);
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, prefillProduct, openModal, closeModal }}>
      {children}
    </EnquiryContext.Provider>
  );
}

// This hook is intentionally colocated with its context to keep the provider API cohesive.
// eslint-disable-next-line react-refresh/only-export-components
export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider');
  return ctx;
}
