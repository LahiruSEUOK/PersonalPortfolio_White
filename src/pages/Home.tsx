import {
  Layout,
  Navbar,
  Hero,
  Stats,
  About,
  Services,
  Projects,
  Benefits,
  CTA,
  Footer,
} from '../components';

export const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Benefits />
      <CTA />
      <Footer />
    </Layout>
  );
};
