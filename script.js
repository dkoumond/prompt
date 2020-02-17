var tweets = [
  {
    text:
      "Doggo ipsum doggo pupper shooberino stop it fren floofs he made many woofs extremely cuuuuuute, doggorino big ol wow such tempt ruff doggorino. Porgo what a nice floof big ol pupper long water shoob shoob snoot, many pats mlem heckin good boys and girls heck. Wow such tempt wrinkler sub woofer mlem clouds doggo wrinkler thicc, what a nice floof shooberino he made many woofs long bois smol super chub. The neighborhood pupper very taste wow thicc, what a nice floof. Clouds stop it fren adorable doggo extremely cuuuuuute length boy, puggo boofers vvv length boy super chub, boof h*ck blop. borking doggo heckin angery woofer very good spot. Fat boi bork doge fluffer wow such tempt, yapper long doggo puggo. What a nice floof heckin borkdrive shibe, porgo doing me a frighten. Ur givin me a spook he made many woofs boofers sub woofer wow very biscit, much ruin diet long bois long doggo.",
    likes: 50,
    comments: 100000,
    retweets: 20,
    image: false,
    username: "muppetman"
  },
  {
    text:
      "Doggo ipsum doggo pupper shooberino stop it fren floofs he made many woofs extremely cuuuuuute, doggorino big ol wow such tempt ruff doggorino. Porgo what a nice floof big ol pupper long water shoob shoob snoot, many pats mlem heckin good boys and girls heck. Wow such tempt wrinkler sub woofer mlem clouds doggo wrinkler thicc, what a nice floof shooberino he made many woofs long bois smol super chub. The neighborhood pupper very taste wow thicc, what a nice floof. Clouds stop it fren adorable doggo extremely cuuuuuute length boy, puggo boofers vvv length boy super chub, boof h*ck blop. borking doggo heckin angery woofer very good spot. Fat boi bork doge fluffer wow such tempt, yapper long doggo puggo. What a nice floof heckin borkdrive shibe, porgo doing me a frighten. Ur givin me a spook he made many woofs boofers sub woofer wow very biscit, much ruin diet long bois long doggo.",
    likes: 40,
    comments: 1000000,
    retweets: 20,
    image: false,
    username: "kermitthefrog"
  },
  {
    text:
      "Doggo ipsum doggo pupper shooberino stop it fren floofs he made many woofs extremely cuuuuuute, doggorino big ol wow such tempt ruff doggorino. Porgo what a nice floof big ol pupper long water shoob shoob snoot, many pats mlem heckin good boys and girls heck. Wow such tempt wrinkler sub woofer mlem clouds doggo wrinkler thicc, what a nice floof shooberino he made many woofs long bois smol super chub. The neighborhood pupper very taste wow thicc, what a nice floof. Clouds stop it fren adorable doggo extremely cuuuuuute length boy, puggo boofers vvv length boy super chub, boof h*ck blop. borking doggo heckin angery woofer very good spot. Fat boi bork doge fluffer wow such tempt, yapper long doggo puggo. What a nice floof heckin borkdrive shibe, porgo doing me a frighten. Ur givin me a spook he made many woofs boofers sub woofer wow very biscit, much ruin diet long bois long doggo.",
    likes: 60,
    comments: 10,
    retweets: 20,
    image: true,
    username: "americansam"
  },
  {
    text:
      "Doggo ipsum doggo pupper shooberino stop it fren floofs he made many woofs extremely cuuuuuute, doggorino big ol wow such tempt ruff doggorino. Porgo what a nice floof big ol pupper long water shoob shoob snoot, many pats mlem heckin good boys and girls heck. Wow such tempt wrinkler sub woofer mlem clouds doggo wrinkler thicc, what a nice floof shooberino he made many woofs long bois smol super chub. The neighborhood pupper very taste wow thicc, what a nice floof. Clouds stop it fren adorable doggo extremely cuuuuuute length boy, puggo boofers vvv length boy super chub, boof h*ck blop. borking doggo heckin angery woofer very good spot. Fat boi bork doge fluffer wow such tempt, yapper long doggo puggo. What a nice floof heckin borkdrive shibe, porgo doing me a frighten. Ur givin me a spook he made many woofs boofers sub woofer wow very biscit, much ruin diet long bois long doggo.",
    likes: 20,
    comments: 100,
    retweets: 20,
    image: false,
    username: "Dosseh"
  },
  {
    text:
      "Doggo ipsum doggo pupper shooberino stop it fren floofs he made many woofs extremely cuuuuuute, doggorino big ol wow such tempt ruff doggorino. Porgo what a nice floof big ol pupper long water shoob shoob snoot, many pats mlem heckin good boys and girls heck. Wow such tempt wrinkler sub woofer mlem clouds doggo wrinkler thicc, what a nice floof shooberino he made many woofs long bois smol super chub. The neighborhood pupper very taste wow thicc, what a nice floof. Clouds stop it fren adorable doggo extremely cuuuuuute length boy, puggo boofers vvv length boy super chub, boof h*ck blop. borking doggo heckin angery woofer very good spot. Fat boi bork doge fluffer wow such tempt, yapper long doggo puggo. What a nice floof heckin borkdrive shibe, porgo doing me a frighten. Ur givin me a spook he made many woofs boofers sub woofer wow very biscit, much ruin diet long bois long doggo.",
    likes: 30,
    comments: 1,
    retweets: 20,
    image: true,
    username: "dogperson"
  }
];

var tweetEles = [];

function tweet(twt) {
  var that = this;
  this.retweets=twt.retweets;
    this.comments=twt.comments;
    this.likes=twt.likes;
  this.ele = document.createElement("div");
  this.ele.classList.add("tweet");
  this.usernameEle = document.createElement("h1");
  this.textEle = document.createElement("div");
  this.retweetsEle = document.createElement("h3");
  this.commentsEle = document.createElement("h3");
  this.imageEle = document.createElement("div");
  this.likesEle = document.createElement("h3");
  
  this.usernameEle.innerHTML=twt.username;
  this.textEle.innerHTML=twt.text;
  this.retweetsEle.innerHTML="Retweets: "+this.retweets;
    this.likesEle.innerHTML="Likes: "+this.likes;
    this.commentsEle.innerHTML="Comments: "+this.comments;
  
  this.imageEle.innerHTML="<img src='https://media.giphy.com/media/QX6Y13v6klikvXYmrU/giphy.gif'/>"
  
  this.retweetsEle.addEventListener("click", function(){
    that.retweets=that.retweets+1;
    that.retweetsEle.innerHTML="Retweets: "+that.retweets;
  })
  
  this.commentsEle.addEventListener("click", function(){
    that.comments=that.comments+1;
    that.commentsEle.innerHTML="Comments: "+that.comments;
  })
  
  this.likesEle.addEventListener("click", function(){
    that.likes=that.likes+1;
    that.likesEle.innerHTML="Likes: "+that.likes;
    if(that.likes>=100){
      that.ele.style.backgroundColor="red";
      that.ele.style.color="white";
    }
  })

  this.ele.appendChild(this.usernameEle);
  this.ele.appendChild(this.textEle);
  this.ele.appendChild(this.retweetsEle);
  this.ele.appendChild(this.commentsEle);
  if(twt.image){
       this.ele.appendChild(this.imageEle);
     }

  this.ele.appendChild(this.likesEle);

  document.body.appendChild(this.ele);
}

for (var i = 0; i < tweets.length; i++) {
  tweetEles.push(new tweet(tweets[i]));
}