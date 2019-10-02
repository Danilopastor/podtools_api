module.exports = class randomCod{
	returnRand(){
				const randomization = Math.random().toString();
				const lengthNumbers = randomization.length;
				const sort = randomization.substring(lengthNumbers, lengthNumbers - 1);
				return sort;
	}
	Simple(){
				
				const min = Math.ceil(111111);
				const max = Math.floor(999999);
				return Math.floor(Math.random() * (max - min)) + min;
				
				
				 var pwd = [],
					cc = String.fromCharCode,
					R = Math.random,
					rnd, i;
				pwd.push(cc(48 + (0 | R() * 10))); // push a number
				pwd.push(cc(65 + (0 | R() * 26))); // push an upper case letter
				


				for (i = 2; i < 6; i++) {
					rnd = 0 | R() * 62; // generate upper OR lower OR number
					pwd.push(cc(48 + rnd + (rnd > 9 ? 7 : 0) + (rnd > 35 ? 6 : 0)));
				}

				// shuffle letters in password
				return pwd.sort(function() { return R() - .5; }).join('');
	}
}