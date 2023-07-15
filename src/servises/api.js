import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  const { data } = await axios.get(urlPosition);
  console.log(data);
  return data;
};

// var myHeaders = new Headers();
// myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders,
// };
// // 'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15';
// fetch(
//   'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15',
//   requestOptions
// )
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
