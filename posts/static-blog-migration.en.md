.. title: Server Migration and Blog System Change
.. slug: static-blog-migration
.. date: 2015-12-04 16:11:33
.. tags: Site Updates

Even though the blog's visual didn't change much, it's core has changed drastically. Now it's a static blog, with only HTML pages and doesn't need PHP or a database anymore.

### Why a Static Blog?

Basically, static blogs work like this: I write posts in some markup language (I use [Markdown][mdhp]) in a text editor of my choice, then a generator program (usually command line-driven) transforms posts in HTML and combines them with layout templates of the page (header, menu, content etc.) and generates all HTML pages, which can be uploaded to any webserver. For me, writing on my favorite text editor and typing a few simple commands to generate and upload the pages is much more comfortable than struggling for hours with a heavy web interface full of JavaScript (the reason why I never got along with WordPress).

It's been a while since I've been wanting to migrate to a static blog. I had tested several static blog generator programs, but none had exactly the features I wanted (mainly multilanguage content support). I had even started trying to program my own (in Perl), but in the end, I gave up. Then, this year (2015), I found this software called [Nikola][nikolahp] (which is written in Python). A few tests later, I concluded that it does everything I want (and then some), and decided that the time to migrate had come.

### And Why the Server Change?

I've been hosting my sites at [DreamHost][dhhp] since 2007 and never had any problems. Particularly, I rather like the [great documentation available on their wiki][dhwiki], SSH access which enables uploading files via Rsync instead of FTP (basically, it's faster because Rsync sends only what is different between the files on my machine and the ones on the server, rather than reuploading everything all over again), the ability to install other software on the server (the wiki provides detailed instructions), the ability to edit PHP settings, among other things, and last but not least, their humorous monthly newsletters :P. Then why did I decide to change webhosts? For a few simple reasons: even though all of these features are interesting, over the years I discovered I don't need this much. I don't have as much time to develop sites as I had before, when I signed up for their service in 2007. At the time, I still didn't have a job, and believed I'd work designing sites. Then, I got a job as a Perl programmer, years passed and, in the end, the only site I've been able to maintain (more or less) actively is this one you're on right now, and it barely used PHP and MySQL. Now that the site is static, I don't even need PHP and MySQL anymore! And with the high US Dollar rates (one Dollar nearing four Brazilian Reals), the hosting plan is getting hard to afford, and it doesn't make much sense to keep paying for so many features I'm not using. That said, even if I don't use the service anymore, I still consider DreamHost's webhosting very good, and I recommend it to those who don't have problems with the Dollar rates :P , and need a webhost that supports MySQL, PHP (or Perl or Python which are also included in their plan) and SSH access.

The domain registration for "warpstar.net" will still remain on DreamHost (not only because I like the included features like whoes privacy protection, but also because this serves as an excuse for me to keep receiving the humorous monthly newsletters :P *). But now, the blog is hosted on [GitHub Pages][ghpageshp], and the pages are uploaded via Git (which also only uploads the differences in the files rather than reuploading everything every time), and as a bonus, the site even got version control :D !

* Edit: or so I had thought. The account cancel page says that if I cancel the hosting, even if I keep the domain registration, I won't get the newsletters anymore. Too bad... :(

Edit (2016/03/04): apparently not! Despite what the cancel page said, I still keep receiving the newsletters :D !

The reasons above are important to me, but... okay, enough rambling. In the end, what really matters to everyone else is that all the content is here, the URLs remain the same, and the site is still online. The conversion may not have been 100%. There might be a few bugs here and there, and I intend to correct them as I find them.




[mdhp]: https://daringfireball.net/projects/markdown/
[nikolahp]: https://getnikola.com/
[dhhp]: http://www.dreamhost.com/r.cgi?362621
[dhwiki]: http://wiki.dreamhost.com/
[ghpageshp]: https://pages.github.com/