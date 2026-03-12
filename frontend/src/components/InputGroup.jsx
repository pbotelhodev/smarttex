const InputGroup = ({ label, placeholder, defaultValue }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
      {label}
    </label>
    <input
      type="text"
      className="input-bunker px-3 py-2.5 text-sm rounded-none"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  </div>
);
export default InputGroup;
