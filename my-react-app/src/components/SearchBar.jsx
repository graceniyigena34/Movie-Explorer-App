export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      className="w-full p-2 mb-4 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-accent outline-none"
    />
  );
}
