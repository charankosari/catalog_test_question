# Secret Sharing Test

## Overview

This project demonstrates a solution for a secret sharing problem using Lagrange interpolation. The concept is inspired by polynomial interpolation, where secret data is distributed among multiple participants, and a specific number of shares are required to reconstruct the original secret.

### Problem Statement

The goal is to compute the value of a polynomial at a certain point using Lagrange interpolation. The provided JSON file contains data points that need to be processed to achieve this goal. Specifically, the tasks are:

1. **Convert Base-Specific Values**: Convert numeric values given in various bases to decimal.
2. **Apply Lagrange Interpolation**: Calculate the value of the polynomial at `x = 0` using the converted data points.

### JSON Structure

The JSON file follows this structure:

```json
{
    "0": {"base": 10, "value": "5"},
    "1": {"base": 10, "value": "10"},
    "2": {"base": 10, "value": "15"},
    "keys": {"k": 3}
}