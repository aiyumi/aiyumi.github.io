.. title: Accessibility, and How I Began Using VOCALOID
.. slug: accessibility-and-how-i-began-using-vocaloid
.. keywords: accessibility, blind, buy vocaloid, buying vocaloid, ini, singing synthesis, utau, ust, visually impaired, vocaloid, vsqx, wine
.. description: The trials and tribulations of a blind person trying to use singing synthesis software.
.. tags: Audio, VOCALOID
.. date: 2014-05-02 10:12:25

### What is VOCALOID? ###

It's something that became quite popular in the last few years, but I had no idea of what it was until 2011. I just knew it had to do with music, and for a while I had thought it was the name of a band (hahahaha)! But no. VOCALOID is a singing synthesis software, paid and proprietary, whose engine is developed by Yamaha. The voices are provided by real people, mostly actors or singers. Each voice is represented by a character. The most popular one is Hatsune Miku (I don't like her very much) but there are many others. VOCALOID runs on Windows and Mac.

For detailed information on all VOCALOID voicebanks available, visit the [VOCALOID Wiki][vocaloidwikihp] (which explains all this much better than me :P).

Examples of songs with VOCALOID:

* ["Packaged", with the Hatsune Miku voicebank][mikupackaged]
* [Natsu no Umi ("夏の海"), with the Kagamine Len and Kagamine Rin voicebanks][kagaminedemo]
* ["Cendrillon", with the VY2 and VY1 voicebanks][vycendrillon]
* ["Aitai" ("会いたい"), with the Megpoid/Gumi voicebank][gumiaitai]
* ["Greensleeves", with the Avanna voicebank (English)][avannags]
* [Cover of "Roda Viva", with the Galaco voicebank (forced to sing in Portuguese!)][galacorodaviva]

### UTAU ###

UTAU (meaning "to sing" in Japanese), is the name of another singing synthesis program, however it was developed by a fan. It's also proprietary, but is free (technically it's a shareware, but one of the few "advantages" of paying are just some interface improvements and maybe access to earlier test versions before the "general public", but it works for free with no problems). The voices are also provided by real people, with the difference that anyone can record his/her own voice and put it in the program without relying on contracts, studios and professional singers. So it has much more available voicebanks than VOCALOID, but the downside is that the quality varies greatly depending on the recording quality, the voicebank settings, the intonation and the pronunciation of the person who made the recording. UTAU has a version for Windows, and also one for Mac called UTAU Synth.

Examples of songs with UTAU:

* ["Kenka Wakare" ("けんか別れ"), with the Momone Momo voicebank][momokenkawakare]
* ["Error," with the Namine Ritsu Kire voicebank][ritsuerror]
* [Cover of "Yuudachi no Ribon" ("夕立のりぼん"), with the Sukone Tei voicebank][teiribon]

To learn more about UTAU, check out the [UTAU Wiki][utauwikihp].

Soon I began wanting to use the programs to make my own covers, and that was when the problems started. <!--more-->

### My First Attempt: UTAU ###

Obviously, I decided to start with the free option. I discovered that the Windows version of UTAU works well under Wine. There's this [tutorial][utauonwine] showing how to install it and, surprisingly, it's much easier to install UTAU on Wine than on Windows! The problem is that Wine itself isn't accessible (screen-reader programs don't work on it), but the interesting thing is that the UTAU project files (with the ".ust" extension) are nothing more than "just" text files (actually they have the structure of ".ini" files), so I thought I could work around these limitations and create the songs directly by editing the text, but I couldn't go very far because I was unable to figure out what many of the parameters do, or what are the minimum and maximum values, and I didn't find documentation about the UST file specification anywhere. So the only way would be to use the graphical interface (maybe at least to try finding out what the parameters do...). I thought I could do something if I memorized the keyboard shortcuts or how many times to press "Tab" to reach a particular option... And that was my mistake. Aside from those shortcuts that are pretty much standard for all programs, like "Control" + "z" to undo, "Control" + "a" to select all, "Control" + "c" to copy, "Control" + "v" to paste etc., UTAU doesn't have keyboard shortcuts. At most, it has some shortcuts to access certain options from the menu bar ... And that's it. The mouse must be used for just about everything, including selecting notes (when we don't want to "select all"). It would be good if at least we could select notes with "Shift" + the left/right arrows like when expanding the selection in Audacity, for example. For this reason, it isn't accessible nor on Wine, nor on Windows. Even if a Windows screen reader reads everything that can be read, not much can be done because of the lack of keyboard shortcuts, and the heavy reliance on the mouse.

### My Second Attempt: the Open Source Alternatives ###

There are some free/open source projects trying to create programs compatible with UTAU and that run on multiple operating systems, such as [Lauloid][lauloidhp], [Cadencii][cadenciihp] and [QTau][qtauhp].

At the moment of this writing, Lauloid has a command line interface called "Ustsh", a basic shell to create ".ust" files, but for now it's only possible to insert / edit / remove notes, the lyrics to be sung and the duration. It still doesn't support vibrato, nor pitch bends nor those parameters that I don't know how to edit manually, and doesn't support VCV (one of the most complex methods of connecting the syllables in UTAU, which produces more realistic results), only supporting CV (the simpler and easier to use method, but that produces more robotic results). It also has a few command-line utilities to convert MIDIs to UST ("midiust") and UST to MIDI ("ustmidi"), but they only do the basics, just converting the notes with their respective durations and lyrics. It doesn't convert expression, vibrato or pitchbends, and they simply crash if there are overlapping notes. Lauloid also has a command line based program with a synth engine able to use UTAU voicebanks, but it is also very basic and only supports CV.

The other program, Cadencii, has a graphical interface similar to VOCALOID, and it's possible to make Vocaloids (VOCALOID2 only) and UTAUs sing together on the same project. It's for Windows (supposedly runs under Wine on other systems) and can be downloaded [here][cadenciidl]. But sadly for me, it's also very inaccessible to screen readers, and I couldn't get any sound out of it.

QTau looks interesting, but I couldn't test it because I was unable to compile QT5 here on my machine. However, it also seems to be in its early stages.

Aside from Cadencii which is already functional (despite having many bugs), these programs will probably still take a few years to become minimally usable. If I had the necessary knowledge, I'd help improve them (I even contacted Lauloid's author and tried to do some things, but not much came out of it.). In the end, the conclusion is that, sadly, we can't depend on these open alternatives yet.

### VOCALOID ###

It was the only solution that remained. Asking for help on the [VocaloidBrasil forum (in Portuguese)][vba11ypost], I was advised to test a few trials to see if they were accessible. As the VOCALOID3 has several improvements over its predecessor (VOCALOID2), it'd be better for me to test VOCALOID3. However, the only V3 trial available was Mayu's, but apparently they block access from outside Japan and I was unable to download it. Right at that time, the demo of MEIKO V3 was released, and luckily I was able to download that. Since I still have a Windows partition here, I installed the trial on it. Was it accessible? Very far from 100%. But much more usable than UTAU, that's for sure! It's much easier to make a VOCALOID sing than a UTAU. In the short time I had to test the demo, I couldn't produce anything presentable, but it was enough for me to conclude that I could use it reasonably, and to make me decide to buy one!

I wanted a Japanese VOCALOID. I decided to buy a download version, so I wouldn't need to worry about shipping or to use forwarding services (because the physical versions on CD / DVD of Japanese Vocaloids aren't shipped to places outside Japan). Then there came another problem. The voicebank I wanted (Megpoid/Gumi Power) could be found only in Japanese stores. So I decided to do the obvious thing, which was to buy from the official website. But the site is very buggy (it validates forms very badly) and didn't let me buy. It even charged the credit card but gave a strange error at the very end (it showed a page with messed up encoding which I couldn't even read the message - I converted the text to a lot of encodings and still nothing readable came out!), luckily the operation was cancelled and nothing happened, but it gave me a big scare and a lot of headaches. I almost gave up. But one day I gathered courage again and did what I should have done from the beginning: instead of buying from the official website, I bought it from the [Japanese VOCALOID Store][vocaloidstorejp] which, unlike the English version of the same store, it has nearly all voicebanks available (they only deliver via download to other countries, but it was what I wanted anyway). A much better site (beginning from the form validation). Here are a few little tips for those also wanting to buy from there:

The only "problem" with the sign up process is that your name must be in Japanese letters (there's a field that asks for Kanji but you can write in Katakana, and another that must be in Hiragana) so you need to find a way to "japanesize" your name :P (the site complains if you input the wrong kind of characters, unlike SSW that made anything go through). One thing to pay attention when purchasing, is that you must remember to press the "back to the store" button on the last screen. A message appears saying that the purchase was completed, but it actually isn't. It only completes after the said button is pressed, so don't close the window before pressing it! (I supose the English store also works like that, since the sites are very similar)

I bought Megpoid/Gumi Power and VY2 (my favorites), so now I have both a female and a male vocal to use.

The download links arrived right after completing the purchase (ironically, the download link for Gumi comes exactly from that bugged official website:P).

I installed VOCALOID  on my Windows partition, then came the software license activation. It went smoothly, but I was reminded that if something changes on the machine's hardware, it needs to be done again, then after activating it three times, if something changes again (or the HD is formatted, you know how the Windows world works :P), then the only way is to contact their support. I had forgotten how this world of proprietary software is complicated. I'm used to install things on Linux and start using them immediately...

It's been two months since I bought it, and just now I think I'm starting to get the hang of it. As I mentioned before, it isn't 100% accessible. Many things can't be edited without using the mouse. I was able to edit some of them by opening the file (the extension is ".vsqx" and it's an XML file) in a normal text editor. I still need to better understand the parameters and their value ranges in order to see if I can do more complicated edits (for example, there're a few "curves" that must be drawn with the mouse through the graphical interface, that I obviously can't do). I'll probably try to create some Perl scripts to help me edit the XML.

I'm currently halfway through my first cover. When it's finished, I'll post it here.


[vbhp]: http://www.vocaloidbrasil.com/
[vocaloidwikihp]: http://vocaloid.wikia.com/
[mikupackaged]: http://www.youtube.com/watch?v=f5kUd72R_tg
[kagaminedemo]: http://www.youtube.com/watch?v=r0PmG_zQjy4
[gumiaitai]: http://www.youtube.com/watch?v=mL0n9zt7IdI
[avannags]: https://www.youtube.com/watch?v=w03Ld2T5MaU
[vycendrillon]: http://www.youtube.com/watch?v=e56Gk1Z1US0
[galacorodaviva]: http://www.youtube.com/watch?v=JdyO_vGX8KU
[momokenkawakare]: http://www.youtube.com/watch?v=SPOfe-TA3YI
[ritsuerror]: http://www.youtube.com/watch?v=wP1uQNueWXA
[teiribon]: https://www.youtube.com/watch?v=bRFuuxl3u3E
[vbutau]: http://www.vocaloidbrasil.com/utau/sobre-utau/
[utauwikihp]: http://utau.wikia.com/
[utauonwine]: http://utauarianna.altervista.org/tutorials/utau-on-linux-wine-how-to/
[lauloidhp]: http://gitorious.org/lauloid
[qtauhp]: https://github.com/qtau-devgroup/
[cadenciihp]: http://www23.atwiki.jp/cadencii_en/
[cadenciidl]: http://en.sourceforge.jp/projects/cadencii/releases/
[vba11ypost]: http://w11.zetaboards.com/vocaloidbrasil/topic/9096518/
[vocaloidstorejp]: http://shop.vocaloidstore.com/