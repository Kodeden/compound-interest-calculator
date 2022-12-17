Compound interest is a powerful way to build savings over time. What may start as a small investment can grow into a very large sum!



In this challenge, we are going to build a basic compound interest calculator to see how much a starting sum of money can grow over time with specified interest rates. You'll need to put your knowledge of the React useEffect hook in order to see the effect of the compound interest….



See what I did there? Okay fine… that was a bad pun, but I'm sticking with it.



If you're interested in attempting this challenge, continue reading…… 



ehh?? Was that any better? Okay, fine, I'll stop.



Instructions

Clone the compound-interest-calculator repo
npm install
npm start
Add a React effect to the App component that will run when either the investedAmount, the interestRate (yearly), or the yearsInvested is changed.
The starting value of each variable should be 0.
This effect should then read the current values of each variable from the local component state and calculate the what the invested amount will equal at the end of the investment term.
The calculation (IN CODE FORM) is:

investedAmount * (1 + (interestRate / 100)) ** yearsInvested



Acceptance Criteria

Users should be able to type into any of the three boxes, and this should cause the state to be altered and the effect to be run.
The calculated value should be displayed to the user in real-time without them needing to click a recalculate button.