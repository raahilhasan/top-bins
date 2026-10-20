# Making money from Top Bins

A checklist for Raahil and a parent or guardian. The order matters: ads only pay once people are playing, so measure traffic and grow it first, then add ads.

## Realistic expectations

- Display ads pay per thousand page views. For a small game site, roughly **$1 to $5 per 1,000 views** is typical, and it swings with the visitors' country, the time of year and where the ad sits. 10,000 views a month is somewhere around $10 to $50 a month.
- AdSense only pays out once the balance reaches **$100**. For a new site that can take months.
- AdSense approval takes days to a few weeks and can be refused for "low value content". A single-page game with little text is a common reason. The home screen already explains the rules; an About page with a few paragraphs about how the game works would help.
- So: traffic first. Share the game, add the Daily Match, get it linked from places soccer fans hang out. Ads are the last step, not the first.

## Already done

- `privacy.html` is live at https://raahilhasan.github.io/top-bins/privacy.html and linked from the home-screen footer. AdSense requires a privacy policy with specific cookie wording; it is already in there under "Advertising (when enabled)".
- `index.html` has three comment markers showing exactly where things go (quoted below).
- The game has no accounts and no server, so there is no user data to worry about beyond what the ad network itself collects.

## Step 1: Analytics (free, 10 minutes, no parent needed)

You need to know whether anyone is playing before ads make sense.

Recommended: **GoatCounter** (https://www.goatcounter.com). Free for personal and non-commercial use, no cookies, open source, one script tag. If the site starts earning real money, pay for Plausible or donate to GoatCounter.

- Sign up at goatcounter.com, pick a code such as `topbins`.
- GoatCounter gives you one line, like:
  ```html
  <script data-goatcounter="https://topbins.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
  ```
- Paste it into `index.html` directly below this comment in the `<head>`:
  ```html
  <!-- ANALYTICS: paste your analytics snippet here (Plausible, GoatCounter or similar) to see how many people play. -->
  ```
- Commit, push, wait a couple of minutes for GitHub Pages, then play a match and check the GoatCounter dashboard.
- Update `privacy.html`: in the "Analytics (when enabled)" section, remove the "Status today: not enabled" chip, say which service is in use, and change the effective date at the top.

Alternatives: **Plausible** (https://plausible.io) has nicer dashboards and is also cookie-free, but the hosted version costs about $9 a month after a 30-day trial. **Cloudflare Web Analytics** is free and cookie-free and fine for commercial sites, but needs a Cloudflare account.

Avoid Google Analytics: it sets cookies, which means consent banners and a rewrite of the privacy page.

## Step 2: The AdSense account (the parent does this)

- [ ] AdSense requires the account holder to be **18 or older** (https://support.google.com/adsense/answer/9724). The parent signs in to **their own** Google account and applies at https://adsense.google.com/start/. All payments go to the parent. Agree the split at home.
- [ ] Site URL: enter `raahilhasan.github.io`. AdSense accepts subdomains of platforms on the Public Suffix List (their example is `site.appspot.com`; see https://support.google.com/adsense/answer/12170421), and `github.io` is on that list. If the "Add site" screen refuses it anyway, the fix is a custom domain (Step 5).
- [ ] The parent fills in their legal name, address and, later, tax information (a W-9 in the US) and bank details. These must be the parent's, because the parent is the publisher.
- [ ] AdSense shows a verification script that looks like this (`ca-pub-…` is the account's publisher ID):
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
  ```
  Paste it into `index.html` directly below this comment in the `<head>`:
  ```html
  <!-- AD NETWORK: paste your ad script (for example Google AdSense) here, then un-hide #adSlot below. -->
  ```
  Add the same tag to the `<head>` of `privacy.html` too, so the whole site carries it.
- [ ] Also create a file called `ads.txt` at the root of the repo containing the single line AdSense gives you, which looks like `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`. AdSense warns about missing `ads.txt` and it can reduce earnings.
- [ ] Commit, push, wait about two minutes for GitHub Pages, then click **Verify** in AdSense and request a review.
- [ ] Wait. Reviews take from a few days to a few weeks. Keep the site up and don't change it drastically during review.
- [ ] Consent for Europe: if anyone from the EU, UK or Switzerland visits, AdSense requires a consent message. In AdSense go to **Privacy & messaging** and turn on Google's own European regulations message. No code needed.

## Step 3: Place the ad unit (after approval)

- [ ] In AdSense: **Ads** → **By ad unit** → **Display ads** → name it "Top Bins results" → Responsive → Create. The code looks like:
  ```html
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  ```
- [ ] In `index.html`, search for `AD SLOT`. In the RESULTS section you will find:
  ```html
  <!-- AD SLOT: put a display ad unit here once your ad network approves the site, then remove "hidden". -->
  <div class="ad-slot" id="adSlot" hidden></div>
  ```
  Paste the `<ins>` and `<script>` lines **inside** the `#adSlot` div, and **delete the word `hidden`** from the div. The `adsbygoogle.js` script from Step 2 must already be in the `<head>` (only once per page).
- [ ] Why only the results screen: ads during play would wreck the game. The results screen is where people linger and share. One unit is enough to start. AdSense "Auto ads" can be switched on later from the dashboard without code changes, but they can appear mid-game, so start with this manual unit.
- [ ] Push, wait for Pages, play a match to the end, and check that the slot is filled. New sites can show blank space for the first day or so.
- [ ] Update `privacy.html`: in "Advertising (when enabled)" remove the "Status today: not enabled" chip, make the sentence present-tense ("The site shows ads through Google AdSense"), and change the effective date.
- [ ] **Never click your own ads**, and don't ask friends to. That gets the account banned, and the parent's Google account carries the strike.

## Step 4: A custom domain (optional, but it helps)

GitHub Pages works fine at `raahilhasan.github.io/top-bins/`, and AdSense's rules allow that address. A domain of your own (about $10 to $15 a year at a registrar such as Cloudflare Registrar, Porkbun or Namecheap, bought on the parent's card) still helps:

- AdSense reviewers see an established site rather than a free-host subdomain, and it is the fallback if "Add site" ever refuses the github.io address.
- Share links look cleaner, and you keep your traffic if you ever move hosts.

How: buy the domain → repo **Settings → Pages → Custom domain**, enter it (GitHub adds a `CNAME` file) → at the registrar add DNS records as GitHub's docs describe (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) → tick **Enforce HTTPS** once the certificate is issued → update the two URL lines near the top of `index.html` and `SITE_URL` in its script (the comment there says so), plus the canonical link in `privacy.html` → add the new domain as a site in AdSense.

## Step 5: After it is running

- Check the AdSense dashboard monthly. Payments land around the 21st of the month after the balance passes $100.
- The parent reports the income on their taxes.
- Keep `privacy.html` honest: whenever analytics or ads change, update that page and its effective date the same day.

## Who does what

- **Parent:** creates and owns the AdSense account, provides identity, address, tax and bank details, approves the consent message, buys the domain if you go that route.
- **Raahil:** pastes the snippets at the three markers, removes `hidden` from `#adSlot`, adds `ads.txt`, pushes, and keeps `privacy.html` accurate.
