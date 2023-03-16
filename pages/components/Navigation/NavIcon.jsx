/**
 * Adds styling to icon
 * @param {*} <icon name>
 * @returns styled icon
 */

export default function NavIcon({ children }) {
  return (
    <div className="rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
      {children}
    </div>
  );
} 