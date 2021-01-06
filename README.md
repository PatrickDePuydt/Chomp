# [Chomp!](https://patrickdepuydt.github.io/Chomp/src/index.html)
MAARK010621-v2

[Click here to see the](https://patrickdepuydt.github.io/Chomp/src/index.html) project in the wild.

### Tech Stack

* HTML, CSS, & ECMA baby
* Fonts: [Work Sans (Bold)](https://fonts.google.com/specimen/Work+Sans), [Nunito (Bold)](https://fonts.google.com/specimen/Nunito)
* Animation Helper: [Animate.Style](https://animate.style)
* Color Pallet Helper: [Coolors](https://coolors.co/)

---
# Development Process

## TL;DR:


| Meme | Meme |
|:-----------:|:------------:|
| <img src="journal/images/123120-lies.jpg" width="300px"/> | <img src="journal/images/010626-Meme.png" width="500px"/> |
| <img src="journal/images/123120-fork.jpg" width="400px"/>  | <img src="journal/images/gravity.png" width="600px" /> |


## Long Form

### Original Idea

The original idea came from a board game called [Goblet!](https://www.youtube.com/watch?v=XE6YYMn_334) which is a modified tic-tac-toe with tree curious features.

**A**. You can overtake another piece (if your piece is large enough), but with two conditions: 
> 1. only if that piece is already on the board 
> 2. if the piece you want to overtake is smaller in size than yours.

**B**. You can move pieces after playing them instead of choosing a new piece.
> 1. But only one space at a time

**C**. If either opponent has 3 in a row, you can gobble one of the 3 aligned pieces thus thwarting your opponents plan.


### Approach Taken

I struggle with problems I can't see, so to 

There is also the matter of programatic thinking and problem solving, which starts by championing seeking the shortest distance between two points.

Put another way, break the problem down into it's smallest, most simplest components and start there.

I've found this advice helpful in hindsight when reflecting but when I'm buried in log errors, it's a distant thought.

Here are some of the things I did to teach myself about what problem I was trying to solve.


| Approach | Image | Technique |
|:-----------|:------------:|:------------|
|  Wireframes/Flow Charts | <img src="journal/images/122320-c.png" width="300px"/>  <img src="journal/images/122320-d.png" width="300px"/> | This process was somewhat illustrative of abstracted logic, but it didn't break down any of the problems I would later face nor did it prepare me well for them. |
|  Drawing out each play | <img src="journal/images/010621-a-drawing.png" width="300px"/> | Adding each play and having to draw out the grid was very time-consuming, but it gave me time to think between the moves what I would need to keep track of. |
|  Journaling | <img src="journal/images/010621-b-talking.png" width="300px"/> | I often find I think while I'm talking the problem through, I realize things I hadn't thought of. (similar to the sometimes tragically misguided practice known as "Rubber Ducking"). Jouranling allowed me to get thoughts out that were in plain English, which sometimes resulted in action items. Most of the time though, it just allowed me to focus better. |
|  Mocks | <img src="journal/images/010621-c-mocks.png" width="300px"/> | The layout design came together in one fell swoop. I find that wireframes are helpful in design thinking only in certain contexts, and are a hindrance in other, especially creative, situations.|
|  I used my cat's names as Variables | <img src="journal/images/123020-a.png" width="400px"/> | If variable names are merely reverential abstractions, and it doesn't matter what i call them, while I'm working I might as well use a mental model which is familiar to me, and then global rename later if needed. |
|  Numbering my print calls | <img src="journal/images/010421-Logs.png" width="400px"/> | While 21 console logs is excessive, a sticky problem I run into is the errors I get are false-positives/negatives: they are often what cries out in the console but they are not the culprit. To trace the call stack and get a mental picture of what order things were being called in, and where things were breaking, I flagged each console log with a number.|

### Still Unsolved...
| Feature | Status |
|:-----------|:------------|
| _Triple-threat juicy target_ | This is one of the core features of Goblet!, but one I found difficult with a one-dimensional array which neither knows nor cares about diagonals.  |
| _Win conditions_ | &nbsp; |
| _Buggy UI_ |  can't click, depleted resource, chomp |
