"""
Tests for Quantum Simulation Module
"""

import pytest
import numpy as np
from src.quantum.simulator import QuantumSimulator

def test_quantum_simulator_initialization():
    simulator = QuantumSimulator(n_qubits=4, coherence_time=1.0)
    assert simulator.n_qubits == 4
    assert simulator.coherence_time == 1.0
    assert simulator.quantum_circuit is not None

def test_holographic_encoding():
    simulator = QuantumSimulator(n_qubits=4, coherence_time=1.0)
    test_data = np.random.random(4)
    simulator.apply_holographic_encoding(test_data)
    # Add assertions for encoding verification