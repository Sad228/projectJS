let url = new URL(location.href);
let div = document.createElement('div');
let dataJson = url.searchParams.get('data');
let data = JSON.parse(dataJson);
div.classList.add('divMain');
let id = document.createElement('div');
id.innerText = `ID:
 ${data.id}`;
let name = document.createElement('div');
name.innerText = `Name:
 ${data.name}`;
let username = document.createElement('div');
username.innerText = `Username:
 ${data.username}`;
let email = document.createElement('div');
email.innerText = `Email:
 ${data.email}`;
let address = document.createElement('div');
address.classList.add('forAddr');
address.innerText = `Address:
    Street: ${data.address.street} 
    suite: ${data.address.suite}
    city: ${data.address.city}
    zipcode: ${data.address.zipcode}
    geo: lat: ${data.address.geo.lat}  lng: ${data.address.geo.lng}`;
let phone = document.createElement('div');
phone.innerText = `Phone:
 ${data.phone}`
let website = document.createElement('div');
website.innerText = `Website:
${data.website}`
let company = document.createElement('div');
company.classList.add('forComp');
company.innerText = `Company:
    Name: ${data.company.name}
    CatchPhrase: ${data.company.catchPhrase}
    Bs: ${data.company.bs}`;
div.append(id,name,username,email,address,phone,website,company);
document.body.appendChild(div);


let butDiv = document.createElement('div')
butDiv.classList.add('butDiv');
let but = document.createElement('button');
but.addEventListener('click', function () {
    this.disabled = true;
});
but.classList.add('but');
but.innerText = 'post of current user';
but.onclick = function (){
  let divBut = document.createElement('div');
  document.body.appendChild(divBut)

  fetch('https://jsonplaceholder.typicode.com/users/'+data.id+'/posts')
      .then(value => value.json())
      .then(value => {
          let divButMain = document.createElement('div');
          divButMain.classList.add('divButMain');
          for (const Element of value) {
              let divButAll = document.createElement('div')
              divButAll.classList.add('divButAll');
              let a = document.createElement('a');
              a.innerText =  Element.title + ' ';
              a.classList.add('butText');
              a.href = 'post-details.html?id='+JSON.stringify(Element)
              divButAll.append(a);
              divButMain.appendChild(divButAll)
          }
          divBut.appendChild(divButMain)

      })

};
butDiv.appendChild(but);
document.body.appendChild(butDiv);
