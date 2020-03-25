function apply() {
	contributions = document.querySelector('g[data-hydro-click-hmac]');
	weeks = [...contributions.children];
	console.log(weeks);
	weeks.forEach((week) => {
		days = [...week.children];
		week.days = days;
		week.days.forEach((day) => {
			day.setAttribute('fill', '#000000');
		});
	});
	console.log(weeks);
}