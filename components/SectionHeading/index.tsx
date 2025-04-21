import React from "react";

const SectionHeading = ({ text, index }: { text: string; index: number }) => {
  return (
    <h3 className="text-heading text-primary text-4xl font-semibold mt-2 mb-10">
      {text}
    </h3>
  );
};

export default SectionHeading;
