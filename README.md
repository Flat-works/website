# Flatworks – Website (GitHub Pages ready)

Diese kleine, statische Website besteht aus reinem HTML/CSS/JS und läuft perfekt auf **GitHub Pages**.

## Struktur
- `index.html` – Startseite
- `projekte.html` – Galerie eurer Builds
- `termin.html` – Terminformular (Formspree)
- `style.css`, `script.js`
- `assets/logo.svg`, `assets/projects/*`

## Formspree einrichten (2 Minuten)
1. Gehe zu https://formspree.io/ und registriere dich (kostenlos).
2. Lege ein neues Formular an. Du bekommst eine Endpoint‑URL wie `https://formspree.io/f/abcdwxyz`.
3. Öffne `termin.html` und ändere das Attribut `data-endpoint` des `<form>`:
   ```html
   <form id="termin-form" data-endpoint="https://formspree.io/f/abcdwxyz">
   ```
4. Optional: In `script.js` kannst du die Fallback‑URL ebenfalls ersetzen.

## Bilder austauschen
- Ersetze die Platzhalter in `assets/projects/` durch echte Fotos (JPG/PNG/WebP). 
- Passe die Dateinamen in `projekte.html` und `index.html` an (falls nötig).

## GitHub Pages veröffentlichen
1. Neues Repo erstellen (z. B. `flatworks`).
2. Alle Dateien hochladen/committen.
3. In den Repo‑Settings → **Pages** → Deploy from branch → Branch `main`/`master`, Folder `/root` → **Save**.
4. Nach kurzer Zeit ist die Seite unter `https://<username>.github.io/flatworks/` erreichbar.

## Farben & Branding ändern
- Primärfarbe: `--accent` in `style.css`.
- Text & Hintergrund: `--text`, `--bg`, `--panel`.
- Favicon/Logo: `assets/logo.svg` austauschen.

Viel Spaß – und gute Fahrt! 🏁
