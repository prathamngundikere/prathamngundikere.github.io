---
title: Understanding Algorithms - The Backbone of Computer Programs
date: 2024-06-17 08:00:00 +0530
categories: [Algorithms]
tags: [algorithms, problem-solving, programming-basics]
image: /assets/img/abc.png
---

Algorithms are at the core of all computer programs. There are no computer programs without algorithms. In simpler terms, creating an algorithm is a significant endeavor in computer science. It’s often said that you don’t truly understand something until you can teach it to someone else — in this case, the “someone else” is a computer.

> _Algorithm_ is a sequence of unambiguous instructions for solving a problem for obtaining a required output for any legitimate input in finite amount of time. 
{: .prompt-tip}

## Properties of Algorithms

1. **Non-ambiguity**: Each step in an algorithm must be unambiguous, meaning every instruction should be clear and precise.

2. **Range of Input**: The range of input values must be specified.

3. **Multiplicity**: The same algorithm can be represented in various ways.

4. **Speed**: An algorithm should be fast and efficient while producing the correct output.

5. **Finiteness**: An algorithm must be finite; it should terminate after performing the required operations.

## Fundamentals of Algorithmic Problem Solving

1. **Understand the Problem**: Before designing an algorithm, thoroughly understand the problem.

2. **Ascertain the Capabilities of the Computational Device**: Ensure you understand the capabilities of the device the algorithm will run on.

3. **Choose Between Exact and Approximate Problem Solving**: Decide if the problem requires an exact solution or if an approximation is sufficient.

4. **Algorithm Design Techniques**: Learn different techniques to design effective algorithms.

5. **Designing an Algorithm and Data Structures**: Create an algorithm and choose appropriate data structures.

6. **Methods for Specifying an Algorithm**: Learn ways to clearly specify the algorithm.

7. **Proving Algorithm Correctness**: Prove that your algorithm works correctly.

8. **Analyzing an Algorithm**: Analyze the efficiency and effectiveness of your algorithm.

9. **Coding an Algorithm**: Finally, write the algorithm in code.

# Writing an Algorithm

An algorithm has two main sections: the head section and the body section.

**Head Section**:
1. Problem Description
2. Input
3. Output

**Body Section**:
This contains the main logic of the algorithm.

> Comments are added using `//` for single-line comments, and values are assigned to variables using the `⬅` (left arrow) operator.
{: .prompt-info}

### Example Algorithm

```text
// This algorithm finds the sum of given n numbers
// Input: n value
// Output: The sum of n numbers
    result ⬅ 0
    for i ⬅ 1 to n do 
        result ⬅ result + 1
    return result
```
