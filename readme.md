<h2><b>System Zarządzania Więzieniem</b></h2><br>
<h3><b>Opis</b></h3>

Celem projektu jest stworzenie prostej aplikacji internetowej służącej do zarządzania zakładem karnym.<br>
System będzie umożliwiał ewidencjonowanie osadzonych, zarządzanie celami, obsługę kont użytkowników oraz wykonywanie podstawowych operacji na danych.<br>
Aplikacja będzie posiadała interfejs graficzny dostępny z poziomu przeglądarki internetowej.<br>

<h4><b>Projekt zostanie podzielony na trzy główne moduły:</b></h4>

<ul>
<li>Frontend – interfejs użytkownika umożliwiający korzystanie z funkcjonalności aplikacji.</li>
<li>Backend – część odpowiedzialna za logikę biznesową, przetwarzanie danych oraz realizację zasad działania systemu.</li>
<li>Server – warstwa odpowiedzialna za komunikację pomiędzy frontendem a backendem oraz obsługę połączenia z bazą danych.</li>
<li>Baza danych - warstwa odpowiedzialna za przechowywanie, organizowanie i udostępnianie danych wykorzystywanych przez aplikację.<br>
Baza współpracuje z backendem, który przekazuje zapytania i odbiera wyniki operacji na danych.</li>
</ul>

Implementować będziemy raczej "typowe" funkcjonalności jak np:

<ul>
<li>Spis wszystkich osadzonych wraz z ich danymi <i>(imię, nazwisko, długość wyroku itd.)</i></li>
<li>Operacje bazo danowe <i>(dodawanie nowych, usuwanie nieaktualnych więźniów)</i></li>
<li>System logowania <i>(podział konta na różne poziomy dostępu)</i></li>
</ul>

Ale planujemy również parę takich "mniej poważnych" jak np. <b>Ranking Kapusiów</b>

<h3><b>Podział obowiązków</b></h3>

Marta Malinowska - backend<br>
Kacper Doszna - server + baza danych<br>
Tymoteusz Sobczyk - frontend<br> 

<h3><b>Stos technologiczny</b></h3>
HTML/CSS + TypeScritp -> frontend<br>
Java -> backend + server<br>
SQL -> baza danych<br>
Git + GitHub -> kontrola wersji<br>

