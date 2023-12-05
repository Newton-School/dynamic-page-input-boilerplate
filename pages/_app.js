import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const data = [
    { "id": 1, "name": "Lucas Dupont", "age": 31, "department": "Blue" },
    { "id": 2, "name": "Juan Martinez", "age": 28, "department": "Green" },
    { "id": 3, "name": "Juan Martinez", "age": 52, "department": "Yellow" },
    { "id": 4, "name": "Maria Garcia", "age": 26, "department": "Orange" },
    { "id": 5, "name": "Alice Johnson", "age": 39, "department": "Purple" },
    { "id": 6, "name": "Mohammed Ali", "age": 41, "department": "Pink" },
    { "id": 7, "name": "Aisha Khan", "age": 37, "department": "Brown" },
    { "id": 8, "name": "David Smith", "age": 34, "department": "Black" },
    { "id": 9, "name": "Ananya Singh", "age": 52, "department": "White" },
    { "id": 10, "name": "Ananya Singh", "age": 40, "department": "Gray" },
    { "id": 11, "name": "Aisha Khan", "age": 48, "department": "Cyan" },
    { "id": 12, "name": "Alice Johnson", "age": 55, "department": "Magenta" },
    { "id": 13, "name": "Maria Garcia", "age": 32, "department": "Lime" },
    { "id": 14, "name": "Sofia Rossi", "age": 54, "department": "Maroon" },
    { "id": 15, "name": "Yuki Tanaka", "age": 53, "department": "Red" }
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);




  const contextValue = {


  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
