.. title: How I Started Using Linux
.. slug: how-i-started-using-linux
.. keywords: accessibility, a11y, blind, computer, linux, distribution, slack, slackware, visually impaired
.. description: 
.. tags: linux
.. date: 2011-03-14 20:51:36

On June 23rd, 2009, I published an article on the Slackware Users Group Brazil mailing list, talking about how I migrated from Windows to Linux.

You can view the original version [here][artig], in Portuguese. <!--more-->

[artig]: http://groups.google.com/g/05e7fcc8/t/3ac5bdd6e5aafbe4/d/b3c85b56ff4ea1a0

Below, a translated version of the text follows.

Note that this article is old and things have improved since then. (read some important updates at the end of this page, below the article translation.)

-------------------------------------------------------------------------------

## Slackware and Accessibility - My Experience ##

### Introduction ###

I am a visually impaired person that had the crazy idea of migrating from Windows to (Slackware) Linux. I am writing to share what I've learned from installing and configuring the system.
I use computers since 1996. I was a Windows user until February of this year (2009), when I migrated to Linux once and for all. Actually, I was curious and wanted to try Linux for a long time, but I never had the courage to do so. About two years ago, I needed to do a research about Free Software at college, since then I began watching the Free Software communities more actively. The days passed and Windows was getting unable to meet my needs, what made me want to migrate even more, but I still didn't know how.

### First Attempt, First Impressions ###

One day, I learned that there was a screen reader for Linux called Orca 

http://live.gnome.org/Orca

and that it came by default in Ubuntu. I decided to test it. I installed it on my laptop, and what a joy, it works! Or at least that was what I thought at first. There were several problems, one of the most annoying of them was a security measure of Gnome that prevented Orca from speaking during administrative tasks. I did what was suggested at

http://live.gnome.org/Orca/SysAdmin

it didn't work very well. Sometimes Orca talked, most times it didn't. It frequently stopped talking or the system crashed all of a sudden. The problem was becoming more constant, until my Ubuntu stopped working. I read some articles that took me to the conclusion that accessibility in the penguin was still weak. I thought the crashing problems I had were Orca's fault and decided to wait until it matured more.

### Disappointment ###

Some months have passed. I hadn't given up the idea of using Linux. I decided to check how accessibility was going and downloaded Ubuntu 8.10. Unfortunately the audio didn't work on my PC, which had a Realtek soundcard known to be problematic for Linux users. I tested it on the laptop and the screen reader finally spoke: "Welcome to Orca."... ... ..... And nothing else. I searched in forums, Orca's official site and mailing list for the answer to why it was not working in Ubuntu 8.10. I found nothing similar to my case. I read several things during this search and came to a conclusion: I don't like Ubuntu.

- First, because Gnome is very heavy and comes with a lot of unnecessary things, forcing me to remove what I don't want, with the risk  of APT or Synaptic removing what they shouldn't.
- Second, because of that bug that prevents the screen reader from speaking as Root.
- Third, because it started to use PulseAudio by default instead of ALSA and several people posted in the Orca list that this decreases the accessibility performance, with some solutions that are too complicated and involves uninstalling Pulse and installing ALSA, losing audio (and the screen reader speech) during the process.

I read that Orca worked with GTK2 applications, not necessarily only with Gnome. XFCE (which is lighter than Gnome) is also a GTK2 application, so I tried Xubuntu (right, I know it is Ubuntu too, but at least it isn't Gnome). I installed Orca in it and failed, the screen reader didn't say anything! "It isn't possible, there must be another solution... Another distro...", I thought while searching the Internet for answers. I found questions like:

"Is there any distro that is accessible by default?"

"I have a friend who is visually impaired and he wants to use Linux. What distribution do you recommend?"

and the answers were:

"Ubuntu"

"Ubuntu"

"Ubuntu"

"Ubuntu"

"Ubuntu", or another one based on it.....

"No, I said I don't want Ubuntu! Oh, enough of this! I'll try something else...", I tested Oralux, an already abandoned attempt at an accessible distribution. It didn't work on the laptop, nor on the PC because of the problematic Realtek soundcard, only supported from Alsa 1.0.17 onwards (I have no idea of which old ALSA version Oralux had...). I tried another distro (which I don't remember the name), that was available only in English, it didn't work as well, for the same reason.

### The Last Hope ###

More questions on the Internet, but only related to Linux, without considering accessibility:

"I want to learn Linux, which distro do you recommend?"

Answer:

"Use Slackware. A simple, stable, well tested, very respected distro, one of the few that still hasn't lost its roots, it forces you to learn how the system works because almost nothing comes configured and you have to do everything yourself."

"Okay, I'll use this one." I decided.

Reports in the net said "It's very difficult", but was that so? I read several articles about its installation and configuration, including:

* http://www.gdhpress.com.br/blog/instalando-o-slackware/
* http://www.gdhpress.com.br/blog/slackware-sobrevivendo-ao-primeiro-boot/
* http://www.gdhpress.com.br/blog/configurando-o-x/

And even the official book, SlackBook ( "Slackware Linux Essentials"), entered the scene:

* http://slackbookptbr.sourceforge.net/livro/slackbook.html

After every article I read, I was more sure that it was what I wanted. Plus, it's accessible! Or rather, almost. I discovered that Slackware comes with a screen reader called Speakup

http://www.linux-speakup.org/

and with it, it was possible to perform a spoken system install. The problem is that it only supports speech synthesis through hardware by default and I don't have the necessary equipment. There is also support for synthesis via software through Speech-Dispatcher

http://www.freebsoft.org/speechd

and Speechd-Up

http://www.freebsoft.org/speechd-up

But only after Slackware and the synthesizer software are installed. So, either way, I would need help from a sighted person.

Even with the con above, I decided to install Slackware. Something told me it would be difficult, while another said that it wouldn't be impossible.

### Installing and Configuring ###

I destroyed all my failed experiments in my laptop and inserted the Slackware 12.2's DVD. So, I had my mother, who knows almost nothing about either linux or English, read the full installer for me. About three hours later, Slack was on my laptop, silent, but working. Following the steps outlined in one of the articles already mentioned above, still with non-technical assistance, I set up the audio with "alsaconf", then "alsamixer" to increase the volume, followed by "alsactl store" to save. To make the thing talk, I used another computer (which was still with Windows) to access the Internet and download the following software:

- Espeak (voice synthesizer with support for multiple languages, including Portuguese):

http://espeak.sourceforge.net/

- Speech-dispatcher (speech server):

http://www.freebsoft.org/speechd

- YASR (screen reader for the console):

http://yasr.sourceforge.net/

I moved them to the laptop with the help of a USB stick and installed each one using the three basic commands "./configure", "make" and "make install". So, I was finally able to use the terminal and do things myself, without visual assistance.

### Improvements ###

Living a little in the Slackware world was enough to find out that using the "three basic commands" is not the most convenient way to install (and uninstall) applications. I learned about SlackBuilds, scripts for compiling programs and generating Slack packages, easily managed by the distro's tools. I took a basic SlackBuild, the one that compiles the GLib library, plus some others from this repository

http://repository.slacky.eu/

and used them as a base for compiling the latest version of Orca and its dependencies.

After much trial and error, I managed to install Orca. I put it to speak and it said:
"Welcome to Orca." ... ... ..... And nothing else.
"What? Why? Is it because it isn't Gnome? No, it can't be, so I ran away from GNOME the whole time and now it comes to this... isn't there another way? And will I really have to install it?"

Soon the answer came. I found another attempt at an accessible distro, the new version of Knoppix with a collection of accessibility related software, called "ADRIANE" (Audio Desktop Reference Implementation and Networking Environment)

http://www.knopper.net/knoppix-adriane/index-en.html

I downloaded and tested it. It's version of ALSA was a little old and sound didn't work on my PC because of the soundcard, but it worked like a charm on the laptop. The distro had a text-based interface (console/text-mode), with menus using Dialog and a console screen reader. It even had an option to run a graphical interface, with Orca as screen reader, Firefox, OpenOffice and LXDE

(http://www.lxde.org)

as desktop. It worked like a charm and without Gnome!

I found an interesting article on the subject:

http://www.linux-magazine.com.br/images/uploads/pdf_aberto/LM_51_50_55_06_tut_adriane.pdf

through reading that and based on some shell scripts from ADRIANE, I learned that to integrate Orca with other GTK apps besides Gnome, some variables had to be set at startup:

export SAL_USE_VCLPLUGIN="gtk"

export GTK_MODULES="gail:atk-bridge"


It still didn't work, nothing else was said a part from "Welcome to Orca.." Again, I looked through the mailing lists and forums, but couldn't find any crazy case like mine. Then I found the guide on creating accessible applications with GTK:

http://live.gnome.org/GAP/AtkGuide/Gtk

where it was also said that the variable "GNOME_ACCESSIBILITY" had to be set to "1". Although the guide reported that putting this statement in the user's startup script was "deprecated", just after doing that, Orca opened its "mouth" for good!

To start a talking graphical session, it was "just" a matter of putting the following at the end of the .xinitrc file [\*]:

	# ------------------------------------------------- ---

	# Starts the AT-SPI Registry

	exec "/usr/libexec/at-spi-registryd"&

	# Enter accessibility mode

	gconftool-2 -s --type=bool /desktop/gnome/interface/accessibility true

	# "Fools" the program, pretending to be using GDM

	export LOGNAME="GDM"

	# Integrating with GTK applications

	export SAL_USE_VCLPLUGIN="gtk"

	export GTK_MODULES="gail:atk-bridge"

	export GNOME_ACCESSIBILITY=1

	# Start the window manager

	sleep 0.5

	exec /usr/bin/startlxde& # In the case of LXDE



	# Start the Orca screen reader
	# (Must be the last thing to start)

	orca -n

### Migration ###

After backing up all my important files, I destroyed the PC's Windows partition without mercy. Again, with non-technical assistance, I chose the kernel with Speakup and repeated Slackware's installation and configuration processes on the PC. To install the accessibility related applications, I used the .tgz packages I had built when experimenting on the laptop. A few trial and errors later, I had the main computer running Slackware Linux and, most importantly, talking!

### How Things are Today ###

I still couldn't make Speakup speak via software, the available instructions are outdated, many names and commands have changed and I no longer know which is which.
Besides Speakup (which is not working) and Orca, I have two other screen readers (for the console) installed for testing and emergencies: they are YASR and SBL (SUSE Blinux Screen Reader)

http://en.opensuse.org/SUSE_Blinux

which has much more options and is more configurable than YASR.

I use the "common" Applications for the everyday tasks (Firefox for web browsing, MPlayer for playing video and audio, BROffice for opening documents with proprietary formats etc.).
When I need to run some application made for the other operating system (usually gaming related), I use WINE, which often complains about missing DLLs here and there, but with a little patience, it works. Unfortunately it is unable to run NVDA (an open source screen reader for Windows

http://www.nvda-project.org

), But as I only use it occasionally, I just turn to non-technical assistance.

### Conclusion ###

Despite having struggled a lot with the accessibility applications, now I'm using Linux and don't regret it. Slackware is a great distribution, its configuration files are well organized (I know that many do not agree with this, but in my opinion) it has simple and effective methods to manage packages and it comes by default with many programs useful for both regular users as well as for developers. I'm pretty satisfied with it.

-------------------------------------------------------------------------------



### Updates and Notes ###

[\*] This article is old and some things from it are outdated. For example, I already got Speakup to work (maybe I'll make a post explaining how).

But the .xinitrc script is what improved the most, now able to work with AT-SPI 1 and 2. And contrary to what I wrote on the article, later I learned that Orca should NOT be the last thing to be started. To start the X server (the graphical user interface), the desired applications must run on the background, excluding the "main" program (usually the desktop environment or the window manager), which should be the last thing to be started. If this program closes, the X server goes down with it. That's why the desktop or window manager should be the last thing to start, and not Orca. Probably, this is one of the details I would never know if I had used one of the distros that come with everything configured "out of the box" (and maybe, I would have given up, thinking the only solution to make it work correctly was to install Gnome...).

I've made an improved version of the script from the article, adding support for AT-SPI version 2. The above corrections play an important part on this script, because things must be started in a specific order.

[Download the updated script from here][newxinitrc] (or use the 'save as' option from your browser) and copy it to your home directory, renaming it to '.xinitrc'... Or just do everything from the console, with just one line!

	   $ wget -O $HOME/.xinitrc https://raw.githubusercontent.com/aiyumi/slackware-scripts/master/slackbuilds/accessibility/orca/orca.atspi2.xinitrc

This xinitrc file starts the XFCE desktop and also a terminal window (it is useful because the desktop isn't that accessible).

Enjoy.


[newxinitrc]: https://raw.githubusercontent.com/aiyumi/slackware-scripts/master/slackbuilds/accessibility/orca/orca.atspi2.xinitrc
