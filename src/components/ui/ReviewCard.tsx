'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ReviewItem } from '../../data/reviewsData';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="p-4 sm:p-4.5 rounded-[8px] bg-white border border-[#e9ecef] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#2563EB]/40 transition-all flex flex-col justify-between group h-full select-none">
      <div>
        {/* Compact Header: Quote Icon + Star Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
            <Quote className="w-3 h-3" />
          </div>
          {review.rating && (
            <div className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          )}
        </div>

        {/* Review Quote Body - Compact line height, natural fit, no excess margin */}
        <p className="font-['Lexend'] text-[13px] leading-[1.48] text-[#18191c] mb-3 italic">
          "{review.content}"
        </p>
      </div>

      {/* Reviewer Footer: Compact, single-line name and role, no multi-line wrapping */}
      <div className="pt-2.5 border-t border-[#f1f3f6] flex items-center justify-between gap-2.5">
        <div className="min-w-0 flex-1">
          <h4 className="font-['Lexend'] text-[13px] font-bold text-[#18191c] group-hover:text-[#2563EB] transition-colors truncate whitespace-nowrap">
            {review.clientName}
          </h4>
          {review.role && (
            <p className="text-[11px] text-[#6f7174] truncate whitespace-nowrap leading-none mt-0.5">
              {review.role}
            </p>
          )}
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] shrink-0 whitespace-nowrap">
          {review.serviceLabel}
        </span>
      </div>
    </div>
  );
};
