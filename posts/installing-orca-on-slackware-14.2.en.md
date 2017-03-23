.. title: Installing Orca on Slackware 14.2
.. slug: installing-orca-on-slackware-14.2
.. keywords: 14.2, a11y, accessibility, at-spi, atspi, compile, compiling, how to, install, installing, linux, orca, screen reader, slack, slackware, slackbuild, visually impaired
.. description: A quick guide on how to install the Orca screen reader on Slackware 14.2 without the Gnome desktop environment.
.. tags: linux
.. date: 2017-03-23 15:58:02

These are instructions for installing the Orca screen reader on Slackware 14.2 **without** the Gnome desktop environment. It's not the latest Orca version, but rather, it's the one compatible with the library versions that come in Slackware by default (to install the latest Orca, we'd need to recompile newer versions of many of the Slackware-provided programs, which would be much more difficult).

From Slackware 14.1 to 14.2, the number of dependencies reduced a lot, which is a good thing. Most of the Gnome-specific libraries are gone, there's no longer the need to recompile programs that came with Slackware, and now everything that uses Python depends on Python 3 instead of Python 2. If more of these changes keep coming and making things easier, soon it might be possible for Orca to enter Slackbuilds.org, then we will no longer have to do all this juggling with [my scripts][slackscripts]. Let's hope!

For those who used [my instructions and installed Orca on 14.0 or 14.1][orca-14.0] and is upgrading to 14.2, you need to remove obsolete dependencies with the command below (those who still don't have Orca installed don't need to use this command, but just look how many dependencies are gone :D ):

    # removepkg gnome-mime-data gnome-vfs gnome-python libgnome libbonobo ORBit2 pyorbit

Now, the instructions themselves. First of all, you need [Sbopkg][sbopkghp] to be installed.

Actually, the process to download and install Orca remains mostly the same as it was [before][orca-14.0]. You can read the previous instructions for more in depth explanations if you want, but basically:

* Download my repository and configure Sbopkg to use my scripts:

        # git clone https://github.com/aiyumi/slackware-scripts.git
        # cd slackware-scripts
        # cp -R slackbuilds /var/lib/sbopkg/aiyumisb
        # cp slackbuilds/100-aiyumi.repo /etc/sbopkg/repos.d
        # cp sbopkg-queuefiles/aiyumisb/accessibility/*.sqf /var/lib/sbopkg/queues

* Run Sbopkg and use my repository:

        # sbopkg -V aiyumisb/local

* If you still don't have Espeak (which Orca uses by default), go to "Queue" -> "Load," load the "espeakup" queuefile and install everything. Espeak will be installed along with Espeakup, which adds support for speech via software to Speakupp (a screen reader for the console, which is always good to have).

* Go to "Queue" -> "Load," load the "orca" queuefile, install everything, and wait for the process to finish.

* Edit the Speech-Dispatcher settings in "/etc/speech-dispatcher/speechd.conf." Make sure the Espeak module is set to load and to use your preferred language as default (in my case, Portuguese). The relevant lines are below:

        # ----- VOICE PARAMETERS -----
        DefaultLanguage "en"

        # -----OUTPUT MODULES CONFIGURATION-----
        AddModule "espeak"       "sd_espeak"   "espeak.conf"

        DefaultModule espeak

        LanguageDefaultModule "en"  "espeak"

    To test it, use the command "spd-say something." If you hear sound, then it's working!

* Lastly, copy the file "/usr/doc/orca-*/orca.atspi2.xinitrc" to "~/.xinitrc" (it's the file that sets the accessibility-related variables for the graphical interface), and change the last line to start your favorite window manager or desktop (for example, "startfluxbox" for Fluxbox, or "startxfce4" for XFCE).

Done! Now you can just use the "startx" command to enter the graphical interface and hear Orca "run it's mouth" :D .

A note about Firefox: In the instructions for 14.0 and 14.1, I had said that Slackware's Firefox came with disabled accessibility and needed to be recompiled, which took hours. The bad news is that Slackware's Firefox still comes with no accessibility. But the good news is that I found out that we don't need to recompile it! Thanks to this [post by Frankiej][frankiejpost], I learned that there's [this script][latestff] that downloads the Firefox binary provided by Mozilla (where accessibility works) and creates a ".txz" Slackware package that can be installed with installpkg as normal.

Despite the name "latest-firefox," this script isn't limited to downloading only the latest version of Firefox. You can actually use it to download any version you want. Just pass the "VERSION" variable to the command that executes the script. For example, at the time of this writing, the Java plugin doesn't work in the latest version of Firefox because they removed support for the API that the Java plugin uses. For those who need the Java plugin, while a compatible version of the plugin doesn't come out, the workaround is to use an earlier version of Firefox where the Java plugin still works. The latest version of Firefox where the obsolete API works is 51.0. In this case, the command to get the Firefox 51.0 package for Slack would be:

    # VERSION=51.0 ./latest-firefox.sh

Or, for Firefox 51.0 with the interface in Brazilian Portuguese:

    # VERSION=51.0 FFLANG=pt-BR ./latest-firefox.sh

And the program will leave the package in "/tmp." Enough of having to wait three hours to compile Firefox at each version :P .


[slackscripts]: https://github.com/aiyumi/slackware-scripts
[sbopkghp]: http://sbopkg.org/
[orca-14.0]: /en/blog/installing-orca-on-slackware-14-0
[frankiejpost]: http://whatthefrankiej.blogspot.com/2014/12/gnome-orca-on-slackware-141.html
[latestff]: https://gist.github.com/ruario/9672798
