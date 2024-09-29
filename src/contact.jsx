export default function Contact() {
     return (
          <body>
            <div className="box1">

        <br />
        <br />
            <br/>
          <p><b>LEAVE A MESSAGE HERE</b></p>
          <hr />
          
         
        <br />

      <form>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" name="firstName" required />
        <br />
        <br />

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" name="lastName" required />
        <br />
        <br />

        <label htmlFor="email">Email Address: </label>
        <input type="email" id="email" name="email" required />
        <br />
        <br />

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <br />

        <button type="submit">Send</button>
      </form>
      <br />        <br />        <br />
      <br />
      <br />
<hr />
<a href="https://www.linkedin.com/in/nmendo16" target="_blank" rel="noopener noreferrer">
|  my LinkedIn  |
        </a>

        <a href="https://github.com/nmendo16" target="_blank" rel="noopener noreferrer">
        |  my GitHub  |
        </a>

         <a href="mailto:your_email@example.com">
        |  Send me an Email  |
        </a>
            </div>
          </body>
        );
     }