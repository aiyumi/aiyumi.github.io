.. title: Changed the Website's Layout at Last!
.. slug: changed-layout-at-last
.. date: 2020-10-19 21:36:50
.. tags: Site Updates

9 years later - yes, the blog started in 2011 -, I finally got around to changing the website's layout! The new layout is based on the [Yesplease theme for the Nikola CMS][yesplease] with lots of modifications. It's a very barebones layout, but hopefully the text is easier to read. Unlike the previous layout, this one is responsive and should work better on small screens like on smartphones and tablets. Now the content is on the right, the menu is on the left and should be toggleable on small screens.

I still intend to continue publishing most of my posts on the [Hive social network][hiveprofile], so I embeded the feed showing the links to my latest Hive posts on the main page. The only problem is that I had to use JavaScript for that (there was no other way because this is static site and has no support for any programming language like PHP), and nothing will change for those who use browsers with no JavaScript support (just visit my Hive profile page and view my posts there directly, just like it was before). I believe this shouldn't be much of a problem, though...

Another improvement was in the post listing pages. Now these pages show a brief snippet of the posts, rather than only the title like it used to be. This applies both to the normal blog posts and the Hive posts on the front page! The listings should be more interesting this way.

Edit: too early to celebrate, it seems. When I uploaded the files to the server, the Hive feed didn't load. Apparently, browsers don't like that this blog on GitHub Pages is HTTPS and the feed site is HTTP (the feed's download gets blocked with a "mixed content" error). I contacted one of the [feed site][hiverss]'s maintainers and asked if HTTPS could be added via a free service, and they said they'll look into it some time later this week. I'll update this post once the issue gets resolved.

Edit (2020/10/28): solved! HTTPS was added to HiveRSS, and the feed embed on the main page works now!

This is it for this update. See you in my next posts, either on Hive or on here.

[yesplease]: https://themes.getnikola.com/v7/yesplease/
[hiveprofile]: https://hive.blog/@aiyumi
[hiverss]: https://hiverss.com/
