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
		case 'A':
			drawA(block);
			break;
		case 'B':
			drawB(block);
			break;
		case 'C':
			drawC(block);
			break;
		case 'D':
			drawD(block);
			break;
		case 'E':
			drawE(block);
			break;
		case 'F':
			drawF(block);
			break;
		case 'G':
			drawG(block);
			break;
		case 'H':
			drawH(block);
			break;
		case 'I':
			drawI(block);
			break;
		case 'J':
			drawJ(block);
			break;
		case 'K':
			drawK(block);
			break;
		case 'L':
			drawL(block);
			break;
		case 'M':
			drawM(block);
			break;
		case 'N':
			drawN(block);
			break;
		case 'O':
			drawO(block);
			break;
		case 'P':
			drawP(block);
			break;
		case 'Q':
			drawQ(block);
			break;
		case 'R':
			drawR(block);
			break;
		case 'S':
			drawS(block);
			break;
		case 'T':
			drawT(block);
			break;
		case 'U':
			drawU(block);
			break;
		case 'V':
			drawV(block);
			break;
		case 'W':
			drawW(block);
			break;
		case 'X':
			drawX(block);
			break;
		case 'Y':
			drawY(block);
			break;
		case 'Z':
			drawZ(block);
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
	drawF(block, color);
	drawFullLastVertical(block, color);
}

function drawB(block, color = default_color) {
	drawFullFirstVertical(block, color);
	range(2,1).forEach((n) => {
		set(block, n, 0);
		set(block, n, 2);
		set(block, n, block.length - 1);
	});
	set(block, 3,1);
	set(block, 3,3);
}

function drawC(block, color = default_color) {
	drawL(block, color);
	drawFullFirstHorizontal(block, color);
}

function drawD(block, color = default_color) {
	drawFullFirstVertical(block, color);
	range(3,1).forEach((n) => {
		set(block, n, 0); // -
		set(block, n, block.length -1); // -
		set(block, block.length -1, n); // |
	});
}

function drawE(block, color = default_color) {
	drawF(block, color);
	drawFullLastHorizontal(block, color);
}

function drawF(block, color = default_color) {
	drawFullFirstHorizontal(block, color);
	drawFullFirstVertical(block, color);
	drawFullMidHorizontal(block, color);
}

function drawG(block, color = default_color) {
	drawC(block, color);
	range(2,0).forEach((n) => {
		set(block, block.length - 1, 2+n, color); // |
		set(block, 2+n, 2, color); // |
	});
}

function drawH(block, color = default_color) {
	drawFullMidHorizontal(block, color);
	drawFullFirstVertical(block, color);
	drawFullLastVertical(block, color);
}

function drawI(block, color = default_color) {
	drawT(block, color);
	drawFullLastHorizontal(block, color);
}

function drawJ(block, color = default_color) {
	drawT(block, color);
	range(2,0).forEach((n) => {
		set(block, n, block.length - 1); // _
	});
}

function drawK(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, 0, n); // |
	});

	range(3,1).forEach((n) => {
		set(block, n, 3-n); // \
		set(block, n, n+1); // \
	});
}

function drawL(block, color = default_color) {
	drawFullFirstVertical(block, color);
	drawFullLastHorizontal(block, color);
}

function drawM(block, color = default_color) {
	drawFullFirstVertical(block, color);
	drawFullLastVertical(block, color);
	set(block, 1,0,color);
	set(block, 3,0,color);
	set(block, 2,1,color);
}

function drawN(block, color = default_color) {
	drawFullFirstVertical(block, color);
	drawFullLastVertical(block, color);
	drawFull13Bisect(block, color);
}

function drawO(block, color = default_color) {
	drawC(block,color);
	drawFullLastVertical(block, color);
}

function drawP(block, color = default_color) {
	drawF(block, color);
	range(2,0).forEach((n) => {
		set(block, block.length - 1, n, color); // _
	});
}

function drawQ(block, color = default_color) {
	drawO(block, color);
	drawFinalHalf13Bisect(block, color);
}

function drawR(block, color = default_color) {
	drawP(block, color);
	drawFinalHalf13Bisect(block, color);
}

function drawS(block, color = default_color) {
	drawFullFirstHorizontal(block,color);
	drawFullLastHorizontal(block,color);
	drawFullMidHorizontal(block, color);
	set(block,0,1, color);
	set(block,4,3, color);
}

function drawT(block, color = default_color) {
	drawFullFirstHorizontal(block,color);
	drawFullMidVertical(block, color);
}

function drawU(block, color = default_color) {
	drawL(block, color);
	drawFullLastVertical(block, color);
}

function drawV(block, color = default_color) {
	range(3,0).forEach((n) => {
		set(block, 0, n, color); // |
		set(block, block.length - 1, n, color); // |
	});

	range(2,0).forEach((n) => {
		set(block, 1+n, 3+n, color); // \
		set(block, 2+n, block.length - 1 - n, color); // /
	});
}

function drawW(block, color = default_color) {
	range(4,0).forEach((n) => {
		set(block, 0, n, color); // |
		set(block, block.length - 1, n, color); // |
	});
	set(block, 1,4, color);
	set(block, 3,4, color);
	set(block, 2,3, color);
}

function drawX(block, color = default_color) {
	drawY(block, color);
	drawFinalHalf13Bisect(block,color);
}

function drawY(block, color = default_color) {
	drawFull24Bisect(block, color);
	range(3,0).forEach((n) => {
		set(block, n, n, color); // \
	});
}

function drawZ(block, color = default_color) {
	drawFullFirstHorizontal(block,color);
	drawFullLastHorizontal(block,color);
	drawFull24Bisect(block, color);
}

function drawFullFirstVertical(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, 0, n, color); // |
	});
}

function drawFullLastVertical(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, block.length -1, n);
	});
}

function drawFullFirstHorizontal(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, 0);
	});
}

function drawFullLastHorizontal(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, block.length -1);
	});
}

function drawFullMidHorizontal(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, Math.floor((block.length -1) / 2), color);
	});
}

function drawFullMidVertical(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, Math.floor((block.length -1) / 2), n, color);
	});
}

function drawFull13Bisect(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, n);
	});
}

function drawFull24Bisect(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n,  block.length - 1 - n);
	});
}

function drawFinalHalf13Bisect(block, color = default_color) {
	range(3,0).forEach((n) => {
		set(block, block.length - 1 - n, block.length - 1 - n, color); // \
	});
}

function fill(block, color = default_color) {
	 block.forEach((x_week) => {
	   x_week.days.forEach((y_day) => {
		   y_day.setAttribute('fill', color);
	   });
   });
}