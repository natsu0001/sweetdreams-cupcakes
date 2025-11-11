interface Props {
  href: string;
  label: string;
  className?: string;
}
const BtnLink = ({ href, label, className = '' }: Props) => {
  return (
    <a
      href={href}
      className={`px-5 py-2 rounded-xl shadow-md transform transition-transform duration-300
                    hover:scale-105 ${className}`}
    >
      <span>{label}</span>
    </a>
  );
};

export default BtnLink;
