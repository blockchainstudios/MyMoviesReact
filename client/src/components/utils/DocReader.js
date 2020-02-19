import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import '../../styles/DocReader.scss';

function DocReader(document) {
  const [OCR, setOCR] = useState('Recognizing...');

  useEffect(() => {
    performOCR();
  });

  // Create OCR worker object
  const worker = createWorker({
    logger: m => console.log(m)
  });
  // Perform OCR on document
  const performOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const {
      data: { text }
    } = await worker.recognize(document);
    setOCR(text);
  };

  return (
    <div className='contract-document'>
      <div className='card'>
        <h4>Fill this out with templated stuff...</h4>
      </div>
    </div>
  );
}

export default DocReader;
