const ContactItem = ({ icon, label, value, sub }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-[#14181F] p-3 rounded-full border border-white/5 text-slate-400">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-sm font-grotesk">{label}</h4>
      <p className="text-slate-400 font-mono text-sm">{value}</p>
      {sub && <p className="text-slate-600 text-xs mt-1">{sub}</p>}
    </div>
  </div>
);

export default ContactItem;
