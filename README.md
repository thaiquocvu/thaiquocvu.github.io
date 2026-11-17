# Oscar Vu portfolio: how to edit and publish

This site is plain files: no framework, no build step, nothing to install.

## Which file does what

| File | What it controls | Edit it to... |
|---|---|---|
| `content.js` | **All the words**: name, headline, education, experience, skills, About story, contact details, every project and case study, the archive | change any text, add a project, update skills, add your email/LinkedIn/resume |
| `styles.css` | **The design**: colours, fonts, spacing, layout | change colours (top of the file) or spacing |
| `app.js` | Builds the pages from `content.js`, plus transitions and click-to-enlarge | usually never |
| `index.html` | The page frame: navigation and footer | rarely (e.g. nav labels) |
| `assets/` | **All images** (screenshots, diagrams) | add or replace images |

Colours live in the `:root { ... }` block at the top of `styles.css` (`--beige`, `--cream`, `--charcoal`, `--muted`, `--accent`).

## Common edits (all in `content.js`)

- **Add your contact details**: find `contact: { email, linkedin, resume }` near the top and fill in the quotes. Empty values show a "placeholder" automatically. Never put your home address or phone number here.
- **Add your public resume**: save the PDF as `assets/Oscar_Vu_Resume.pdf`, then set `resume: "assets/Oscar_Vu_Resume.pdf"`. The resume buttons switch from "not yet available" to a working download. Do not use a resume that contains your home address.
- **Edit qualifications / experience / skills**: change the `education`, `experience` and `skills` lists. One entry per `{ ... }`.
- **Edit the About page**: change the blocks in `aboutStory`. Each block has a heading `h`, paragraphs `p`, and an optional `quote`.
- **Replace a screenshot**: save the new image into `assets/` (WebP or PNG/JPG, about 2000px wide is plenty), and either keep the same filename or update the `src` in `content.js`.
- **Replace or add Techkie screenshots**: they live in `assets/` as `tk-ui-*.webp` and are listed under the "Chatbot capabilities" section of the Techkie project in `content.js`. Add a line to its `gallery` list for each new image.

## Add another case study

1. Copy your images into `assets/`.
2. In `content.js`, copy one whole project block inside `projects: [ ... ]` (from `{ id: "travelsphere"` to its closing `}`) and paste it after the last project, with a comma between blocks.
3. Change `id` (one lowercase word, no spaces: it becomes the page address `#yourid`), `title`, `subtitle`, `category`, `year`, `role`, `type`, `tools`, `cover`, `blurb` and `status`.
4. Edit the `sections`. Each section can use: `p` (paragraphs), `ul` (bullet list), `stats` (big numbers), `figs` or `gallery` (images with captions), `note` (highlighted note), `placeholder` (empty-slot message), `rai` (title/description pairs). Add `band: true` to a section to give it a charcoal background.
5. Save and refresh. The new project appears on Home, Work and in the "next project" links automatically.

Keep academic work labelled as academic, and describe analysis results as findings, not outcomes achieved by a real organisation.

## Preview on your computer

Easiest: double-click `index.html`. It opens in your browser and works offline (Google Fonts need internet, otherwise a similar system font is used).

If you prefer a local server, open a terminal in this folder and run `python3 -m http.server 8000`, then visit http://localhost:8000.

## Publish and update later

This site is plain files, so it needs no server. Any free static host works:

- **Netlify** (netlify.com): the easiest. Drag this whole folder onto its deploy page and you get a link. To update, drag the changed folder again. The free plan has a monthly usage allowance shared across all your sites.
- **Cloudflare Pages**: free, with generous bandwidth. Works best when you connect a GitHub repository.
- **GitHub Pages**: free. You put the files in a public GitHub repository and switch Pages on. Publishing from a private repository needs a paid GitHub plan.

All three allow a custom domain with free HTTPS. The domain name itself costs money (roughly $15 to $25 a year); the free address the host gives you is fine for a resume.

Free plans change, so check the host's pricing page before you choose.

### Tableau dashboards
Tableau Public is free and needs no server of yours. In Tableau Desktop (Public Edition or Professional): Server > Tableau Public > Save to Tableau Public, sign in, name the workbook and save. Everything you publish, including the data, is visible to anyone, so only use data you are happy to share. You can then link to the dashboard from the matching case study.

Before going public:
1. Remove the line `<meta name="robots" content="noindex">` in `index.html` (it currently asks search engines not to list the site).
2. Fill in your public contact details and resume in `content.js`.
3. Put your final link on your resume.

## Privacy checklist (keep this true)

- Do not add: home address, phone number, student ID, signatures, API keys, `.env` files, or any Medibank group-project material.
- Only put files in this folder that you are happy to be public. Everything here is downloadable by visitors.
- If you later build a live Techkie demo, keep the Gemini API key on a server, never in this folder.
