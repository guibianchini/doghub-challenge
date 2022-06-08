export const  getDogInfo = (props) => {
  const {
    dogId,
    setDogData,
  } = props;

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      setDogData(JSON.parse(xhttp.responseText));
    }
  };

  xhttp.open("GET", `https://doghub.s3.amazonaws.com/desafio/breed/${dogId}.json`, true);
  xhttp.send();
}
