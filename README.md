MeteorProgress
==============

My progress log for learning Meteor

##2014-03-09

PlannerApp [repo](https://github.com/KennyVandenberghe/PlannerAppProgress) geüpdate!

##2014-03-06
Tot nu toe een drukke week gehad maar vandaag heb ik terug tijd gevonden om uiteindelijk verder te kunnen werken.

Ik heb een [tutorial](https://www.youtube.com/watch?v=MbZnf9Fa8UE) gevolgd waar ik een applicatie nabouw die weg heeft van Facebook dus deze heeft nu de naam [Fakebook](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/fakebook). Je kan status updates posten en hierop commenten. 

Hier heb ik ivm bootstrap ook iets nieuws gezien. Je kan op een heel gemakkelijke manier van opmaak wisselen dankzij [bootswatch](http://bootswatch.com/2/)! Dit geeft je app ineens zo'n aantrekkelijke opmaak door gewoon heel simpel de CSS van een bepaalde template van bootswatch in de CSS van je app te plakken!

Ook heb ik mij bezig gehouden met de snippets van sublime text. Ik zag in meerdere tutorials dat de persoon die de tutorial gaf telkens maar 1 woord nodig had om meerdere regels code te laten verschijnen en ik wou dat ook kunnen, dat bespaart namelijk heel veel tijd! Ik heb dan ook een kleine [tutorial](https://www.youtube.com/watch?v=JcAN4D1QV6o) gevolgd om zelf snippets aan te maken. Nu dat ik dat snap maak ik voor heel veel dingen die ik doe telkens een snippet aan. Stom dat ik dat niet eerder deed...

##2014-03-02
[Repo](https://github.com/KennyVandenberghe/PlannerAppProgress) van de planner applicatie geüpdate.

De progress van de applicatie zal uiteraard telkens daar terug te vinden zijn, maar ik zal hier altijd laten weten wanneer er een update is gebeurd. 

##2014-03-01

Het boek is ondertussen al even uitgelezen. De applicate bevat nog altijd wat fouten, zelfs de applicatie van de autheur zelf werkt niet. Wel jammer natuurlijk, maar het boek heeft natuurlijk altijd wel wat extra informatie en hulp gegeven. 

Ik was weer aan het surfen naar tutorials en dergelijke, ik heb ook wat rondgekeken op "Made with meteor", daar stonden zelfs heel wat mooie applicaties, maar ik vond dat ik wel eens iets verder wou gaan. 

Rond het begin van het schooljaar had Lars het al eens over een "planner applicatie", een applicatie waar je afspraken, taken, boodschappen, etc. aan kon toevoegen. En ik had wel zin om mij daar eens achter te zetten. Dus bij deze, ik heb het plan een applicatie te bouwen! 

Lars vroeg mij om ook daar een [repo](https://github.com/KennyVandenberghe/PlannerAppProgress) voor bij te houden, ik ga beide repo's up to date houden vanaf nu!

##2014-02-26
Verder gelezen en gebouwd tot aan pagina 116 van het boek. Ik had normaal klaar geweest met lezen maar ik krijg de applicatie niet werkende zoals het zou moeten. Voor één of andere reden kunnen users niets toevoegen of zien in de [Library](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/LendLib). Ik heb de code meerdere malen overlopen maar de code is identiek hetzelfde. Ik heb ook allerlei dingen opgezocht en veel mensen hebben dezelfde problemen, het blijkt dat er vanalles veranderd is. Het boek is ook geschreven op de 0.5 versie van Meteor en ondertussen is Meteor al in versie 0.7.1.1 dus dat scheelt al heel wat. Dus volgens mij moeten er gewoon heel wat code aangepast worden en dat ga ik proberen morgen op te lossen. 

Wat heb ik zoal gezien in de afgelopen hoofdstukken:

* Het aanmaken van meerdere templates en template logica
* Adding, deleting en updating 
* Broadcasting changes
* Configuring publishers
* Collections aanspreken met de browser console
* Client, server en public files
* Multiple users
* Wat de "insecure" package is en waarom deze verwijderd wordt (hier begonnen de problemen met de users)

Het volgende stuk gaat over het deployen van de applicatie, maar ik wou hier niet aan beginnen omdat de applicatie dus nog niet werkt. Ik wil het eerste werkende krijgen!


##2014-02-24

Aan een tweede boek begonnen over Meteor, "Getting started with meteor.js javascript framework". Hier ben ik bezig een [Lending Library](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/LendLib) applicatie te maken.

Ik heb tot hiertoe in het boek nog niet heel veel nieuwe dingen gezien, maar de hoofdzakelijkste waren momenteel: 

* MVC (Model-View-Controller)
* MVVM (Model View ViewModel)
* Templating
* Handlebars

In het begin van het boek was het hoofdzakelijk herhaling: hoe installeer je Meteor? Hoe open je een example? Hoe maak je je eigen applicatie aan? enz.	
Ook wel een goed boek om eerlijk te zijn, elk lijntje code wordt apart bekeken en uitgelegd wat er juist gebeurd of zal gebeuren, het leest vlot en ik zit momenteel aan pagina 58. Tegen woensdag heb ik het hoogstwaarschijnlijk wel uitgelezen (Als ik de volgende hoofdstukken niet onderschat uiteraard.) 


##2014-02-23
* [Tutorial](http://www.danneu.com/posts/6-meteor-tutorial-for-fellow-noobs-adding-features-to-the-leaderboard-demo/) gevolgd die verderbouwt op een Meteor example, namelijk [leaderboards](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/leaderboard).
	* Add players functie toegevoegd
	* Delete players functie toegevoegd
	* Errors toegevoegd (geen of dezelfde naam ingevoegd)
	
* Nog een [tutorial](https://www.openshift.com/blogs/day-15-meteor-building-a-web-app-from-scratch-in-meteor) gevolgd (die ik vernoemd heb in de vorige status update). De persoon die deze tutorial heeft geschreven noemt zijn tutorial "The missing Meteor tutorial" en het is inderdaad een uitgebreide, makkelijk te volgen tutorial. 
Hij heeft alles heel gedetailleerd bekeken, een aantal voorbeelden:
	* Wat is Meteor?
	* Wat is MongoDB?
	* Wat is MiniMongo?
	* Meteor Smart Packages
	* Insecure Packages
	* enz.
	
Met zijn tutorial al hulpmiddel, heb ik een [epoll application](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/epoll) gemaakt, waar gebruikers vragen kunnen posten en hierop kunnen voten. Je kan enkel aanpassingen doen als je hebt aangemeld via Twitter. 

##2014-02-20
* De concepten gelezen in de [documentatie](http://docs.meteor.com/) van Meteor.
* Een [handlebars](https://github.com/meteor/meteor/wiki/Handlebars) document gelezen op github.
* Een aantal [tutorials](http://sebastiandahlgren.se/categories/meteorjs/) gevolgd, namelijk:
	* [Tutorial: Writing your first Meteor application](http://sebastiandahlgren.se/2013/07/17/tutorial-writing-your-first-metor-application/)
		* [chatapp](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/chatapp) (na)gebouwd
	* [Add routing to MeteorJS](http://sebastiandahlgren.se/2013/07/20/add-routing-to-meteor-js/)
		* [routingtut](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/routingtut) (na)gebouwd
	* [Bootstrap3 with accounts support in MeteorJS](http://sebastiandahlgren.se/2013/12/30/bootstrap3-with-accounts-support-in-meteorjs/)
		* [boostraptut](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/bootstraptut) (na)gebouwd.
		
De tutorials zijn eigenlijk weer heel goed voor beginners, heel simpel uitgelegd en stap voor stap te volgen. Ik heb ook nog andere tutorials gevonden, bv [Day 15: Meteor--Building a Web App From Scratch in Meteor](https://www.openshift.com/blogs/day-15-meteor-building-a-web-app-from-scratch-in-meteor), welke ik morgen ga bestuderen. Deze persoon leert op 30 dagen tijd, 30 nieuwe technologieën, zeer gewaagd maar toch wel interessant. Het is van deze persoon waar ik blijkbaar al een paar youtube tutorials heb gevolgd. Als hij op 1 dag Meteor kan leren moet ik dat, met de tijd die ik gekregen heb, ook zeker kunnen!

##2014-02-19
* Codecademy afgewerkt (de laatste sessies bestonden uit heel veel stappen).
	* Objecten
	* Methodes
	* Constructors
	* Objecten combineren met arrays, functies en methodes
	* Prototypes
	* Klasses
	
* Example van Meteor bekeken [todos](https://github.com/meteor/meteor/tree/devel/examples/todos)

* [Tutorial](https://www.youtube.com/watch?v=xTlX8sf-RJE) gevolgd op youtube en een ["blog"](https://github.com/KennyVandenberghe/MeteorProgress/tree/master/blog) nagebouwd.

Codecademy heeft zeker wel wat geholpen, maar dat blijft uiteraard nog altijd een beetje "basic". 

De example van Meteor, ik heb mijn best gedaan deze te begrijpen maar ik vind het persoonlijk moeilijk zo'n code te ontcijferen. Code van anderen blijven nog altijd complexer om te begrijpen dan dat je ze zelf getypt hebt. 

De tutorial was ook wel basic, maar ik ben blij dat ik nog eens wat Meteor zelf gedaan heb, het ging al iets vlotter (ik begreep al meer wat er allemaal gedaan werd) en ik vond het nog eens leuk om met Meteor te werken.



##2014-02-17
* Codecademy verder gezet tot en met tutorial 12 (er zijn er 16).
	* Leren gebruiken van random getallen en afrondingen.
	* Switch en cases.
	* Het gebruiken van objecten binnen arrays
	* Met behulp van arrays en objecten een "contact list" gebouwd.
	
Het was al even geleden dat ik heb kunnen doorwerken maar ik heb de afgelopen dagen geen kans gekregen, zelf op school niet. Maar normaal gezien kan ik nu weer doorwerken zoals daarvoor dus ik ga er terug voor gaan! 

Ik van zin mij nu even wat meer te verdiepen in Javascript zelf. Ik heb de verschillende [resources](http://yauh.de/articles/376/best-learning-resources-for-meteorjs) bekeken en volgens mij is het het beste dat ik, na Codecademy, met het boek "Eloquent Javascript" begin, het staat al klaar dus hoogstwaarschijnlijk begin ik er morgen al in!

Ik heb ook alvast wat andere resources bekeken en de volgende stap is blijkbaar een [cursus](http://javascriptissexy.com/how-to-learn-javascript-properly/) volgen die, volgens de cursus zelf, 6 tot 8 weken duurt. Hier worden zelfs twee boeken gebruikt die beide gemiddeld 1000 pagina's tellen (ook deze boeken heb ik ondertussen al klaarstaan). Ik wil deze boeken wel lezen maar volgens mij ga ik dan in tijdnood komen. Ik heb in ieder geval nog steeds genoeg om te doen! 

##2014-02-13

* Het boek volledig uitgelezen
	* Pagination
	* Voting system
	* Ranking
	* Animation
	
Ik heb het boek iets sneller uitgelezen dan verwacht. Ik vond de laatste hoofdstukken de interessantste maar hier heb ik ook wel de meeste problemen gehad. De notificaties verschenen niet, het sorteren werkte niet (dus de ranking ook niet) en de animations deden het ook eerst niet. 

Ik heb al de fouten uiteindelijk gevonden, het ging altijd over een typfoutje (hoofdlettergevoeligheid of simpelweg een letter vergeten). Maar alles werkt nu prima. 

Het was een zeer interessant boek om te lezen, het ging vlot en alles werd gedetailleerd uitgelegd. Ik lees het boek binnenkort sowieso nog eens.

##2014-02-12

* gelezen tot aan pagina 135.
	* Het tonen van comments.
	* Toevoegen van comment posting form.
	* Enkel de current post's comments laden.
	* Toevoegen van een comment count property aan de posts.
	* Notifications toevoegen.
	
Het ben iets minder ver geraakt dan verwacht. Maar ik kwam verschillende problemen tegen (comments die niet optellen en notificaties die niet verschijnen) die nog steeds niet in orde zijn. Ik heb de code meerdere malen opnieuw bekeken, maar ik zie het gewoon niet. Waarschijnlijk ergens een klein typfoutje gemaakt waar ik telkens weer over zie.

##2014-02-11
* Verder gelezen en gebouwd tot aan pagina 114.
	* Post submit vanaf de client.
	* Toegang tot een formulier beperken.
	* Methodes gebruiken vanaf de server.
	* updaten en deleten van posts en hier beperkingen aan toekennen.
	


##2014-02-10
* Het boek van Meteor tot pagina 64 gelezen en de example app tot daar al meegebouwd. 
	* Herhaling gehad ivm templating, handlebars, realtime collections en routing.
	* Collections leren integreren binnenin de templates.
	* Client-server communcation aan de hand van ".find()" en ".fetch()" met behulp 	  van de terminal en de browser console.
	* Users toevoegen door gebruik van de "accounts.ui" package.
	
De stukken code op zich en hoe deze aangesproken worden begrijp ik ondertussen wel grotendeels. Het enige complexe tot nu toe is dat er in het boek gebruik wordt gemaakt van een heel "brede" structuur. Voor bijna elke file wordt er een nieuwe folder aangemaakt en deze folder vindt dan weer plaats in een andere folder,... Op zich, als je het eenmaal door hebt, is dat heel overzichtelijk maar voor mij is dat, als "beginner", momenteel nog een beetje chaos, ik ben het namelijk niet gewoon met zoveel folders en files te werken en deze dan ook in een logische structuur te gieten. Maar volgens mij is dat gewoon wennen. 

Het boek zelf is heel goed geschreven. Heel gedetailleerd uitgelegd hoe bepaalde dingen werken en het leest heel vlot. Aan het einde van elk hoofdstuk laten de auteurs een voorbeeld zien van hoe de app er op dat moment zou moeten uitzien en hoe het zou moeten functioneren. Dat is enorm handig als er ergens een foutje is gemaakt. Ik probeer ook elke fout zelf op te lossen aan de hand van het voorbeeld. 


##2014-02-09
* Het [artikel](http://andrewscala.com/meteor/) van Andrew Scala driemaal gelezen en begrepen wat er werd gedaan. 
* De eerste examplecode (Leaderboard) van meteor op [github](https://github.com/meteor/meteor) in detail bekeken en de logica er in gezien. 
* De tweede [screencast](https://www.meteor.com/authcast) van Meteor bekeken.
* De eerste 7 tutorials voor Javascript gevolgd op [Codecademy](http://www.codecademy.com/tracks/javascript). 

De eerste examplecode was ik al eens tegengekomen dus ik had vrij snel door wat de bedoeling was en hoe dat in zijn werk ging.

Ik heb gemerkt dat de tweede examplecode (parties) de code is van in de tweede screencast, ik ben dus van zin deze twee naast elkaar te zetten en zo de code van 'Parties' de begrijpen.

Codecadamy werd aangeraden om Javascript te leren (het grootste deel allensinds toch), tot en met tutorial 7 was het vooral herhaling: constructors, if/else statements, loops, arrays,... 

Ik denk dat ik, na de tweede screencast naast de examplecode van "Parties" te hebben gezet en zodoende de code heb begrepen, aan het boek van Meteor ga beginnen. Volgens mij ga ik dankzij het boek veel meer inzicht hebben in dit framework en zal het iets gemakkelijker worden om bepaalde stukken code te begrijpen. 



##2014-02-05
* [Introductie](http://www.meteor.com) van Meteor gelezen.
* Eerste [screencast](https://www.meteor.com/screencast)
nogmaals bekeken.
* Aantal tutorials gevolgd:
	* [1 - Installation and Brief Overview of Templates](https://www.youtube.com/watch?v=W-JSQp1s_dE)
	* [2 - Installing and Using Meteorite](https://www.youtube.com/watch?v=fnlD_lI4658)
	* [3 - Add Data to Collection with a Form](https://www.youtube.com/watch?v=HVr02nLZ6u4)
	* [4 - Displaying Data from Your Mongo Collection](https://www.youtube.com/watch?v=eZhz_mv9Tq4)
	* [5 - Basic Routing](https://www.youtube.com/watch?v=uX-zufH5yLY)

* Tijdens tutorials [Database](Tutorialcode/Database) (na)gebouwd.
	
Deze tutorials zijn, ten op zichte van de eerste tutorial die ik gevolgd heb, veel beter voor beginners. Hier wordt echt bij elke handeling vrij gedetailleerd uitgelegd wat er wordt gedaan en waarom. 

Wat heb ik geleerd?

* Pagina's aanmaken en hiertussen navigeren met behulp van Routing (Router package)
* Gebruik van Handlebars
* Collection aanmaken en hier items aan toevoegen
* Events specifiëren

	 
##2014-02-03##
* Youtube tutorial gevolgd: [Building a Complete Application with Meteor JS Bootstrap and Multi Page Routing- The long version](https://www.youtube.com/watch?v=bfq1xXzZeB4)
en [Project Manager](Tutorialcode/Project Manager) nagebouwd.

