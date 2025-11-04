import React from "react";

interface FolhagemProps {
  className?: string;
}

const Folhagem: React.FC<FolhagemProps> = ({ className }) => (
  <img src="/illustrations/folhagem1.svg" alt="folhagem" className={className} />
);

export default Folhagem;
