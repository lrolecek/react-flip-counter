# React flip counter

Otáčecí počitadlo napsané v Reactu s pomocí `react-transition-group`.

Demo: [https://react-flip-counter.netlify.app/](https://react-flip-counter.netlify.app/)

## Nastavení

### Komponenta Counter

V konstantách na začátku kódu nastavit *počet číslic* a *rychlost zvětšování počitadla* v milisekundách.

### Komponenta Digit

V konstantách na začátku kódu je třeba nastavit *rychlost animace* - je potřeba, aby toto číslo bylo **alespoň o 50 ms menší**, než rychlost zvětšování počítadla v komponentě `Counter`.

Stejné číslo je potřeba nastavit i na začátku CSS do proměnné `--animation-speed`.

## Instalace

```
git clone https://github.com/lrolecek/react-flip-counter.git
npm install
```

## Spuštění

```
npm run start
```

