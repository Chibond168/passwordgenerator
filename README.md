# passwordgenerator
The purpose of the web site is to populate a password that meets the requirements.  The user is asked to answer the following requirement:
The length of the password
Does it include Lower case
Does it include upper case
Does it include number
Does it include special character

The page will validate if the length of the password is less than 8 chanracters or greater than 128 characters and issue an error.

The page will validate if the password is not a number and issue an error. 

The page will ask "Do you want to include lower case?", the user can pick 'OK' or 'Cancel' button
The page will ask "Do you want to include UPPER case?", the user can pick 'OK' or 'Cancel' button
The page will ask "Do you want to include number?", the user can pick 'OK' or 'Cancel' button
The page will ask "Do you want to include special character?", the user can pick 'OK' or 'Cancel' button

If the user selects 'Cancel' for all of those four questions, the page will issue an error.  The user must pick 'OK' in one of the four questions.

When the password's requirement is met, the page will display a password.


Technical Highlights:
The page uses Javascript behind the page.  
Several Functions are created to handle different tasks
Use Java DOM function 'document.querySelector' to locate the button, and the textbox
Use 'IsNaN' to validate if the value is numeric
Use 'Confirm' to display a dialog box, where the user can pick 'OK' or 'Cancel' button
Use 'Alert' to display a dialog box, to inform the user with an error message
Use 'Number' to convert a string to a numeric value
Use Arrays to hold 26 lower case, and 26 upper case alphabetic characters
Use Array to hold special characters
Use Array to hold 0-9 numeric numbers
Use Randam function to populate the randam passowrd - Math.floor(Math.random() * array.length)

During the testing, the developer found out the randam function does not pick the number in some cases.  The developer decided to add another set of 0-9 number in the array.  It increases the number population. 

Web Site url - https://chibond168.github.io/passwordgenerator/

![main](https://user-images.githubusercontent.com/130376566/236293079-91e74e59-ae30-4a58-b508-afacde97acd1.jpg)
![passwordinput](https://user-images.githubusercontent.com/130376566/236293108-ef920ba2-8374-47b3-a128-12e4f43903e7.jpg)
![passworderror1](https://user-images.githubusercontent.com/130376566/236293165-0998253b-b7b7-41a4-b837-d6fcb6e6a7b0.jpg)
![passwordlength](https://user-images.githubusercontent.com/130376566/236293252-211d3b55-4fb4-49b0-93cf-8fd274b3d0f3.jpg)
![passwordwordinput](https://user-images.githubusercontent.com/130376566/236293264-c1d8bd96-4e40-4a29-a064-99ea97a56a10.jpg)
![passworderror2](https://user-images.githubusercontent.com/130376566/236293278-64aaf475-0cc5-454d-ac46-c89aff214a22.jpg)
![lowercase](https://user-images.githubusercontent.com/130376566/236293292-b768e465-7cd2-4577-9bb3-60c3c9bdbb56.jpg)
![specialchar](https://user-images.githubusercontent.com/130376566/236293478-b28d1c24-9327-4e39-9cef-6b20078dd38f.jpg)
![result](https://user-images.githubusercontent.com/130376566/236293620-9b8a6482-e20c-4116-9d11-e9b1c23684d0.jpg)
![requireerror](https://user-images.githubusercontent.com/130376566/236293633-13becbca-ef2f-4aa3-b448-ae688c30f770.jpg)
![uppercase](https://user-images.githubusercontent.com/130376566/236293825-29d3e782-6c3e-40f9-8138-ae01d1df7828.jpg)
![number](https://user-images.githubusercontent.com/130376566/236293868-1ffa5cb1-df73-48e2-aa80-6c0bb6d32690.jpg)
