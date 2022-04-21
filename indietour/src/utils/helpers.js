export const eventBldr = (name, value) => {
	return { target: { name, value } };
};

export const sortMemberTourDates = member => {
	if (member.activeTour) {
		const dates = [...member.activeTour.dates];
		dates.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
		return { ...member, activeTour: { ...member.activeTour, dates } };
	}
	return member;
};

export const sortTourDates = tour => {
	const dates = [...tour.dates];
	dates.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
	return { ...tour, dates };
};
