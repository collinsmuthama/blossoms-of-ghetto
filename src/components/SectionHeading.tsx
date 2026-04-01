interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? "bg-secondary" : "bg-primary"}`} />
  </div>
);

export default SectionHeading;
