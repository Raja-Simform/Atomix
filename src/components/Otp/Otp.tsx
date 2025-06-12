import { useRef, useState, useEffect } from "react";

interface OtpProps {
  SentOtp: string;
}

export default function Otp({ SentOtp }: OtpProps) {
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [verified, setVerified] = useState<boolean | null>(null);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;

    setOtpValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (!((e.key >= "0" && e.key <= "9") || e.key === "Backspace")) {
      e.preventDefault();
    }
    if (e.key === "Backspace") {
      if (!otpValues[index] && index > 0) {
        e.preventDefault();
        setOtpValues((prev) => {
          const newValues = [...prev];
          newValues[index - 1] = "";
          return newValues;
        });
        inputRefs.current[index - 1]?.focus();
      }
    }
  }

  useEffect(() => {
    const currentOtp = otpValues.join("");
    if (currentOtp.length === 4) {
      if (currentOtp === SentOtp) {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } else {
      setVerified(null);
    }
  }, [otpValues, SentOtp]);

  return (
    <div
      className="flex justify-center p-4 gap-3 items-center min-h-screen
    bg-gray-900 text-white font-mono"
    >
      {otpValues.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`border-2 w-20 h-20 text-2xl text-center
            bg-gray-800 rounded-md focus:outline-none 
            ${
              verified === true && index === 3
                ? "border-green-500 focus:ring-green-500"
                : verified === false && index === 3
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-700 focus:ring-blue-500"
            }
            caret-transparent`}
        />
      ))}
      {verified !== null && (
        <p
          className={`absolute bottom-8 text-lg ${
            verified ? "text-green-500" : "text-red-500"
          }`}
        >
          {verified ? "OTP Verified!" : "Incorrect OTP"}
        </p>
      )}
    </div>
  );
}
