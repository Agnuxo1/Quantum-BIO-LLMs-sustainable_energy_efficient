from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

with open("requirements.txt", "r", encoding="utf-8") as fh:
    requirements = [line.strip() for line in fh if line.strip() and not line.startswith("#")]

setup(
    name="quantum_bio_llms",
    version="0.1.0",
    author="Francisco Angulo de Lafuente",
    author_email="francisco.angulo@quantum-bio.edu",
    description="Advanced Quantum-Biological Language Model System",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Agnuxo1/Quantum_BIO_LLMs",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
    ],
    python_requires=">=3.8",
    install_requires=requirements,
)