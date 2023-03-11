var GoogleActive = false;
var YoutubeActive = false;
var DiscordActive = false;
var ChessActive = false;
var WordleActive = false;

function GoogleActivator(){
	if(GoogleActive == false){
		GoogleActive = true;
		const google = document.getElementById("google");
		google.style.background = "green";
	}
	else if(GoogleActive == true){
		GoogleActive = false;
		const google = document.getElementById("google");
		google.style.background = "slategrey";
	}

}
function YoutubeActivator(){
	if (YoutubeActive == false) {
		YoutubeActive = true;
		const youtube = document.getElementById("youtube");
		youtube.style.background = "green";
	}
	else if(YoutubeActive == true){
		YoutubeActive = false;
		const youtube = document.getElementById("youtube");
		youtube.style.background = "slategrey";
	}
}
function DiscordActivator(){
	if (DiscordActive == false) {
		DiscordActive = true;
		const discord = document.getElementById("discord");
		discord.style.background = "green";
	}
	else if (DiscordActive == true) {
		DiscordActive = false;
		const discord = document.getElementById("discord");
		discord.style.background = "slategrey";
	}

}
function ChessActivator(){
	if (ChessActive == false) {
		ChessActive = true;
		const chess = document.getElementById("chess");
		chess.style.background = "green";
	}
	else if (ChessActive == true) {
		ChessActive = false;
		const chess = document.getElementById("chess");
		chess.style.background = "slategrey";
	}

}
function WordleActivator(){
	if (WordleActive == false) {
		WordleActive = true;
		const wordle = document.getElementById("wordle");
		wordle.style.background = "green";
	}
	else if (WordleActive == true) {
		WordleActive = false;
		const wordle = document.getElementById("wordle");
		wordle.style.background = "slategrey";
	}

}

function Launch(){
	if(GoogleActive == true){
		window.open("https://google.com/");
	}
	if(YoutubeActive == true){
		window.open("https://youtube.com/");
	}
	if(DiscordActive == true){
		window.open("https://discord.com/app");
	}
	if(ChessActive == true){
		window.open("https://chess.com/play");
	}
	if(WordleActive == true){
		window.open("https://www.nytimes.com/games/wordle/index.html");
	}
	GoogleActive = false;
	const google = document.getElementById("google");
	google.style.background = "slategrey";

	YoutubeActive = false;
	const youtube = document.getElementById("youtube");
	youtube.style.background = "slategrey";

	DiscordActive = false;
	const discord = document.getElementById("discord");
	discord.style.background = "slategrey";

	ChessActive = false;
	const chess = document.getElementById("chess");
	chess.style.background = "slategrey";

	WordleActive = false;
	const wordle = document.getElementById("wordle");
	wordle.style.background = "slategrey";

}
