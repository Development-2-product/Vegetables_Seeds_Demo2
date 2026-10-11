import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-ink-900/15 bg-paper-100">
      <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label-tag mb-3 text-terracotta-500">{eyebrow}</p>
            <h1 className="editorial-h text-headline text-ink-900">{title}</h1>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {children && (
            <div className="flex items-end lg:col-span-4 lg:justify-end">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
