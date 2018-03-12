.. title: Slint, a Slackware-Based Linux Distribution that's Accessible to the Visually Impaired
.. slug: slint-linux-review
.. date: 2018-03-12 15:02:11
.. tags: linux

As some already know, my Linux distribution of choice is Slackware. However, it isn't an easy distro for visually impaired users to install. The Slackware installer isn't accessible unless the users have a hardware-based voice synthesizer (I don't have one, and most others probably also don't), which means they'd need sighted assistance to install it and then install the screen readers. Some visually impaired blog visitors emailed me and showed interest on installing Slackware, but they had no one to provide them sighted assistance to carry them through the installation process, and sadly I couldn't help them. But now, this problem has a solution, in the form of a Slackware-based Linux distribution called [Slint][slinthp]. <!--more-->

### Slint and Accessibility

In mid august 2017, Didier Spaier - the creator of the Slint distribution - contacted some people - including me - to discuss how to make Slint accessible, and we helped test the next Slint release. After lots of testing, Slint 14.2.1 was released at the end of December 2017, with an accessible installer (both through Braille and speech), as well as Speakup (a screen reader for text-mode), Orca (a screen reader for graphical mode) and accessible window managers included by default.

The installer can talk (speech feedback) or give Braille feedback if the user has a Braille device, and is available in multiple languages.

Once installed, in graphical mode (X), Slint uses Orca with both speech and Braille support. It has quite a few window managers to choose from, most of them accessible. These include Blackbox, Fluxbox, LXDE, Windowmaker, XFCE, and MATE. Many of the graphical applications are also accessible, like LXTerminal (terminal emulator), Firefox (web browser), LibreOffice (office suite), Pluma (a lightweight text editor), and some beginner-friendly administrative tools, for those who aren't used to (or don't like) the Linux command-line.

In text-mode, it has Braille support via Brltty, and the Speakup screen reader with software synthesis through Espeak and Espeakup. Slint even provides Emacspeak, for those who like Emacs.

### Packages, Packages, and More Packages!

I love Slackware. It's the distro I got along best with, and that I found easier to use. I love how it keeps everything simple in general, as its principles dictate.  How it provides good settings for most things by default, how enabling/disabling services on startup is simply a matter of giving or removing executable permissions to the corresponding startup files in "/etc/rc.d" (usually just doing "chmod +x" to enable or "chmod -x" to disable is enough), how it's easy to inspect which file was installed from which package (just do a "grep file_to_check /var/log/packages/*") ), and how it doesn't split packages (like the separate "appname-bin," "appname-libs" and "appname-dev" from some other distros) and doesn't make me run the risk of running into the problems that come from installing only parts of packages. However, one major point of frustration to me, especially around 2009 when I began using Slackware, was that there were neither precompiled packages or SlackBuilds for most of the things I wanted, and I had to hunt the programs and their dependencies, and create the SlackBuilds for everything myself. This is one of the points that make people think Slackware is hard to use. But thankfully, those days are mostly gone, and there are many more packages (both binaries and SlackBuilds) available today than there were back then.

Slint's packages are fully compatible with Slackware. Actually, many things like the kernel, Glibc, and various libraries and apps come directly from Slackware with no modifications at all. Slint also draws packages directly from the [Salix][salixhp] distribution, which strives to provide packages fully compatible with the original Slackware. This includes an ["extra" repository][salixextra] with many programs compiled using the Slackbuilds.org scripts. And There are also packages that don't come in Slackware by default but are in Slint, such as Espeakup, Orca and its dependencies. And since all the packages are compatible with Slackware, it means that users of the normal Slackware may take advantage of all of these repositories with ready to install packages, too!

### Installing and Configuring Slint

Right at the beginning of 2018, [my HD died, and I had to replace it](/en/blog/new-year-new-disk). But instead of installing Slackware like always, I chose to install Slint, since it has a talking installer and would allow me to install it without sighted help.

Installing Slint is easy. First, [download the latest ISO][slintdl] (Slint 14.2.1.1 at the time of this writing), burn it to a DVD or make a bootable USB stick. After turning the machine on with the installer media inserted, the computer may beep (if it doesn't, just wait around 10-15 seconds). Press "Enter." A list of languages will appear, but there won't be speech yet, so, choosing anything should be fine for now (the installer will ask to confirm the language later once speech is working, and this choice will come again).

The installer will load, then will say aloud (in English)  that Slint has a talking installer in order to be accessible to visually impaired users (I thought this was a really nice touch :D ), and ask you to type "S" (a capital S) followed by "Enter" to keep speech, or just press "Enter" to continue without speech (either for sighted users, or people using Braille devices rather than speech). Then it'll ask a few more things and you have to confirm the desired language or choose a different one, and the keyboard layout will be set automatically according to the language you choose (for example, choosing Brazilian Portuguese as the language will automatically set the keyboard layout to the Brazilian standard which is "br-abnt2"), and you can accept this choice or pick a different one if you'd like. Then you log in as root (without a password) and get to the command prompt.

If the disk is empty and not partitioned yet, then it must be partitioned before the installation. This is probably the hardest part for people not used to Linux, but should be easy enough (for complex cases where the disk isn't empty, already has another OS in it and you want to repartition to make Linux fit in there, it's a whole different story). The easiest way to create the partitions is to use "cfdisk" (tip: press numpad asterisk a few times until the screen reader says "highlight tracking." This should make navigating the options easier). Inside Cfdisk, the up and down arrows will navigate among the available partitions or unpartitioned space on the disk, the left and right arrows will cycle through the available actions (create a new partition, change the type, delete the partition, write the partition table), and "Enter" chooses the option. I won't go into detail here, but basically, Assuming an empty disk or a disk with unpartitioned space, the gist is: create at least a Linux and a swap partition, and an EFI partition if your machine supports EFI. For each partition, choose an area with free space, create a new partition, type the size (in MB, GB etc.) and choose the partition type among the presented options (the most relevant ones are "Linux," "Linux swap" and "EFI (FAT-12/16/32)"). Once all partitions are defined, choose to write the partition table and exit Cfdisk.

Once the partitions are ready, typing "setup" will start the program that'll guide you through the Slint setup process itself. It's mostly the same as the Slackware setup process (I.E., just follow the instructions onscreen and choose what you want from the menus. It can't get easier than that!). Once you get to the part about installing packages, it'll ask if you want to install the KDE desktop environment (it takes a lot of disk space and isn't accessible to screen readers, so you might as well skip it). Then it installs everything, configures more stuff, asks to set a password for the root user, guides you through the creation of the first non-root user, and the installation will finish soon enough. Reboot, and that's it!

For (much more) details about the setup process, check the [instructions in the Slint wiki][setupwiki].

### Configuring Accessibility

After I had installed Slint, at first I ran into a few problems with sound, mostly related to PulseAudio and ALSA-only apps (like media players) fighting to take over the soundcard, but thanks to the fixes in Slint 14.2.1.1 (released in February 5, 2018), these problems are no more, and the screen readers and other audio apps should coexist peacefully.

To configure the graphical mode accessibility for your user, you must type the command "orca-on" as your regular user, so that it'll activate Orca on X startup via a file in "~/.config/autostart," and set the accessibility-related variables in your "~/.bash_profile" file. And if you need Braille, make sure to give executable permissions to "/etc/rc.d/rc.brltty." If you want to switch window managers, use the command "session-chooser." Or if you want to choose a login manager (to set logging in from text mode or graphical mode), use "login-chooser" (as root). And... that's it. Have fun!

For more details about accessibility in Slint, read [the accessibility howto][a11yhowto].

### Installing, Upgrading, and Managing Packages

Slint comes with "installpkg," "removepkg," and "upgradepkg" just like normal Slackware. To make finding, installing and upgrading packages easier, it also comes with a few package management tools: Slapt-Get, Slapt-Src and SPI.

Like the Apt-Get package manager from Debian, Slapt-Get installs precompiled packages from the repositories and (provided that the repository contains dependencies information) automatically installs the dependencies so that we don't need to hunt for each dependency one by one. Slapt-Src is similar, but instead of binaries, it finds and compiles packages directly from source, using SlackBuilds from repositories like Slackbuilds.org. And then there's SPI (the Salix Package Installer) that integrates the two tools into one interface. For example, if we ask to install a package with SPI (spi --install package_name), it'll try to find and install a binary using Slapt-Get, and if it doesn't find a binary, it'll try to find a SlackBuild, compile the program from source and install it via Slapt-Src.

Thanks to my negative experiences with package managers from when I was beginning in Linux and first tried Debian and Ubuntu, I've always been wary of package managers, always thinking they may do things they shouldn't and break my system. But today I don't have as much time and disposition to hunt packages and dependencies as I had in the beginning. So, I decided to give Slint's package managers a chance. And to my surprise, I must say that they've been saving me a lot of time, and behaving just as I expected. I've put packages ending in "am" (the suffix for my custom compiled packages) in the exclusions list in "/etc/slapt-get/slapt-getrc" so that the tools don't try to replace my custom packages, and I always use the "--prompt" and "--simulate" switches to see what they're going to install/remove/upgrade before actually doing it. So far, I haven't run into any unpleasant surprises.

Speaking of exclusions and upgrades, Slint has the kernel in the exclusions list too, because kernel upgrades require manual intervention. So, when official Slackware (which is where Slint gets the kernel packages from) releases a new kernel with security updates, it must be upgraded separately. For that, follow these [kernel upgrade instructions][kernelupg].

### Conclusion

I've been using Slint as my main system since the beginning of January 2018. I'm treating my Slint install mostly the same way I had treated my Slackware installs in the past, except for using package managers, as it's something I didn't do before. But my experience with the provided package managers has been positive so far, and I feel that keeping my system up to date has never been easier. Overall, I'm very happy with this distro.



[slinthp]: http://slint.fr/wiki/en/start
[slintdl]: https://sourceforge.net/projects/slint/files/14.2.1/
[slintpkgs]: http://slackware.uk/slint/x86_64/slint-14.2.1/slint/
[salixhp]: https://www.salixos.org/
[salixextra]: http://slackware.uk/salix/x86_64/extra-14.2/
[setupwiki]: http://slint.fr/wiki/en/installation_process
[a11yhowto]: http://slackware.uk/slint/x86_64/slint-14.2.1/doc/ACCESSIBILITY
[kernelupg]: http://slackware.uk/slint/x86_64/slint-14.2.1/doc/KernelSecurityUpgrades
