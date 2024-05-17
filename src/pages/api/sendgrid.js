import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, html } = req.body;

    try {
      await sgMail.send({
        to: "andrew.w.krasuski@gmail.com",
        from: "andrew.w.krasuski@gmail.com", 
        subject: `[Lead from website] : ${subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          // Rest of your HTML email content here
          </div>
        </body>
        </html>`
      });
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
