width_blocks = 7;
default_color = '#239a3b';
background_color = '#ebedf0';
word = "ANNINO";

function apply() {
	// Chunks the array in blocks of size elements
	const chunk = (arr, size) =>
	  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
	    arr.slice(i * size, i * size + size)
	  );

	// querySelecor returns an object (HTMLCollection)
	contributions = document.querySelector('g[data-hydro-click-hmac]');
	// Convert it to an array
	weeks = [...contributions.children];

	weeks.forEach((week) => {
		// Convert HTMLCollection (returned by .children) into an array
		days = [...week.children];
		week.days = days;
		days.forEach((day) => {
			day.setAttribute('fill', background_color)
		})
	});

	weeks_blocks = chunk(weeks,width_blocks);
	drawCanvases(weeks_blocks);
}

function drawCanvases(weeks_blocks) {
	for (let i = 0; i < word.length; i++){
		drawBlock(weeks_blocks[i], word[i]);
	}
}

function drawBlock(block, letter) {
	block.pop();
	block.shift();
	
	block.forEach((week) => {
		week.days.pop();
		week.days.shift();
	});

	switch (letter) {
		case "A":
			drawA(block);
			break;
		case "B":
			drawB(block);
			break;
		case "N":
			drawN(block);
			break;
		case "I":
			drawI(block);
			break;
		case "O":
			drawO(block);
			break;
		default:
			break;
	}
}

function set(block, x, y, color = default_color) {
	block[x].days[y].setAttribute('fill',color);
}

function range(length, from) {
	return Array.from({length: length}, (_, n) => n+from);
}

function drawA(block, color = default_color) {
	// draw the verticals |
	range(3,2).forEach((y) => {
		set(block, 0, y);
		set(block, block.length -1, y);
	});

	range(3,1).forEach((y) => {
		set(block, y, 3);
	});
	set(block, 1, 1);set(block, 3, 1); set(block, 2,0);
}

function drawB(block, color = default_color) {
	// draw the verticals | and \
	range(block.length,0).forEach((n) => {
		set(block, 0, n);
	});

	range(2,1).forEach((n) => {
		set(block, n, 0);
		set(block, n, 2);
		set(block, n, block.length - 1);
	});
	set(block, 3,1);set(block, 3,3);
}

function drawN(block, color = default_color) {
	// draw the verticals | and \
	range(block.length,0).forEach((n) => {
		set(block, 0, n);
		set(block, block.length -1, n);
		set(block, n, n);
	});
}

function drawO(block, color = default_color) {
	range(5,0).forEach((n) => {
		set(block, n, 0); // -
		set(block, n, block.length - 1);
		set(block, 0, n);
		set(block, block.length - 1, n); // -
	});
}

function drawI(block, color = default_color) {
	range(5,0).forEach((n) => {
		set(block, 1, n);
		set(block, 2, n);
		set(block, 3, n);
	});
}

function fill(block, color = default_color) {
	 block.forEach((x_week) => {
	   x_week.days.forEach((y_day) => {
		   y_day.setAttribute('fill', color);
	   });
   });
}