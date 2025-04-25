# Exercise 0: Example
#
# This is a practice exercise to help you understand how to write code "inside" a provided Python function.
#
# We'll create a function that checks a condition and prints a specific greeting message based on that condition.
#
# Requirements:
# - The function is named `print_greeting`.
# - Inside the function, declare a variable `python_is_fun` and set it to `True`.
# - Use a conditional statement to check if `python_is_fun` is `True`.
# - If `python_is_fun` is `True`, print the message "Python is fun!"

def print_greeting():
    # Your code goes here. Remember to indent!
    python_is_fun = True
    if python_is_fun:
        print("Python is fun!")

# Call the function
print_greeting()













# Exercise 1: Vowel or Consonant
#
# Write a Python function named `check_letter` that determines if a given letter
# is a vowel or a consonant.
#
# Requirements:
# - The function should prompt the user to enter a letter (a-z or A-Z) and determine its type.
# - It should handle both uppercase and lowercase letters.
# - If the letter is a vowel (a, e, i, o, u), print: "The letter x is a vowel."
# - If the letter is a consonant, print: "The letter x is a consonant."
# - Replace 'x' with the actual letter entered by the user.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Utilize the `in` operator to check for vowels.
# - Ensure to provide feedback for non-alphabetical or invalid entries.

def check_letter():
    # Your control flow logic goes here
    x = input('enter a letter')
    if x=='a' or x=='e' or x=='i' or x=='o' or x=='u':
        print(f'The letter {x} is a vowel')
    else:
        print(f'The letter {x} is a consonant')


# Call the function
check_letter()















# Exercise 2: Old enough to vote?
#
# Write a Python function named `check_voting_eligibility` that determines if a user is old enough to vote.
# Fill in the logic to perform the eligibility check inside the function.
#
# Function Details:
# - Prompt the user to input their age: "Please enter your age: "
# - Validate the input to ensure the age is a possible value (no negative numbers).
# - Determine if the user is eligible to vote. Set a variable for the voting age.
# - Print a message indicating whether the user is eligible to vote based on the entered age.
#
# Hints:
# - Use the `input()` function to capture the user's age.
# - Use `int()` to convert the input to an integer. Ensure to handle any conversion errors gracefully.
# - Use a conditional statement to check if the age meets the minimum voting age requirement.

def check_voting_eligibility():
    # Your control flow logic goes here
    age = int(input('input your age'))
    if age < 0:
        age * -1
    if age >= 18:
        print('congrats, you can vote!')
    else:
        print('you have to wait pal.')
    

# Call the function
check_voting_eligibility()

















# Exercise 3: Calculate Dog Years
#
# Write a Python function named `calculate_dog_years` that calculates a dog's age in dog years.
# Fill in the logic to perform the calculation inside the function.
#
# Function Details:
# - Prompt the user to enter a dog's age: "Input a dog's age: "
# - Calculate the dog's age in dog years:
#      - The first two years of the dog's life count as 10 dog years each.
#      - Each subsequent year counts as 7 dog years.
# - Print the calculated age: "The dog's age in dog years is xx."
# - Replace 'xx' with the calculated dog years.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Convert the string input to an integer using `int()`.
# - Apply conditional logic to perform the correct age calculation based on the dog's age.

def calculate_dog_years():
    # Your control flow logic goes here
    dog_age = int(input("Input a dog's age:"))
    if dog_age <= 2:
        dog_years = dog_age * 10
        print(f"The dog's age in dog years is {dog_years}")
    elif dog_age > 2: 
        dog_years = 20 + (dog_age - 2) * 7
        print(f"The dog's age in dog years is {dog_years}")



# Call the function
calculate_dog_years()


















# Exercise 4: Weather Advice
#
# Write a Python script named `weather_advice` that provides clothing advice based on weather conditions.
#
# Requirements:
# - The script should prompt the user to enter if it is cold (yes/no).
# - Then, ask if it is raining (yes/no).
# - Use logical operators to determine clothing advice:
#   - If it is cold AND raining, print "Wear a waterproof coat."
#   - If it is cold BUT NOT raining, print "Wear a warm coat."
#   - If it is NOT cold but raining, print "Carry an umbrella."
#   - If it is NOT cold AND NOT raining, print "Wear light clothing."
#
# Hints:
# - Use logical operators (`AND`, `OR`, `NOT`) in your if statements to handle multiple conditions.

def weather_advice():
    # Your control flow logic goes here
    is_cold_input = input('Is it COLD?').lower()
    is_raining_input = input('Is it RAINING?').lower()

    is_cold = is_cold_input == 'yes' or is_cold_input == 'true'
    is_raining = is_raining_input == 'yes' or is_raining_input == 'true'

    if is_cold and is_raining:
        print('Wear a waterproof coat')
    elif is_cold and not is_raining:
        print('Wear a warm coat')
    elif not is_cold and is_raining:
        print('Carry an umbrella')
    elif not is_cold and not is_raining:
        print('Wear light clothing')


# Call the function
weather_advice()
















# Exercise 5: What's the Season?
#
# Write a Python function named `determine_season` that figures out the season based on the entered date.
#
# Requirements:
# - The function should first prompt the user to enter the month (as three characters): "Enter the month of the year (Jan - Dec):"
# - Then, the function should prompt the user to enter the day of the month: "Enter the day of the month:"
# - Determine the current season based on the date:
#      - Dec 21 - Mar 19: Winter
#      - Mar 20 - Jun 20: Spring
#      - Jun 21 - Sep 21: Summer
#      - Sep 22 - Dec 20: Fall
# - Print the season for the entered date in the format: "<Mmm> <dd> is in <season>."
#
# Hints:
# - Use 'in' to check if a string is in a list or tuple.
# - Adjust the season based on the day of the month when needed.
# - Ensure to validate input formats and handle unexpected inputs gracefully.

def determine_season():
    # Your control flow logic goes here
    month_input = input('Enter the month of the year (Jan - Dec):').lower()
    day_input = input('Enter the day of the month (1 - 31):').lower()

    date = month_input + ' ' + day_input
    
    spring_dates = [
    'mar 20', 'mar 21', 'mar 22', 'mar 23', 'mar 24', 'mar 25', 'mar 26', 'mar 27', 'mar 28', 'mar 29', 'mar 30', 'mar 31',
    'apr 1', 'apr 2', 'apr 3', 'apr 4', 'apr 5', 'apr 6', 'apr 7', 'apr 8', 'apr 9', 'apr 10', 'apr 11', 'apr 12', 'apr 13', 'apr 14', 'apr 15', 'apr 16', 'apr 17', 'apr 18', 'apr 19', 'apr 20', 'apr 21', 'apr 22', 'apr 23', 'apr 24', 'apr 25', 'apr 26', 'apr 27', 'apr 28', 'apr 29', 'apr 30',
    'may 1', 'may 2', 'may 3', 'may 4', 'may 5', 'may 6', 'may 7', 'may 8', 'may 9', 'may 10', 'may 11', 'may 12', 'may 13', 'may 14', 'may 15', 'may 16', 'may 17', 'may 18', 'may 19', 'may 20', 'may 21', 'may 22', 'may 23', 'may 24', 'may 25', 'may 26', 'may 27', 'may 28', 'may 29', 'may 30', 'may 31',
    'jun 1', 'jun 2', 'jun 3', 'jun 4', 'jun 5', 'jun 6', 'jun 7', 'jun 8', 'jun 9', 'jun 10', 'jun 11', 'jun 12', 'jun 13', 'jun 14', 'jun 15', 'jun 16', 'jun 17', 'jun 18', 'jun 19', 'jun 20'
    ]

    summer_dates = [
    'jun 21', 'jun 22', 'jun 23', 'jun 24', 'jun 25', 'jun 26', 'jun 27', 'jun 28', 'jun 29', 'jun 30',
    'jul 1', 'jul 2', 'jul 3', 'jul 4', 'jul 5', 'jul 6', 'jul 7', 'jul 8', 'jul 9', 'jul 10', 'jul 11', 'jul 12', 'jul 13', 'jul 14', 'jul 15', 'jul 16', 'jul 17', 'jul 18', 'jul 19', 'jul 20', 'jul 21', 'jul 22', 'jul 23', 'jul 24', 'jul 25', 'jul 26', 'jul 27', 'jul 28', 'jul 29', 'jul 30', 'jul 31',
    'aug 1', 'aug 2', 'aug 3', 'aug 4', 'aug 5', 'aug 6', 'aug 7', 'aug 8', 'aug 9', 'aug 10', 'aug 11', 'aug 12', 'aug 13', 'aug 14', 'aug 15', 'aug 16', 'aug 17', 'aug 18', 'aug 19', 'aug 20', 'aug 21', 'aug 22', 'aug 23', 'aug 24', 'aug 25', 'aug 26', 'aug 27', 'aug 28', 'aug 29', 'aug 30', 'aug 31',
    'sep 1', 'sep 2', 'sep 3', 'sep 4', 'sep 5', 'sep 6', 'sep 7', 'sep 8', 'sep 9', 'sep 10', 'sep 11', 'sep 12', 'sep 13', 'sep 14', 'sep 15', 'sep 16', 'sep 17', 'sep 18', 'sep 19', 'sep 20', 'sep 21'
    ]

    fall_dates = [
    'sep 22', 'sep 23', 'sep 24', 'sep 25', 'sep 26', 'sep 27', 'sep 28', 'sep 29', 'sep 30',
    'oct 1', 'oct 2', 'oct 3', 'oct 4', 'oct 5', 'oct 6', 'oct 7', 'oct 8', 'oct 9', 'oct 10', 'oct 11', 'oct 12', 'oct 13', 'oct 14', 'oct 15', 'oct 16', 'oct 17', 'oct 18', 'oct 19', 'oct 20', 'oct 21', 'oct 22', 'oct 23', 'oct 24', 'oct 25', 'oct 26', 'oct 27', 'oct 28', 'oct 29', 'oct 30', 'oct 31',
    'nov 1', 'nov 2', 'nov 3', 'nov 4', 'nov 5', 'nov 6', 'nov 7', 'nov 8', 'nov 9', 'nov 10', 'nov 11', 'nov 12', 'nov 13', 'nov 14', 'nov 15', 'nov 16', 'nov 17', 'nov 18', 'nov 19', 'nov 20', 'nov 21', 'nov 22', 'nov 23', 'nov 24', 'nov 25', 'nov 26', 'nov 27', 'nov 28', 'nov 29', 'nov 30',
    'dec 1', 'dec 2', 'dec 3', 'dec 4', 'dec 5', 'dec 6', 'dec 7', 'dec 8', 'dec 9', 'dec 10', 'dec 11', 'dec 12', 'dec 13', 'dec 14', 'dec 15', 'dec 16', 'dec 17', 'dec 18', 'dec 19', 'dec 20'
    ]

    winter_dates = [
    'dec 21', 'dec 22', 'dec 23', 'dec 24', 'dec 25', 'dec 26', 'dec 27', 'dec 28', 'dec 29', 'dec 30', 'dec 31',
    'jan 1', 'jan 2', 'jan 3', 'jan 4', 'jan 5', 'jan 6', 'jan 7', 'jan 8', 'jan 9', 'jan 10', 'jan 11', 'jan 12', 'jan 13', 'jan 14', 'jan 15', 'jan 16', 'jan 17', 'jan 18', 'jan 19', 'jan 20', 'jan 21', 'jan 22', 'jan 23', 'jan 24', 'jan 25', 'jan 26', 'jan 27', 'jan 28', 'jan 29', 'jan 30', 'jan 31',
    'feb 1', 'feb 2', 'feb 3', 'feb 4', 'feb 5', 'feb 6', 'feb 7', 'feb 8', 'feb 9', 'feb 10', 'feb 11', 'feb 12', 'feb 13', 'feb 14', 'feb 15', 'feb 16', 'feb 17', 'feb 18', 'feb 19', 'feb 20', 'feb 21', 'feb 22', 'feb 23', 'feb 24', 'feb 25', 'feb 26', 'feb 27', 'feb 28',
    'mar 1', 'mar 2', 'mar 3', 'mar 4', 'mar 5', 'mar 6', 'mar 7', 'mar 8', 'mar 9', 'mar 10', 'mar 11', 'mar 12', 'mar 13', 'mar 14', 'mar 15', 'mar 16', 'mar 17', 'mar 18', 'mar 19'
    ]


    if date in spring_dates:
        print(f'{date} is in spring')
    elif date in summer_dates:
        print(f'{date} is in summer')
    elif date in fall_dates:
        print(f'{date} is in fall')
    elif date in winter_dates:
        print(f'{date} is in winter')
    else: 
        print('Invalid Date Input...')
    



# Call the function
determine_season()

