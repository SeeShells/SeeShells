(this.webpackJsonpwebsitev2=this.webpackJsonpwebsitev2||[]).push([[0],{103:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t(1),n=t.n(i),c=t(26),l=t.n(c),o=t(10),r=t(8),h=t(13),d=t(12),p=t(11),j=t.p+"static/media/oldLogo.d57fc063.png",b=t(7),u=t(18),x=t(9),m=t(104),g=t(122),f=t(124),O=t(63),v=t(125),w=t(62),y=t.n(w),C=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={hideNav:!1,dropdown:!1},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.openMenu=a.openMenu.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({hideNav:window.innerWidth<=760})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"handleClick",value:function(e){this.props.history.push("/"+e.currentTarget.id),this.setState({dropdown:!1})}},{key:"openMenu",value:function(){this.setState({dropdown:!this.state.dropdown})}},{key:"render",value:function(){return Object(a.jsx)(u.a,{basename:"/",children:Object(a.jsxs)(g.a,{position:"static",className:this.props.classes.menuBar,children:[Object(a.jsxs)(f.a,{children:[Object(a.jsx)("img",{src:j,alt:"SeeShells Logo",className:this.props.classes.logo,onClick:this.handleClick}),Object(a.jsx)("p",{className:this.props.classes.title,children:"SEESHELLS"}),!this.state.hideNav&&Object(a.jsxs)("div",{className:this.props.classes.buttonContainer,children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"about",children:"About"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"download",children:"Download"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"documentation",children:"Documentation"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"developers",children:"Developers"})]}),this.state.hideNav&&Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.openMenu,children:Object(a.jsx)(y.a,{})})})]}),this.state.hideNav&&Object(a.jsx)(v.a,{in:this.state.dropdown,children:Object(a.jsxs)(O.a,{className:this.props.classes.dropdownContainer,children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"about",children:"About"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"download",children:"Download"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"documentation",children:"Documentation"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"developers",children:"Developers"})]})})]})})}}]),t}(n.a.Component),N=Object(b.a)({menuBar:{backgroundColor:"#212121",width:"100%",display:"flex",margin:"0px",overflow:"auto"},buttonContainer:{display:"flex",float:"right",marginLeft:"auto",marginRight:"1%"},buttons:{display:"flex",justifyContent:"center",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"20px",fontFamily:"Georgia"},title:{fontFamily:"Georgia",fontSize:"calc(20px + 2vw)",margin:"10px",display:"flex",paddingLeft:"10px",color:"#F2F2F2"},logo:{height:"50px",width:"50px",display:"flex",float:"left"},dropdownContainer:{backgroundColor:"#212121",width:"100%",display:"flex",justifyContent:"center",flexDirection:"space-evenly",flexFlow:"wrap"}})(Object(x.e)(C)),k=t.p+"static/media/beach2.a20cd2e5.png",S=t.p+"static/media/pearl.9c3f4de4.png",T=(t(57),t(127)),F=t(126),D={frontPage:{height:"100%",width:"100%",overflow:"auto",borderRadius:"0"},barContent:{height:"100%",display:"flex",flexFlow:"column",justifyContent:"space-between",alignItems:"center",borderRadius:"0"},intro:{color:"#F2F2F2",fontSize:"calc(12px + 6vw)",margin:"0px",alignSelf:"flex-start",paddingLeft:"10%"},description:{color:"#F2F2F2",fontSize:"calc(12px + 2vw)"},image:{display:"grid",width:"100%",height:"40%",maxHeight:"350px",minHeight:"200px",textAlign:"center",backgroundImage:"url("+k+")",overflow:"hidden",borderRadius:"0"},downloadButton:{display:"flex",backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",fontSize:"2vh",marginBottom:"1%",marginTop:"1%"},descriptionAlt:{color:"#33A1FD",fontWeight:"bold",display:"contents"},title:{color:"#082998",fontSize:"calc(12px + 2.5vw)",textDecoration:"underline",fontWeight:"bold"},featuresContainer:{height:"60%",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column"},featuresButton:{backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",margin:"0px",fontSize:"2vh"},infoContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap",width:"100%",height:"70%",alignSelf:"center"},info:{display:"flex",alignItems:"center",width:"35%",height:"30%"},text:{fontSize:"calc(12px + 0.5vw)"},pearl:{height:"2.5vw",width:"2.5vw",verticalAlign:"center",marginRight:"10px"}},W=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(a.jsx)(u.a,{basename:"/",children:Object(a.jsxs)(O.a,{className:this.props.classes.frontPage,children:[Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.image,children:[Object(a.jsx)("div",{id:"stars"}),Object(a.jsx)("div",{id:"stars2"}),Object(a.jsx)("div",{id:"stars3"}),Object(a.jsx)(F.a,{in:!0,children:Object(a.jsxs)("div",{className:this.props.classes.barContent,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.intro,children:"SEESHELLS"}),Object(a.jsxs)(T.a,{variant:"title",className:this.props.classes.description,children:["A ",Object(a.jsx)("span",{className:this.props.classes.descriptionAlt,children:"digital forensics tool"})," for analyzing Windows Registry Artifacts."]}),Object(a.jsx)(m.a,{className:this.props.classes.downloadButton,onClick:this.handleClick,id:"download",children:"GET THE TOOL"})]})})]}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.featuresContainer,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Why SeeShells?"}),Object(a.jsx)(F.a,{in:!0,children:Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.infoContainer,children:[Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.info,children:[Object(a.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(a.jsxs)(T.a,{className:this.props.classes.text,children:[Object(a.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Quick parsing"})," of Windows Registry artifacts"]})]}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.info,children:[Object(a.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(a.jsxs)(T.a,{className:this.props.classes.text,children:[Object(a.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Analysis of artifacts"})," with suspicious behavior flagging"]})]}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.info,children:[Object(a.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(a.jsxs)(T.a,{className:this.props.classes.text,children:[Object(a.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Timeline View"})," for a holistic view of computer activity"]})]}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.info,children:[Object(a.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(a.jsxs)(T.a,{className:this.props.classes.text,children:[Object(a.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Filtering"})," for specific activities and trends"]})]})]})}),Object(a.jsx)(m.a,{className:this.props.classes.featuresButton,onClick:this.handleClick,id:"about",children:"SEE ALL FEATURES"})]})]})})}}]),t}(n.a.Component),A=Object(b.a)(D)(Object(x.e)(W)),z=t(128),I=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"handleClick",value:function(e){"about"===e.currentTarget.id?this.props.history.push("/"):this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:this.props.classes.container,children:Object(a.jsxs)(O.a,{elevation:2,square:!0,className:this.props.classes.sidebarContainer,children:[Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"about",children:"About"}),Object(a.jsxs)(z.a,{orientation:"vertical",children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"registry",children:"Windows Registry"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"shellbags",children:"Shellbags"})]}),Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"seeshells",children:"SeeShells"}),Object(a.jsxs)(z.a,{orientation:"vertical",children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"parser",children:"Parsing"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"analysis",children:"Analysis"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"timeline",children:"Timeline"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"filters",children:"Filtering"})]}),Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"case-studies",children:"Case Studies"})]})})}}]),t}(n.a.Component),E=Object(b.a)({container:{height:"100%",width:"100%"},sidebarContainer:{width:"100%",height:"100%",backgroundColor:"#424242",margin:"0px",display:"flex",flexDirection:"column",overflow:"auto",borderRadius:"0",minWidth:"300px"},primaryButtons:{display:"flex",justifyContent:"left",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"30px",fontFamily:"Georgia"},buttons:{display:"flex",justifyContent:"center",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"20px",fontFamily:"Georgia"}})(Object(x.e)(I)),B=t(45),R=t.n(B),L=t(23),V=t.n(L),P=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={showBar:!0},a.toggleDropdown=a.toggleDropdown.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"toggleDropdown",value:function(){this.setState({dropdown:!this.state.dropdown})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({hideNav:window.innerWidth<=760})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return Object(a.jsxs)(u.a,{basename:"/about",children:[!this.state.hideNav&&Object(a.jsx)(O.a,{className:this.props.classes.sidebarContainer,children:Object(a.jsx)(E,{})}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.content,children:[this.state.hideNav&&Object(a.jsxs)(O.a,{className:this.props.classes.topBar,children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.toggleDropdown,children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(v.a,{in:this.state.dropdown,children:Object(a.jsx)(O.a,{children:Object(a.jsx)(E,{})})})]}),"about"===this.props.subpage&&Object(a.jsxs)(O.a,{className:this.props.classes.content,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"About"}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"SeeShells is an information extraction software. SeeShells is a standalone, open source executable that can run both online and offline registry hives. It extracts and parses through Windows Registry information. This data is then converted into two forms. The first is a csv file that contains all the raw data we obtain. The second is a human readable timeline. The timeline provides an interactive, easier to read visualization of the data extracted from the windows registries. This information is otherwise difficult and time consuming to comb through and understand. The application is a great way to gain insight into what someone has done on their computer over time. The program can be particularly useful for digital forensics investigators as the information can be downloaded and used as evidence in a court of law."}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"Windows uses the Shellbag keys to store user preferences for GUI folder display within Windows Explorer. Everything from visible columns to display mode (icons, details, list, etc.) to sort order are tracked. If you have ever made changes to a folder and returned to that folder to find your new preferences intact, then you have seen Shellbags in action."}),Object(a.jsx)(O.a,{className:this.props.classes.video,children:Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"})})]}),"registry"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"The Windows Registry"})}),"shellbags"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Shellbags"})}),"seeshells"===this.props.subpage&&Object(a.jsxs)(O.a,{className:this.props.classes.content,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"SeeShells"}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"SeeShells is an information extraction software. The objective is to create a standalone open source executable that can run both online and offline. It extracts and parses through Windows Registry information. This data is then converted into two forms. The first is a csv file that contains all the raw data we obtain from the registry. The second is a human readable timeline that can be downloaded and used as evidence in a courtroom. The timeline provides an interactive easier to read visualization of the data extracted from the windows registries. This information is otherwise difficult and time consuming to comb through and understand. The timeline can be filtered by date, event name, the contents of the event (e.g. accessed, modified, created), user, and the event type. These filters can be applied to all events and cleared out individually as the users see fit. The application also contains an about page as well as a help page so that users who are not able to connect to the internet are still able to use the program and obtain guidance if the need it."}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"The parsing and extraction of information has a slightly different process for each of the windows versions including Windows XP, Windows Vista Windows 7,8,8.1 and 10. In order to create a robust application we have set up a server to store database information on parsing different registry versions. We have implemented the use of embedded scripting in order to keep the application up-to-date without requiring the users to update the program or redownload it. Currently, we do not know all there is to know about shellbags. Currently unidentifiable shellbag items check if a script exists to parse it."}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"The software expediates the process of extracting, parsing, and presenting the registry information in a way that is condensed and easily understandable. We hope others will benefit from our interactive timeline generated from the ShellBag information and we hope to make a great impact on the digital forensics community."})]}),"parser"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"The SeeShells Parser"})}),"analysis"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"SeeShells Shellbag Analysis"})}),"timeline"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"SeeShells Timeline View"})}),"filters"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"SeeShells Shellbag Filtering"})}),"case-studies"===this.props.subpage&&Object(a.jsxs)(O.a,{className:this.props.classes.content,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Case Studies"}),Object(a.jsxs)(O.a,{className:this.props.classes.caseStudies,children:[Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]}),Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]}),Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]}),Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]}),Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]}),Object(a.jsxs)(O.a,{className:this.props.classes.video,children:[Object(a.jsx)(V.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"}),Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.caseStudy,children:"Case Study: title"})]})]})]})]})]})}}]),t}(n.a.Component),H=Object(b.a)({content:{height:"100%",width:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"center",overflow:"auto",borderRadius:"0"},title:{fontSize:"50px",fontWeight:"bold",marginTop:"1%",alignSelf:"center",color:"#33A1FD",textAlign:"center"},text:{textAlign:"center",padding:"1%"},video:{maxHeight:"360px",maxWidth:"640px",minHeight:"150px",minWidth:"300px",height:"50%",width:"50%",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#424242"},caseStudies:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",height:"100%",width:"100%",overflow:"auto"},caseStudy:{textAlign:"center",fontSize:"30px",fontWeight:"bold",color:"white"},sidebarContainer:{height:"100%",display:"flex",alignContent:"center",flexDirection:"column",borderRadius:"0"},toggle:{backgroundColor:"#424242",borderRadius:"0"},topBar:{width:"100%",display:"flex",justifyContent:"center",backgroundColor:"#424242",alignContent:"center",flexDirection:"column",borderRadius:"0"},buttons:{color:"white"}})(Object(x.e)(P)),G={downloadPage:{display:"flex",flexFlow:"column wrap",justifyContent:"center",height:"100%",width:"100%",overflow:"auto"},image:{display:"grid",width:"100%",height:"600px",textAlign:"center",alignSelf:"center",backgroundImage:"url("+k+")",overflow:"hidden"},logo:{height:"100px",width:"100px",display:"flex",float:"left"},downloadContainer:{display:"flex",justifyContent:"center",width:"100%"},contentContainer:{display:"flex",justifyContent:"center",flexDirection:"column",backgroundColor:"#424242",width:"30%",alignItems:"center",color:"white",fontSize:"40px",height:"70%",position:"absolute",alignSelf:"center",minWidth:"360px",justifySelf:"center"},title:{fontSize:"50px",fontWeight:"bold",textAlign:"center",marginBottom:"5%"},button:{display:"flex",backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",fontSize:"20px",margin:"0px",justifyContent:"center",marginTop:"5%"},video:{paddingTop:"5%",height:"40%",width:"80%"}},U=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(a.jsx)(O.a,{className:this.props.classes.downloadPage,children:Object(a.jsx)(O.a,{className:this.props.classes.downloadContainer,children:Object(a.jsxs)("div",{className:this.props.classes.image,children:[Object(a.jsx)("div",{id:"stars"}),Object(a.jsx)("div",{id:"stars2"}),Object(a.jsx)("div",{id:"stars3"}),Object(a.jsx)(F.a,{in:!0,children:Object(a.jsxs)(O.a,{className:this.props.classes.contentContainer,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Download SeeShells"}),Object(a.jsx)("img",{src:j,alt:"SeeShells Logo",className:this.props.classes.logo}),Object(a.jsx)(m.a,{className:this.props.classes.button,href:"https://github.com/RickLeinecker/SeeShells/releases/latest/download/SeeShells.exe",children:"SEESHELLS.EXE"}),Object(a.jsx)("div",{className:this.props.classes.video,children:Object(a.jsx)(V.a,{width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"})})]})})]})})})}}]),t}(n.a.Component),M=Object(b.a)(G)(Object(x.e)(U)),Z=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"handleClick",value:function(e){"documentation"===e.currentTarget.id?this.props.history.push("/"):this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:this.props.classes.container,children:Object(a.jsxs)(O.a,{elevation:2,square:!0,className:this.props.classes.sidebarContainer,children:[Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"documentation",children:"How to Use"}),Object(a.jsxs)(z.a,{orientation:"vertical",children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"online",children:"Online Parsing"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"offline",children:"Offline Parsing"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"advanced",children:"Advanced Configuration"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"toolbar",children:"Toolbar"})]}),Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"data",children:"Viewing the Data"}),Object(a.jsxs)(z.a,{orientation:"vertical",children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"timeline",children:"The Timeline"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"events",children:"Events"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"filters",children:"Filters"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"export",children:"Exporting"}),Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"import",children:"Importing"})]}),Object(a.jsx)(m.a,{className:this.props.classes.primaryButtons,onClick:this.handleClick,id:"licensing",children:"Licensing"})]})})}}]),t}(n.a.Component),q=Object(b.a)({container:{height:"100%",width:"100%"},sidebarContainer:{width:"100%",height:"100%",backgroundColor:"#424242",margin:"0px",display:"flex",flexDirection:"column",overflow:"auto",borderRadius:"0",minWidth:"300px"},primaryButtons:{display:"flex",justifyContent:"left",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"30px",fontFamily:"Georgia"},buttons:{display:"flex",justifyContent:"center",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"20px",fontFamily:"Georgia"}})(Object(x.e)(Z)),J=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={showBar:!0,dropdown:!1},a.toggleDropdown=a.toggleDropdown.bind(Object(h.a)(a)),a}return Object(r.a)(t,[{key:"toggleDropdown",value:function(){this.setState({dropdown:!this.state.dropdown})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({hideNav:window.innerWidth<=760})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return Object(a.jsxs)(u.a,{basename:"/documentation",children:[!this.state.hideNav&&Object(a.jsx)(O.a,{className:this.props.classes.sidebarContainer,children:Object(a.jsx)(q,{})}),Object(a.jsxs)(O.a,{elevation:0,className:this.props.classes.content,children:[this.state.hideNav&&Object(a.jsxs)(O.a,{className:this.props.classes.topBar,children:[Object(a.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.toggleDropdown,children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(v.a,{in:this.state.dropdown,children:Object(a.jsx)(O.a,{children:Object(a.jsx)(q,{})})})]}),"documentation"===this.props.subpage&&Object(a.jsxs)(O.a,{className:this.props.classes.content,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"How To Use"}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"SeeShells collects ShellBags specific Windows Registry keys and parses through them, and organizes the data found in them to display them on a graphical timeline. The graphical timeline is the unique feature that SeeShells offers over other existing parsers: this timeline makes ShellBag data easier to understand and facilitates the process of finding a significant pattern or piece of evidence."})]}),"online"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Online Parsing"})}),"offline"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Offline Parsing"})}),"advanced"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Advanced Configuration"})}),"toolbar"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Toolbar"})}),"data"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Viewing The Data"})}),"timeline"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Timeline View"})}),"events"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Shellbag Events"})}),"filters"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Shellbag Filtering"})}),"export"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Exporting"})}),"import"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Importing"})}),"licensing"===this.props.subpage&&Object(a.jsx)(O.a,{className:this.props.classes.content,children:Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"Licensing"})})]})]})}}]),t}(n.a.Component),K=Object(b.a)({content:{height:"100%",width:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"center",overflow:"auto",borderRadius:"0"},title:{fontSize:"50px",fontWeight:"bold",marginTop:"1%",alignSelf:"center",color:"#33A1FD",textAlign:"center"},text:{textAlign:"center",padding:"1%"},sidebarContainer:{height:"100%",display:"flex",alignContent:"center",flexDirection:"column",borderRadius:"0"},toggle:{backgroundColor:"#424242",borderRadius:"0"},topBar:{width:"100%",display:"flex",justifyContent:"center",backgroundColor:"#424242",alignContent:"center",flexDirection:"column",borderRadius:"0"},buttons:{color:"white"}})(Object(x.e)(J)),X=t.p+"static/media/croppedLogo.b0e6b31e.png",Q=t.p+"static/media/croppedV2Logo.58822ae6.png",Y=t.p+"static/media/croppedUcfLogo.f07e9818.png",$=t(129),_=t(130),ee={devContainer:{backgroundColor:"#424242",margin:"10px",width:"30%",height:"35%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",minWidth:"350px",maxWidth:"425px",minHeight:"200px"},backgroundV1:{backgroundImage:"linear-gradient(180deg, #424242 0%, rgba(255, 255, 255, 0) 100%), url("+X+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},backgroundV2:{backgroundImage:"linear-gradient(180deg, #424242 0%, rgba(255, 255, 255, 0) 100%), url("+Q+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},backgroundSponsor:{backgroundImage:"linear-gradient(180deg, #424242 0%, rgba(255, 255, 255, 0) 100%), url("+Y+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},devTitle:{display:"flex",justifyContent:"right",textAlign:"right",overflowWrap:"break-word",color:"#33A1FD",marginTop:"10%",fontFamily:"Georgia",fontWeight:"bold"},devDescription:{display:"flex",justifyContent:"right",textAlign:"right",overflowWrap:"break-word"}},se=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(a.jsx)(F.a,{in:!0,children:Object(a.jsxs)($.a,{className:this.props.classes.devContainer,children:[1===this.props.version&&Object(a.jsx)("div",{className:this.props.classes.backgroundV1,children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(T.a,{variant:"h5",className:this.props.classes.devTitle,children:this.props.name}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.devDescription,children:this.props.role})]})}),2===this.props.version&&Object(a.jsx)("div",{className:this.props.classes.backgroundV2,children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(T.a,{variant:"h5",className:this.props.classes.devTitle,children:this.props.name}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.devDescription,children:this.props.role})]})}),3===this.props.version&&Object(a.jsx)("div",{className:this.props.classes.backgroundSponsor,children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(T.a,{variant:"h5",className:this.props.classes.devTitle,children:this.props.name}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.devDescription,children:this.props.role})]})})]})})}}]),t}(n.a.Component),te=Object(b.a)(ee)(se),ae=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(a.jsx)(O.a,{className:this.props.classes.devContainer,children:Object(a.jsxs)(O.a,{className:this.props.classes.devs,children:[Object(a.jsx)(T.a,{variant:"title",className:this.props.classes.title,children:"SeeShells Development Teams"}),Object(a.jsx)(T.a,{variant:"subtitle1",className:this.props.classes.text,children:"The SeeShells application is a Senior Design project built by two teams of five Computer Science students at UCF. The V1 team designed the original application, while the V2 team enhanced the project."}),Object(a.jsx)(te,{version:1,name:"Sara Frackiewicz",role:"V1 Team: API, Scripting, and Administrative Website"}),Object(a.jsx)(te,{version:1,name:"Klayton Killough",role:"V1 Team: WPF Shellbag Parser and IO"}),Object(a.jsx)(te,{version:1,name:"Aleksandar Stoyanov",role:"V1 Team: WPF Shellbag Parser and Timeline"}),Object(a.jsx)(te,{version:1,name:"Bridget Woodye",role:"V1 Team: WPF GUI and Timeline"}),Object(a.jsx)(te,{version:1,name:"Yara As-Saidi",role:"V1 Team: WPF and Website Content"}),Object(a.jsx)(te,{version:2,name:"Devon Gadarowski",role:"V2 Team: Shellbag Data Collection and Analysis"}),Object(a.jsx)(te,{version:2,name:"Kaylee Hoyt",role:"V2 Team: Website Developer"}),Object(a.jsx)(te,{version:2,name:"Jake Meyer",role:"V2 Team: WPF Timeline UI, Shellbag Export and Tagging"}),Object(a.jsx)(te,{version:2,name:"Spencer Ross",role:"V2 Team: Team Manager, Application Testing and Backend Configuration"}),Object(a.jsx)(te,{version:2,name:"Joshua Rueda",role:"V2 Team: Video Producer"}),Object(a.jsx)(te,{version:3,name:"Rick Leinecker",role:"Project Sponsor"})]})})}}]),t}(n.a.Component),ie=Object(b.a)({devContainer:{display:"flex",flexFlow:"column",justifyContent:"center",alignContent:"center",width:"100%",overflow:"auto"},devs:{display:"flex",height:"100%",justifyContent:"space-evenly",flexWrap:"wrap",overflow:"auto"},title:{fontSize:"50px",fontWeight:"bold",marginTop:"1%",alignSelf:"center",textAlign:"center",color:"#33A1FD"},text:{textAlign:"center"},video:{maxHeight:"360px",maxWidth:"640px",minHeight:"150px",minWidth:"300px",height:"50%",width:"50%",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center"}})(Object(x.e)(ae)),ne=function(e){Object(d.a)(t,e);var s=Object(p.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{className:this.props.classes.footer,children:Object(a.jsx)("div",{className:this.props.classes.content,children:"Sponsored by Rick Leinecker | 2021"})})}}]),t}(n.a.Component),ce=Object(b.a)({footer:{backgroundColor:"#212121",width:"100%",display:"flex",margin:"0px",height:"50px",justifyContent:"right"},content:{margin:"15px"}})(ne);var le=Object(b.a)({application:{height:"100%",width:"100%",display:"flex",flexDirection:"column",flex:"1"},topBar:{color:"white",display:"flex",margin:"0px"},bottomBar:{color:"white",display:"flex",margin:"0px",width:"100%",marginTop:"auto"},content:{color:"black",display:"flex",width:"100%",height:"100%",overflow:"auto",borderRadius:"0"}})((function(e){return Object(a.jsx)(O.a,{className:e.classes.application,children:Object(a.jsxs)(u.a,{basename:"/",children:[Object(a.jsx)("div",{className:e.classes.topBar,children:Object(a.jsx)(N,{})}),Object(a.jsxs)(O.a,{className:e.classes.content,children:[Object(a.jsx)(x.a,{exact:!0,path:"/",children:Object(a.jsx)(A,{})}),Object(a.jsx)(x.a,{exact:!0,path:"/about",children:Object(a.jsx)(H,{subpage:"about"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/registry",children:Object(a.jsx)(H,{subpage:"registry"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/shellbags",children:Object(a.jsx)(H,{subpage:"shellbags"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/seeshells",children:Object(a.jsx)(H,{subpage:"seeshells"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/parser",children:Object(a.jsx)(H,{subpage:"parser"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/analysis",children:Object(a.jsx)(H,{subpage:"analysis"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/timeline",children:Object(a.jsx)(H,{subpage:"timeline"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/filters",children:Object(a.jsx)(H,{subpage:"filters"})}),Object(a.jsx)(x.a,{exact:!0,path:"/about/case-studies",children:Object(a.jsx)(H,{subpage:"case-studies"})}),Object(a.jsx)(x.a,{exact:!0,path:"/download",children:Object(a.jsx)(M,{})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation",children:Object(a.jsx)(K,{subpage:"documentation"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/online",children:Object(a.jsx)(K,{subpage:"online"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/offline",children:Object(a.jsx)(K,{subpage:"offline"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/advanced",children:Object(a.jsx)(K,{subpage:"advanced"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/toolbar",children:Object(a.jsx)(K,{subpage:"toolbar"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/data",children:Object(a.jsx)(K,{subpage:"data"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/timeline",children:Object(a.jsx)(K,{subpage:"timeline"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/events",children:Object(a.jsx)(K,{subpage:"events"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/filters",children:Object(a.jsx)(K,{subpage:"filters"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/export",children:Object(a.jsx)(K,{subpage:"export"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/import",children:Object(a.jsx)(K,{subpage:"import"})}),Object(a.jsx)(x.a,{exact:!0,path:"/documentation/licensing",children:Object(a.jsx)(K,{subpage:"licensing"})}),Object(a.jsx)(x.a,{exact:!0,path:"/developers",children:Object(a.jsx)(ie,{})})]}),Object(a.jsx)("div",{className:e.classes.bottomBar,children:Object(a.jsx)(ce,{})})]})})})),oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,131)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),oe()},57:function(e,s,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.94779e64.chunk.js.map