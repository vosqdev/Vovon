import { motion } from 'motion/react';

const ImageDivider = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.image2url.com/r2/default/images/1788463202989-92b16808-dc29-4225-8d51-61c6ca688e6b.png"
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
