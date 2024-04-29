import React from "react";

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  onClick,
  children,
}) => {
  const baseClassName =
    "text-brownCust hover:text-white border hover:border-brownCust border-lightGray hover:bg-gradient-to-b from-brownCust to-orangeCust focus:outline-none font-medium text-md px-5 py-2.5 text-center me-0 ms:me-2 mb-2 rounded-full";
  const activeClassName =
    "text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-0 md:me-2 mb-2 rounded-full";
  const className = isActive ? activeClassName : baseClassName;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default TabButton;
