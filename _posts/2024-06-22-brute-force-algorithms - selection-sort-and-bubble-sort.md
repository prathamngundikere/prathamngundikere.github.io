---
title: Brute Force Algorithms - Selection Sort and Bubble Sort
date: 2024-06-22 08:00:00 +0530
categories: [Algorithms]
tags: [algorithms, problem-solving, programming-basics, brute-force, selection-sort, bubble-sort]
---

Brute force typically involves iterating through all possible options to find a solution. While brute force methods are not always the most efficient, they are often simple and easy to understand. In this blog post,  I will explain two classic examples of brute force algorithms: Selection Sort and Bubble Sort. These sorting algorithms are fundamental to computer science and are excellent examples of how brute force approaches work.

> _Brute force_ is a straightforward approach to solving a problem, usually directly based on the problem statement and definitions of the concepts involved.
{: .prompt-tip}

## Selection Sort: Finding the Smallest Element

Selection Sort is a basic algorithm used to sort an array of elements in non-decreasing order. The idea is simple: find the smallest element in the array and move it to the beginning. Then, repeat the process for the rest of the array. Here's a step-by-step breakdown of the Selection Sort algorithm:

1. **Initialize**: Start with the first element of the array. This element is considered the minimum.
2. **Find the Minimum**: Scan the entire array to find the smallest element.
3. **Swap**: Swap the smallest element with the first element of the array.
4. **Repeat**: Move to the next element and repeat the process until the entire array is sorted.

Here’s how the Selection Sort algorithm looks in pseudocode:

**ALGORITHM** SelectionSort(A[0..n−1])

```
//Sorts a given array by selection sort 
//Input: An array A[0..n−1] of orderable elements 
//Output: Array A[0..n−1] sorted in nondecreasing order 
  for i←0 to n−2 do 
    min←i 
  for j←i+1 to n−1 do 
    if A[j]<A[min] min←j 
  swap A[i] and A[min]
```

### Example of Selection Sort

Let's consider an example array: [89, 45, 68, 90, 29, 34, 17]. We'll walk through the Selection Sort algorithm step by step.

* **First Pass**: Find the smallest element (17) and swap it with the first element.
Array after first pass: [17, 45, 68, 90, 29, 34, 89]
* **Second Pass**: Find the smallest element in the remaining array (29) and swap it with the second element.
Array after second pass: [17, 29, 68, 90, 45, 34, 89]
* **Third Pass**: Find the smallest element in the remaining array (34) and swap it with the third element.
Array after third pass: [17, 29, 34, 90, 45, 68, 89]
* Continue this process until the entire array is sorted.

## Bubble Sort: Swapping Adjacent Elements

Bubble Sort is another simple brute force sorting algorithm. It works by repeatedly comparing and swapping adjacent elements if they are in the wrong order. This process "bubbles up" the largest elements to the end of the array. Here’s the step-by-step process for Bubble Sort:

1. **Initialize**: Start with the first element of the array.
2. **Compare and Swap**: Compare adjacent elements. If they are in the wrong order, swap them.
3. **Repeat**: Continue this process for all elements. After each pass, the next largest element is in its final position.
4. **Iterate**: Repeat the process for the remaining elements until the entire array is sorted.

Here’s how the Bubble Sort algorithm looks in pseudocode:

**ALGORITHM** BubbleSort(A[0..n−1])

```
//Sorts a given array by bubble sort 
//Input: An array A[0..n − 1] of orderable elements 
//Output: Array A[0..n − 1] sorted in nondecreasing order 
  for i ← 0 to n−2 do 
    for j ← 0 to n−2−i do 
      if A[j +1] < A[j] swap A[j] and A[j +1]
```

### Example of Bubble Sort

Using the same example array: [89, 45, 68, 90, 29, 34, 17], we’ll demonstrate Bubble Sort.

* **First Pass**: Compare each pair of adjacent elements and swap if necessary.
Array after first pass: [45, 68, 89, 29, 34, 17, 90]
* **Second Pass**: Repeat the process, excluding the last element.
Array after second pass: [45, 68, 29, 34, 17, 89, 90]
* **Third Pass**: Repeat the process, excluding the last two elements.
Array after third pass: [45, 29, 34, 17, 68, 89, 90]
* Continue this process until the entire array is sorted.

## Conclusion

Both Selection Sort and Bubble Sort are simple, easy-to-understand brute force algorithms. However, they are not the most efficient sorting methods, especially for large datasets. Selection Sort has a time complexity of O(n^2) due to the nested loops, and Bubble Sort also has a time complexity of O(n^2) for the same reason.

Despite their inefficiencies, these algorithms are excellent for educational purposes and small datasets. Understanding how they work provides a solid foundation for learning more advanced sorting techniques like Quick Sort and Merge Sort.

In my next blog post, I will be get into brute force searching algorithms.
