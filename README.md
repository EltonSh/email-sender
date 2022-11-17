# email-sender
## Description and instructions
### A small command line utility for sending emails from a LINUX terminal.

Written in *node.js*, this small utility uses the *nodemailer* module to send emails from a bash terminal. To use it, you need to have *node.js* installed on your system. This can be done easily from the command-line (e.g. in Ubuntu):
>sudo apt install node

You will then need to install the *nodemailer* module in the same directory where this repository will be stored. Navigate to the local clone of this repository and simply type:
>npm install nodemailer

*npm* is the *node.js* official package manager. If no issues are encountered, a directory *node_modules* will be created and a *nodemailer* directory inside of it.

In terms of use-case, it oftentimes happens for me to need to send a script or program file that I have just finished writting, to someone. The same can be said about a small data file (e.g. a *.csv* file). Using this utility, I do not need to leave the terminal to send the email. Instead, all I need is to write one line of code, as follows:

>send-mail "\<the-recipient-address\>" "\<the-subject\>" "\<the-content\>" "\<path-to-attachment\>"

In order to evoke it as in the line above, you need to add the following alias in your *.bashrc* file:

>alias send-mail="node \<path-to-script\>/send_email.js"

and then

>source ~/.bashrc

### Make the following modifications to this script:
The *nodemailer* module requires for you to specify your email address. Add it on line 13, inside the single quotes:
>user: ' '

Then, you need to specify a password. Note that this is not the same as your usual email password, which you use to log onto the email server you use. Instead, you have to request an *app password*, intended for authentication from third-party apps. E.g. in yahoo, such a password can be generated by visiting: "Settings/Account info/Security settings/Generate and manage app passwords". Then just click/tap on *Generate password* and you will receive a 16-character password. Input this password on line 14, inside the single quotes:
>pass: ' '

Enjoy!
