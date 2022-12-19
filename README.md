# Profit-loss-app
Using this website, we can find whether the stocks price is profit or loss.


Welcome to my profilio! I make this stock profit-loss calculator by using JavaScript, HTML and CSS learned from neog.camp.
This calculate will helps to check the profit and loss of stocks when he/she bought it. 

The below text is to explain my project detials.

problem statement:
1.Take the user's stock price for one stock when he bought it.
2.Take the stocks quantity as well.
3.Now take today's price of that Stock.
4.Tell the Profit / Loss, the user's making -
    In Percentage
    In Absolute

This app built with VanillaJS by using Visual Studio Code.
First, create three seperate file for app.js, html file, and style file.

In program,

Step-1: create three inputs for initial price, quantity of stacks and current price.
Step-2: Add button.
Step-3: using qureySelector for wiring.
Step-4: add event listerner.
Step-5: Create function to calculate profit and loss
Step-5: check(initial price > current price):
          Loss = (initial price - current price) * stack quantity
Step-6: check(initial price < current price):
          Profit = (current price - initial price) * stack quantity
Step-7: Calculate:
            Loss percentage = (loss/initialt price)*100.
            Profit percentage = (profit/ current price)*100.
Step-8: Put div to show output.
