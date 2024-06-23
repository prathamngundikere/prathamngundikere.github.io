---
title: Getting Started with Jetpack Compose - A Beginner's Guide
date: 2024-06-23 08:00:00 +0530
categories: [Android Development, Jetpack Compose]
tags: [android, jetpack-compose]
image: /assets/img/jetpack-compose.png
---

Jetpack Compose is a modern toolkit for building native Android UI. It is based on declarative programming model, so you can simply describe what your UI should look like, and compose takes care of the rest.

Before Jetpack compose android developers were using `XML` to describe their UI. With Jetpack Compose I can say it now completely outdated. A honest answer is I hated `XML` and it was terrible and not much fun using it. Now we write UI and logic in _Kotlin_, we now do everything in kotlin.

If you are still using Java, and get more deep into the native Android Development, it's time to learn Kotlin. There are many resouces out there, check them out.

Now let's get started.

## Installing Android Studio

Just download and install the latest version, you can easily get started with coding. Link Down Below ⬇

[CLICK HERE TO DOWNLOAD](https://developer.android.com/studio)

## Getting Started

Create a project by choosing Compose Layout.

![Android Studio Project Window](/assets/img/project-window.png)
_Choose Empty Activity_

Give a good name to your project, and try not to make any other changes. Then click finish.

![New Project Image](/assets/img/new-project.png)
_Click Finish_

## Your First Compose App

At first you will be greeted with the code somthing like this.

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    MyApplicationTheme {
        Greeting("Android")
    }
}
```

![Android Studio Run Button](/assets/img/run-button.png)
_Now Click on Run Button_

If you have a computer that is capable of running emulator you are good to go. If not there is option to connect physical device.

## Conclusion

Congratulations, you have made your first Compose App. This is the first mile-stone of the thousand more. In next blog lets dive deeper in the Jetpack Compose and crush it, until then - Stay Tuned!