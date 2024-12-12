import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Brun Moussiesse`,
    job: "Founder"
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="Since our inception, we’ve aimed to push the boundaries of what’s possible in 3D visualization. Our team’s dedication and expertise make us a trusted partner for clients across various sectors."
        contact="info@real3dspacescan.com"
      >
        Team
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
