---
title: 6 Essential Jetpack Compose Layout Elements You Need to Know
date: 2024-06-24 08:00:00 +0530
categories: [Android Development, Jetpack Compose]
tags: [android, jetpack-compose, box, column, row, constraint-layout, lazy-column, lazy-row, scaffold, spacer, surface, card, divider, flow-row, flow-column, lazy-vertical-grid, scrollable-row, scrollable-column, vertical-scroll, horizontal-scroll, stack, bow-with-constraints, custom-layout]
---

Jetpack Compose is a modern toolkit for building native Android UI, It simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs. One of the key aspects of creating UI with Jetpack Composeis understanding its various layout elements. In this blog, we'll explore 6 essential layout elements in Jetpack Compose - let's get to it.

## 1. Box

The `Box` layout in Jetpack Compose is one of the most frequently used layouts. Its is super easy to implement and modifiy as per our needs.
Its allows stacking children on top of each other.

```kotlin
Box(
    modifier = Modifier
        .size(200.dp)
        .padding(16.dp) // For padding
        .background(Color.Blue) // Background Color
        .border(2.dp, Color.Black) // For Border
    ) {
    Text(
        "Top Start",
        modifier = Modifier
             .align(Alignment.TopStart)
    )
    Text(
        "Center",
        modifier = Modifier
             .align(Alignment.Center)
    )
    Text(
        "Bottom End",
        modifier = Modifier
             .align(Alignment.BottomEnd)
    )
}
```

## 2. Column and Row

`Rows` arranges its childern in  horizontal sequence.

`Column` arranges its childern in a vertical sequence.

```kotlin
@Composable
fun RowAndColumnExample() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        Text(
            text = "Item 1",
            modifier = Modifier
                .weight(1f)
        )
        Text(
            text = "Item 2",
            modifier = Modifier
                .weight(1f)
        )
        Text(
            text = "Item 3",
            modifier = Modifier
                .weight(1f)
        )
    }
    Column(
        modifier = Modifier
            .fillMaxHeight()
            .padding(16.dp)
    ) {
        Text(text = "Item A")
        Text(text = "Item B")
        Text(text = "Item C")
    }
}
```

## 3. LazyColumn and LazyRow

* `LazyColumn` displays a vertical list of items efficiently.

* `LazyRow` displays a horizontal list of items efficiently.

```kotlin
@Composable
fun LazyColumnExample() {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        items(100) {index ->
            Text(
                text = "Item $index",
                modifier = Modifier
                    .padding(8.dp)
            )
        }
    }
}
```

```kotlin
@Composable
fun LazyRowExample() {
    LazyRow(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        items(100) {index ->
            Text(
                text = "Item $index",
                modifier = Modifier
                    .padding(8.dp)
            )
        }
    }
}
```

## 4. Scaffold

`Scaffold` is a layout structure that provides alots for common material design components such as TopAppBar, BottomAppBar, FloatingActionButton, and Drawer.

```kotlin
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ScaffoldExample() {
    Scaffold(
        topBar = {
            TopAppBar(title = {
                Text(text = "Scaffold Example")
            })
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { /*TODO*/ }) {
                Icon(imageVector = Icons.Default.Add, contentDescription = null)
            }
        },
        content = { padding -> 
            Column(
                modifier = Modifier
                    .padding(padding)
                    .fillMaxSize()
            ) {
                Text(text = "Content goes here")
            }
        }
    ) 
}
```

## 5. Spacer

* `Spacer` is a simple layout component that takes up space in a row, column or other layout.

```kotlin
@Composable
fun SpacerExample() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        Text(text = "Start")
        Spacer(
            modifier = Modifier
                .width(16.dp)
        )
        Text(text = "End")
    }
}
```

## 6. Surface

* `Surface` is a composable that can be used to draw backgrounds and add elevation and shape.

```kotlin
@Composable
fun SurfaceExample() {
    Surface(
        modifier = Modifier
            .size(100.dp),
        color = Color.LightGray,
        shape = RoundedCornerShape(8.dp)
    ) {
        Text(
            text = "Surface",
            modifier = Modifier
                .padding(16.dp)
        )
    }
}
```
