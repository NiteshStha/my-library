/**
 * Returns a random number between 0 and the maximum value (max) specified in the parameter.
 * @param {number} max The Maximum limit of the random number
 * @returns {number} Returns a random number between 0 and the maximum value (max) specified in the parameter.
 */
export const NumberGenerator = max => {
	return Math.floor(Math.random() * max) + 1;
};
