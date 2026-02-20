import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-4">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-[#9CA3AF] text-lg mb-8">
     Let’s transform your business challenges into scalable, high-impact software solutions.
        </p>
        <button className="bg-[#2B7BE9] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg">
          Schedule a Call
          {/* <ArrowRight size={20} /> */}
        </button>
      </div>
    </section>
  );
};
