'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { centralizedReviews } from '../../data/reviewsData';
import { ReviewSlider } from '../ui/ReviewSlider';

interface ReviewsSectionProps {
  serviceFilter?: 'website' | 'mobile' | 'desktop' | 'automation';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  serviceFilter,
  title,
  subtitle,
  className = '',
}) => {
  const filteredReviews = serviceFilter
    ? centralizedReviews.filter((r) => r.service === serviceFilter)
    : centralizedReviews;

  if (filteredReviews.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e9ecef] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          category="Client Feedback"
          title={title || (serviceFilter ? 'Client Endorsements For This' : 'Verified Client & Team')}
          highlight={serviceFilter ? 'Specialty.' : 'Endorsements.'}
          highlightColor="orange"
          description={
            subtitle ||
            'Direct feedback from clients and engineering collaborators regarding code quality, reliability, and communication.'
          }
        />

        <ReviewSlider reviews={filteredReviews} />
      </div>
    </section>
  );
};

