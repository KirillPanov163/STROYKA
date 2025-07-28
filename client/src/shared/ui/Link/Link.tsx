import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className = '', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={`text-blue-600 hover:text-blue-800 hover:underline ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';