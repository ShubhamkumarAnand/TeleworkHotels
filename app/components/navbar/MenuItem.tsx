"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

// This component is for the menu item which consists of the LogIn and SignIn in the dropdown menu

const MenuItems: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
    >
      {label}
    </div>
  );
};
export default MenuItems;
