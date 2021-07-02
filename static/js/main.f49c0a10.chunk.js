(this["webpackJsonpproject-portfolio-website"]=this["webpackJsonpproject-portfolio-website"]||[]).push([[0],{43:function(e,a,t){e.exports=t(55)},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),l=t.n(i),s=t(5),o=t(6),c=t(8),m=t(7),u=t(61),p=t(62),h=function(){return r.a.createElement(u.a,{expand:"lg"},r.a.createElement(u.a.Brand,{href:"#home",className:"smoothscroll"},"Thomas Reilly"),r.a.createElement(u.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"ml-auto"},r.a.createElement(p.a.Item,{className:"nav"},r.a.createElement(p.a.Link,{className:"smoothscroll",href:"#about"},"About")),r.a.createElement(p.a.Item,{className:"nav"},r.a.createElement(p.a.Link,{className:"smoothscroll",href:"#work"},"Portfolio")),r.a.createElement(p.a.Item,{className:"nav"},r.a.createElement(p.a.Link,{className:"smoothscroll",href:"#contact"},"Contact")))))},d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"home"},r.a.createElement(h,null),r.a.createElement("h1",null,this.props.inputData.full_name),r.a.createElement("h2",{className:"font-weight-light mb-0"},this.props.inputData.sub_title),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:this.props.inputData.github_link,className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:this.props.inputData.linked_in_link,className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:this.props.inputData.twitter_link,className:"icon"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll icon",href:"#about"},r.a.createElement("i",{className:"fas fa-chevron-circle-down"})))))}}]),t}(r.a.Component),g=t(57),f=t(58),b=t(59),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"about"},r.a.createElement(g.a,{className:"about-container"},r.a.createElement(f.a,{className:"about-row"},r.a.createElement(b.a,{className:"about-cols image-col",xs:12,md:3},r.a.createElement("img",{className:"me",src:this.props.inputData.profile_pic_url,alt:"A picture of me, "+this.props.inputData.full_name})),r.a.createElement(b.a,{className:"about-cols",xs:12,md:9},r.a.createElement(g.a,null,r.a.createElement("h3",null,"About Me"),r.a.createElement("p",null,this.props.inputData.about_me_paragraph," If you wish to get in touch please don't hesitate to ",r.a.createElement("a",{href:"#contact",className:"smoothscroll"},"contact me."))))))))}}]),t}(r.a.Component),w=t(60),y=t(41),v=t(36);function k(){var e=Object(v.a)(["\n  .container {\n    max-width: 800px;\n    margin: auto;\n    padding: 20px;\n  }\n\n  .skills {\n    margin: 0 0 30px 0;\n    padding: 0;\n    width: calc(100% - 50px);\n    li {\n      display: block;\n      position: relative;\n      background-color: #888;\n      color: #fff;\n      margin: 10px 0;\n      transition: width 300ms ease-in-out;\n      .collapsed & {\n        width: 0 !important;\n      }\n      p {\n        padding: 10px;\n        margin: 0;\n        font-weight: bold;\n      }\n      span {\n        position: absolute;\n        right: 10px;\n        display: inline-block;\n        width: 30px;\n        top: 11px;\n        text-align: right;\n        font-weight: normal;\n        color: #fff;\n        font-size: 11px;\n      }\n    }\n  }\n\n  // Pen specific styling\n  body {\n    font-size: 13px;\n    background-color: #e7e7e7;\n  }\n\n  hr {\n    height: 1px;\n    border: 0;\n    background-color: #ccc;\n    margin: 20px 0;\n    padding: 0;\n  }\n\n  small {\n    font-size: 11px;\n    color: #666;\n    a {\n      color: inherit;\n    }\n  }\n\n"]);return k=function(){return e},e}var N=t(37).a.div(k()),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={collapsed:!0},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({collapsed:!1})}),3e3)}},{key:"render",value:function(){var e=this.state.collapsed,a=this.props,t=a.hue,n=a.saturation,i=a.skills;return r.a.createElement(N,null,r.a.createElement("div",{id:"app",className:"container ".concat(e?"collapsed":"")},r.a.createElement("ul",{className:"skills"},i.map((function(e,a){return r.a.createElement("li",{key:e.type,style:{width:"".concat(e.level,"%"),backgroundColor:"hsl(".concat(t,", ").concat(n,"%, ").concat(100/(a+3.5),"%)")}},r.a.createElement("p",null,e.type))})))))}}]),t}(r.a.Component),D=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"address",value:function(e){if(null!=e.address&&""!==e.address)return r.a.createElement("h6",null,e.address," ",r.a.createElement("span",null,"\u2022")," ",e.start_date," - ",e.end_date)}},{key:"line",value:function(e,a){if(e<a-1)return r.a.createElement("hr",null)}},{key:"render",value:function(){var e=this,a=this.props.inputData.education,t=this.props.inputData.work,i=this.props.inputData.interests;return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{className:"resume-container"},r.a.createElement(f.a,{className:"resume-row"},r.a.createElement(b.a,{className:"resume-heading-col",md:3},r.a.createElement("h3",null,r.a.createElement("span",null,"Education"))),r.a.createElement(b.a,{ClassName:"resume-field",md:9},a.map((function(t,i){return r.a.createElement(n.Fragment,null,r.a.createElement("h5",null,t.type),r.a.createElement("h6",null,t.school," ",r.a.createElement("span",null,"\u2022")," ",t.start_date," - ",t.end_date),r.a.createElement("p",null,t.description),e.line(i,a.length))})))),r.a.createElement("hr",null),r.a.createElement(f.a,{className:"resume-row"},r.a.createElement(b.a,{className:"resume-heading-col",md:3},r.a.createElement("h3",null,r.a.createElement("span",null,"Work Experience"))),r.a.createElement(b.a,{md:9},t.map((function(a,i){return r.a.createElement(n.Fragment,null,r.a.createElement("h5",null,a.workplace),e.address(a),r.a.createElement("p",null,a.description),e.line(i,t.length))})))),r.a.createElement("hr",null),r.a.createElement(f.a,{className:"resume-row"},r.a.createElement(b.a,{className:"resume-heading-col",md:3},r.a.createElement("h3",null,r.a.createElement("span",null,"Skills"))),r.a.createElement(b.a,{md:9},r.a.createElement("p",null,this.props.inputData.skills_paragraph),r.a.createElement(j,{hue:"52",saturation:"100",skills:this.props.inputData.skills}))),r.a.createElement("hr",null),r.a.createElement(f.a,{className:"resume-row"},r.a.createElement(b.a,{className:"resume-heading-col",md:3},r.a.createElement("h3",null,r.a.createElement("span",null,"Other Interests"))),r.a.createElement(b.a,{md:9},r.a.createElement("p",{className:"interests"},"I'm not a complete geek I swear! Some of my other interests include,"),r.a.createElement(w.a,{className:"fun-facts"},i.map((function(e){return r.a.createElement(y.a,{className:"fact"},e)})))))))}}]),t}(r.a.Component),I=t(42),_=t(63),x=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"portfolioGrid",value:function(){var e=this,a=this.props.inputData.portfolio,t=Object(I.a)(Array(Math.ceil(a.length/2))).map((function(e,t){return a.slice(2*t,2*t+2)})).map((function(a,t){return r.a.createElement(f.a,{className:"row"},a.map((function(a){return r.a.createElement(b.a,{className:"col",md:6,xs:12},r.a.createElement(_.a,{className:"card"},e.printImage(a),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,{className:"card-text"},a.title),r.a.createElement(_.a.Body,null,a.body.map((function(e){return r.a.createElement("p",null,e)}))),e.printGithubLink(a),e.printWebsiteLink(a))))}))," ")}));return r.a.createElement("div",null,t)}},{key:"printGithubLink",value:function(e){if(null!=e.githuburl&&""!==e.githuburl)return r.a.createElement("a",{href:e.githuburl},r.a.createElement("i",{class:"fab fa-github"}))}},{key:"printWebsiteLink",value:function(e){if(null!=e.websiteurl&&""!==e.websiteurl)return r.a.createElement("a",{href:e.websiteurl},r.a.createElement("i",{class:"fas fa-link"}))}},{key:"printImage",value:function(e){var a=[];return e.imgurl.forEach((function(e){a.push(r.a.createElement(_.a.Img,{src:e,className:"cardimg"}))})),a}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"work"},r.a.createElement("h2",null,"Portfolio"),r.a.createElement(g.a,null,this.portfolioGrid())))}}]),t}(r.a.Component),C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.inputData.email_address,a=this.props.inputData.linked_in_link,t=this.props.inputData.full_name;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"contact"},r.a.createElement(g.a,null,r.a.createElement("h2",null,r.a.createElement("span",null,"Contact Me")),r.a.createElement(w.a,{className:"listGroup"},r.a.createElement(y.a,{className:"listItem"},"Email: ",r.a.createElement("a",{href:"mailto:"+e},e)),r.a.createElement(y.a,{className:"listItem"},"LinkedIn: ",r.a.createElement("a",{href:a},t))))),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:this.props.inputData.github_link,className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:this.props.inputData.linked_in_link,className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:this.props.inputData.twitter_link,className:"icon"},r.a.createElement("i",{className:"fab fa-twitter"}))))}}]),t}(r.a.Component),O={full_name:"Thomas Reilly",sub_title:"Computer Science Student And Aspiring Software Engineer",github_link:"https://github.com/thomasreilly1011",linked_in_link:"https://www.linkedin.com/in/thomas-reilly-590513171/",twitter_link:"https://twitter.com/ThomasEdreilly",profile_pic_url:"images/me.png",about_me_paragraph:"Hi, I'm Thomas Reilly. I am a twenty year old Computer Science student living in Dublin, Ireland. I am largely interested in pursuing a career as a Software/Web engineer, however, I am always open to new experiences. I built this website so you can learn about me, my skills as a software engineer and also, to showcase a regularly updated portfolio of my work. I am currently seeking an internship for my 3rd year work placement module.",education:[{type:"BSc Computer Science",school:"University College Dublin",start_date:"Sept 2018",end_date:"Present",description:"I am currently in my Second year of Computer Science in UCD and I expect to graduate in May of 2022. Through my course I have developed many skills as a software developer, most notably in the design of algorithms and data structures, use of both functional and object oriented programming, aswell as various other software engineering techniques. I am also active in extra-curricualr activites attending and co-organising tech events with UCD Netsoc."}],work:[{workplace:"Software Engineering Projects",description:"As part of our studies in UCD we are tasked with Software Engineering projects which we perform both individually and in groups. Through these projects we are exposed to some real-world project management techinques including, effective use of version control with git, agile software-development techniques, and a range of testing methodologies. Most importantly, I have experience working in a team environment and I have a strong understanding of what it takes to work effectively in a team with regard to, communication, organisation and colaboration."},{workplace:"Part-Time Work",address:"Amber Springs Hotel, Gorey, Co. Wexford",start_date:"December 2018",end_date:"Present",description:"I have been working as a waiter at the Amber Springs hotel since December 2018. During my time here I have served in their 4 resturaunts aswell as in weddings and other functions. Working in a busy service environment has taught me the importance of communication and leadership in the workplace. "}],skills_paragraph:"I am always equipping myself with the latest technologies out there. Through my studies in UCD I have become particularly familiar with C/C++ and Java, using them to develop algorithms and data structures as well as larger scale software engineering projects. In my spare time I am always exposing myself to new programming languages and frameworks. Most notably in the creation of Web Applications with React and Node JS. I also have basic experience with Python having used it to write basic scripts and also in experimenting with machine learning.",interests:["I have been playing music since the age of six, and have taken part in several orchestral and traditional music groups performing in national and international festivals.","I have a strong interest in Irish culture and history. I am currently taking a series of structured electives in Irish History during my studies at UCD.","I am also active in other UCD clubs and societies, attending speeches, debates and more recently UCD canoe club."],skills:[{type:"Java",level:90},{type:"Python",level:50},{type:"Node.js",level:70},{type:"React.js",level:40},{type:"C/C++",level:80}],portfolio:[{title:"Scrabble Game",body:["Built as my Stage 2 Software Engineering Project, this is a fully functional Scrabble Game built for Desktop with Java and JavaFX.","The game features an easy to use user interface, aswell as an AI programmed Bot that you can play against. The game follows the Golden Scrabble rules with a built-in Dictionary for word challenges."],imgurl:["images/scrabble-project.jpg"],githuburl:"https://github.com/UCD-COMP20050/Christian-Coders"},{title:"Messaging App",body:["A web based messaging app built with Node.js as part of an online Node.js course.","The app has a simple front end that allows you to select a name and join a chat room. Once in a chat room, you can send messages to other users in the same room as well as send your current location.","The app makes use of Node's asynchronous capabilities and the socket.io library to provide real-time messaging and location retrieval."],imgurl:["images/chat-app-project.png","images/chat-app-project-2.png"],githuburl:"https://github.com/thomasreilly1011/node-messaging-app",websiteurl:"http://boytime-messaging-app.herokuapp.com/"},{title:"Personal Website",body:["You're look at it! My personal website built with React.js and React Bootstrap. The website features an easily modifiable config file that allows me to easily update the website with new information over time.","Not only this, but the website is completely customisable and can be made your own by adding your own data. A guide on how to do this can be found on the github page below."],imgurl:["images/personal-web.png"],githuburl:"",websiteurl:""},{title:"Unix Programming Portfolio",body:["An array of programs built especiall for unix systems as part of my Unix Programming class in UCD.","Included is, a 'head' mimic program, a bash shell mimic, a multithreaded program for computing matrix multiplicaton, a bash script for oragnising a project file structure and a python script for analysing apache log files. More detail on each can be found in the github repository below."],imgurl:["images/unix-graphic.png"],githuburl:"",websiteurl:""},{title:"Algorithms Portfolio",body:["A series of Algorithms designed and built in Java as part of my Algorithms class in UCD.","This repository contains a range of sorting algorithms, pattern-search algorithms and compression algorithms.","Featured also is a fully functional compression suite based off huffman encoding. The entire portfolio aswell as guide on how to use it can be found on the github page below."],imgurl:["images/comparison.png"],githuburl:"",websiteurl:""},{title:"Data Structures Portfolio",body:["A collection of Data Structures designed and built in Java as part of my Databases class in UCD.","Included is a series of data strucutes ranging from simple linked lists, to hashmaps and balanced binary search trees.","The data structures were built with object oriented programming in mind, each of them occupy their own class and work in a heirarchy sharing code with super classes and adhering to Interfaces."],imgurl:["images/node-graphic.png"],githuburl:"google.ie",websiteurl:""}],email_address:"thomas.edreilly@gmail.com"},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{inputData:O}),r.a.createElement(E,{inputData:O}),r.a.createElement(D,{inputData:O}),r.a.createElement(x,{inputData:O}),r.a.createElement(C,{inputData:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.f49c0a10.chunk.js.map