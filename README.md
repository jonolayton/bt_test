# bt_test
Test exercise for Jonathan Layton.

NOTES:
- Please note that I have included a file called index.php which simply includes a single line of code, and an empty composer.json file. The reason for this is that I needed to quickly build and test the app in a live environment using heroku to ensure that it worked on ie11. 
- I have used a small amount of code which I have found online, namely this regex pattern: ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$ which I located using this stackoverflow article: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
- All other work is my own.
- I have made one assumption, which is that the password field is supposed to allow special characters / symbols in addition to alphanumeric characters. I have made this assumption because it is commonplace to do so, and because the wording in the exercise has not explicitly ruled this out ("...the password fields must accept alphanumeric characters, contain at least one upper character, one lower character and a number. It must be at least eight characters long").
- On successful completion of the form, data from the form is logged to the console.

Thank you for this opportunity, and I look forward to hearing your thoughts on my work. 

Jonathan Layton
