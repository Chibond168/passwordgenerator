// Assignment Code
var generateBtn = document.querySelector("#generate");

// Collect the required types, and write password to the #password input
function writePassword() {

  var lenmessage = validatelength();
  if (isNaN(lenmessage) == true)
  {
    var passwordTextspace = document.querySelector("#password");
      
    passwordTextspace.value = " ";
        
    alert(lenmessage);
  }
  else
  {
    var islowercase = lowercasechoice();
    var isuppercase = uppercasechoice();
    var isnumericcase = numericchoice();
    var isspecialcharcase = specialcharchoice();

    if ((islowercase == false) && (isuppercase == false) && 
        (isnumericcase == false) && (isspecialcharcase == false))
        {
          alert("You have to answer OK to one of the characher types");
        }
        else
        {
          var parsechoices = "";
          if (islowercase == true) 
          {
            parsechoices = "1,";
          }
          else
          {
            parsechoices = "0,";
          }

          if (isuppercase == true) 
          {
            parsechoices += "1,";
          }
          else
          {
            parsechoices += "0,";
          }

          if (isnumericcase == true) 
          {
            parsechoices += "1,";
          }
          else
          {
            parsechoices += "0,";
          }

          if (isspecialcharcase == true) 
          {
            parsechoices += "1";
          }
          else
          {
            parsechoices += "0";
          }
        }
             
        var password = generatePassword(lenmessage, parsechoices);

        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
  }
}

// Is lower case included?
function lowercasechoice() {
  var lcchoice = false;
  lcchoice = confirm("Do you want to include lower case?");
  return lcchoice;
}

// Is upper case included?
function uppercasechoice() {
  var ucchoice = false;
  ucchoice = confirm("Do you want to include UPPER case?");
  return ucchoice;
}

// Is numeric included?
function numericchoice() {
  var nchoice = false;
  nchoice = confirm("Do you want to include number?");
  return nchoice;
}

// Is special character included?
function specialcharchoice() {
  var spchoice = false;
  spchoice = confirm("Do you want to include special character?");
  return spchoice;
}

// validate the length of password, at least 8 chanracters and not exceed 128 characters
function validatelength()
{
  var usrinputpassword = null;
  var mymsg = null;

  usrinputpassword = prompt("Please enter length of the password (min 8 characters, max 128 characters)");
  if ((usrinputpassword == null) || (usrinputpassword == ""))
  {
    mymsg = "Please enter an integer number";
  }
  else 
  {
    if ((usrinputpassword.includes(".")))
    {
      mymsg = "Please enter an integer number";
    }
    else
    {
      if (isNaN(usrinputpassword) == false)
      {
        if ((Number(usrinputpassword) < 8) || (Number(usrinputpassword) > 128))
        {
          mymsg = "Please enter a numeric value between 8 and 128";
        }
        else
        {
          mymsg = usrinputpassword;
        }
      }
      else
      {
        mymsg = "Please enter a number";
      }
    }
  }
  return mymsg;

}

// Populate word according to the required types and password length
function generatePassword(parlength, parchoices) {
  var counter = 0;
  var looplen = Number(parlength);
  var loopchoices = parchoices.split(",");
  var firstselected = false;
  var lconly = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uconly = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // In some cases, the random function does not pick up number due to the number population.  Duplicated the number to increase the change that function will pick it up.
  var numonly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var speccharonly = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", " "]; 
  var mergedarr;

  for (counter = 0; counter < loopchoices.length; counter++)
  {
    // lower case?
    if (loopchoices[counter] == "1")
    {
      if (counter == 0) 
      {
        mergedarr = lconly;
        firstselected = true;
      }

      // upper case?
      if (counter == 1) 
      {
        if (firstselected == true)
        {
          mergedarr.push(...uconly);
        }
        else
        {
          mergedarr = uconly;
          firstselected = true;
        }
      }

      // numeric?
      if (counter == 2) 
      {
        if (firstselected == true)
        {
          mergedarr.push(...numonly);
        }
        else
        {
          mergedarr = numonly;
          firstselected = true;
        }
      }

      // special characters?
      if (counter == 3) 
      {
        if (firstselected == true)
        {
          mergedarr.push(...speccharonly);
        }
        else
        {
          mergedarr = speccharonly;
        }
      }
    }
  }

  var mypasswordword = "";
  for (counter = 0; counter < looplen; counter++)
  {
    mypasswordword += mergedarr[Math.floor(Math.random() * mergedarr.length)];
  }

  return mypasswordword;   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
