'use client';

import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { Process } from '../components/sections/Process';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Process />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
};
