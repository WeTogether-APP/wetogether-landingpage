# Waitlist Email Collection Setup

Your waitlist feature is now set up and ready to collect emails! Here's what's been configured:

## ✅ Current Setup (File-Based Storage)

The waitlist is currently using **file-based storage** which saves emails to a local JSON file at `data/waitlist.json`. This is perfect for development and small-scale use.

### How It Works:
1. When users submit their email on your landing page, it's validated and saved
2. Emails are stored in `data/waitlist.json` (this file is automatically created)
3. Duplicate emails are prevented
4. All entries include a timestamp

### Viewing Collected Emails:

**Option 1: Via API (Development)**
Visit: `http://localhost:3000/api/waitlist` in your browser to see all entries

**Option 2: Check the file**
Open `data/waitlist.json` in your project root

## 🚀 Upgrade Options for Production

### Option 1: Airtable (Recommended - Easiest)

1. **Create an Airtable account** and create a new base
2. **Create a table** with these fields:
   - `Email` (Single line text)
   - `Timestamp` (Date)
3. **Get your API key** from: https://airtable.com/create/tokens
4. **Get your Base ID** from your base URL
5. **Install Airtable package:**
   ```bash
   npm install airtable
   ```
6. **Add environment variables** to `.env.local`:
   ```
   AIRTABLE_API_KEY=your_api_key
   AIRTABLE_BASE_ID=your_base_id
   AIRTABLE_TABLE_NAME=Waitlist
   ```
7. **Update the API route** to use Airtable instead of file storage

### Option 2: Google Sheets API

Similar setup but using Google Sheets as your database.

### Option 3: Database (MongoDB, PostgreSQL, etc.)

For larger scale applications, set up a proper database.

## 📧 Email Service Integration

You can also integrate with email services like:
- **SendGrid** - Send welcome emails automatically
- **Mailchimp** - Add users to your mailing list
- **Resend** - Modern email API

## 🔒 Security Notes

- The GET endpoint (`/api/waitlist`) should be **removed or protected** in production
- Consider adding rate limiting to prevent spam
- Add CAPTCHA for additional protection

## 📝 Current Features

✅ Email validation
✅ Duplicate prevention
✅ Timestamp tracking
✅ Error handling
✅ Persistent storage (file-based)

Your waitlist is ready to collect emails! Just start your dev server and test it out.

