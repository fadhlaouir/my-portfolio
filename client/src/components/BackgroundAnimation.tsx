export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient blobs */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
        <div className="animate-float opacity-30">
          <div className="w-96 h-96 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full">
        <div className="animate-float opacity-20" style={{ animationDelay: '-3s' }}>
          <div className="w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-full h-full">
        <div className="animate-float opacity-25" style={{ animationDelay: '-6s' }}>
          <div className="w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-300/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}