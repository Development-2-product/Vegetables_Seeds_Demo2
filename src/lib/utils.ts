export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getWhatsAppUrl(
  phoneNumber: string,
  data: {
    name: string;
    company?: string;
    phone: string;
    email: string;
    location?: string;
    product?: string;
    quantity?: string;
    message: string;
  }
): string {
  const lines = [
    '*New Product Enquiry — Verdant Seeds*',
    '',
    `Name: ${data.name.trim()}`,
    data.company?.trim() ? `Company / Farm: ${data.company.trim()}` : null,
    `Phone: ${data.phone.trim()}`,
    `Email: ${data.email.trim()}`,
    data.location?.trim() ? `Location: ${data.location.trim()}` : null,
    data.product?.trim() ? `Product / Variety: ${data.product.trim()}` : null,
    data.quantity?.trim() ? `Required Quantity: ${data.quantity.trim()}` : null,
    '',
    `Requirements: ${data.message.trim()}`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanedNumber}?text=${text}`;
}
