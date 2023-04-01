// $("#menu").click(function() {
//     document.getElementById("nav").style.height = "100%";
//     document.getElementById("nav").style.opacity = "1";
//     document.getElementById("nav").style.pointerEvents = "auto";
//   });
function contacte() {
    var form = document.getElementById("formular");
    form.scrollIntoView({ behavior: 'smooth' });
  }
function tema_i(){
    document.getElementById("tort_center").style.display ="flex";
    document.getElementById("biscuiti_center").style.display="none";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_e(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="flex";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_f(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="none";
    document.getElementById("turte-dulci").style.display ="flex";
}
function openContact(){
    document.getElementById("container")
}

var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value
};

const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const date = {};
  emailjs.send('service_kjvz6pm', 'template_j7bf6fs', date)
    .then(function(response) {
      alert('Mesajul a fost trimis cu succes');
      form.reset(); 
    }, function(error) {
      alert('Eroare la transmitere.Va rugam incercati mai tarziu.');
    });
});

function sendEmail() {
    var content = document.getElementById('comanda').innerHTML;
    var email = prompt('scriti emailul carui va adresati:');
    var mailto_link = 'mailto:' + email + '?subject=Содержимое страницы&body=' + encodeURIComponent(content);
    window.location.href = mailto_link;
  }

