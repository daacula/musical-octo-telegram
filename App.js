import { StatusBar } from 'expo-status-bar';
import React from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return <RootStack />;   
}

