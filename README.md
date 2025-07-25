# Node Mail Service

This project provides a simple REST API for sending templated emails from Node.js. It can run as a Windows service using **node-windows** and supports Handlebars templates with inline images.

The codebase is organized into small modules under `src/` for easier maintenance:

- `config.js` loads environment variables and verifies required settings.
- `mailer.js` creates the Nodemailer transport and exports a `sendMail` helper.
- `routes/` exposes REST endpoints consumed by `server.js`.

## Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and update the SMTP configuration and other environment variables:

```bash
cp .env.example .env
```

3. Start the service for development (runs `src/server.js`):

```bash
npm start
```

## Windows Service

The included `service.js` script allows installing or uninstalling the REST API as a Windows service.

```bash
npm run install-service   # install and start the service
npm run uninstall-service # uninstall the service
```

## REST API

`POST /api/send`

Payload example:

```json
{
  "to": "user@example.com",
  "subject": "Welcome",
  "template": "welcome",
  "context": { "name": "User" },
  "attachments": [
    {
      "filename": "logo.png",
      "path": "./path/to/logo.png",
      "cid": "logo"
    }
  ]
}
```

- `template` must match a file in the `templates` directory (without extension).
- Attachments can be used to embed images referenced by `cid` in the template.

## Templates

Example templates are provided in the `templates/` folder. You can add more Handlebars templates to customize your emails.

## License

MIT
