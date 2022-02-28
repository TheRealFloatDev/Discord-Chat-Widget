let fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

var discordWidget = {
    link : "https://discord.gg/c7UQ2ca",
    color : "#5965f2",
    fontColor : "white",
    draw : function() {
        document.body.appendChild(createElementFromHTML(`<a id="codineer-dc-widget" style="position: fixed;
        bottom: 0px;
        right: 0px; 
        padding: 20px;" href="${discordWidget.link}" target="_blank">
         <div style="height: 60px;
         line-height: 65px;  
         width: 60px;  
         font-size: 2em;
         font-weight: bold;
         border-radius: 50%;
         background-color: ${discordWidget.color};
         color: ${discordWidget.fontColor};
         text-align: center;
         cursor: pointer;"><i class="fab fa-discord" style=""></i></div>
        </a>
        `));
    },
    remove : function() {
        document.getElementById("codineer-dc-widget").remove();
    },
    update : function() {
        this.remove();
        this.draw();
    }
};

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
  }