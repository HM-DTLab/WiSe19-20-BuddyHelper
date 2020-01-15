# Challenge Report

<table>
    <tr>
        <th>Organization</th>
        <td>Hochschule für angewandte Wissenschaften München</td>
    </tr>
    <tr>
        <th>Primary Contact</th>
        <td><a href="https://www.cs.hm.edu/die_fakultaet/ansprechpartner/professoren/kofler/index.de.html">Prof. Dr. Thomas Kofler</a></td>
    </tr>
    <tr>
        <th>Challenge Title</th>
        <td>BuddyHelper</td>
    </tr>
    <tr>
        <th>Team</th>
        <td>Gruppe 7</td>
    </tr>
    <tr>
        <th>Supporting professors</th>
        <td><a href="https://www.cs.hm.edu/die_fakultaet/ansprechpartner/professoren/kofler/index.de.html">Prof. Dr. Thomas Kofler</a></td>
    </tr>
    <tr>
        <th>Date</th>
        <td>15.01.2020</td>
    </tr>
</table>

## Overview

Im Rahmen eines Projekts an der Hochschule für angewandte Wissenschaften München sollten die Studenten ein Softwareprojekt für die Deutsche Alzheimer Gesellschaft (DAlzG) umsetzen.
Die DAlzG und ihre Mitgliedsgesellschaften sind Selbsthilfe-Organisationen, die die Situation von Menschen mit Demenz und ihren Angehörigen verbessern wollen.
Als Bundesverband von 135 Alzheimer-Gesellschaften engagiert sich die DAlzG für ein besseres Leben mit Demenz.
Sie unterstützt und berät Menschen mit Demenz und ihre Familien.
Unter anderem setzen sie sich zum Ziel, das Verständnis und Hilfsbereitschaft in der Bevölkerung für die Alzheimer-Krankheit und andere Demenzerkrankungen zu fördern, gesundheits- und sozialpolitische Initiativen anzuregen, die Krankheitsbewältigung der Betroffenen und die Selbsthilfefähigkeit der Angehörigen zu verbessern.
Um die Selbsthilfefähigkeit Betroffener und ihrer Angehörigen zu fördern, haben wir uns dazu entschlossen, eine digitale Austauschplattform für Betroffene zu entwickeln.


## Approach

Zu Beginn des Projekts haben wir versucht, mittels Auswertung einer Empathy Map festzustellen, welcher Form von digitaler Unterstützung es bedarf, um die Selbsthilfefähigkeit Betroffener zu fördern.
Mittels “Crazy 8s”-Methode sind wir zu dem Schluss gekommen, dass wir eine Austauschplattform für Betroffene und deren Angehörige schaffen wollen, um die bestehenden zu verbessern und neue Betreuungs- und Pflegeformen zu entwickeln und erproben.
Ihre Website findet sich <a href ="https://www.deutsche-alzheimer.de/">hier</a>.


## Problem

Ein großes Problem in der Unterstützung von Alzheimerpatienten liegt darin, dass die Patienten aufgrund der vielfältigen Ausprägungen der Krankheit zumeist auf sehr individuelle Hilfe angewiesen Möglichkeiten, Hilfe anzufordern, zu erweitern.
Im weiteren Projektverlauf wurde Scrum genutzt, um Entwicklungsabläufe zu organisieren.
Gleichzeitig möchten wir damit den Einstieg in die Nutzung digitaler Hilfsmittel erleichtern und Hemmschwellen gegenüber deren Nutzung senken.
Weitere Projektideen, wie eine Lehrnhilfe-App oder ein Terminkalender mit integrierter Routenplanung waren während unserer Ideenfindungsphase vorhanden, wurden aber verworfen.

## Prototype

Zur Entwicklung der Applikation wurde das Typescript-Framework Angular verwendet.
AWS-Services wurden aus zeittechnischen Gründen nicht eingebunden.
Die genutzte Entwicklungsumgebung ist Visual Studio Code, mit Gitlab als Versionskontrollsystem.
Der Prototyp läuft lokal auf einem PC, nicht auf mobilen Endgeräten.


## Next Steps

Als nächster Schritt in der Entwicklung können AWS-Services als Usermanagement und Accountverwaltung eingesetzt werde, insbesondere AWS Cognito.
Auch das bisher nur lokal bestehend Backend kann zu AWS-Services migriert werden.
Des Weiteren kann eine Mobile-Verion der App entwickelt werden.
Die App soll dahingehend vervollständigt werden, dass sämtliche Funktionen, die bisher nur als Mockup existieren, voll einsatzfähig sind.
Das Team diskutiert im Frühjahr 2020 die Weiterführung des Projekts.
Eine längerfristige Unterstützung oder Weiterentwicklung der Applikation durch die DAlzG ist unwahrscheinlich.


## Supporting Documents

<a href="https://gitlab.lrz.de/swe1ws20192020/g7/tree/master/PRandFAQs">Press Release und FAQs</a>


## Media
### Wireframes


![Wireframes](/Wireframes/WireFrame_Gruppe7_V0801.png "Wireframes")

### Screenshots
#### Anmeldung
![Anmeldung](/Screenshots/Anmeldung.PNG "Anmeldung")

#### Registrierung
![Registrierung](/Screenshots/Registrierung.PNG "Registrierung")

#### Hauptbildschirm
![Hauptbildschirm](/Screenshots/Hauptbildschirm.PNG "Hauptbildschirm")

#### Messenger
![Message](/Screenshots/Message.PNG "Message")

#### Kontakte
![Kontakte](/Screenshots/Kontakte.PNG "Kontakte")

#### Terminplaner
![TerminPlaner](/Screenshots/TerminPlaner.PNG "TerminPlaner")

#### Kalender
![Kalender](/Screenshots/Kalender.PNG "Kalender")


