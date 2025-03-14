---
author: Pratham N Gundikere
title: Creating Android Library and hosting it Maven Central the Easy way
description: Hosting the Android Library has always been hard, this blog make it easier.
date: 2025-03-14
type: post
draft: false
coffee: 1
tags:
  - post
  - android
  - android-library
categories:
  - Android
image: 
back-links: "[[Blog Post]]"
---
![Image Description](/images/android_library.png)


Hosting Library has always been tough. Here in this blog I give clear steps on how to host a Android Library on Maven Central.

## Prerequisites
Before hosting your Android library on Maven Central, ensure you have the following:
- **Sonatype Account** – Create an account at [Sonatype's Central Repository](https://central.sonatype.com/).
- **Namespace Creation** – Register and verify your namespace at [Sonatype Central](https://central.sonatype.com/). This namespace is usually based on your domain (e.g., `com.example`).

This video here can help with namespace and more -> [Click Here](https://youtu.be/NPUehp4KpSs?si=Q65HlyunPxh9VBVQ)

## Set GPG Key
You need to install [GnuPG](https://gnupg.org). Using HomeBrew is much easier on Mac and Linux.
Again Check this video -> [Click Here](https://youtu.be/NPUehp4KpSs?si=Q65HlyunPxh9VBVQ).

Here is few important commands from the video

- `gpg --full-gen-key`
- `gpg --list-keys`
- `gpg --keyserver keyserver.ubuntu.com --send-keys <KEYS>`
- `gpg --armor --export-secret-keys <KEYS> | pbcopy
- `echo "<WHOLE-KEY>" | gpg --dearmor > ~/my_secring.gpg`

## Setting Android Library

Create a new Project and Inside create a new Android Library
![Image Description](/images/Pasted%20image%2020250314185826.png)

Create a new file in the Library

`HelloWorld.kt`

```kotlin
package io.github.prathamngundikere.helloworld  
  
import androidx.compose.material3.Text  
import androidx.compose.runtime.Composable  
import androidx.compose.ui.Modifier  
  
@Composable  
fun HelloWorld(modifier: Modifier = Modifier) {  
    Text(  
        text = "Hello World !!!",  
        modifier = modifier  
    )  
}
```

`build.gradle.kts (:helloworld)`

```kotlin
import com.vanniktech.maven.publish.SonatypeHost  
plugins {  
    alias(libs.plugins.android.library)  
    alias(libs.plugins.kotlin.android)  
    alias(libs.plugins.kotlin.compose)  
    id("com.vanniktech.maven.publish") version "0.31.0"  
    id("com.gradleup.nmcp") version "0.0.8"  
}  
  
android {  
    namespace = "io.github.prathamngundikere.helloworld"  
    compileSdk = 35  
  
    defaultConfig {  
        minSdk = 30  
  
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"  
        consumerProguardFiles("consumer-rules.pro")  
    }  
  
    buildTypes {  
        release {  
            isMinifyEnabled = false  
            proguardFiles(  
                getDefaultProguardFile("proguard-android-optimize.txt"),  
                "proguard-rules.pro"  
            )  
        }  
    }    compileOptions {  
        sourceCompatibility = JavaVersion.VERSION_11  
        targetCompatibility = JavaVersion.VERSION_11  
    }  
    kotlinOptions {  
        jvmTarget = "11"  
    }  
    buildFeatures {  
        compose = true  
    }  
}  
  
dependencies {  
    implementation(libs.androidx.activity.compose)  
    implementation(platform(libs.androidx.compose.bom))  
    implementation(libs.androidx.ui)  
    implementation(libs.androidx.ui.graphics)  
    implementation(libs.androidx.ui.tooling.preview)  
    implementation(libs.androidx.material3)  
}  
  
mavenPublishing {  
    coordinates("io.github.prathamngundikere", "helloworld", "1.0.0")  
  
    pom {  
        name.set("Hello World")  
        description.set("Android Library to import the Hello World Text")  
        inceptionYear.set("2025")  
        url.set("https://github.com/prathamngundikere/HelloWorld_Android_Library/")  
        licenses {  
            license {  
                name.set("The Apache License, Version 2.0")  
                url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")  
                distribution.set("http://www.apache.org/licenses/LICENSE-2.0.txt")  
            }  
        }        developers {  
            developer {  
                id.set("prathamngundikere")  
                name.set("PRATHAM N GUNDIKERE")  
                url.set("https://github.com/prathamngundikere/")  
            }  
        }        scm {  
            url.set("https://github.com/prathamngundikere/HelloWorld_Android_Library/")  
            connection.set("scm:git:git://github.com/prathamngundikere/HelloWorld_Android_Library.git")  
            developerConnection.set("scm:git:ssh://git@github.com/prathamngundikere/HelloWorld_Android_Library.git")  
        }  
    }    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL, automaticRelease = true)  
    signAllPublications()  
}
```

`build.gradle.kts`

```kotlin
// Top-level build file where you can add configuration options common to all sub-projects/modules.  
plugins {  
    alias(libs.plugins.android.application) apply false  
    alias(libs.plugins.kotlin.android) apply false  
    alias(libs.plugins.kotlin.compose) apply false  
    alias(libs.plugins.android.library) apply false  
    id("com.vanniktech.maven.publish") version "0.31.0" apply false  
    id("com.gradleup.nmcp") version "0.0.8" apply false  
}
```

Now add `gradle.properties` to `.gitignore` :

```
mavenCentralUsername=USERNAME 
mavenCentralPassword=PASSWORD  
  
signing.keyId=<LAST 8 LETTERS>  
signing.password=<KEYRING PASSWORD>  
signing.secretKeyRingFile=/home/prathamngundikere/my_secring.gpg
```

RUN and sync.

Finally run 
`./gradlew publishAndReleaseToMavenCentral --no-configuration-cache`

You can push the entire thing to github and make it open source. 

Finally you get something like this in Maven Central 

![Image Description](/images/Pasted%20image%2020250314192526.png)
