'use client';
import React, { useState, useEffect } from 'react'

const TestRoute = () => {

  const [test, setTest] = useState('');
  
  const getTestData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setTest(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div>{test.toString()}</div>
  )
}

export default TestRoute