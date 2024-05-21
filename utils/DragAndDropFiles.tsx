'use client';
import { UploadIcon } from '@/components/Icons/Icons';
import React, {
  FC,
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';

interface DragAndDropFilesProps {
  formats: string[];
  onChange: (file: any) => void;
}

const DragAndDropFiles: FC<DragAndDropFilesProps> = ({ formats, onChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelection = (selectedFile: File) => {
    if (formats.includes(selectedFile.type)) {
      setSelectedFile(selectedFile);
      onChange(selectedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleDragDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
      e.dataTransfer.clearData();
    },
    [formats],
  );

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragDrop}
      className="border border-dashed border-pale-blue w-full h-xs hover:border-coral-red hover:bg-light-blue transition-colors duration-200 flex flex-col justify-center items-center"
    >
      <UploadIcon />
      <span>
        Drop file here, or{' '}
        <span onClick={handleClick} className="text-coral-red cursor-pointer">
          browse
        </span>
      </span>
      <input
        title="file upload"
        ref={fileInputRef}
        type="file"
        onChange={handleFileInput}
        accept={formats.join(',')}
        className="hidden"
      />
    </div>
  );
};

export default DragAndDropFiles;
