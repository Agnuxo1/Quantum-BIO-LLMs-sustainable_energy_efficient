/**
 * Default configuration values
 */

import { SystemConfig } from './types';

export const DEFAULT_CONFIG: SystemConfig = {
  quantum: {
    qubits: 8,
    coherenceTime: 1000,
    optimizationLevel: 2
  },
  neural: {
    layers: [128, 256, 128],
    activationFunction: 'relu',
    learningRate: 0.001,
    adaptationRate: 0.01
  },
  memory: {
    dimensions: 512,
    capacity: 1000000,
    retrievalThreshold: 0.85
  }
};