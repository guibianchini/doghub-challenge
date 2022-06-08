export const  getAllDogsInfo = (props) => {
  const {
    setDogsData,
  } = props;

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      setDogsData(JSON.parse(xhttp.responseText));
    }
  };

  xhttp.open("GET", `https://doghub.s3.amazonaws.com/desafio/breeds.json`, true);
  xhttp.send();
}
