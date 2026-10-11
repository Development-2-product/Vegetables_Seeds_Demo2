import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import { X, Send, AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { getWhatsAppUrl } from '@/lib/utils';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function EnquiryModal() {
  const { isOpen, prefillProduct, closeModal } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    product: '',
    quantity: '',
    message: '',
  });
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && prefillProduct) {
      setForm((prev) => ({ ...prev, product: prefillProduct }));
    }
  }, [isOpen, prefillProduct]);

  const handleClose = useCallback(() => {
    setSubmitted(false);
    setWhatsappUrl(null);
    setErrors({});
    setForm({
      name: '',
      company: '',
      phone: '',
      email: '',
      location: '',
      product: '',
      quantity: '',
      message: '',
    });
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => firstInputRef.current?.focus(), 100);
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        clearTimeout(timer);
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, handleClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!whatsappNumber) return;
    const url = getWhatsAppUrl(whatsappNumber, form);
    setWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setWhatsappUrl(null);
    setForm({
      name: '',
      company: '',
      phone: '',
      email: '',
      location: '',
      product: '',
      quantity: '',
      message: '',
    });
    setErrors({});
    setTimeout(() => firstInputRef.current?.focus(), 50);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
      <div
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      <div className="glass-modal relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-ink-900/15 bg-ink-900 px-5 py-4 sm:px-7">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-50/60">
              Product Enquiry
            </p>
            <h2 id="enquiry-title" className="mt-1 font-serif text-xl font-medium text-paper-50">
              {submitted ? 'Enquiry Ready' : 'Request a Product'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center text-paper-50/80 transition-colors hover:bg-paper-50/10 hover:text-paper-50"
            aria-label="Close enquiry form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-7">
          {!whatsappNumber && !submitted && (
            <div className="mb-5 flex items-start gap-3 border border-terracotta-400 bg-terracotta-50 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" />
              <div>
                <p className="text-sm font-medium text-terracotta-700">WhatsApp not configured</p>
                <p className="mt-1 text-sm text-terracotta-600">
                  The WhatsApp number is not set up yet. Please contact us directly at{' '}
                  <a href="mailto:kasiv931@gmail.com" className="underline">kasiv931@gmail.com</a>{' '}
                  or try again later.
                </p>
              </div>
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <p className="mb-5 text-sm text-ink-600">
                Fill in your details and WhatsApp will open with a complete, pre-filled enquiry for a quick response.
                Fields marked <span className="text-terracotta-500">*</span> are required.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  required
                  error={errors.name}
                  value={form.name}
                  onChange={(v) => updateField('name', v)}
                  ref={firstInputRef}
                  placeholder="Your name"
                />
                <Field
                  label="Company / Farm Name"
                  value={form.company}
                  onChange={(v) => updateField('company', v)}
                  placeholder="Optional"
                />
                <Field
                  label="Phone Number"
                  required
                  error={errors.phone}
                  type="tel"
                  value={form.phone}
                  onChange={(v) => updateField('phone', v)}
                  placeholder="+91 98765 43210"
                />
                <Field
                  label="Email"
                  required
                  error={errors.email}
                  type="email"
                  value={form.email}
                  onChange={(v) => updateField('email', v)}
                  placeholder="you@example.com"
                />
                <Field
                  label="Location"
                  value={form.location}
                  onChange={(v) => updateField('location', v)}
                  placeholder="City, State"
                />
                <Field
                  label="Product / Variety"
                  value={form.product}
                  onChange={(v) => updateField('product', v)}
                  placeholder="e.g. Tomato Seeds"
                />
                <Field
                  label="Required Quantity"
                  value={form.quantity}
                  onChange={(v) => updateField('quantity', v)}
                  placeholder="e.g. 500g"
                />
                <div className="sm:col-span-2">
                  <label className="label-tag mb-1.5 block" htmlFor="enquiry-message">
                    Message <span className="text-terracotta-500">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Tell us about your requirements..."
                    className={`w-full border bg-paper-50 px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:ring-offset-1 focus:ring-offset-paper-50 ${
                      errors.message ? 'border-terracotta-500' : 'border-ink-900/20'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-terracotta-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={!whatsappNumber}
                >
                  Send Enquiry via WhatsApp
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-leaf-400/15">
                <CheckCircle2 className="h-8 w-8 text-leaf-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                WhatsApp has opened
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
                Your complete enquiry has been pre-filled in WhatsApp. Review it and tap send in the WhatsApp window.
              </p>

              <div className="mt-6 border border-ink-900/10 bg-paper-100 p-4 text-left">
                <p className="label-tag mb-3">Enquiry Summary</p>
                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-500">Name</dt>
                    <dd className="font-medium text-ink-800">{form.name}</dd>
                  </div>
                  {form.product && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-500">Product</dt>
                      <dd className="font-medium text-ink-800">{form.product}</dd>
                    </div>
                  )}
                  {form.quantity && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-500">Quantity</dt>
                      <dd className="font-medium text-ink-800">{form.quantity}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-500">Phone</dt>
                    <dd className="font-medium text-ink-800">{form.phone}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button onClick={handleSendAnother} className="btn-secondary">
                  Send Another Request
                </button>
                <a
                  href={whatsappUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open WhatsApp Again
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { type RefObject } from 'react';

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
}

function Field({ label, value, onChange, required, error, type = 'text', placeholder, ref }: FieldProps) {
  const id = `enquiry-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <div>
      <label className="label-tag mb-1.5 block" htmlFor={id}>
        {label} {required && <span className="text-terracotta-500">*</span>}
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border bg-paper-50 px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:ring-offset-1 focus:ring-offset-paper-50 ${
          error ? 'border-terracotta-500' : 'border-ink-900/20'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-terracotta-600">
          {error}
        </p>
      )}
    </div>
  );
}
