import React, { useRef, useEffect } from "react";
import Script from "next/script";

interface CloudflareTurnstileProps {
  onSuccess?: (token: string) => void;
  onError?: (error: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  className?: string;
}

const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({
  onSuccess,
  onError,
  onExpire,
  theme = "auto",
  size = "normal",
  className = "",
}) => {
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global callback functions
    (
      window as unknown as { turnstileCallback: (token: string) => void }
    ).turnstileCallback = (token: string) => {
      onSuccess?.(token);
    };

    (
      window as unknown as { turnstileErrorCallback: (error: string) => void }
    ).turnstileErrorCallback = (error: string) => {
      onError?.(error);
    };

    (
      window as unknown as { turnstileExpireCallback: () => void }
    ).turnstileExpireCallback = () => {
      onExpire?.();
    };
  }, [onSuccess, onError, onExpire]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <div
        ref={turnstileRef}
        className={`cf-turnstile ${className}`}
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-callback="turnstileCallback"
        data-error-callback="turnstileErrorCallback"
        data-expired-callback="turnstileExpireCallback"
        data-theme={theme}
        data-size={size}
      />
    </>
  );
};

export default CloudflareTurnstile;
