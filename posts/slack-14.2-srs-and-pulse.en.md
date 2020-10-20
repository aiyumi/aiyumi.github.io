.. title: Slackware 14.2, Screen Readers and PulseAudio
.. slug: slack-14.2-srs-and-pulse
.. tags: linux
.. date: 2017-03-23 15:55:46

After a very long while, I'm finally on Slackware 14.2. It's been almost one year since 14.2 came out, but I wasn't brave enough to upgrade, mainly because when I had tried to upgrade the installation on my netbook (which served as my test subject as usual), it hadn't worked (it's the first time I have problems trying to update Slackware). The system became mute in the middle of the upgrade and I lost access to my screen reader programs that I depend on to do anything on the computer (good thing it was on the netbook and not on my main machine!). I was unable to fix the problem, lost the patience to investigate, and ended up leaving it aside for a long time. Now that I'm on vacation from work and have a little more time, I finally gathered the patience and the courage to try again. <!--teaser_end-->

What was the problem? It's all thanks to PulseAudio - a controversial sound manager software beloved by some and hated by others - which finally managed to ["sneak" into Slackware][pulseslack] and became the default sound manager in 14.2. I remember having problems with this software at the time I was starting on Linux, when I tested Ubuntu. One of the reasons that made me choose Slackware was precisely because it didn't have the said piece of software. I managed to avoid PulseAudio for about eight years, but now here it is, and it's likely here to stay.

As I investigated the problem on my netbook, I still kept trying to escape from PulseAudio. First I tried to have Pulse as a secondary sound manager with ALSA as the primary one, so that most programs use ALSA, and only those that actually depend on Pulse resort to it. I followed the [instructions on the Arch Linux wiki][pulsepipe], but it didn't work. Speech-Dispatcher (the speech server on which Orca depends) refused to function. Setting "AudioOutputMethod" to "alsa" and leaving the "AudioALSADevice" as "default" (exactly how I had been using it for all these years), the program didn't start and the log showed an, "couldn't "open alsa plugin," error. Setting "AudioALSADevice" to "dmix" didn't give errors, but no sound came out, either. I even tried to use ALSA through Libao as "AudioOutputMethod" (I recompiled Libao to use ALSA instead of Pulse) but also no sound. And guess what was the only way where sound worked? "AudioOutputMethod" set to "pulse..."

So, rather than trying to run away from PulseAudio, making all programs use it seemed like the easiest way to solve the problem. Then I thought. I don't have good memories of PulseAudio from when I had used it before, but that's been eight years! I've heard a number of (more recent) complaints about Pulse, but I also know of awesome people on the Linux-Audio-User mailing list who like it a lot, so it might have improved. And if the ever so demanding Slackware has gotten to the point of accepting PulseAudio, then maybe it's time for me to give it a chance.

In the end, I surrendered and installed everything related to PulseAudio (I had to resort to visual help while the machine had no sound) and made the "/etc/rc.d/rc.pulseaudio" executable so that it starts at boot. I recompiled Espeak to use Pulse too. Then ... it worked!

Since it worked on the netbook, I upgraded Slackware and repeated the Pulse process on the PC ... but it didn't work right. Trying to start Pulse along with the system (the way it worked on the netbook) produced no sound at all, and starting Pulse individually for each user also presented problems.

I practically lost all day searching the Internet, and found no problem similar to mine. It took me several hours of trial and error until I understood what was going on. The point is that Espeak (and therefore, Espeakup, which causes the screen reader to speak) was compiled to use PulseAudio if it's running, or fall back to ALSA otherwise. Then, if the screen reader started at boot, Espeakup would use ALSA because Pulse wouldn't be running yet (Pulse would only come after the users login), Espeakup would take the soundcard for itself and wouldn't let Pulse start. So, I really needed PulseAudio to start at boot and be active by the point Espeakup comes on. But starting Pulse at boot had no sound at all...

At a loss as to what else to do, I began comparing logs. I compared the log from running PulseAudio as root (where sound worked as it should), and the log from trying to run Pulse in system wide mode (where no sound came out), which is run with a special user called "pulse." Everything went perfectly as root, but I discovered that as the pulse user, PulseAudio didn't detect the soundcard, and only showed a "dummy" device instead of the soundcard. But why didn't the soundcard get detected in the pulse user's case? With my normal user, the soundcard appeared just fine! A few more hours of scratching my head, and it finally clicked. Question: what's the difference between my user and the pulse user? Answer: my user was in the "audio" group, and the pulse user wasn't. In other words, the user responsible for managing the system sound had no access to audio-related features! (can you believe that?) So much wasted time, and it turned out that all I needed to do was add the pulse user to the "audio" group.

The command that effectively solved my problem was:

    # usermod -aG audio pulse

That's it. I don't know why things "just worked" on the netbook without the need to do this, but whatever...

And what about the performance? On the netbook (which is a "weaker" machine) things seem heavier and slower, and audio has some stutters and glitches, but on the PC (a more powerful machine) everything works smoothly. I've recompiled my sound-related programs (SoX, Mplayer, Audacity, Ecasound) to also use Pulse, and they're working fine. I needed to edit the file "/etc/pulse/daemon.conf" and set "default-sample-rate = 48000" (because it's the default for my soundcard), otherwise Audacity distorted the sound during playback.

For Ecasound, I needed to change the internal sample rate to 48000 in the file "~/.ecasound/ecasoundrc" (since the file didn't exist, I copied it from "/usr/share/ecasound/ecasoundrc"). And when playing a sound file through Ecasound, I need to use the "-B nonrt" option to avoid problems. E.g.:

    $ ecasound -B nonrt -i test.ogg

For other miscelaneous improvements, I changed a few other settings. In the "/etc/pulse/client.conf" file, I have "autospawn = no" and "allow-autospawn-for-root = no," to avoid spawning individual users' Pulse instances and conflicting with the instance running in system mode.

There's also an environment variable, "PULSE_LATENCY_MSECS," said to eliminate problems where sounds play too fast in certaim programs like Skype and Wine. I added this variable to an executable script inside "/etc/profile.d" to set the variable for all users:

    export PULSE_LATENCY_MSECS=30


All in all, aside from these twists and turns until I finally found the right settings, the sound is generally working nicely (Orca, YouTube, Flash, etc.) and surprisingly, PulseAudio hasn't crashed even once so far! I hope it stays this way...

Speaking of Orca, I upgraded my SlackBuilds to install Orca on Slackware 14.2. For instructions, [access here](/en/blog/installing-orca-on-slackware-14.2).


[pulseslack]: https://docs.slackware.com/howtos:multimedia:pulseaudio_non-default
[pulsepipe]: https://wiki.archlinux.org/index.php/PulseAudio/Examples#PulseAudio_as_a_minimal_unintrusive_dumb_pipe_to_ALSA
