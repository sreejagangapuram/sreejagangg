---
toc: true
comments: false
layout: true
title: 2015 CB MC Review
description: This is my reflection on the 2015 CB MC. 
type: plans
courses: { compsci: {week: 0} }
---

# Score: 18/39 and Journey 
This was the worst score I have gotten, this was because I did this quiz without a partner and without googling anything. A few of the questions I simply did not know how to do and skipped over. This was a real and accurate testing of my understanding.  

# Corrections - I corrected and reviewed 5 problems, I'll do the rest over break!!
## Question 4: Method findMax is intended to return the largest value in the array arr. Which of the following best describes the conditions under which the method findMax will not work as intended?

D is incorrect because if the largest value in arr was zero, the algorithm would work correctly since maxVal starts at the largest value. C is correct because since maxVal is initialized to a value that is greater than all values in arr, maxVal will never be updated and 0 will be returned. To correct this, maxVal could be initialized to the first element in arr or initialized to Integer.MIN_VALUE.

## Question 6: Which of the following method calls demonstrates that the method does not work as intended?

B is incorrect because the method will return true since “art” is in the concatenation of all three words, which is the expected return value since "art" is in each of the three individual words. A is correct because in this case, the method should return false since the word “art” is not found in “rattrap”, “similar”, or “today”. When the method concatenates all three words together, all is assigned the value “rattrapsimilartoday”. The “ar” in “similar” gets concatenated with the “t” in “today”, resulting in the letter combinations for “art” to be in all, causing the method to incorrectly return true.


## Question 7: What will be printed as a result of executing the code segment?
A is incorrect because this would be the result if the outer loop counter variable, outer, was incremented by 2 for each iteration. C is correct because The outer loop iterates six times for when outer is assigned the values 1 through 6. For each iteration, the number of times the inner loop iterates is dependent on the value of outer. When outer is 1, the inner loop iterates from 1 to 6, incrementing by 1 each time, and prints all even numbers followed by a space (2 4 6). When outer is 2, the inner loop iterates from 2 to 6 and prints all even numbers followed by a space (2 4 6). When outer is 3, the inner loop iterates from 3 to 6 and prints all even numbers followed by a space (4 6). When outer is 4, the inner loop iterates from 4 to 6 and prints all even numbers followed by a space (4 6). When outer is 5, the inner loop iterates from 5 to 6 and prints 6 followed by a space. When outer is 6, the inner loop iterates one time and prints 6 followed by a space.

## Question 14: Assume that x and y are boolean variables and have been properly initialized.

An expression reads as follows: open parenthesis, x, ampersand, ampersand, y, close parenthesis, ampersand, ampersand, exclamatory mark, open parenthesis, x, double vertical bar, y, close parenthesis. 

Which of the following best describes the result of evaluating the expression above?

C is incorrect becuase When x and y are both true, (x && y) is true and (x || y) is true however, !(x ||y) is false. Therefore, (x && y) && !(x || y) will always be false. B is correct because s a result of De Morgan’s Law, the value of !(x || y) is equivalent to !x && !y. The only time x && y is true is when both x and y are true. When x and y are both true, !x && !y is false. Therefore, (x && y) && (!x && !y) will always be false as will (x && y) && !(x ||y).


## Question 15: What will be printed as a result of the call showMe(0) ?

C is incorrect because it would be the result if the System.out.print(arg + “ “); came before the recursive call and the else was removed. A is correct because this method recursively calls itself with a value that is one more that arg until arg is equal to 10 and then it prints out 10. Nothing is printed until the base case is reached.

# How to Improve 
I will redo this test over break for practice, hopefully it will be unlocked for me. Hoping teacher allows me to redo it. In addition, I will review my corrections and not make the same mistakes I have made before. Also, I will get an AP CSA exam review book to review the essential knowlege for the AP exam. 

Also, I specifically stuggled on skill 4B, which is about nested iteration. Its focus is to determine the result and output based on statement excecution without any method calls. I need to do more practice problems on this skill and need to take my time analyzing the code. 
