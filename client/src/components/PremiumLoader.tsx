import { useEffect, useState } from 'react';

export default function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-spin">
          <div className="absolute inset-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-800/20 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-20 text-center">
        <div className="text-2xl font-bold gradient-text mb-4">Loading Experience</div>
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" style={{width: '100%', animation: 'loading-bar 2s ease-out forwards'}}></div>
        </div>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}