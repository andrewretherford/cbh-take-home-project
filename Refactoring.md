# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Initially I saw that assignment of a value to candidate was spread across multiple if/else blocks.  In addition to that, I noticed that the data type and length checks were based on whether or not candidate had been defined, which happens only if event is defined. This made it take some time to parse through exactly what logic was present in determining the value of candidate.

I decided that it would be easier to read if all of the logic for assigning a value to candidate was in one place.  I'm a big fan of ternary functions as they minimize screen clutter and create a clear block of logic to see exactly what's going on in the most succinct way possible. Beyond that I decided that the data variable was unnecessary, and instead decided to stringify event.partitionKey if present so as to remove the lengthy check for type of candidate and a second hash creation.

I left the global variables TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY despite the fact that the function is now very short and readable, as I am a firm believer in globals that can be easily found and changed.