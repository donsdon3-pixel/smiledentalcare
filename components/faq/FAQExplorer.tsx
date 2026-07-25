"use client";

import { useMemo, useState } from "react";
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";

import type { FAQCategory, FAQItem } from "@/data/faqs";
import { cn } from "@/utils/cn";

type FAQExplorerProps = {
  faqs: FAQItem[];
  categories: FAQCategory[];
};

export function FAQExplorer({ categories, faqs }: FAQExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("General");
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory = faq.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, faqs, query]);

  return (
    <div className="grid gap-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block" htmlFor="faq-search">
          <span className="sr-only">Search frequently asked questions</span>
          <FaMagnifyingGlass
            aria-hidden="true"
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-clinic-gray-500"
          />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions"
            className="h-12 w-full rounded-md border border-clinic-gray-200 bg-white pl-11 pr-4 text-sm text-clinic-gray-800 shadow-soft"
          />
        </label>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="FAQ categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={category === activeCategory}
              onClick={() => {
                setActiveCategory(category);
                setOpenId("");
              }}
              className={cn(
                "h-10 rounded-md border px-4 text-sm font-semibold transition",
                category === activeCategory
                  ? "border-clinic-blue-600 bg-clinic-blue-600 text-white"
                  : "border-clinic-gray-200 bg-white text-clinic-blue-900 hover:border-clinic-blue-200 hover:bg-clinic-blue-50",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const buttonId = `${faq.id}-button`;

            return (
              <article
                key={faq.id}
                className="rounded-lg border border-clinic-gray-200 bg-white shadow-soft"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? "" : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-lg font-bold text-clinic-blue-900"
                  >
                    {faq.question}
                    <FaChevronDown
                      aria-hidden="true"
                      className={cn(
                        "h-4 w-4 shrink-0 transition",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="text-sm leading-7 text-clinic-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })
        ) : (
          <p className="rounded-lg border border-clinic-gray-200 bg-white p-6 text-sm text-clinic-gray-600 shadow-soft">
            No FAQs match your search. Try a different term or category.
          </p>
        )}
      </div>
    </div>
  );
}
