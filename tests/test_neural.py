"""
Tests for Bio-Inspired Neural Network Module
"""

import pytest
import torch
from src.neural.bio_layer import BioInspiredLayer

def test_bio_layer_initialization():
    layer = BioInspiredLayer(input_dim=10, output_dim=5)
    assert layer.weights.shape == (10, 5)
    assert isinstance(layer.adaptation_rate, float)

def test_forward_pass():
    layer = BioInspiredLayer(input_dim=10, output_dim=5)
    input_tensor = torch.randn(32, 10)
    output = layer(input_tensor)
    assert output.shape == (32, 5)
    # Add assertions for output properties