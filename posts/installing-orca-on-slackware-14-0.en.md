.. title: Installing Orca on Slackware 14.0
.. slug: installing-orca-on-slackware-14-0
.. keywords: 14.0, 14.1, a11y, accessibility, at-spi, atspi, compile, compiling, how to, install, installing, linux, orca, screen reader, slack, slackware, slackbuild, visually impaired
.. description: A quick guide on how to install the Orca screen reader on Slackware 14.0 and 14.1 without the Gnome desktop environment.
.. tags: linux
.. date: 2013-09-27 21:00:15

I was taking a look at Slackware Current, which now contains the packages that will be in the next version (14.1, if the name doesn't change like what happened with 13.37). I was very surprised to see that AT-SPI2-Core and AT-SPI2-ATK, two very important dependencies for the [Orca screen reader][orcahp], have been included, and their versions are even newer than mine! But I think these weren't added because of accessibility considerations (some other new packages must have these libs as dependencies), since a few SlackBuilds important to Orca still are "./configured" with "--disable-introspection" and "--disable-accessibility" (when I installed Orca on my current system, I had a lot of headaches until I found out that the packages came configured like that by default. I had to enable those options and recompile the programs). Even so, each new Slackware version, more of Orca's dependencies are being incorporated into the default packages. Maybe in just a few versions from now, all (or almost all) of Orca's dependencies will finally have been fulfilled. While this doesn't happen, I gathered the SlackBuilds to compile Orca and its dependencies, and [uploaded them to Github][slackbuilds]. Some are mine (because I didn't find ready scripts for those programs anywhere else), while others are copies of the scripts from [Slackbuilds.org][sbohp] or of things provided in Slackware (for the few programs that needed tweaking and recompiling), everything gathered in only one place to make life easier. These aren't the latest versions, but the specific versions that work with the Slackware 14.0 stock libraries (building the newest packages would require compiling a lot of extra things and would be much more work). For those wondering about having to install Gnome, no, it isn't needed. Contrary to what it might seem, despite being part of the Gnome Project, Orca can run perfectly fine without this so heavy desktop environment. Below is a quick guide on how to install Orca on Slackware, **without** Gnome: <!--more-->

Update (2013/12/29): I updated my scripts to work with Slackware 14.1. The difference is that 14.1 already comes with AT-SPI2-Core and AT-SPI2-ATK. We still need to compile Pyatspi and recompile the other conflicting packages, but with the queuefiles, all of this becomes almost automatic, so for those who will just use the scripts, the process remains the same.

Update (2017/03/23): I've updated my scripts for installing Orca on Slackware 14.2. For instructions, [go here](/en/blog/installing-orca-on-slackware-14.2).

Note: the instructions below are specific to Slackware 14.0 and 14.1, as things may change in the future (hopefully for better!). This is just a quick guide. Besides the instructions for setting up my custom repository (which may not be so obvious), it mostly outlines the order in which the steps must be taken. I won't explain how to use Sbopkg or the Slackware built-in package tools (Installpkg and Removepkg). If you don't know how to use these, read their manuals and/or search for tutorials on the Internet.

That said, let's begin:

1. Clone my repository by doing:

        # git clone https://github.com/aiyumi/slackware-scripts.git
        # cd slackware-scripts

    If your Slackware is 14.1, skip to step 2. If it's 14.0, you need to use this command first:

        # git checkout 14.0

2. The easiest way is to use these scripts with [Sbopkg][sbopkghp]. To set up the repository for Sbopkg, copy the "slackbuilds" directory to "var/lib/sbopkg/," and rename it to, for example, "aiyumisb."

        # cp -R slackbuilds /var/lib/sbopkg/aiyumisb

3. Copy the file "100-aiyumi.repo" to "/etc/sbopkg/repos.d," then edit "/etc/sbopkg/sbopkg.conf" to set it as your default repository, like this:

        REPO_BRANCH=${REPO_BRANCH:-local}
        REPO_NAME=${REPO_NAME:-aiyumisb}

    Or, if you don't want to make it your default, you can start Sbopkg with this command:

        # sbopkg -V aiyumisb/local

4. Copy the ".sqf" files from "sbopkg-queuefiles" to "/var/lib/sbopkg/queues."

        # cp sbopkg-queuefiles/aiyumisb/accessibility/*.sqf /var/lib/sbopkg/queues

5. Uninstall (by using "removepkg") the following packages which have important options disabled and need recompiling:

    * gobject-introspection: the versiom from Slackware conflicts with Gnome-Python and aborts compilation during "make."

    * pygobject: comes with introspection disabled.

6. Recompile said packages by using the SlackBuilds you just downloaded (they're in the "libraries" directory and are already edited with the proper settings), then install each one with "installpkg."

    Note: If you use Firefox, you'll unfortunately have to recompile it. The package from Slackware comes with accessibility disabled to save compile time or something like that (oops!). But it's not in my repo, so you'll have to copy the script from Slackware and replace "--disable-accessibility" with "--enable-accessibility" in the "./configure" part. Be prepared, because it takes really long (it took three hours on my 1.6Ghz single core netbook, and an hour on my 2.8Ghz quad core desktop).

    Now, for the installation of what really matters:

7. If you don't have Espeak yet (which Orca uses by default), load the "espeakup.sqf" queuefile \* to Sbopkg and install everything. Espeak will be installed along with Espeakup, which adds support for speech via software to Speakupp (a screen reader for the console, which is always good to have).

    \* Note: for Portuguese, I prefer the pronunciation from Espeak 1:40 instead of the latest version's. If you also prefer the old one, use the "espeakup-espeak-1.40.sqf" queuefile instead of "espeakup.sqf."

8. Load "orca.sqf" and install everything (Speech-Dispatcher, a bunch of libs, AT-SPI2/Pyatspi, Orca). Go grab a coffee because compiling all this takes long (not as much as Firefox, though). I fixed all errors that appeared for me, then did the process all over again and had no more others, so I hope you don't run into any errors (but I can't guarantee anything :P).

9. Open the Speech-Dispatcher config file in "/etc/speech-dispatcher/speechd.conf." Make sure that ALSA is being used for sound playback and that the Espeak module is being loaded, editing the settings if not. The relevant lines should be like this:

        # ----- VOICE PARAMETERS -----
        DefaultLanguage "en"

        # ----- AUDIO CONFIGURATION -----------

        # -- AUDIO OUTPUT --
        AudioOutputMethod "alsa"

        # -----OUTPUT MODULES CONFIGURATION-----
        AddModule "espeak"       "sd_espeak"   "espeak.conf"

        DefaultModule espeak

        LanguageDefaultModule "en"  "espeak"

    To test it, use the command "spd-say something." If you hear sound, then it's working!

10. Try to configure Orca from the console (still in text mode, not in X) with the command "orca -t." If you have permission problems with the "/etc/gconf/gconf.xml.system" directory, do "chmod 755" on it (I don't know why that happens, nor if it can be fixed from the SlackBuild). When there are no more errors and Orca finally speaks, congratulations. You just installed Orca on Slackware, and without Gnome!

11. If everything went well so far, you'll need an accessible terminal emulator to be able to use the console from the X graphical interface. If you're using XFCE as your desktop and installed the packages from Slackware, you can use XFTerminal, but if not (I use Fluxbox, which is also in Slackware), go to the official Slackbuilds.org repository via Sbopkg and install, for example, LXTerminal. I particularly don't use any file manager (I prefer doing everything from the terminal), but if you want a file manager and don't want XFCE, you can install PCManFM (it's accessible when in the "Detailed list view" mode).

12. Lastly, copy the file "/usr/doc/orca-*/orca.atspi2.xinitrc" to "~/.xinitrc" (this is the file that sets the variables to enable accessibility in X), edit the last line to specify which desktop environment/window manager you'll use (for example, "startfluxbox" for Fluxbox or "startxfce4" for XFCE), type the command "startx" and have fun! :D

[orcahp]: https://live.gnome.org/Orca
[slackbuilds]: https://github.com/aiyumi/slackware-scripts
[sbohp]: http://www.slackbuilds.org/
[sbopkghp]: http://sbopkg.org/
