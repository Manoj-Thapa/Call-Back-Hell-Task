const countDownChange = (num, delay, doNext) => {
	setTimeout(() => {
		if (!num) {
			document.querySelector('#number').textContent = 'Happy Independence Day';
		} else {
			document.querySelector('#number').textContent = num;
		}
		doNext();
	}, delay);
}

countDownChange(10, 0, () => {
	countDownChange(9, 1000, () => {
		countDownChange(8, 1000, () => {
			countDownChange(7, 1000, () => {
				countDownChange(6, 1000, () => {
					countDownChange(5, 1000, () => {
						countDownChange(4, 1000, () => {
							countDownChange(3, 1000, () => {
								countDownChange(2, 1000, () => {
									countDownChange(1, 1000, () => {
										countDownChange(0, 1000, () => {

										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
})
