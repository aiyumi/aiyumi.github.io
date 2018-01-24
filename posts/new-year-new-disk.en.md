.. title: New Year, New Disk
.. slug: new-year-new-disk
.. tags: Site Updates
.. date: 2018-01-22 17:00:38

2018 arrived, and I kicked off the year with... a hard drive failure in my main PC. In the morning of January 4th, I had just started doing some job-related stuff (I'm working at home) when, suddenly, without any symptom or prior warning, the computer began emitting clicks, everything crashed, the machine stopped responding, and the only way to turn it off was by holding the power button for a few seconds. When I turned it back on, I got a hard disk failure message. I used a Linux live USB to try to see what was going on, and everything worked fine except for the HD. The disk wasn't even recognized, and kept emitting clicks. We opened the machine and replaced the SATA cables, but nothing changed (the cables weren't the problem). Conclusion: the HD died for good.

## Assessing the Losses

I usually make a backup once every week. Emphasis on "usually." Ironically, I hadn't made a backup the previous week, and thanks to this, I lost two weeks worth of changes (the previous week + the ongoing week when the HD died). Thankfully, I didn't lose progress on most of my work-related scripts because I had uploaded them to the office's servers. But I lost a whole chapter of one of the fanfics I'm writing which had taken me my free time of those last two weeks to put together, and I'm still trying to recover the motivation to write all of that again. I also lost the Windows partition, which I actually never bothered to back up thinking nothing important was inside... until, after I lost the drive, I remembered all my VOCALOID and UTAU project files were in there, including the USTs for the "[Wake Up, Get Up, Get Out There](/en/blog/p5-op-utau-cover)" UTAU cover that took me a month to finish. I had copied the generated audio files to my Linux partition, but not the USTs... :(

## Choosing a New Drive

After much consideration, I decided to get an SSD instead of another HD. SSD ("Solid State Drive") is a different kind of disk that has its memory on a chip (like the memory in SD cards or USB sticks), data is accessed straight from the chip and the disk doesn't need to spin like the HDs do, which makes it faster (I had heard the operating system boots up in a matter of seconds once the machine is turned on, and heavy programs open quickly). It's more durable, quieter and consumes less power than HDs. I've heard that after living with an SSD, it's hard to go back to the traditional HDs. I had been curious about SSDs for a few months, and decided I might as well turn the lemons into lemonade, take this "opportunity" to try it out and see what all the fuzz was about. The problem is that this technology is still a bit expensive, and I paid $375 BRL (roughly $120 USD) on an SSD that only has 240GB, and for that price I could have bought a normal 1TB HD... but it's fine. It may seem like too little space, but my old HD was 1TB and never came close to filling (at most it used 30GB from the root partition with Slackware Linux, 70GB from the separate home partition, and 50GB from the Windows partition, totaling around 150GB), so, I believe 240GB should be enough.

I ordered a Western Digital SSD (WD Green 240GB) through Mercado Livre (a Latin-American online marketplace like Ebay). I bought it on Thursday night, it shipped on Friday morning, and arrived on Monday (I believe local postal services here don't work on weekends). While I waited for the SSD to arrive, I had to work using my netbook (a weaker machine where each page in Firefox takes like 20 seconds to load and Orca takes some more time to start reading it), and also where I downloaded the Linux ISOs to install once the SSD arrived. Then I connected an external DVD drive to the netbook, burned the ISO to a DVD RW, and that was it. Preparing the Linux ISOs was easy-peasy. On the other hand...

## Trying to Download Windows

My main operating system is Linux. The few Windows programs I sometimes use (mainly VOCALOID and UTAU) can run on Wine, but the problem is that Wine isn't accessible to visually impaired users because it doesn't implement accessibility interfaces, and no screen readers are able to run on it. But since Windows 7 came with my machine and I have the license, I decided I might as well use it. I had backed up Windows [as soon as I bought the computer](/en/blog/adventures-with-a-new-computer) and had used up all my DVD RWs plus two more DVD Rs because I didn't have enough RWs. But that was a backup of a newly installed Windows with no security updates or anything, and worse, the backup could only be restored from inside a running Windows! Conclusion: that backup was as good as nothing. I'd have to reinstall everything from scratch. The problem is that Dell doesn't provide a Windows installation media, and the installer is located (guess where...) in a partition in the HD! Of course, the HD died, so the installer went down with it.

It turns out that there is a [Microsoft page where it should be possible to download the installer][mswin7dl]. Theoretically, I'd just need to enter my Windows serial code. It's what I did. However, the page returned an error saying that this code wouldn't do because it is from a version of Windows supplied by a computer manufacturer, and that I should contact the manufacturer (Dell in my case) to get their custom image (the version that comes with Dell utilities which I was unable to uninstall, and a lot of other crap that only wastes resources and disk space).

On the Dell page, I'd have to enter the "service tag" that's glued to the computer case, so that it displays content and downloads related to the product I purchased from them (my computer). I informed the code, but the downloads area for my machine's model only has drivers and nothing else. I browsed the help topics, and found out that there are three ways to get an installation media:

1. The way they recommend is to use a program to generate and download a custom image. Of course, the program only runs on Windows (so, it's useless to me because I'm without Windows. No idea whether it'd run on Wine). I wanted to know if there was another way and, after much searching, I found the second way below.

2. There's a [page to download the Windows installation media][dellwindl], for those who need to download the image from a machine without Windows (my case! Yay!)... but when I entered the service tag, the page said there are no downloads available for my machine's model.

3. The other way is to contact support and request a physical copy of the media, and if the computer isn't under the warranty period (it isn't anymore), I have to pay around $60 USD! No thanks...

In a last attempt, I found a [blog post (in Portuguese) by someone with a similar problem][blogpost], where I learned of a [workaround][gambiwin] to download Windows 7 directly from Microsoft's servers without the need to inform the serial code. Basically it's a page to download Windows 10 (which doesn't ask for a serial code to provide the download link), except that if you change a parameter in the URL that corresponds to the product Windows 10 for the one corresponding to Windows 7, the page would generate a Windows 7 download link. It's based on the API that manufacturers use to download the Windows installation media, and some people found out the IDs of all the possible ISOs. I Tried. And... it didn't work! I tried with the Windows 10 ID and it worked\*, but for Windows 7, no luck. Apparently, this method isn't working for Windows 7 and Office. It seems that the workaround either doesn't work anymore, or there's a temporary problem with the API.

\* I got a Windows 10 download link, but I can't use it because I don't have a Windows 10 serial code to activate it if I install it. I don't even know whether Windows 10 would run on this machine...

Wow... dealing with proprietary software is so complicated! For now, I gave up. If the workaround resumes working, I may consider trying again another time. Meanwhile, I guess I'll have to resort to Wine and sighted assistance. Oh well...

## Installing the SSD

On Monday, January 8th, the SSD arrived. I had known it was smaller than a desktop PC HD, but I hadn't expected it to be so small and thin... it's as thin as a CD case, and looks like a glorified memory card (which it probably is :P ).

My mother and I opened the machine and swapped the dead HD out for the SSD. Unlike traditional HDs which have different sizes (3.5 inches for desktop PCs, and 2.5 inches for laptops), apparently there's only one SSD size, which is 2.5 inches. So, ideal for laptops, but a bit small for desktops (fortunately the SATA connections are the same). We plugged the SATA cable and attached the SSD to the case with a screw the way it should be done, but it wasn't as firm as we'd have liked. Ideally, I should've gotten a 2.5" to 3.5" adapter to fit the SSD easier, but the seller I bought the SSD from didn't have that, plus I was in a hurry because I needed my machine for work.

Some people just plug the SSD and leave it hanging from the SATA cables inside the machine without much worry, since SSDs don't have moving parts like HDs, which means less risk of corrupting data from impact. But we got a bit worried. It didn't feel right to leave the SSD loose inside the machine. So, we cut an old and unused USB cable we had lying around, tied it to the "walls" of the compartment inside the case, to act like a "net" to help keep the SSD in place and prevent it from falling. It's ugly inside, but it works! :P Though I'm still wondering whether I should get one of those adapters to have a less "hackish" solution...

## Partitioning the Disk

The first thing I did once I turned the machine on was insert the Slint (talking) installer DVD, and checked the disk with Fdisk. The system recognized the SSD just fine, and the size was reported as 223 GiB, which translates to the advertised 240GB. Then I partitioned the disk, and ended with roughly:

* 84GB for Windows, in case I ever manage to reinstall it on this machine. If not, I'll use the precious space for something else.
* 84GB for the home partition, meant to be used by two Linuxes.
* 4GB for swap. I don't recall this machine ever having resorted to swap, but who knows when the need may arise...
* 34GB for my main system, Linux. Instead of installing Slackware, this time I decided to go with [Slint][slinthp], a Slackware-based distro with accessibility out of the box (including a talking installer), though it's pretty much Slackware at its core.
* And the last 34GB for the other Linux. I picked Arch Linux mostly because it also has a talking installer (in the form of the [Talking Arch ISO][tarchhp]), and because I found out it's able to run the (closed-source proprietary and hard to troubleshoot) online banking software many of the banks in my country decided to adopt (I couldn't make it work on Slackware no matter what, and being unable to access the online banking was becoming a big problem. But the software worked nicely in the test Arch Linux install on my netbook, so...).

I installed Slint at night, and I was already able to use the machine for work the following day. That weekend, I installed Arch Linux and the Internet banking software into the other partition. After that, I've been slowly adjusting settings and installing extra things as the needs arise, in both Slint and Arch to make them behave the way I want.

And this is the status at the time of this writing. Things are getting back to normal, better and faster, thanks to the SSD. The machine responds quicker than before and feels like new. And now we have access to the online banking as well. Having the HD break was quite the scare, but things seem to have changed for better. Maybe I've kicked off the year in a good note, after all.

Not to say that I had no issues while configuring the two Linux distros to make them my own, though. I had a few issues (mainly with Arch, and mostly thanks to my unfamiliarity with it), though most of them are solved by now. But that's a subject for another post.

In the next post, I intend to talk about Slint, the Slackware-based, multi-language distro with accessibility out of the box and a talking installer!


[mswin7dl]:   https://www.microsoft.com/software-download/windows7
[dellwindl]: http://www.dell.com/support/home/drivers/osiso/win
[blogpost]: http://marcelosaldanha.com.br/2016/03/reinstalando-windows-sem-midia/
[gambiwin]: https://techjourney.net/official-windows-10-8-1-7-iso-installation-media-download-links-microsoft-tech-bench/
[slinthp]: http://slint.fr/wiki/en/start
[tarchhp]: https://talkingarch.tk/
