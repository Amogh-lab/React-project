import React, { useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const DiseaseRecognition = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);  
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handlePredict = async () => {
    if (imageFile) {
      console.log("Uploading file:", imageFile);
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", imageFile);

      try {
        const response = await fetch("http://127.0.0.1:5000/detect", {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error("File upload failed");
        }

        const result = await response.json();
        const class_name = result.prediction;
        setPrediction(`Model is predicting it's a ${class_name}`);
      } catch (error) {
        setPrediction(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      setPrediction('Please upload an image first.');
    }
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="file-input-container" style={{ padding: '20px' }}>
      <label htmlFor="file-upload" className="file-input-label">
        Choose File
        </label> 
        <h2>Disease Recognition</h2>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded" width="400" style={{ marginTop: '20px' }} />}
        <button onClick={handlePredict} style={{ marginTop: '20px' }}>Predict</button>
        {isLoading ? <p>Loading...</p> : prediction && <p>{prediction}</p>}
      </div>
    </div>
  );
};

export default DiseaseRecognition;
