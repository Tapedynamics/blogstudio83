# 📧 Configurazione Newsletter Automatica con RSS Feed

## ✅ Feed RSS Creato

Il tuo blog ora ha un feed RSS disponibile all'indirizzo:
**https://consapevolmentebelli.com/rss.xml**

Questo feed contiene:
- Titolo di ogni articolo
- Descrizione/estratto
- Link diretto all'articolo
- Data di pubblicazione
- Autore
- Immagine di copertina
- Tag/categorie

---

## 🚀 Come Configurare l'Automazione su Brevo

### Passo 1: Accedi a Brevo
1. Vai su [https://app.brevo.com](https://app.brevo.com)
2. Accedi con le tue credenziali

### Passo 2: Crea una Campagna RSS
1. Nel menu laterale, clicca su **"Campaigns"** (Campagne)
2. Clicca su **"Create a campaign"** (Crea una campagna)
3. Seleziona **"Email campaign"**
4. Scegli **"RSS campaign"** o **"Automated campaign"**

### Passo 3: Configura il Feed RSS
1. **URL del Feed RSS:** `https://consapevolmentebelli.com/rss.xml`
2. **Frequenza:** Scegli quando controllare il feed
   - Opzione consigliata: **"Giornaliera"** o **"Settimanale"**
   - Orario: Scegli quando inviare (es. ore 10:00 del mattino)
3. **Numero di articoli:** Quanti articoli includere per email
   - Consigliato: **1 articolo** (l'ultimo pubblicato)

### Passo 4: Progetta l'Email Template
Brevo ti permette di creare un template per le tue newsletter. Usa i **merge tags** per inserire dinamicamente i contenuti del feed:

```
Ciao {{FIRSTNAME}}! 👋

📝 Nuovo articolo su Consapevolmente Belli:

{{item.title}}

{{item.description}}

👉 Leggi l'articolo completo: {{item.link}}

---

✨ Cristina Cafagno
Studio83 Tenerife - Las Américas
Consapevolmente Belli

[Segui su Instagram] [Visita Studio83]
```

**Merge tags disponibili:**
- `{{item.title}}` - Titolo dell'articolo
- `{{item.description}}` - Estratto/descrizione
- `{{item.link}}` - Link all'articolo completo
- `{{item.pubDate}}` - Data di pubblicazione
- `{{item.image}}` - Immagine di copertina

### Passo 5: Seleziona i Destinatari
1. Scegli la **lista** degli iscritti (dovrebbe essere la lista ID 2)
2. Puoi anche segmentare per interessi se hai configurato i tag

### Passo 6: Testa e Attiva
1. **Invia un'email di test** a te stessa per vedere come appare
2. Verifica che:
   - Il titolo sia leggibile
   - Il link funzioni
   - L'immagine si carichi
   - Il layout sia responsive (mobile)
3. **Attiva la campagna**

---

## 📊 Cosa Succede Dopo

Quando pubblichi un nuovo articolo sul blog:
1. L'articolo viene aggiunto automaticamente al feed RSS
2. Brevo controlla il feed secondo la frequenza impostata
3. Se rileva un nuovo articolo, invia automaticamente l'email a tutti gli iscritti
4. Gli iscritti ricevono la notifica con link diretto all'articolo

---

## 🔧 Alternative: Automation Workflow

Se Brevo non ha la funzione RSS diretta (dipende dal piano), puoi usare gli **Automation Workflows**:

1. Vai su **"Automation"** → **"Create a workflow"**
2. Trigger: **"RSS Feed"**
3. URL Feed: `https://consapevolmentebelli.com/rss.xml`
4. Azione: **"Send email"**
5. Template: Crea il template come sopra
6. Destinatari: La tua lista di iscritti

---

## 💡 Tips SEO e Best Practices

### Subject Line (Oggetto Email)
Usa un oggetto accattivante che includa il titolo dell'articolo:
- ✅ `Nuovo articolo: {{item.title}}`
- ✅ `🌿 {{item.title}} - Consapevolmente Belli`
- ❌ `Newsletter #3` (troppo generico)

### Preview Text (Testo Anteprima)
Il primo testo che appare nell'email dopo l'oggetto:
- ✅ Primi 100 caratteri dell'estratto
- ✅ Un teaser che invoglia a cliccare

### CTA (Call to Action)
- Usa bottoni visibili con testo chiaro: **"Leggi l'articolo completo"**
- Colori coerenti con il brand (verde salvia #7d9d7f)

### Footer
Includi sempre:
- Link per disiscriversi
- Link ai social media
- Contatti Studio83

---

## 🎯 Monitoraggio Performance

Dopo aver attivato le campagne RSS, controlla su Brevo:
- **Tasso di apertura** (Open Rate): obiettivo >25%
- **Tasso di click** (Click Rate): obiettivo >3%
- **Discrizioni**: se aumentano, rivedi il contenuto

---

## 📞 Supporto

Se hai problemi con la configurazione:
1. Consulta la documentazione Brevo: [https://help.brevo.com](https://help.brevo.com)
2. Cerca "RSS to Email" nella loro knowledge base
3. Contatta il supporto Brevo se il tuo piano include assistenza

---

✨ **Fatto! Ora ogni nuovo articolo verrà inviato automaticamente ai tuoi iscritti!**
