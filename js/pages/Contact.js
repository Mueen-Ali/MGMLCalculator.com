/**
 * MGMLCalculator.com - Contact Page View Template
 */

export function renderContactPage() {
  return `
    <section class="page-hero">
      <span class="badge">Get in Touch</span>
      <h1>Contact Us</h1>
      <p class="lead">
        Have questions, feedback, or suggestions for our mathematical conversion utilities? We would love to hear from you.
      </p>
    </section>

    <div class="container-narrow">
      <div class="card" style="margin-bottom: var(--space-xl);">
        <h2>Send Us a Message</h2>
        <p style="margin-bottom: var(--space-lg);">
          Please fill out the form below with your inquiry or suggestion. For mathematical calculator inquiries or feedback, specify the details below.
        </p>

        <form id="contact-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Thank you for your message! We will get back to you soon.');">
          <div class="form-group">
            <label for="contact-name" class="form-label">Your Name</label>
            <input type="text" id="contact-name" name="name" class="form-control" placeholder="Jane Doe" required />
          </div>

          <div class="form-group">
            <label for="contact-email" class="form-label">Email Address</label>
            <input type="email" id="contact-email" name="email" class="form-control" placeholder="jane@example.com" required />
          </div>

          <div class="form-group">
            <label for="contact-subject" class="form-label">Subject</label>
            <input type="text" id="contact-subject" name="subject" class="form-control" placeholder="Feedback or Question" required />
          </div>

          <div class="form-group">
            <label for="contact-message" class="form-label">Message</label>
            <textarea id="contact-message" name="message" class="form-control" placeholder="How can we help you?" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>

      <div class="card card-surface">
        <h3>Direct Contact Details</h3>
        <p>
          <strong>Website:</strong> MGMLCalculator.com<br>
          <strong>Focus:</strong> Milligram (mg) & Milliliter (mL) Mathematical Conversion Utilities<br>
          <strong>Inquiries:</strong> support@mgmlcalculator.com
        </p>
      </div>
    </div>
  `;
}
