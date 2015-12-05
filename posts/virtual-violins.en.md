.. title: Virtual Violins
.. slug: virtual-violins
.. keywords: 
.. description: 
.. tags: Audio, Violin
.. date: 2014-11-02 01:17:48

Many times, I thought, "Ah, maybe this song would sound nice if played with a violin" and when I tried to reproduce the idea with my keyboard, it was disappointing. Partly because I don't play very well :P, and also because the violin sounds of the keyboard are horrible. Wondering if the problem was only with my instrument or was common to keyboards in general, I decided to check the state of the sampled solo violin sounds available.

### Commercial Sample Libraries

I'm not a specialist by any means, but I found most of the commercial solo violin samples to be very disappointing. Even the ones from extremely expensive sound libraries (over 1000 dollars) leave much to be desired in my opinion. To me, they are so bad that it bothers me. No matter how simple the played part is, the timbre isn't smooth. It's weird, as if something was missing from the sound. And it isn't even the obvious lack of emotion (of course there's that too, but that's another story), it's something else. I don't know how to explain it.

Among the demos that I heard are:

- The [EWQL (East West Quantum Leap) Solo Violin][ql-demo].

- The [Garritan Stradivari Solo Violin][garridemo] (discontinued). it's passable but still bad.

- The [solo violin][garrisolo] from the orchestral library [Garritan Personal Orchestra][gpohp]. I heard that it's based on samples from the Stradivary Violin mentioned above, but it's much more limited, and you can easily notice that the quality is much worse.

- The [solo violin][vslsolo] from the [Vienna Symphonic Library Special Edition][vslsp] orchestral library.

- The [solo violin][miroslaviolin] from the orchestral package [Miroslav Philharmonik][miroslavhp] isn't that bad, considering that the sample library (including instruments for the whole orchestra) actually isn't very expensive (the full package costs less than 200 dollars)! And I also read that it can run on Linux through Wine.

### Free Sample Libraries

From the free options, I found the collection of [violin samples from Philharmony.co.uk] [ph-violin]. These have various articulations, but are in MP3 format, meaning that they suffer from quality loss, so they aren't suitable to be used for anything too serious. Another disadvantage is the license, which disallows distribution of the samples (be it for free or otherwise) the samples individually or in the form of "virtual instruments" (for example, you can't create a SF2 or SFZ file  from them and put it for download). The license allows use of the samples in commercial works, but with the quality loss caused by the MP3 compression, who's going to do that anyway?

There're also [these][iowa-violin1] and [these (recorded in 2012 and a bit better)][iowa-violin2] samples from the University of Iowa. They are also in AIF format, include various articulations and, unlike the previous ones, they can be used without restrictions. The problems are that the notes aren't separated into individual files, and specially in the first version, several of them aren't sustained steadily or have a bit "scratchy" sound...

Finally, there are the [violin samples by Ldk1609][ldk-violin]. To be honest, I think that these have a better timbre than the commercial libraries mentioned. They are in AIF format, so it's possible to convert them to WAV, create an SFZ file (an open sound library format) to map the audio files to MIDI notes and use, for example, in [LinuxSampler][linuxsamplerhp], and it seems that work for creating a SFZ is [ongoing][ldk-sfz].

And (just for sake of completeness) there's [Sonatina Symphonic Orchestra][sonatina], available in SFZ format. Actually, it's a collection of free orchestral instrument sound samples. The solo violins are the same free ones mentioned previously, but unfortunately they are drenshed in reverb (urgh)...

### Embertone Friedlander Violin

This is a commercial library that I found when I wasn't looking for virtual violins. I was reading a thread while searching for something unrelated, and it mentioned this library. The thread had no link to the official page, but I decided to see if there was any demo on Youtube. I found [this video demonstrating the features][friedlanderreview] and also [these][friedlandervid1] [official][friedlandervid2] [videos][friedlandervid3]. I loved the sound right away. I thought, "A good instrument like this one probably costs thousands of dollars!" Google brought me the [official website][friedlanderhp] and I was stunned after listening to the demos... And checking the price... less than $150...! I wanted it so badly! What held me from buying it was the fact that it is an instrument for Kontakt (also compatible with the free version, Kontakt Player). The problem is that I googled about running Kontakt 5 on Linux and found nothing.

About a year later, by mid-2014, a [thread appeared on the Linux-audio-user mailing list][laustrings] about recommendations of orchestral sounds on Linux, where one of the members said that he used Kontakt instruments on Linux via Wine. So I asked for more information and decided to try. Right at that time, an [update][friedlander15vid] and a sale  for the Friedlander Violin came about, and I decided it was time and purchased it!

Soon, I was faced with an obstacle. Downloading the program required the use of a proprietary download manager app called Continuata Connect, where you enter the serial code gotten when purchasing the product and the software brings the files from that code (the direct links don't appear, meaning that the download can't be done via browser, Wget, Curl, ...). I tried running Continuata on Wine. It only ran in Windows XP mode. If I set Wine to "Windows 7," the program didn't even run and said that it had encountered a serious problem and couldn't start. The program ran with Wine disguised as XP, but that wasn't enough. It didn't work properly. The download always hung, the file parts got corrupted and deleted, then everything started all over again. In the end, I ended up installing the Continuata thing on my Windows partition just to download the library, and it worked with no problems on Windows (miracles happen :P). I moved the downloaded files to the Linux partition soon after, though. I don't know what causes this problem under Wine, but after a little research, I found out that other virtual instrument developers provide direct links to users who have problems with Continuata, or that can't download for whatever reason. I don't know if Embertone also does this. I didn't ask them since I had already downloaded everything, but it may be worth asking.

Kontakt Player installed on Wine just fine. I had some trouble setting Kontakt up, but it was related to my screen reader (software that speaks all the text on the screen, mostly used by visually impaired people to access the computer) taking over the soundcard and ALSA. People with standard setups (I.E. almost everyone else) probably won't run into this problem (but if you want more details, you can read everything that happened on [this thread on the Linux-Audio-User mailing list][lauthread]).

The instrument is a "Powered by Kontakt Player" library, and needs to be registered through the "Add Library" button. This button is also present in Kontakt's VST interface, but it doesn't work (it prompts you for choosing the directory where the library is installed, but gives a "No library found" error. I don't know if that also happens on Windows). You must use the standalone Kontakt to add and activate the library (you need to do it just once). After added and activated though, the instrument also appears in the VST interface and works normally. I can use it with Dssi-VST and record the output in Ecasound with no problems.

### Conclusion

In the beginning, I was afraid of buying the Friedlander Violin, then not being able to make it work. If that happened, my last resort would be to use it on Windows, like I'm doing with VOCALOID. Fortunately, everything worked out and I can use it on Linux, which is my preferred environment. As always, there's a catch. Kontakt isn't accessible at all (completely incompatible with screen readers), even on Windows! This means that I'd need sighted help to use it either way. Even so, for me, it was worth it. The sound is as good as I thought it would be, and my search for a decent virtual violin is finally over! If I need more than that, the next step is learning how to play the real thing! ... But that's another story...

Just a final note: Embertone just released a free library for Kontakt Player, which includes, among other things, a demo of the Friedlander Violin! It will be available for a limited time (I don't know for how long), but for those who want to test this virtual violin, this is a good chance! I downloaded the library, because I want to check out the other sounds it has. And this time, the download is a direct link. Here's the [link to the newsletter with the release announcement][arcanenews], and [the product page][arcanehp]. Good luck!


[ql-demo]: http://www.soundsonline.com/QL-Solo-Violin
[garridemo]: http://www.youtube.com/watch?v=A4K3T_mPjh8
[gpohp]: http://www.garritan.com/products/personal-orchestra-4/
[garrisolo]: https://soundcloud.com/dcuny/gpo-solo-violin-test
[miroslaviolin]: https://soundcloud.com/dcuny/violin-test
[vslsolo]: https://soundcloud.com/alucinari/update-to-bach-sonata-vsl
[vslsp]: http://www.vsl.co.at/en/211/261/2064/2067/1751.htm
[miroslavhp]: http://www.ikmultimedia.com/products/philharmonik/
[ldk-violin]: http://www.freesound.org/people/ldk1609/packs/
[ldk-sfz]: http://www.linuxmusicians.com/viewtopic.php?f=50&t=12530
[linuxsamplerhp]: http://www.linuxsampler.org/
[ph-violin]: http://slib.soundex.co.uk/index.php?instrument=violin
[iowa-violin1]: http://theremin.music.uiowa.edu/MISviolin.html
[iowa-violin2]: http://theremin.music.uiowa.edu/MISviolin2012.html
[sonatina]: http://sso.mattiaswestlund.net/
[friedlanderhp]: http://embertone.com/instruments/friedlanderviolin.php
[friedlandervid1]: http://www.youtube.com/watch?v=7akUpXOHZoQ
[friedlandervid2]: http://www.youtube.com/watch?v=ats-RNfU8Yc
[friedlandervid3]: http://www.youtube.com/watch?v=GVkvo9wK-_M
[friedlanderreview]: http://www.youtube.com/watch?v=KisOROAI0oc
[friedlander15vid]: http://www.youtube.com/watch?v=W5JRW3Oyy3k&list=UUOP3cfW8rXbZ7vor2XUhj-w
[laustrings]: http://linux-audio.4202.n7.nabble.com/Recommended-near-realistic-strings-section-generator-td91020.html
[lauthread]: http://linux-audio.4202.n7.nabble.com/Embertone-Friedlander-Violin-on-Linux-was-Re-Recommended-near-realistic-strings-section-generator-td91163.html
[arcanenews]: http://us5.campaign-archive1.com/?u=48596a6a37a057934093cef98&id=efa70f3075&e=3e9c6b1b30
[arcanehp]: http://www.embertone.com/instruments/arcane.php
