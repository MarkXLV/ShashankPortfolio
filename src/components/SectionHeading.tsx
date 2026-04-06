interface SectionHeadingProps {
  title: string;
  gradient: string;
  subtitle?: string;
}

export default function SectionHeading({ title, gradient, subtitle }: SectionHeadingProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const prefix = words.join(' ');

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {prefix && <>{prefix} </>}
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
          {lastWord}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
