---
title: Sequential Search and Brute Force String Matching
date: 2024-06-22 08:00:00 +0530
categories: [Algorithms]
tags: [algorithms, problem-solving, programming-basics, sequential-search, string-matching]
---

Sequential search is the easiest way to search anything in a sequential list such as ‘Array’. In this post let’s go deeper in the topic and explore more.

## Sequential Search

In this algorithm the search element is compared with all the elements in the array one by one, until it successful or at end of the list.

Here is the psudocode for the same:

**ALGORITHM** _Sequential Search_(A[0..n], K)

```
// Implements sequential search with a search key as a sentinel
// Input: An array A of n elements and a search key K
// Output: The index of the first element in the A[0..n-1] whose value is 
//      equal to K or -1 if no such element is found
A[n] ⬅ K
i ⬅ 0
while A[i] != K do
    i ⬅ i + 1
if i < n return i
else return -1
```

## Brute-Force Sting Matching

It works by pattern matching kind of technique. Below I will explain how it works in detail, and every point is important read carefully:

1. First element of the given array is compared with the first element of the search array. 
2. If the array does not match, now the second element of given array is compared with first element of the search array.
3. In case if the array matches then then the post elements of both the array checked. 

Here is the psudo code for better understanding

**ALGORITHM** _BruteForceStringMatch_(T[0..n-1], P[0..m-1])

```
//Implements brute-force string matching
//Input: An array T [0..n − 1] of n characters representing a text and
// an array P[0..m − 1] of m characters representing a pattern
//Output: The index of the first character in the text that starts a
// matching substring or −1 if the search is unsuccessful
for i ← 0 to n − m do
    j ← 0
    while j <mand P[j ]= T [i + j ] do
        j ←j + 1
    if j = m return i
return −1
```