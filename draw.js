width_blocks = 7;
default_color = '#239a3b';
background_color = '#888888';
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
	switch (letter) {
		case "A":
			drawA(block);
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

function drawA(block, color = default_color) {
	// draw the first vertical |
	Array.from({length: 4}, (_, n) => n+3).forEach((y) => {
		set(block, 0, y, color);
	});
	// draw the final vertical |
	Array.from({length: 4}, (_, n) => n+3).forEach((y) => {
		set(block, width_blocks - 1, y, color);
	});

	set(block, 1, 2); set(block, 5, 2);
	set(block, 2, 1); set(block, 4, 1);
	set(block, 3, 0);

	Array.from({length: 5}, (_, n) => n+1).forEach((x) => {
		set(block, x, 4, color);
	});
}

function drawN(block, color = default_color) {
		// draw the verticals |
		Array.from({length: width_blocks}, (_, n) => n).forEach((n) => {
			set(block, 0, n, color);
			set(block, width_blocks - 1, n, color);
		});

		// draw the \
		Array.from({length: 5}, (_, n) => n+1).forEach((n) => {
			set(block, n, n, color);
		});
}

function drawO(block, color = default_color) {
	// draw the verticals |
	Array.from({length: 4}, (_, n) => n).forEach((n) => {
		set(block, n, 3-n, color);
		set(block, 3+n, 6-n, color);
		set(block, 3+n, n, color);
		set(block, n, 3+n, color);
	});
}

function drawI(block, color = default_color) {
	block_length = block.length;
	is_odd = (block_length % 2) == 0;
	mid_index = Math.floor(is_odd ? block_length / 2 : block_length / 2 + 1);

	block[mid_index].days.forEach((y_day) => {
	   y_day.setAttribute('fill', default_color);
	});

	block[mid_index-2].days.forEach((y_day) => {
		y_day.setAttribute('fill', default_color);
	 });

	 block[mid_index-1].days.forEach((y_day) => {
		y_day.setAttribute('fill', default_color);
	 });
}

function fill(block, color = default_color) {
	 block.forEach((x_week) => {
	   x_week.days.forEach((y_day) => {
		   y_day.setAttribute('fill', color);
	   });
   });
}