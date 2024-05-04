import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggendIn = false;
  return isLoggendIn ? (
    <div>
      <div>{children}</div>
      <div className="flex gap-5 overflow-hidden shadow-md">
        <div className="w-full flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{login}</div>
        </div>
        <div className="flex flex-1 gap-5">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
