import React from "react";

interface HouseInfoSectionProps {
  title: string;
  content: string;
}

const HouseInfoSection: React.FC<HouseInfoSectionProps> = ({
  title,
  content,
}) => {
  return (
    <p className="mb-2 font-got text-lg text-red-700 textcenter">
      {title}: {content}
    </p>
  );
};

export default HouseInfoSection;
