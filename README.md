# Intro

This is a take-home assignment for the School Happiness Engineer position at Schoolrunner.

The purpose of this assignment is to give you an opportunity to provide a sample of how you work and reason about a problem on your own.

We are asking you to solve a puzzle - a controversial choice in the world of tech interviews, we know - because success in this hybrid role will be driven by creative problem-solving skills in multiple capacities. This exercise should demonstrate your ability to dissect a problem and work through it until coming to a solution.


# The Details

This assignment may be completed in any language of your choosing, and submitted in any format that is pullable and runnable by me (e.g. a repo and a zip file are both fine as long as I can see and execute your code).

We ask that you submit your work within a week, but this timeline is intended to give you flexibility to work on it on your own time - we expect that you would be able to complete it in one sitting.

We also work on the honor system here. Obviously, use Google to your heart's content for concepts/syntax/etc - we know it's every developer's best friend! But trying to look for someone else's solution, or asking for help from a peer or family member, ultimately doesn't serve either of us.

Feel free to email me (sgenduso@schoolrunner.org) with any questions!


--------------------------------------------------------------------------------


# Part 1

It's Puplympics at Schoolrunner! Office pups will be racing each other for the pawstigious title of Schoolwinner.

Our dogs can run at high speeds but have to rest to recover their energy every once in a while. ~~We~~ Our dogs are a competitive bunch so ~~we~~ they want to know who is the fastest!

Assume that the pups only have 2 states: running (at their top speed), or resting (not moving at all). Also assume that no matter which state they are in, they spend whole seconds there.

For example, imagine this scenario:

Sullivan runs 14 ft/s for up to 10 seconds, and then needs to rest for 138 seconds.

Tuck runs 15 ft/s for up to 11 seconds, and then needs to rest for 152 seconds.

1 second in, Sullivan has gone 14 ft and Tuck has gone 15. 10 seconds in, Sullivan has made it 140 ft and Tuck has made it 150. On the 11th second, Sullivan starts resting at 140 ft and Tuck - still sprinting - makes it to 165 ft. On the 12th second, both pups are resting. They stay resting until Sullivan starts to run again at second 149 for another 10 seconds. Tuck starts to run again at second 164 for another 11 seconds.

If - for example - the race ends at 1000 seconds, then both pups are resting, Tuck has gone 1155 ft, Sullivan has gone 980, and Tuck is our winner!

Given each pup's stats (provided in `input.txt`), after exactly 3461 seconds, how far has the winning pup traveled?


# Part 2

After the first race, the team decides to switch up the scoring system and race again.

Under the new system, at the end of each second the pup that is currently in the lead is awarded 1 point. Multiple pups that are tied for the lead would get one point each.

Using the same pups as the last race, Tuck would be in the lead after the first second and receive one point. Sullivan wouldn't overtake Tuck until second 150, at which point he would earn one point (Tuck would have 149 points under his ~~belt~~ collar by now).

If this race also ended at 1000 seconds, Tuck will have earned 781 points and Sullivan would be well behind with 221, maintaining Tuck's status as champion. You'll get 'em next time, Sully!

Again given each pup's stats (provided in `input.txt`), after the same time limit of exactly 3461 seconds, how many points has the winning pup earned?



