import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Let's discuss how I can help transform your business vision into reality.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg">
          Schedule a Call
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
