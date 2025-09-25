'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  delay?: number;
}

function AccordionItem({ title, content, isOpen, onClick, delay }: AccordionItemProps) {
  return (
    <div
      className="border border-gray-200 rounded-lg p-6"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-indigo-600" />
        ) : (
          <ChevronDown className="text-indigo-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          delay={index * 100}
        />
      ))}
    </div>
  );
}