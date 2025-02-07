const GlitchText = ({ children }: { children: React.ReactNode}) => {
  return <span className="glitch" data-text={children}>{children}</span>;
}

export default GlitchText;