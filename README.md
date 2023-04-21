# docs.fdnd.nl

[![GitHub issues](https://img.shields.io/github/issues/fdnd/docs.svg?style=flat-square)](https://github.com/fdnd/docs/issues)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: GPL-3.0](https://img.shields.io/github/license/fdnd/docs.svg?style=flat-square)](https://github.com/fdnd/docs/blob/main/LICENSE)

Beschrijving in documenten van de Associate degree Frontend Design & Development,
een opleiding van de Hogeschool van Amsterdam op niveau 5.

## Bijdragen

Al onze niet AVG gevoelige informatie is publiek toegankelijk. Als je het ergens niet mee eens bent, als je foutjes ontdekt of als je een bijdrage hebt dan staat het je vrij aanpassingen te maken en een _pull-request_ in te schieten. Je kunt natuurlijk ook gewoon een _issue_ schrijven, kies daarbij alstjeblieft het juiste
_issue template_.

## Installatie

Als je wilt bijdragen is het handig als je dat op jouw lokale machine kunt doen. Volg onderstaande stappen om de omgeving lokaal te installeren.

1. _Fork_ deze _repository_
2. _Clone_ jouw _forked_ _repository_ naar je lokale omgeving
3. Voer `npm install` uit
4. Maak de aanpassingen die je wilt maken. In de `docs` map staan de documenten in _markdown_ formaat en in de `src` map staan de bestanden die gebruikt worden voor het `parsen` van de documenten.
5. Voer `npm start` uit om de documenten in de `docs` map te _parsen_ en te verplaatsen naar de `build` map.

## Documentatie

### Ondersteunde Markdown syntax

[Docs.fdnd.nl](https://docs.fdnd.nl) gebruikt [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) om Markdown bestanden te parsen. Dit betekend dat een aantal extenties ondersteund worden, bovenop de standaard Markdown specificatie. Hieronder enkele highlights.

#### Tabellen

Eenvoudige tabellen kunnen in GFM met pipes (|), hyphens (-) en dubbele punten (:) gemaakt worden. Voor meer ingewikkelde tabellen is het handiger direct HTML codes op te nemen.

##### Voorbeeld

De volgende tabel in markdown

```md
| foo | bar |
| --- | --- |
```

wordt geparsed naar

```html
<table>
  <thead>
    <tr>
      <th>foo</th>
      <th>bar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>baz</td>
      <td>bim</td>
    </tr>
  </tbody>
</table>
```

#### Takenlijsten

Door het toevoegen van een linkerbracket ([), een rechterbracket (]) en optioneel de letter x kan van een standaard lijst een takenlijst gemaakt worden. Deze worden vervangen door een semantisch checkbox element, in HTML is dit `<input type="checkbox">`.

##### Voorbeeld

De volgende lijst in markdown

```md
- [ ] foo
- [x] bar
```

wordt geparsed naar

```html
<ul>
  <li><input disabled="" type="checkbox" /> foo</li>
  <li><input checked="" disabled="" type="checkbox" /> bar</li>
</ul>
```

#### Doorhalen

#### Autolinks

## Bronnen

Docs.fdnd.nl maakt gebruik van de volgende _npm-packages_:

- Unified

Bij de totstand koming is gebruik gemaakt van o.a. de volgende artikelen:

- Voor CSS type verhoudingen is gebruik gemaakt van de [Typography Manual @ mikemai.net](https://mikemai.net/typography-manual/)

## License

MIT
