'use client';
import React, { useState, useEffect } from 'react'

const TestRoute = () => {

  const [test, setTest] = useState('');
  
  const getTestData = async () => {
    try {
      const response = await fetch('/api/test');
      // console.log('fetch response', response);
      const data = await response.json();
      // console.log('data.message: ', data.message);
      setTest(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div>{test}</div>
  )
}

export default TestRoute