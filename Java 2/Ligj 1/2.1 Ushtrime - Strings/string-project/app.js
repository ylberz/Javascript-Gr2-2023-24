const btnShfaqNsh = document.getElementById("btnShfaqNsh");
const inpMesazhi = document.getElementById("inpMesazhi");
const rezultati = document.getElementById("rezultati");

function shfaqNsh() {
  let vleraMesazhit = inpMesazhi.value;
  //   rezultati.innerText = vleraMesazhit.trim().length;
  rezultati.innerHTML = `<p style='color:red;'> ${
    vleraMesazhit.trim().length
  } </p>`;
}

btnShfaqNsh.addEventListener("click", shfaqNsh);
