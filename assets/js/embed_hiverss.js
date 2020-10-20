// Code adapted from the tutorial at: https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
function embed_hiverss(lang) {
    var tag = "";
    var readmore = "";
    var section = "hiverss";
    if ( lang == "pt_br" ) {
        tag = "pt";
        readmore = "Ler o artigo completo";
    } else {
        tag = "english";
        readmore = "Read the full article";
    } // end if ( lang == ...)
    var rssDiv = document.getElementById(section);
    const RSS_URL = 'http://cors-anywhere.herokuapp.com/http://www.hiverss.com/@aiyumi/blog?tagFilter=' + tag;

    fetch(RSS_URL)
        .then( response => response.text() )
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            console.log(data);

            const items = data.querySelectorAll("item");
            let html = `<div class="pure-g">
<div class="pure-u-1">
            `;
            items.forEach(el => {
                var permalink = el.querySelector("link").innerHTML;
                if ( permalink.search('@aiyumi') ) { // skip reblogs
                    var pubDate = el.querySelector("pubDate").innerHTML;
                    pubDate = new Date(pubDate).toISOString();

                    var linkTitle = el.querySelector("title").textContent;
                    //linkTitle = linkTitle.replace(/^&lt;!\[CDATA\[/i, '').replace(/\]\]&gt;$/i, ''); // formatting

                    var desc = el.querySelector("description").textContent;
                    var re = /^([^\.!\?。？！]+[\.!\?。？！]+)/g;
                    var match = re.exec(desc);
                    var teaser = match[1];

                    html += `<article class="yp-index-post">
<h2 class="yp-index-post__title"><a href="${permalink}" target="_blank">${linkTitle}</a></h2>
<p><time datetime=${pubDate}
class="yp-index-meta__date">${pubDate}</time></p>
          <div class="yp-index-post__body">
<p>${teaser} (<a href="${permalink}" target="_blank">${readmore}</a>)</p>
</div>`;

                } // end if ( author == ...)
            });
            html += '</ul>';
            rssDiv.insertAdjacentHTML("beforeend", html);
        });
} // end embed_hiverss
