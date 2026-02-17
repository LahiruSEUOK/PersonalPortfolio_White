import {
  Hero,
  Stats,
  About,
  Services,
  Projects,
  Benefits,
  CTA,
} from '../components';
import { MainLayout } from '../components/MainLayout';

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Benefits />
      <CTA />
    </MainLayout>
  );
};
