const BgEffect = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Stars */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-30 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {/* Meteors */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`meteor-${i}`}
          className="absolute w-[1px] h-[120px] bg-white opacity-20 animate-meteor-fall"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            transform: "rotate(-45deg)",
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BgEffect;
