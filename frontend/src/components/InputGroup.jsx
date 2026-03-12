import { forwardRef } from "react"; 


const InputGroup = forwardRef(
  ({ label, placeholder, defaultValue, ...rest }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
        {label}
      </label>
      <input
        ref={ref} 
        {...rest} 
        type="text"
        className="input-bunker px-3 py-2.5 text-sm rounded-none"
        placeholder={placeholder}
        defaultValue={label === "Nome Completo *" ? defaultValue : undefined}
      />
    </div>
  ),
);

export default InputGroup;
