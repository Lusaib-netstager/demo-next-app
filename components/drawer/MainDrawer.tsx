"use server";

import Link from "next/link";

/**
 * @author Lusaib Latheef
 * @description the main drawer component for the application.
 * @since 02-07-2024
 */
export default async function MainDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    "https://mocki.io/v1/99b33a70-3848-4e08-93d4-3080e9dea62a"
  );
  const data = await response.json();
  const sidebarItems: {
    id: number;
    name: string;
    to: string;
  }[] = data.data?.sidebarData || [];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link href={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
