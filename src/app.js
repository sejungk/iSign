import React from "react";
import { getApps } from 'firebase/app';

export default function App() {
  const firebaseApp = getApps()[0]
  return (
    <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}