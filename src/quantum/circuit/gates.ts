/**
 * Quantum Gate Implementation
 */

export interface QuantumGate {
  type: string;
  qubits: number[];
  parameters?: number[];
}

export class GateFactory {
  static createHadamard(qubit: number): QuantumGate {
    return { type: 'H', qubits: [qubit] };
  }

  static createCNOT(control: number, target: number): QuantumGate {
    return { type: 'CNOT', qubits: [control, target] };
  }
}