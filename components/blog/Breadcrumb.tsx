import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      className="w-full py-4 px-5 bg-[#111113] border border-[#0066FF]/30 rounded-xl text-sm text-[#A1A1AA]"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white truncate max-w-[200px] md:max-w-[300px]" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
