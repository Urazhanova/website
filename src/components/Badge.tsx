interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="inline-flex items-center px-6 py-3 bg-white rounded-xl text-sm font-semibold text-primary shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-default border border-transparent hover:border-primary/10">
      {children}
    </div>
  );
};

export default Badge;
