//var https = require('https');
var express = require('express');
var app = express();
app.use(express.static('/workspace/Carica-Website-GitPod/styles'));
app.use(express.static('/workspace/Carica-Website-GitPod/JS'));
app.use(express.static('/workspace/Carica-Website-GitPod/'));
app.use(express.static('/workspace/Carica-Website-GitPod/Responsive Design'));
app.use(express.static('/workspace/Carica-Website-GitPod/SCSS'));
app.use(express.static('/workspace/Carica-Website-GitPod/SVG'));
app.use(express.static('/workspace/Carica-Website-GitPod/img'));

var HTMLParser = require('node-html-parser');
var root = HTMLParser.parse('<script>var gtmCode = 	´window.dataLayer = window.dataLayer || [];  (function (w, d, s, l, i) {    w[l] = w[l] || [];    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });    var f = d.getElementsByTagName(s)[0],      j = d.createElement(s),      dl = l != "dataLayer" ? "&l=" + l : "";    j.async = true;    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;    f.parentNode.insertBefore(j, f);  })(window, document, "script", "dataLayer", "GTM-K69PP6N")´; document.head.insertAdjacentHTML("afterbegin", gtmCode);</script>');
const head = root.querySelector('head');
head.appendChild(root.toString());
const formData =
{
    department: '',
    first_name: '',
    last_name: '',
    mail: '',
    phone: '',
    message: ''
};
/*var qs = require('querystring');*/

/*function query(req, res) {
    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
        });
    }
}*/
app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



//var fs = require('fs');

  

  var nodemailer = require('nodemailer');
  //https://medium.com/@vuongtran/using-node-js-bcrypt-module-to-hash-password-5343a2aa2342
  //https://stackoverflow.com/questions/26475136/storing-password-securely-nodemailer


  var transporter = nodemailer.createTransport({
    host: 'smtp.carica.website',
    auth: {
      user: process.env.USER_ID,
      pass: process.env.USER_KEY
    }
  });
  
  var mailOptionsUser, mailOptionsAdmin, currentTicket, depart;
  
/*https.createServer(function (req, res) {
  fs.readFile('../contacts.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);*/

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

app.get("/", (req, res) => {
  res.sendFile('/workspace/Carica-Website-GitPod/contacts.html');
});

app.post('/thankYou', function(req, res)
{
  res.status(204).send();
  var post = Object.create(formData);
  post =
  {
    department: req.body.department,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mail: req.body.mail,
    phone: req.body.phone,
    message: req.body.message
  };
  SendMailNode(post);
  dataLayer.push({ form: null });
  dataLayer.push({
    event: "form_submission",
    form: post
    /*{
      department: post.department,
      first_name: post.first_name,
      last_name: post.last_name,
      mail: formData.mail,
      phone: formData.phone,
      message: formData.message
    }*/
  });
  //res.send('Thank you for your submission, we have sent you an email and will get in touch with you as soon as possible');
});

function chooseDepartment(post)
  {
    var temp;
    if(post.department == "General")
    {temp = "support@carica.website"}
    if(post.department == "Sales")
    {temp = "christiyan@carica.website"}
    if(post.department == "Technical")
    {temp = "gaetano@carica.website"}
    return temp;
  }

  function ticketMaker()
  {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var charactersLength = characters.length;
      //var flag = 0;
      //do
      //{
        for ( var i = 0; i < 6; i++ )
        {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        //if (this ticket number == get data from the database [probably need to use a for to check them all])
        //flag=1;
      //}
      //while flag == 0
      return result;
  }

  function SendMailNode(post)
{
  currentTicket = ticketMaker();
  depart = chooseDepartment(post);

    mailOptionsUser = {
    from: process.env.USER_ID,
    to: post.mail,
    subject: 'Carica Website customer support, ticket #' + currentTicket,
    text: 'temp text for users, we will decide later'
  };

    mailOptionsAdmin = {
    from: process.env.USER_ID,
    to: depart,
    subject: 'Carica Website customer support, ticket #' + currentTicket,
    text: 'User form that was sent:\nFirst Name: ' + post.first_name + '\nLast Name: ' + post.last_name + '\nEmail: ' + post.mail + '\nPhone Number: ' + post.phone + '\nForm Message: ' + post.message + '\n\nEnd of Mail'
  };

  transporter.sendMail(mailOptionsUser, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  transporter.sendMail(mailOptionsAdmin, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}