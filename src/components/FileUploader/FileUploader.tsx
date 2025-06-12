import { useRef } from "react";

interface FileUploaderProps {
  accept: string;
  maxSize: number;
  onUpload: (files: File[]) => void;
}
export default function FileUploader({
  accept,
  maxSize,
  onUpload,
}: FileUploaderProps) {
  const filetype = accept.split(",").map((type) => type.trim());
  const fileRef = useRef<HTMLInputElement | null>(null);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    const isAcceptedType = filetype.some((type) => {
      if (type.startsWith(".")) {
        const fileExtension = "." + file.name.split(".").pop();
        return fileExtension.toLowerCase() === type.toLowerCase();
      } else if (type.includes("/")) {
        return file.type === type;
      }
      return false;
    });
    const isAcceptedSize = file.size <= maxSize;
    if (isAcceptedSize && isAcceptedType) {
      onUpload([file]);
    } else {
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      if (!isAcceptedType) {
        alert(`Please upload a file of an accepted type: ${accept}`);
      } else if (!isAcceptedSize) {
        alert(
          `Please upload a file smaller than ${maxSize / (1024 * 1024)} MB.`
        );
      } else {
        alert("Please upload a correct file (type or size invalid).");
      }
    }
  }
  return (
    <div
      className="flex justify-center p-4  items-center j min-h-screen
    bg-gray-900 text-white font-mono"
    >
      <input
        type="file"
        onChange={handleChange}
        className="border-2 p-4"
        ref={fileRef}
      />
    </div>
  );
}
