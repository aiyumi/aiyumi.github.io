.. title: Adventures with a New Computer
.. slug: adventures-with-a-new-computer
.. keywords: 270s, 270 slim, computer, dell, desktop, driver, dual boot, geforce, linux, nvidia, orca, pc, screen reader, vostro, slackware
.. description: 
.. tags: Site Updates
.. date: 2013-03-10 12:19:37

My seven year old computer started to show signs of dying, so I bought a new one.

### Choosing a Machine ###

As I also needed to use the computer for work, I chose a little more "professional" machine. I bought a Dell Vostro 270S (Vostro 270 Slim) Desktop. Aside from work, I also need some fun, so I got the one with 1 TB hard drive and an off board video card, for running games and things that the old PC couldn't even dream of running. After some customizations, I got a computer with the following specifications: <!--more-->

* Model: Vostro 270 Slim
* Processor: Intel ® Core ™ i5-3450S (2.8Ghz, 6MB cache) (64-bit processor)
* HD: 1TB SATA (7200 RPM)
* RAM: 6GB, Dual Channel DDR3, 1600MHz (1x4Gb) + (1x2GB)
* Keyboard: Dell USB keyboard in Portuguese
* Monitor: Monitor Dell E1912H 18.5-inch Widescreen
* Video Card: nVidia GeForce 620, 1GB

The other PC's monitor was replaced recently so I did not need a new one, but I couldn't remove it (strangely, removing the monitor caused the price to go up...). I also couldn't get rid of the Microsoft Office thirty day trial. Speaking of MS, it came with Windows 7 Professional 64-Bit. My main system is still Linux, but since the other one was there, I decided to leave it there for testing some things, for the rare cases of apps that Wine can't handle, and because screen readers (more Specifically, [NVDA][nvdahp]) can be run on Windows and not on Wine. My intention was to dual boot with Linux, but there were some problems...

### Partitioning the Disk ###

To install Linux together with Windows, I needed a separate partition. I thought it would be similar to my netbook, where
Windows didn't come fully installed and was before the partitioning step, but nope, it was already installed and took up the whole disk. I'd Have to repartition the HD, and as a precaution, I decided to do a backup. There were 18 gigs of things and I used up all my DVD RWs... (how come a freshly installed system, still with *nothing*, can take up 18 gigabytes!? Yes, it had to be Windows...) Actually, it already had three partitions, and they were layed out like this:

1. Dell Utility (FAT16), using 40MB): Dell utilities.
2. Recovery (NTFS), occupying 15 GB: Windows' recovery partition.
3. OS (NTFS), occupying the remainder of the disk: the main Windows partition.

I needed at least two partitions, one for Linux and one swap, or three if putting home on a separate partition (which was what I wanted). And as there were three primary ones already, I had to install Linux onto an extended partition. I used the [Gparted live CD][gpartedhp] to resize the main Windows partition and create an extended one. Inside it, I created a 90 GB one for
Linux, a 2 GB one for swap and the remainder was left for the home. After this, Windows started OK. The next step was to install Linux.

### Installing Linux ###

Since 2009 when I wrote [this article][slackware-A11y], I'm a [Slackware][slackhp] user. I installed the latest version at the time, Slackware 14.0.

The disk repartitioning, packages install and the initial configurations had to be made with sighted assistance, because it doesn't come with a screen reader (theoretically, there is [Speakup][speakuphp], but it only works with voice synthesis via hardware, the equipment is very expensive, I don't have such hardware nor know if these are available here in Brazil, and said hardware only works via parallel ports, so yeah...).

The system installed Ok. The problems started after booting. Unlike my old PC, the sound card was detected automatically, but there were problems with the video. Weird things happened even in text mode. Sometimes everything was displayed correctly, sometimes not, and colored lines appeared on the screen and nothing else. When it displayed what it should (the text on the console), The computer occasionally had some "hangups" (the system got slow to respond to keypresses) and the screen "blinked". After much struggling (and many reboots), I was able to install the screen reader for the console (installing software speech synthesis to Speakup through [Espeak][espeakhp] and [Espeakup][espeakuphp]), and thanks to it I discovered that sometimes the screen didn't update. For example, after typing a command, the system responded, the screen reader spoke but the output didn't appear on the screen.

### Installing Drivers ###

Just then I remembered that the video card was from NVidia and it should have proprietary drivers. Searching the net, I found out that before installing the driver, I needed to disable the "xf86-video-nouveau" module which is incompatible with the proprietary driver. For that, I just installed the "xf86-video-nouveau-blacklist" package, found in the "extra" directory in the Slackware tree, then rebooted the system to load the correct modules, then installed the driver from NVidia. I downloaded the driver from [NVidia's site][nvdl] and installed it. After that, the "hangs" stopped and the X (graphical user interface) loaded correctly, but in text mode, it was just a blank screen. I was able to work on the console only because I had the screen reader. Searching more, I found some tips saying that a few NVidia cards only worked right if the "nomodeset" parameter was passed at boot time, so I decided to try that. I turned on the computer and waited a few seconds until the choice of operating systems appeared, pressed "tab" and got to the boot prompt. So I typed "Linux nomodeset" and pressed "enter", waited for the system to load... And it worked! So, to make the setting permanent, I edited the "/etc/lilo.conf" file to include "nomodeset" in the "append ="  line, then ran lilo, rebooted, and it was there.

### After All of That... ###

With no more video problems, I compiled / installed the [Orca screen reader][orcahp] and its dependencies, made some minor adjustments and now everything is working perfectly. I'm even using the PC for work and everything... Well, almost everything. The only thing that I couldn't get working yet is the Japanese voice for Orca (and without it I can't update the Japanese part of the blog...). Previously, I used [Voxin][voxinhp] (which is paid, proprietary software), but the version I have is for 32-bit and my machine is 64-bit. Looking for an alternative, I found the [Open-jTalk] [openjtalkhp] Japanese text to speech engine. Apparently, it can be used with Orca through [Festival][festivalhp] but I couldn't test that yet, as I'm currently struggling to compile Festival.

And that's it for now.

[nvdahp]: http://www.nvda-project.org/
[gpartedhp]: http://gparted.sourceforge.net/
[slackware-a11y]: /en/blog/how-i-started-using-linux
[slackhp]: http://www.slackware.com/
[speakuphp]: http://www.linux-speakup.org/
[espeakhp]: http://espeak.sourceforge.net/
[espeakuphp]: https://github.com/williamh/espeakup
[nvdl]: http://www.nvidia.com/Download/index.aspx
[orcahp]: http://live.gnome.org/Orca
[voxinhp]: http://voxin.oralux.net/
[openjtalkhp]: http://open-jtalk.sourceforge.net/
[festivalhp]: http://www.cstr.ed.ac.uk/projects/festival/