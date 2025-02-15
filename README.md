# Spin Documentation Site

This is the documentation site for Spin, built with Jekyll and TailwindCSS.

## Local Development

### Prerequisites

- Ruby (version 2.7.0 or higher)
- Bundler
- Node.js (for TailwindCSS)

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd spincli-website
```

2. Install dependencies:

```bash
bundle install
```

3. Start the development server:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Structure

```
spincli-website/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main layout template
├── assets/
│   └── css/
│       └── styles.css   # Custom styles
├── index.html           # Home page
├── installation.html    # Installation guide
├── commands.html        # Command reference
├── configuration.html   # Configuration guide
└── workflow.html        # Development workflow guide
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
