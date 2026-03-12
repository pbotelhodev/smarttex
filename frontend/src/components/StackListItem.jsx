const StackListItem = ({ label, desc }) => (
  <li className="flex flex-col border-l border-white/10 pl-3">
    <span className="text-sm font-bold text-slate-300 font-mono">{label}</span>
    <span className="text-xs text-slate-500">{desc}</span>
  </li>
);

export default StackListItem;