.. title: A Small Status Update
.. slug: status-update-2011-08-04
.. keywords: a11y, accessibility, at-spi, linux, orca, problem, screen reader, speech-dispatcher, upgrade
.. description: Some problems I had trying to upgrade AT-SPI and Orca.
.. tags: Site Updates, linux
.. date: 2011-08-04 13:18:09

After upgrading Speech-Dispatcher, the Orca screen reader couldn't detect the Japanese voice synthesizer anymore. I thought it was because Orca's version was old, so I upgraded it along with AT-SPI, then Orca stopped working. Until this problem was solved, I stayed on the command line (console). I could do some interesting things in text mode, but unfortunately I couldn't use any screen reader with Japanese. Now, I've just managed to get Orca plus Japanese back, so I am writing this post.

As for the problem that stopped Orca from working... It is said that AT-SPI1 and 2 can coexist peacefully in the same system, but here, their files got mixed for some reason and caused a conflict. I don't use AT-SPI1 for a long time, so I removed it. After compiling and installing the new AT-SPI2, some additional dependencies and Orca, everything seems to be back to normal.

That's it for today. In other articles, I might talk about some of the interesting things that can be done on the console. For now, I'm glad I can use Japanese on the PC again!