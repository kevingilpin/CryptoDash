import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Content from '../Shared/Content';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Dashboard />
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
