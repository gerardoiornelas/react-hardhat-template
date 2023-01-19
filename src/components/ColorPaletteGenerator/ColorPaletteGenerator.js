import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? (
        <img src={URL.createObjectURL(image)} alt="Uploaded" />
      ) : (
        <p>
          {isDragActive
            ? "Drop the image here..."
            : "Drag and drop an image, or click to select a file"}
        </p>
      )}
    </div>
  );
}

export default ImageUploader;
