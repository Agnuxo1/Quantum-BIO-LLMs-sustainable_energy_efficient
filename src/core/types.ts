/**
 * Core type definitions
 */

export interface QuantumConfig {
  qubits: number;
  coherenceTime: number;
  optimizationLevel: number;
}

export interface NeuralConfig {
  layers: number[];
  activationFunction: string;
  learningRate: number;
  adaptationRate: number;
}

export interface MemoryConfig {
  dimensions: number;
  capacity: number;
  retrievalThreshold: number;
}

export interface SystemConfig {
  quantum: QuantumConfig;
  neural: NeuralConfig;
  memory: MemoryConfig;
}