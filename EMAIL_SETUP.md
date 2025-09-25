# Email Setup Instructions

## Gmail Configuration for Contact Form

To enable the contact form to send emails to `claygirlsflims@gmail.com`, you need to set up Gmail authentication.

### Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=claygirlsflims@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

### Step 2: Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Go to **Security** → **App passwords**
4. Select **Mail** as the app
5. Generate a new 16-character app password
6. Copy this password and use it as `EMAIL_PASSWORD` in your `.env.local` file

### Step 3: Email Format

When someone submits the contact form, you'll receive an email with this format:

```
Subject: Website Contact: [Client's Subject]

Hello Clay Girls,

You have received a new message from your website contact form:

From: [Client's Name]
Email: [Client's Email]
Subject: [Client's Subject]

Message:
[Client's Message]

---
This message was sent from the Clay Girls website contact form.
```

### Step 4: Reply Functionality

The email will include the client's email as the reply-to address, so you can reply directly to them from your email client.

### Security Notes

- Never commit your `.env.local` file to version control
- The app password is more secure than using your regular Gmail password
- The contact form includes validation to prevent spam

### Testing

After setting up the environment variables, restart your development server and test the contact form to ensure emails are being sent correctly.
