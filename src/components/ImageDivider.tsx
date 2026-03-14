import { motion } from 'motion/react';

const ImageDivider = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://image2url.com/r2/default/images/1773505071715-7820ce8f-6c91-490c-a7e1-44ea94120ce3.png"
          alt="VOVON Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-slate-900/40" />
      </div>
    </section>
  );
};

export default ImageDivider;
