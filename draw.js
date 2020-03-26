default_color = '#239a3b';
background_color = '#ebedf0';
word = "ANNINO";

function apply() {
	// querySelecor returns an object (HTMLCollection)
	const contributions = document.querySelector('g[data-hydro-click-hmac]');
	// Convert it to an array containing all the children nodes
	const weeks = [...contributions.children];

	weeks.forEach((week) => {
		// Convert HTMLCollection (returned by .children) into an array
		days = [...week.children];
		week.days = days;
		days.forEach((day) => {
			day.setAttribute('fill', background_color)
		})
	});

	// Chunks the array in blocks of size elements
	const chunk = (arr, size) =>
		Array.from( { length: Math.ceil(arr.length / size) }, (_, i) =>
	    	arr.slice(i * size, i * size + size)
	 );

	// Each blocks contains 7 weeks now then
	// 7 horizontal lines (weeks) x 7 vertical lines (days)
	const width_blocks = 7;
	const weeks_blocks = chunk(weeks,width_blocks);
	drawCanvases(weeks_blocks);
}

function drawCanvases(weeks_blocks) {
	for (let i = 0; i < word.length; i++){
		drawBlock(weeks_blocks[i], word[i]);
	}
}

function drawBlock(block, letter) {
	// Remove the first and the last vertical and horizontal line of each block
	const insetBlock = (block) => {
		block.pop();
		block.shift();
	
		block.forEach((week) => {
			week.days.pop();
			week.days.shift();
		});
	};

	insetBlock(block);
	this[`draw${letter}`](block, default_color);
}

function range(length, from) {
	return Array.from({length: length}, (_, n) => n+from);
}

function drawA(block, color = default_color) {
	drawF(block, color);
	drawFullLastVertical(block, color); // |
}

function drawB(block, color = default_color) {
	drawFullFirstVertical(block, color); // |
	range(2,1).forEach((n) => {
		set(block, n, 0, color);
		set(block, n, 2, color);
		set(block, n, block.length - 1, color);
	});
	set(block, 3, 1, color);
	set(block, 3, 3, color);
}

function drawC(block, color = default_color) {
	drawL(block, color);
	drawFullFirstHorizontal(block, color);
}

function drawD(block, color = default_color) {
	drawFullFirstVertical(block, color); // |
	range(3,1).forEach((n) => {
		set(block, n, 0, color); // -
		set(block, n, block.length -1, color); // -
		set(block, block.length -1, n, color); // |
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
		set(block, n, block.length - 1, color); // _
	});
}

function drawK(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, 0, n, color); // |
	});

	range(3,1).forEach((n) => {
		set(block, n, 3-n, color); // \
		set(block, n, n+1, color); // \
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
		set(block, block.length -1, n, color);
	});
}

function drawFullFirstHorizontal(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, 0, color);
	});
}

function drawFullLastHorizontal(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n, block.length -1, color);
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
		set(block, n, n, color);
	});
}

function drawFull24Bisect(block, color = default_color) {
	range(block.length,0).forEach((n) => {
		set(block, n,  block.length - 1 - n, color);
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

function set(block, x, y, color = default_color) {
	block[x].days[y].setAttribute('fill', color);
}