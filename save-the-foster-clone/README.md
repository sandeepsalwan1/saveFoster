## Save The Foster – Web App

Modern Next.js site using the App Router, TypeScript, Tailwind CSS, and shadcn/ui.

### Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Contact Form Email

The contact form posts to `/api/contact` and sends an email via the Resend API.

Create `save-the-foster-clone/.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
# optional
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=salwansandeep5@gmail.com
```

Without `RESEND_API_KEY`, the API will return a 500 and log the payload to the server console. Get a free key at https://resend.com.

### Improvements

- Upcoming event date is dynamic (+3 months)
- Optimized images via Next/Image
- Working `/api/contact` with validation and clear feedback
- Better metadata (title, description, Open Graph)

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```
