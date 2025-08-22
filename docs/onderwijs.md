# Onderwijs

Dit document beschrijft de dagelijkse onderwijspraktijk bij FDND en biedt handvatten aan docenten en studenten. Het waarom oftewel de didactische onderbouwing staat in het [TNO-dossier](./tno-dossier.md).

## Werkwijze

FDND is een full-time studie van 2 jaar. Elke maandag, woensdag en vrijdag worden workshops aangeboden, kan je oefenen met de stof, vragen stellen en helpen studenten elkaar. Je hebt een vast rooster, eerstejaars zijn er van 9:30 - 13:00, tweedejaars van 13:30 - 17:00. Er wordt van je verwacht dat je deze dagen aanwezig bent. 
Op dinsdag en donderdag worden challenges aangeboden en kunnen eerste- en tweedejaars doorwerken aan projecten. Deze dagen beginnen om 9:30.

Bij FDND werken we in sprints van 3 weken. Elke sprint heeft een onderwerp waarvoor verschillende workshops worden aangeboden. Het programma met wat we wanneer doen staat op https://programma.fdnd.nl

Er zijn altijd docenten aanwezig om vragen te stellen. Docenten kan je aanspreken tijdens de lessen, of je kan een bericht sturen in Teams. Belangrijke communicatie over de planning, toetsing en aankondigingen gaat via Teams. 


<!--
Hoe werken we met sprints,
sprint planning (coach + studenten samen optrekken, grip krijgen op opdracht), sprint review en mentoren.

Werkwijze deel en leertaken learning-journal

Vrije ruimte + stage richtlijnen e.d. beschrijven-->

### Leer- en deeltaken

Studenten werken aan de hand van leer- en deeltaken die in overeenstemming met de niveaumatrix door docenten zijn opgesteld gericht op het behalen van het leerresultaat. Leertaken zijn verzameld in de Github organisatie [FDND-task](https://github.com/fdnd-task) en voorzien van labels om de volgorde in het programma te verhelderen.

Bij de (door)ontwikkeling van leertaken worden de principes afnemende sturing en toenemende complexiteit gehanteerd. Kort gezegd worden leertaken moeilijker naarmate het programma vordert en verandert [de manier van aanspreken](#aanspreken-op-niveau).

### Werken met issues

Tijdens het werken aan een leertaak worden meerdere stappen genomen waarbij beroepsproducten worden ontworpen en ontwikkeld. Studenten delen een grote leertaak op in behapbare stukjes werk welke als issue worden toegevoegd op de betreffende repository. Elke stap van de totstandkoming van een taak wordt op deze manier door de student vastgelegd in Github issues. Dit is ook de plaats waar studenten inhoudelijke [feedback](#feedback) op hun gemaakte werk ontvangen, persoonlijke feedback wordt vastgelegd in het [learning journal](#learning-journal).

### Werken in teams

Als frontender werk je meestal in teams en dus moeten studenten vaardigheid in samenwerken ontwikkelen. Omdat leertaken al opgesplitst worden in issues kan bij teamwerk gebruik gemaakt worden van een Github project board. Deze functionaliteit ligt al besloten in het werken met issues en spiegelt de manier van werken in de beroepspraktijk.

### Learning journal

Het learning journal kent een routinematig deel en een etalage; bijvoorbeeld een blog, linkdump of digital garden. Er is een speciale leertaak genaamd [i ❤︎ web](https://github.com/fdnd-task/i-love-web) waarin het learning journal in principe wordt bijgehouden.

Het routinematige deel wordt dagelijks bijgehouden in de vorm van een *daily-checkout* of *one-minute-paper*. Aantekeningen uit een talk, we-love-web, een link naar een blogpost of andere bron, sketchnotes of iets interessants wat ze bij een medestudent of mentor gezien hebben worden hier verzameld. We vragen ze ook om dagelijks 3 studievragen op te stellen over hetgeen ze geleerd hebben (link naar theorie?). Studenten ontwikkelen op deze manier in de loop van de opleiding de gewoonte om datgene wat ze leren vast te leggen, hier zit namelijk een schat aan bewijslast voor assessments. Docenten sturen op het bijhouden van aantekeningen tijdens [coaching en mentoring](#coaching-en-mentoring) sessies.

De vorm van de etalage is vrij, studenten worden gestimuleerd om door middel van Github pages een eigen vette, creatieve weblog, link dump, of digital garden te maken. (20% regel + link naar artikel?)

### We ❤︎ Web

Elke tweede week van de sprints organiseren we We ❤︎ Web talks. Sprekers uit het vakgebied vertellen over uiteenlopende onderwerpen ter inspiratie voor studenten.

De We ❤︎ Web talks staan op 3 plekken vermeld; in de jaarplanning, in de sprint planning van elke sprint op [programma.fdnd.nl](https://programma.fdnd.nl/) en in de We ❤︎ Web repository onder de [fdnd.nl GitHub organisatie](https://github.com/fdnd/weloveweb.fdnd.nl/). De We ❤︎ Web repository is de single source of truth!



### Werken aan projecten
Studenten werken vanaf sprint 2 van het eerste jaar doorlopend aan projecten voor echte opdrachtgevers. 
Projecten kunnen grote, langlopende projecten zijn van meerdere sprints achter elkaar en een doorlooptijd van meerdere semesters en meerdere leerjaren. Elke 2e sprint van een semester start met een sprint planning mét de opdrachtgever bij FDND. 

#### Langlopende projecten
##### Opzet projecten op GitHub
De langlopende projecten staan in de GitHub organization [https://github.com/fdnd-agency](https://github.com/fdnd-agency). Elk project heeft een _design-challenge branch_ met een opdrachtomschrijving van het project. Er zijn links opgenomen naar de backlog, designs, content en de api.
 
##### Sprint planning
Per team begeleiden de coaches de studenten én de opdrachtgevers de sprint planning, aan de hand van werkvormen en tip & tricks. 

###### Sprint 2 The Client
Bij de sprint planning van [Sprint 2: The Client](https://programma.fdnd.nl/static-web/the-client) maken de leden van de teams kennis  met elkaar. Het is de briefing van het project, waarbij de opdrachtgever de design challenge toelicht aan het team. Tijdens de briefing stellen de studenten gericht vragen en maken ze afspraken over de sprint reviews en eventuele andere contact momenten en communicatielijnen (whatsapp, teams, slack, etc.). Tijdens dit semester werken de studenten individueel aan hun eigen code.

###### Sprint 8 Server Side Rendering
Bij de sprint planning van [Sprint 8: Server Side Rendering](https://programma.fdnd.nl/data-driven-web/server-side-rendering) ligt de focus op de content, data modellering en het dynamisch maken van de website. De studenten maken kennis met de API. Aan de hand van wat er reeds gemaakt is kijken de teams welke taken nog open staan of welke nieuwe taken moeten worden opgepakt. Hieruit rijst de vraag of alle benodigde content te ontsluiten is uit de API. Tijdens dit semester zijn er meerdere teams per project bezig met een eigen codebase.

###### Sprint 14 Lose Your Head
Bij de sprint planning van [Sprint 14: Lose your head](https://programma.fdnd.nl/workflow-tooling-frameworks/lose-your-head) wordt weer vanuit het perspectief van de content bekeken hoe het project ervoor staat. De studenten maken kennis met het Headless CMS en krijgen meer controle over de API. Sprint 14 is de aanzet voor het toewerken naar een Release Candidate, een eerste goed werkende oplevering van de web applicatie. Tijdens dit semester gaan de studenten samenwerken één code base.

##### Sprint Review
Aan het eind van elke sprint is er een Sprint Review. De opdrachtgever en studenten bespreken~~, aan de hand van instructies in de deeltaak [Sprint-Review](https://github.com/fdnd-task/the-client-website/blob/main/docs/sprint-review.md),~~ het gemaakte werk en de voortgang van het project. Hierbij wordt de status van de backlog bijgewerkt; Bestaande taken worden, waar nodig in de juiste kolom geplaatst. Studenten verzamelen feedback op hun werk en maken zelf issues aan op GitHub. Deze issues kunnen waar nodig als taken worden opgenomen in de Backlog 

#### Design Challenges
Naast langlopende projecten organiseren we ook projecten van één sprint. Dit noemen wij [design challenges](https://partners.fdnd.nl/design-challenge). In deze sprints kunnen de studenten laten zien wat ze het betreffende semester allemaal hebben geleerd. Daarnaast krijgen ze de kans, bij de briefing en sprint review op locatie, om een kijkje in de keuken te nemen bij een digital agency of een bedrijf met een digital product team. 

##### Sprint 6: The Startup
In [Sprint 6: The Startup](https://partners.fdnd.nl/design-challenge/sprint-6) ontwerpen, maken en testen studenten een responsive website of webpagina op basis van een bestaand idee, concept of ontwerp.

##### Sprint 12: Proof of Concept
In [Sprint 12: Proof of Concept](https://partners.fdnd.nl/design-challenge/sprint-12) ontwerpen, maken en testen studenten een prototype op basis van een bestaand idee, concept of ontwerp.


## Studentbegeleiding

Door middel van afnemende sturing in de studentbenadering werken we toe naar het ontwikkelen van een professionele identiteit gericht op zelfregulatie.

### Feedback

Studenten ontvangen tijdens de sprints doorlopend feedback op het gemaakte werk in de vorm van issues op Github. Studenten ontvangen feedback van peers, co-teachers en opdrachtgevers en externen. Feedback geldt als een low-stake meetpunt in het programmatisch toetsmodel en wordt tijdens de retrospect gebruikt als basis voor bewijslast en reflectie.

### Retrospect

Tijdens een retrospect reflecteren studenten aan de hand van de niveaumatrix op het gemaakte werk en het proces in de afgelopen sprint. Hierbij verzamelen ze bewijslast en schrijven ze hun reflectie in hun portfolio (Portflow). Het portfolio wordt gebruikt als basis voor het assessment (criteriumgericht interview).

### Coaching en mentoring

Na reflectie tijdens de retrospect bespreekt de student diens voortgang en bewijslast met een squad-leader, co-teacher of mentor tijdens een coachgesprek. Hier worden waar nodig persoonlijke leervragen opgesteld en kunnen docenten sturen op studievoortgang. Indien gewenst maakt de coach of mentor een notitie in Portflow.

### Aanspreken op niveau

Aan de hand van het artikel Concept to Code van Ryan Betts (2017) spreken wij gedurende de opleiding studenten aan op een steeds complexer niveau.

#### Semester 1: The enthusiast

> Enthusiasts understand the principles of code, and no more. They may have tried their hands at writing code once or twice, but didn’t necessarily enjoy it—at least not yet. Most importantly, they understand the thought and process that goes into writing code. Remember when you were first exploring user experience? Enthusiasts can:
>
> - grok the vocabulary
> - understand basic programming concepts
> - engage in meaningful conversations about development

We gaan er van uit dat studenten gedurende de eerste sprints _enthousiast_ zijn en spreken ze op dat niveau aan. Aanspreken op enthousiasme, proberen, durven en fouten maken is oké. We laten ze zien hoe het moet, we geven voorbeelden en verwijzen daarbij naar de bronnen die bij die voorbeelden horen. We houden ons voornamelijk aan de materie die bij de lessen behandeld is tenzij we merken dat studenten meer aan kunnen. Het is prima als een 2e jaars student letterlijk voor doet wat de bedoeling is. Het is prima om een _keyboard-takeover_ te doen. Dit is het semester van nadoen en spiegelen.

Student: Waarom werkt hover niet?
Docent: In dit artikel staan de verschillende states toegelicht. Je hebt geen \<a\> gebruikt voor de link en dat moet wel. Hier, ik laat even zien hoe dat werkt…

_Gedragsindicator 1.5.2 Maakt aangeboden materie eigen en gebruikt dit bij leertaken._

#### Semester 2: The mash-up artist

> Further along the continuum are the mash-up artists—people whose code curiosity has blossomed. They’ve learned enough about code and feel comfortable enough to start playing with it. Mash-up artists are able to:
>
> - read and understand short blocks of code
> - articulate the basic differences between languages
> - cut, paste, and make small alterations to code
> - use code to communicate pieces of functionality

Studenten ontwikkelen zich naar de _mash-up artist_ en we spreken ze meer en meer op dat niveau aan. Aanspreken op nieuwsgierigheid, verwijzen naar bronnen die in lessen genoemd worden. Vragen of ze al zelf bronnen consumeren (mailinglists). Geen voorgekauwde voorbeelden meer bij zelfwerkzaamheid. Geen _keyboard-takeovers_ door docenten maar liever samen een breakdown schets maken om inzicht te verkrijgen. Studenten die in paniek slaan helpen op S1 niveau maar dit wel benoemen.

Student: Welke tag moet ik hier gebruiken? Is een \<span\> of en \<div\> beter?
Docent: Geen idee? Zoek eens op MDN wat het verschil is en laat me weten welke je gaat gebruiken…

_Gedragsindicator 2.5.2 Maakt aangeboden en zelf gevonden materie eigen en gebruikt dit bij leertaken, deelt ervaring binnen de squad._

#### Semester 3: The inventor

> The inventor is well equipped for an environment where UX best practices are non-existent or in a constant state of flux. The inventor knows:
>
> - at least one language enough to write code from scratch
> - what is and is not possible in a language
> - the difference between good and bad code
> - how much effort is required to make changes to code
> - how to code a prototype of anything

Een _Inventor_ beheerst de principes van het web en voelt zich comfortabel in het omarmen van nieuwe technieken. Aanspreken op vindingrijkheid. Bij het leren van een tool of framework worden studenten gestimuleerd zelfstandig de documentatie door te lezen. Tijdens de lessen worden voorbeelden gegeven maar vooral de abstractere principes uitgelegd. Studenten volgen de documentatie van de frameworks zelf en krijgen in leertaken geen stapsgewijze instructie meer. Als studenten een probleem ervaren zoeken ze eerst zelf naar oplossingen of bespreken ze dit met teamleden voor ze naar de docent stappen. De docent stelt zich altijd onderzoekend op en doet niet alsof ze de waarheid in pacht hebben, alles in contingent. Keyword: RTFM! Read the ~~fucking~~ fine manual…

Student: Wat moet ik doen?
Docent: Wat denk je dat je moet doen? Is er een tutorial om Sveltekit te leren?

_Gedragsindicator 3.5.2 Maakt aangeboden en zelf gevonden materie eigen, gebruikt dit bij leertaken, deelt ervaring binnen de squad en leert van anderen._

#### Semester 4: Zelfregulatie

Studenten bewijzen zelfstandig dat ze het leerresultaat beheersen. Docenten praten over het bewijsmateriaal en bijbehorende indicatoren. Inhoudelijke hulp halen ze bij jaargenoten, op het internet of bij professionals. Als ze oplossingen vinden die het delen waard zijn brengen ze dat in de groep. Docenten verwijzen naar de groep.

_Gedragsindicator 4.5.2 Maakt zelfstandig nieuwe materie eigen, gebruikt dit bij beroepstaken, deelt ervaring met belanghebbenden en leert van anderen._

Bron: [Betts, Ryan, Concept to code, Ux Magazine, 2017](https://uxmag.com/articles/concept-to-code)

Bron: Grootendorst, Annemiek, Professionele Identiteit ontwikkelen gedurende de hbo-opleiding, 2019, HRO





## Portfoliotoets

Studenten leggen hun bewijslast aan de hand van de 5 criteria en bijhorende indicatoren vast in hun ontwikkelportolio. FDND maakt hiervoor gebruik van PortFlow.

### Assessments

Bij FDND is het assessment hét summatieve toetsinstrument. Assessments vinden, met uitzondering van het eindassessment, plaats in week tien van ieder blok. Bij elk assessment ontvangt de student, mits ze die met een voldoende behaald, 15EC. Haalt de student het assesment niet dan is er mogelijkheid voor reparatie aan het eind van de eerstvolgende of daarop volgende sprint.

Per semester zijn er twee assessments, bij de endterm toont de student aan het leerresultaat te beheersen en bij de midterm laat de student zien onderweg te zijn naar het te behalen leerresultaat. Jaarlijks zijn er dus vier summatieve toetsmomenten, gezamenlijk 60EC, die een oordeel geven over de leergang van studenten. 

Tijdens het assessment wordt de student gedurende 20 minuten geïnterviewd over diens bewijslast. Daarna nemen de assessoren 10 minuten voor het definitief vaststellen van een summatief oordeel.

### Assessments voorbereiden

In de laatste sprint voorafgaand aan het assessment worden door de squad-leader en co-teacher(s) van een squad alle ontwikkelportfolia doorgenomen. Bevindingen worden als draft vastgelegd in het beoordelingsformulier in DLO.

#### Richtlijnen voor het schrijven van feedback

Geef een beknopte beschrijving van de bewijslast. Hier zit nog geen mening in verwerkt maar is een feitelijke beschrijving van wat je aantreft.

Loop door de facetten van het criterium op basis van de indicatoren en benoem welke onderdelen bewezen zijn, hierin ligt de beoordeling. Afhankelijk van de volledigheid van de bewijslast zijn er twee opties:

##### Optie 1: Er zijn nog niet bewezen facetten van de indicator

Selecteer ‘Aandachtspunten’ (0 punten), dit betekent dat de bewijslast voor het criterium nog niet volledig is. Benoem vervolgens in in het commentaarvak de facetten van het criterium en/of de indicatoren die nog niet bewezen zijn. Formuleer vragen op basis van de nog niet bewezen facetten zodat de student tijdens het assessment de mogelijkheid heeft deze alsnog aan te tonen.

##### Optie 2: De bewijslast is volledig

Selecteer afhankelijk van de kwaliteit van de bewijslast ‘Cesuur’ (1 punt) of ‘Geavanceerd’ (2 punten). Als de bewijslast op cesuur is maar je als assessor vermoed dat er reden is voor ophoging kan je vragen formuleren om te polsen of ophoging terecht is.

### Tijdens het assessment

Notulen zijn heel belangrijk! Het biedt de student de mogelijkheid de strekking van het gesprek terug te lezen. Daarnaast wordt bij steekproeven van de toets- of examencommissie én bij de accreditatie de kwaliteit van het FDND toetsproces afgemeten aan de validiteit, betrouwaarheid en transparantie. Kortom, de waarde en bewijslast van het gesprek moeten gereflecteerd worden in de notulen per criterium en indicatoren zodat duidelijk wordt waar het oordeel op gebaseerd is.

In het advies onderaan het formulier benoem je na het gesprek de kracht van de student en algemene zaken die je opvallen, wellicht heb je nog wat tips voor de volgende periode. Ook kan je hier belangrijke leervragen van de student herhalen zodat deze in een helder overzicht te vinden zijn.

### Reparatie?

In het geval van een reparatie beschrijf je voor het criterium en/of indicatoren wat gerepareerd moet worden. Optioneel geef je een suggestie hoe de student dit aan kan tonen zonder dat een checklist ontstaat. Dit doe je door het nummer van de indicator op te nemen en er achter te noteren wat je verwacht, bijvoorbeeld: 
- **3.5.1**: Ga mailinglijsten volgen en écht artikelen lezen. Neem inzichten of een samenvatting op in jouw *i love web*-site.
