import React from 'react'
import {Container} from './MainFrame-styles'
import { Core } from './MainFrame-styles'
import { GridContainer } from "./MainFrame-styles";
import { GridItem1 } from "./MainFrame-styles";
import { GridItem2 } from "./MainFrame-styles";
import { GridItem3 } from "./MainFrame-styles";
import { GridItem4 } from "./MainFrame-styles";

//this.props.match.params.counntry

export default class MainFrame extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            country: "france",
            data: {
                "french": {
                    "words": [
                        {
                            "abroad": "la table",
                            "native": "Stół"
                        },
                        {
                            "abroad": "Carte d'embarquement",
                            "polish": "Karta pokladowa"
                        },
                        {
                            "abroad": "Sortie",
                            "polish": "Wylot"
                        },
                        {
                            "abroad": "Arrivée",
                            "polish": "Przylot"
                        },
                        {
                            "abroad": "le bagage",
                            "polish": "Bagaż"
                        },
                        {
                            "abroad": "Retard",
                            "polish": "Opóźnienie"
                        },
                        {
                            "abroad": "Facture",
                            "polish": "Rachunek"
                        },
                        {
                            "abroad": "Bonjour",
                            "polish": "Cześć"
                        },
                        {
                            "abroad": "le cure-dent",
                            "polish": "Wykałaczka"
                        },
                        {
                            "abroad": "le serveur",
                            "polish": "Kelner"
                        },
                        {
                            "abroad": "le métro",
                            "polish": "Metro"
                        },
                        {
                            "abroad": "le billet",
                            "polish": "Bilet"
                        },
                        {
                            "abroad": "le arrêt",
                            "polish": "Przystanek"
                        },
                        {
                            "abroad": "le place assise",
                            "polish": "Siedzenie"
                        },
                        {
                            "abroad": "le repas",
                            "polish": "Danie"
                        },
                        {
                            "abroad": "le assiette",
                            "polish": "Talerz"
                        },
                        {
                            "abroad": "le couteau",
                            "polish": "Nóż"
                        },
                        {
                            "abroad": "la cuillère",
                            "polish": "Łyżka"
                        },
                        {
                            "abroad": "attractions touristiques",
                            "polish": "Atrakcje turystyczne"
                        },
                        {
                            "abroad": "le vélo",
                            "polish": "Bike"
                        },
                        {
                            "abroad": "le voyage",
                            "polish": "Travel"
                        },
                        {
                            "abroad": "le aide",
                            "polish": "Pomoc"
                        },
                        {
                            "abroad": "la rivière",
                            "polish": "Rzeka"
                        },
                        {
                            "abroad": "le château",
                            "polish": "Zamek"
                        },
                        {
                            "abroad": "Merci!",
                            "polish": "Dziękuję"
                        },
                        {
                            "abroad": "la question",
                            "polish": "Zapytanie"
                        },
                        {
                            "abroad": "le petit déjeuner",
                            "polish": "Śniadanie"
                        },
                        {
                            "abroad": "le déjeuner",
                            "polish": "Obiad"
                        },
                        {
                            "abroad": "le dîner",
                            "polish": "Kolacja"
                        },
                        {
                            "abroad": "le temps",
                            "polish": "Czas"
                        },
                        {
                            "abroad": "la Restauration",
                            "polish": "Restauracja"
                        },
                        {
                            "abroad": "la cuisine",
                            "polish": "Kuchnia"
                        }
                    ],
                    "kitchen": [
                        {
                            "name": "Boeuf Bourguignon",
                            "img": "https://www.tasteaway.pl/wp-content/uploads/2016/05/wo%C5%82owina.jpg",
                            "description": "Boeuf Bourguignon – Obowiązkowo do spróbowania dla każdego mięsożercy! Klasyk i podobno jedno z popisowych dań sławnej Julii Child, spopularyzowane na świecie przez film „Julie & Julia”. Wyjątkowo miękkie kawałki długo gotowanej wołowiny w aksamitnym sosie z dodatkiem warzyw, idealnie smakują z gotowanymi ziemniakami. Jak sama nazwa wskazuje, danie pochodzi z Burgundii. I znów: kiedyś jedzone raczej przez przedstawicieli biedniejszych i gorzej sytuowanych warstw społecznych, teraz danie do zamówienia również w całkiem eleganckiej restauracji lub do zrobienia na kolację z przyjaciółmi. Julia Child mawiała, że to jedno z najlepszych dań z wołowiny, jakie zna ludzkość."
                        },
                        {
                            "name": "Omlette du fromage",
                            "img": "http://www.tasteaway.pl/wp-content/uploads/2016/05/DSC_3080-640x427.jpg",
                            "description": "Omlety to jeden z moich faworytów. Jeśli tylko jest w menu, prawie zawsze go zamawiam podczas śniadań na mieście. Z szynką, z serem, z kozim serem i figami, z łososiem, z fetą i chorizo. Omlety też robię w domu, chociaż nigdy nie wychodzą mi takie puchate jakbym chciała a miłość do omlette du fromage czy du jambon zaczęła się właśnie we Francji."
                        },
                        {
                            "name": "Quiche lorraine",
                            "img": "http://www.tasteaway.pl/wp-content/uploads/2016/05/DSC_3081-640x427.jpg",
                            "description": "W sam raz na śniadanie albo na szybką przekąskę – najczęściej można go kupić po prostu w piekarni, chwycić w biegu i zjeść, chociaż chyba jeszcze lepiej smakuje na ciepło. Sam quiche to rodzaj wypieku na bazie słonego kruchego ciasta i wytrwanego, zapiekanego nadzienia. Najbardziej sławny jest właśnie quiche lorraine, czyli po polsku placek lotaryński na bazie boczku, szynki, tartego sera, śmietany i jajek. Czasem dodawane są również warzywa. Wywodzi się z północno-wschodniej Francji, a początki placka wiązane są z Lotaryngią oraz z Alzacją. Podobnie jak zupa cebulowa, początkowo było to danie rolników – tanie, z łatwo dostępnych składników. Z czasem jednak w placku zakochali się również książęta i jego pierwotny przepis, na cieście chlebowym, został zmieniony i wzbogacony – z jednej strony o więcej składników, z drugiej strony o składniki lepszej jakości (jak choćby mięso)."
                        }
                    ],



                    "places": [
                        {
                            "name": "Mont Saint Michel",
                            "description": "Mont Saint Michel to niezwykłe opactwo i miasteczko w Normandii, jedna z największych atrakcji Francji, rocznie odwiedzana przez 3 miliony turystów. Mont Saint Michel, czyli Wzgórze Świętego Michała znajduje się prawie 2 km od stałego lądu. Przy dużych przypływach występujących 53 razy w roku Mont Saint Michel jest zalewane. Z kontynentalną Francją miasteczko łączy wówczas jedynie wąska grobla długości 1800 metrów. Zbliżająca się fala jest ogłaszana zawczasu przez bicie dzwonów na szczycie. Zwiedzający otrzymują ulotki z porami pływów i niesamowite zjawisko naturalne oglądają z bezpiecznej odległości. Spiętrzona zabudowa wzniesienia kontrastuje podczas odpływu z rozległym terenem wokół. Klasztor Saint Michel dominuje nad miasteczkiem leżącym u jego stóp. To przede wszystkim perła średniowiecznej architektury - potężna, monumentalna budowla wykonana z kamienia, która robi wrażenie już z odległości wielu kilometrów. Droga do tego miejsca wiedzie przez całą Francję, ale jak mówią Ci, którzy zobaczyli je na własne oczy, warto ją pokonać, by zobaczyć Mont Saint Michel.",
                            "img": "http://bi.gazeta.pl/im/4/5842/z5842734IH,mont-saint-michel--francja--opactwo.jpg"
                        },
                        {
                            "name": "Eze",
                            "description": "Eze, wisząca na nadbrzeżnej skale średniowieczna warowna wioska, nazywana orlim gniazdem, jest jednym z najpiękniejszych miejsc na Lazurowym Wybrzeżu. Piękne, brukowane ulice, ogrody, z których rozciągają się widoki na zatokę oraz majestatyczne ruiny zamku, sprawiają, że wizyta w Eze jest sporym doznaniem estetycznym. Miejscowością zachwycał się słynny niemiecki filozof Friedrich Nietzsche. Na pamiątkę jego pobytu ścieżkę łączącą Eze-Village z niżej położonym Eze-sur-Mer, którą często chadzał, nazwano Chemin Frédéric Nietzsche. Warto się przejść uliczkami wewnątrz zamkowych murów, a z ich szczytu spojrzeć na w bezkresne morze - przy dobrej pogodzie widać też Saint-Tropez i Korsykę. Całkowicie odrestaurowane Eze utrzymuje się głównie z turystyki oraz ze sprzedaży wyrobów rzemieślniczych.",
                            "img": "http://bi.gazeta.pl/im/2/10020/z10020552IH,eza--francja.jpg"
                        },
                        {
                            "name": "AnnecyAnnecy to nastrojowe miasto leżące w południowo-wschodniej Francji w regionie Rodan-Alpy obfitującym w zamki, katedry i budowle. Annecy usytuowane jest w równej odległości pomiędzy Genewą i Chambery, dlatego jego historia od X do XIX wieku jest silnie naznaczona historią tych dwóch miast. Annecy posiada wiele zabytków. Starą część miasta przecinają liczne kanały i ulice z arkadami. Jedną z najpiękniejszych jest ulica świętej Klary (rue de Sainte-Claire) z romantycznymi łukami z XVII i XVIII wieku. Każdy turysta przespacerować się musi po Moście Zakochanych - Pont des Amours. Warto też zobaczyć Le Palais de l'Isle wybudowany w XIII wieku na środku kanału Thiou oraz barokową katedrę Saint-Pierre.",
                            "img": "http://bi.gazeta.pl/im/8/10020/z10020468IH,Annecy--Francja--Annecy-to-nastrojowe-miasto-lezac.jpg"
                        }
                    ],
                    "information": {
                        "capital": "Francja",
                        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png",
                        "language": "francuski",
                        "area": "643 801",
                        "population": "67 196 000"
                    }
                }}
        }
    }

    render(){
        return <Container>
            <GridContainer>
                <GridItem1>      
                    <div className="information"><h3>{this.state.country}</h3><br />
                        Stolica: {this.state.data.french.information.capital}<br />
                        Język: {this.state.data.french.information.language}<br />
                        Powierzchnia: {this.state.data.french.information.area}<br />
                        Populacja: {this.state.data.french.information.population}<br />
                    </div>                   
                    <div className = "white-front"></div>
                </GridItem1>
                <GridItem2>    
           
                    <div className= "white-front"></div>
                </GridItem2>
                <GridItem3>
                    <div className= "white-front"></div>
                </GridItem3>
                <GridItem4>
                    <div className= "white-front"></div>
                </GridItem4>
            </GridContainer>            
            <Core>          
            </Core>
          </Container>;
    }
}
