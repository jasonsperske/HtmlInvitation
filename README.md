# Html Invitation
A system to host an HTML based invitation that is password protected but doesn't require a server.

# How to see an invitation
Put the files onto any HTTP server (seriously any, this only uses HTTP GET so something like [darkhttpd](https://unix4lyfe.org/darkhttpd/) is perfect). Access the `index.html` document and put in the configured password (in the example file there is already a payload with the password "password").  Click "Sign In" and the invitation is decrypted.

# How To Set Up (easy)
First start a simple HTTP server using the `public` folder as the document root. Then edit the file `public/invitation.html`.  You can see exactly how your invitation will look. You can configure a secret passphrase and a protected title to appear when the password is correctly entered. When you satisfied with your invitation, click on the "Encrypt" button and get the encrypted payload to add to your `index.html` file.  Upload the files inside of the `public` folder to any static web host (don't upload the invitation.html as it is not protected).  Then you can share that URL as a password protected invitation.

# How To Set Up (hard)
In this example I used Bootstrap to make it easier to get quick mobile responsive support. But you can change this with any framework (or no framework at all).  The JavaScript is entirely self-contained so you can mix and match it with anything, and the CSS is flexible as well. You can pull out the confetti.js call, replace the domJSON with a templating language, or even replace the CryptoJS with a different encryption routine.  If you are looking to do any of these things you really don't need me to explain them, but just to help I've tried to make the code as simple as possible.

# Why I Made This in This Way
I wanted to set up a simple password protected birthday invitation for my son's party. We setup a Minecraft server and I wanted the server to have the same URL as the invitation (to help people get set up).  Something like this would be easy in more feature packed web server like Apache, but I wanted something that was simple to setup and completely static (could run on Amazon S3).  This is admittedly an overly engineered solution but it was interesting enough for me to want to share it with others.
