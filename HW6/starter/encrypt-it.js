/*
 * Starter file 
 */
(function() {
	"use strict";

	/**
	 * The starting point in our program, setting up a listener
	 * for the "load" event on the window, signalling the HTML DOM has been constructed
	 * on the page. When this event occurs, the attached function (init) will be called.
	 */
	window.addEventListener("load", init);

	/**
	 * TODO: Write a function comment using JSDoc.
	 */
	function init() {
		// Note: In this function, we usually want to set up our event handlers
		// for UI elements on the page.
		console.log("Window loaded!");
		document.getElementById("encrypt-it").addEventListener("click",handleClick);
		document.getElementById("reset").addEventListener("click",handleReset);
	}

	// Add any other functions in this area (you should not implement your
	// entire program in the init function, for similar reasons that
	// you shouldn't write an entire Java program in the main method).

	function handleClick() {
		console.log("Encrypt-It! button clicked.");
		let method = document.getElementById("cipher-type").value;
		let input = document.getElementById("input-text").value;
		let result = ""
		switch (method) {
			case "shift":
				result = shiftCipher(input);
				break;
			case "ipsum":
				result = ipsumCipher(input);
				break;
		}
		document.getElementById("result").innerHTML = result;
	}


	function handleReset() {
		console.log("reset button clicked.");
		document.getElementById("input-text").value = "";
		document.getElementById("result").innerHTML = "";
	}

	// From assignment description
	function shiftCipher(text) {
		text = text.toLowerCase();
		let result = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] < 'a' || text[i] > 'z') {
				result += text[i];
			} else if (text[i] == 'z') {
				result += 'a';
			} else { // letter is between 'a' and 'y'
				let letter = text.charCodeAt(i);
				let resultLetter = String.fromCharCode(letter + 1);
				result += resultLetter;
			}
		}
		return result;
	}
	function ipsumCipher(text){
		// roughly 300 unique ipsum-lorem words
		let ipsumText = " a A ac Ac accumsan adipiscing Adipiscing aenean Aenean aliqua aliquam Aliquam aliquet amet Amet ante arcu Arcu at At auctor augue Augue bibendum Bibendum blandit Blandit commodo condimentum Condimentum congue Congue consectetur Consectetur consequat convallis Convallis cras Cras cum curabitur Curabitur cursus Cursus dapibus Dapibus diam Diam dictum Dictum dictumst dignissim dis do dolor Dolor dolore donec Donec dui duis Duis egestas Egestas eget Eget eiusmod eleifend elementum Elementum elit Elit enim Enim erat Erat Eros est et Et etiam Etiam eu Eu euismod Euismod facilisi Facilisi facilisis Facilisis fames faucibus Faucibus felis Felis fermentum feugiat Feugiat fringilla Fringilla fusce gravida Gravida habitant Habitant habitasse Habitasse hac Hac hendrerit iaculis id Id imperdiet Imperdiet in In incididunt integer interdum ipsum Ipsum justo labore lacinia lacus Lacus laoreet Laoreet lectus leo Leo libero Libero ligula lobortis Lobortis lorem Lorem luctus Luctus maecenas Maecenas magna Magna Magnis malesuada massa Massa mattis Mattis mauris Mauris metus Metus mi Mi molestie Molestie mollis montes morbi Morbi mus nam Nam nascetur natoque nec Nec neque Neque netus Netus nibh Nibh nisi Nisi nisl Nisl non Non nulla Nulla nullam Nullam nunc Nunc odio Odio orci ornare Ornare parturient Parturient pellentesque Pellentesque penatibus pharetra Pharetra phasellus Phasellus placerat Placerat platea Platea porta Porta porttitor Porttitor posuere Posuere potenti Potenti praesent Praesent pretium Pretium proin Proin pulvinar purus Purus quam Quam quis Quis quisque Quisque rhoncus Rhoncus ridiculus risus Risus rutrum Rutrum sagittis Sagittis sapien Sapien scelerisque sed Sed sem semper Semper senectus Senectus sit Sit sociis sodales sollicitudin suscipit suspendisse Suspendisse tellus Tellus tempor tempus Tempus tincidunt Tincidunt tortor tristique Tristique turpis Turpis ullamcorper Ullamcorper ultrices ultricies Ultricies urna Urna ut Ut varius Varius vehicula vel Vel velit Velit venenatis Venenatis vestibulum Vestibulum vitae Vitae vivamus Vivamus viverra Viverra volutpat Volutpat vulputate Vulputate";
		let ipsumArray = ipsumText.split(" "); // We can index the ipsum array per word using the individual character codes of the characters from the input text
		let result = ""
		for (let i = 0; i < text.length; i++)
			result += ipsumArray[text.charCodeAt(i)%ipsumArray.length] + " ";
		return result;
	}

})();
