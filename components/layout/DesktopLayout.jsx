import React from "react";

const DesktopLayout = ({ children }) => {
  return (
    <div className="max-lg:hidden">
      <main>{children}</main>
      <aside></aside>
    </div>
  );
};

export default DesktopLayout;
