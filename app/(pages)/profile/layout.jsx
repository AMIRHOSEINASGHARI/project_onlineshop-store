import React from "react";
import DesktopLayout from "@/components/layout/DesktopLayout";
import MobileLayout from "@/components/pages/profile/MobileLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";

const ProfileLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div className="pagePT mobilePx mobilePb mw2">
      <MobileLayout>{children}</MobileLayout>
      <DesktopLayout>{children}</DesktopLayout>
    </div>
  );
};

export default ProfileLayout;
