# BTC Coinbase Actual Price Spot

## Obsah
- [BTC Coinbase Actual Price Spot](#btc-coinbase-actual-price-spot)
  - [Obsah](#obsah)
  - [Úvod](#úvod)
  - [Struktura projektu](#struktura-projektu)
    - [index.html](#indexhtml)
    - [styles.css](#stylescss)
    - [script.js](#scriptjs)
  - [Funkce aplikace](#funkce-aplikace)
  - [Použité technologie](#použité-technologie)
  - [API](#api)
  - [Uživatelské rozhraní](#uživatelské-rozhraní)
  - [Responsivní design](#responsivní-design)
  - [Instalace a spuštění](#instalace-a-spuštění)
  - [Možnosti rozšíření](#možnosti-rozšíření)
  - [Licence](#licence)

## Úvod
BTC Coinbase Actual Price Spot je jednoduchá webová aplikace, která zobrazuje aktuální cenu Bitcoinu (BTC) v amerických dolarech (USD). Aplikace získává data z Coinbase API a aktualizuje je každé 3 sekundy. Cena je zobrazena velkým, dobře čitelným písmem s oranžovou barvou na poloprůhledném pozadí, které umožňuje vidět tapetu na pozadí.

Aplikace je navržena tak, aby fungovala plně lokálně bez nutnosti serveru - stačí otevřít HTML soubor v prohlížeči.

## Struktura projektu
Projekt se skládá ze tří hlavních souborů:

- **index.html** - HTML struktura aplikace
- **styles.css** - CSS styly pro vzhled aplikace
- **script.js** - JavaScript kód pro funkcionalitu aplikace

### index.html
Základní struktura HTML dokumentu, který definuje rozložení aplikace.

### styles.css
Obsahuje všechny styly pro aplikaci, včetně responsivního designu pro různé velikosti obrazovky.

### script.js
Obsahuje JavaScript kód, který zajišťuje:
- Získávání dat z Coinbase API
- Aktualizaci ceny na stránce
- Formátování ceny
- Ošetření chyb

## Funkce aplikace
- **Zobrazení aktuální ceny BTC** - Aplikace zobrazuje aktuální cenu Bitcoinu v USD.
- **Automatická aktualizace** - Cena se automaticky aktualizuje každé 3 sekundy.
- **Responsivní design** - Aplikace se přizpůsobuje různým velikostem obrazovky.
- **Ošetření chyb** - Aplikace zobrazuje chybovou zprávu, pokud se nepodaří načíst data z API.

## Použité technologie
- **HTML5** - Pro strukturu stránky
- **CSS3** - Pro stylování a responsivní design
- **JavaScript (ES6+)** - Pro funkcionalitu a komunikaci s API
- **Fetch API** - Pro získávání dat z Coinbase API
- **Google Fonts** - Pro font Source Sans 3
- **Font Awesome** - Pro ikony (aktuálně nepoužívané, ale připravené pro případné rozšíření)

## API
Aplikace používá veřejné API Coinbase pro získání aktuální ceny Bitcoinu:

```
https://api.coinbase.com/v2/prices/BTC-USD/spot
```

Toto API vrací data ve formátu JSON s následující strukturou:
```json
{
  "data": {
    "base": "BTC",
    "currency": "USD",
    "amount": "84319.89"
  }
}
```

Aplikace z této odpovědi extrahuje hodnotu `data.amount`, která představuje aktuální cenu BTC v USD.

## Uživatelské rozhraní
Uživatelské rozhraní je minimalistické a zaměřené na čitelnost ceny:

- **Pozadí** - Aplikace používá tapetu na pozadí, která je viditelná skrz poloprůhledný kontejner.
- **Kontejner** - Hlavní kontejner zabírá celou plochu obrazovky a má poloprůhledné pozadí s efektem rozmazání.
- **Cena** - Cena je zobrazena velkým písmem (12rem) s oranžovou barvou (#ff9900).
- **Chybové stavy** - Pokud se nepodaří načíst data z API, zobrazí se text "Chyba při načítání ceny".

## Responsivní design
Aplikace je plně responsivní a přizpůsobuje se různým velikostem obrazovky:

- **Velké obrazovky (>1024px)** - Velikost písma ceny: 12rem
- **Střední obrazovky (768px-1024px)** - Velikost písma ceny: 10rem
- **Malé obrazovky (640px-768px)** - Velikost písma ceny: 8rem
- **Velmi malé obrazovky (400px-640px)** - Velikost písma ceny: 6rem
- **Mobilní telefony (<400px)** - Velikost písma ceny: 5rem

Aplikace také automaticky zmenšuje velikost písma pro delší čísla, aby se vždy vešla na jeden řádek.

## Instalace a spuštění
1. Stáhněte všechny soubory projektu (index.html, styles.css, script.js).
2. Umístěte do složky vlastní obrázek tapety s názvem "wallpaper.jpg".
3. Otevřete soubor index.html v libovolném moderním webovém prohlížeči.

**Důležité: Pro spuštění aplikace není vyžadován žádný server!** Aplikace funguje plně lokálně a může běžet přímo z vašeho souborového systému otevřením souboru index.html.

Pro lokální vývoj a testování můžete volitelně použít jednoduchý HTTP server:
```
python -m http.server 8000
```
Poté otevřete prohlížeč na adrese http://localhost:8000

## Možnosti rozšíření
Projekt lze rozšířit o následující funkce:

1. **Zobrazení více kryptoměn** - Přidání možnosti zobrazit ceny dalších kryptoměn.
2. **Historické grafy** - Přidání grafů zobrazujících historický vývoj ceny.
3. **Nastavení uživatele** - Možnost přizpůsobit vzhled aplikace (barvy, velikost písma, interval aktualizace).
4. **Notifikace** - Upozornění na významné změny ceny.
5. **Převodník měn** - Přidání možnosti zobrazit cenu v jiných měnách než USD.
6. **Offline režim** - Ukládání poslední známé ceny pro případ výpadku připojení.

## Licence

Tento projekt je licencován pod licencí MIT - viz níže pro plné znění:

```
MIT License

Copyright (c) 2024 BTC Coinbase Actual Price Spot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
