"use client";

interface LoadingOverlayProps {
  isLoading: boolean;
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 9999
      }}
    >
      <div className="bg-white rounded-2xl p-12 shadow-2xl max-w-md w-full mx-4">
        <div className="flex flex-col items-center gap-6">
          {/* Travel Path Animation */}
          <div className="relative w-64 h-32">
            {/* Road/Path */}
            <svg className="w-full h-full" viewBox="0 0 256 128" preserveAspectRatio="none">
              {/* Road background */}
              <path
                d="M 20 64 Q 64 32, 128 64 T 236 64"
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              {/* Animated road line */}
              <path
                d="M 20 64 Q 64 32, 128 64 T 236 64"
                stroke="#0446A1"
                strokeWidth="4"
                fill="none"
                strokeDasharray="20 10"
                strokeLinecap="round"
                style={{
                  strokeDashoffset: 0,
                  animation: 'dash 2s linear infinite'
                }}
              />
            </svg>
            
            {/* Moving Car */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2" style={{ animation: 'travel 3s ease-in-out infinite' }}>
              <svg width="48" height="32" viewBox="0 0 48 32" className="drop-shadow-lg">
                {/* Car body */}
                <rect x="4" y="12" width="40" height="16" rx="2" fill="#0446A1" />
                {/* Car windows */}
                <rect x="10" y="14" width="12" height="8" rx="1" fill="#87CEEB" />
                <rect x="26" y="14" width="12" height="8" rx="1" fill="#87CEEB" />
                {/* Wheels */}
                <circle cx="12" cy="28" r="4" fill="#1F2937" />
                <circle cx="36" cy="28" r="4" fill="#1F2937" />
                <circle cx="12" cy="28" r="2" fill="#6B7280" />
                <circle cx="36" cy="28" r="2" fill="#6B7280" />
              </svg>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="text-gray-800 font-semibold text-lg mb-2">Preparing Your Journey</p>
            <p className="text-gray-600 text-sm">Loading your experience...</p>
          </div>

          {/* Animated Dots */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#0446A1] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-[#0446A1] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[#0446A1] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

    </div>
  );
}

