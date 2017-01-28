# Tests

* YouTube
<iframe width="560" height="315" src="http://www.youtube.com/embed/EKoxLxzWNOk" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

* Timeline
* https://timeline.knightlab.com/
* https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1QPymWN7KAVxnSHz9QOGtTVhPyzmtjFyBVU5d2es9plc&font=Default&lang=en&initial_zoom=2&height=650


<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1QPymWN7KAVxnSHz9QOGtTVhPyzmtjFyBVU5d2es9plc&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' frameborder='0'></iframe>



OAuth2
======

[![Build Status](https://travis-ci.org/p2/OAuth2.svg?branch=master)](https://travis-ci.org/p2/OAuth2)
[![License](https://img.shields.io/:license-apache-blue.svg)](LICENSE.txt)

OAuth2 frameworks for **macOS**, **iOS** and **tvOS** written in Swift 3.0.

- [⤵️ Installation](#installation)
- [🛠 Usage](#usage)
- [🖥 Sample macOS app][sample] (with data loader examples)
- [📱 Sample iOS app](https://github.com/p2/OAuth2PodApp) (using CocoaPods)
- [📖 Technical Documentation](https://p2.github.io/OAuth2)

OAuth2 requires Xcode 8, the built framework can be used on **OS X 10.9** or **iOS 8** and later.
Happy to accept pull requests, please see [CONTRIBUTING.md](./CONTRIBUTING.md)

### Swift Version

Since the Swift language is constantly evolving I have adopted a versioning scheme mirroring Swift versions:
the framework version's **first two digits are always the Swift version** the library is compatible with, see [releases](https://github.com/p2/OAuth2/releases).
Code compatible with brand new Swift versions are to be found on a separate feature branch named appropriately.


Usage
-----

To use OAuth2 in your own code, start with `import OAuth2` (use `p2_OAuth2` if you installed _p2.OAuth2_ via CocoaPods) in your source files.

A typical code grant flow is used for demo purposes below.
The steps for other flows are mostly the same short of instantiating a different subclass and using different client settings.
Still not working?
See [site-specific peculiarities](#site-specific-peculiarities).
