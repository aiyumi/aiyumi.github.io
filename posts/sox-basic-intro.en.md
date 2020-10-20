.. title: A Basic Introduction to SoX
.. slug: sox-basic-intro
.. keywords: app, application, audio, command, command line, console, converter, editor, effect, free, free software, mp3, open source, program, processing, software, sound, sox, tool, wav
.. description: A basic introduction to SoX, an audio processing program.
.. tags: linux, Audio
.. date: 2011-09-09 13:19:38

### What is SoX? ###

[SoX][soxhome] (Sound eXchange) is, as the author calls it, "the Swiss Army 
knife of sound processing programs". It is free, open source and runs under Windows, Mac and Linux.

SoX can play, record, convert, edit, split, join and apply various effects to 
audio files of many different formats. <!--teaser_end-->

### Supported File Formats ###

In a default installation of SoX in Slackware 13.37, the supported formats are 
as follows:

8svx, aif, aifc, aiff, aiffc, al, amb, au, avr, caf, cdda, cdr, cvs, cvsd, cvu, 
dat, dvms, f32, f4, f64, f8, fap, flac, fssd, gsm, gsrt, hcom, htk, ima, ircam, 
la, lpc, lpc10, lu, mat, mat4, mat5, maud, mp2, mp3, nist, ogg, paf, prc, pvf, 
raw, s1, s16, s2, s24, s3, s32, s4, s8, sb, sd2, sds, sf, sl, smp, snd, sndfile 
(formats supported by the Libsndfile library), sndr, sndt, sou, sox (internal 
format), sph, sw, txw, u1, u16, u2, u24, u3, u32, u4, u8, ub, ul, uw, vms, voc, 
vorbis, vox, w64, wav, wavpcm, wv, wve, xa, xi

And there can be some more if the associated libraries are installed.

Some of the supported effects:

bandpass (band-pass filter), chorus, delay, echo, equalizer, fade (fade in and out), highpass (high-pass filter), lowpass (low-pass filter), pitch (changes only the pitch), reverb, reverse, riaa (RIAA vinyl effect), speed (changes speed and pitch), synth (generates basic waveforms), tempo (changes only the speed), tremolo, trim, vocoder

For a complete list of formats, effects and other features, go [here][soxfeatures].

### Installing ###

For Windows and Mac, get it from the [official download page][soxdownloads]. For 
Linux, it can be installed by compiling the source code (available on the same 
page), or via distribution specific package repositories. In the case of 
Slackware (the Linux distribution that I use), it is installed by default 
although support for MP3 file generation is disabled, which is solved just by 
rerunning the (SlackBuild) script to compile it, then reinstalling it.

### Included Programs ###

SoX is a command line tool and comes with a few mini programs (commands) for 
executing different tasks:

#### Play ####

Plays audio files in the supported formats, applying effects during playback if
desired.


#### Rec ####

Records from the microphone, the sound card, etc., to a file in one of the 
supported formats.


#### Soxi ####

Shows information about audio files in the supported formats.


#### sox ####

Commonly used to process file(s) and save the results to another file, but 
actually it is the core of "play", "rec" and "soxi".


### Basic Usage Examples ###

Note: these examples were executed under Linux, I don't know if there is any difference in the commands for other systems.


#### Displaying Information About Files ####

1. Displays information such as size, length (duration), encoding, bitrate, number of channels, 
sample rate, comments etc. of a file called "music.mp3":

	$ soxi music.mp3

2. Displays only the length (duration) of the file above:

	$ soxi -d music.mp3


#### Playing Files ####

1. Plays a file called "example.mp3":

	$ play example.mp3

2. Plays a file called "example.mp3" with a reverb effect:

	$ play example.mp3 reverb

3. Plays the file "example.mp3" backwards:

	$ play example.mp3 reverse

4. Plays only the first five seconds of "example.mp3":

	$ play example.mp3 trim 0 5

5. Plays "example.mp3", from the fifth second to the end:

	$ play example.mp3 trim 5

Note: there are options to control the parameters of reverb, trim etc., as well
as various other effects.  Read the "Getting Help" section below for more
information.


#### Recording ####

Records from your default recording source (for example, a microphone) to a file
called "example.wav".

	$ rec example.wav

Note: you must set the recording source first (for example, in the sound
configuration in Windows, or with software like "alsamixer" or "aumix" in Linux).


#### Pausing and Resuming ####

To pause while playing or recording, press Control-z. SoX will pause and stay in
the background. To resume and put it back in the foreground, type the command:

	$ fg

Note: I don't know if this works in the same way (or how/whether it works) on Windows.


#### Processing and Converting Files ####

These commands process a file and save the result to another file, even
converting the output to a different format.

1. Converts a file called "example.wav" into "example.mp3":

	$ sox example.wav example.mp3

2. Applies a reverb effect (with SoX's default parameters) to "example1.wav" 
and saves the result to "example2.wav":

	$ sox example1.wav example2.wav reverb

3. Joins "example-part1.flac" and "example-part2.flac" to form 
"example-full.flac":

	$ sox example-part1.flac example-part2.flac example-full.flac

4. Save the first fifty seconds of "example1.mp3" to "example2.ogg":

	$ sox example1.mp3 example2.ogg trim 0 50

5. Merges (mixes) a background music ("music.mp3") with a voice recording ("speech.wav"), 
producing "presentation.ogg":

	$ sox -m music.mp3 speech.wav presentation.ogg

6. Merges the background ("music.mp3") at half the volume and the voice 
("speech.wav") at double the volume, producing "presentation.ogg":

	$ sox -m -v0.5 music.mp3 -v2 speech.wav presentation.ogg

Tip: if you want to "preview" (or should I say "prelisten"?) the effects without altering the file, you can use
"play" to apply the effects and listen:

	$ play -m -v0.5 music.mp3 -v2 speech.wav

Adjust the parameters (in this example, the volume factor, which is the
number after the "-v" option), until you find the values that you like, then
replace the "play" command by "sox" and specify an output file. Example:

	$ sox -m -v0.5 music.mp3 -v1.2 speech.wav presentation.ogg


#### Generating Audio ####

SoX can also generate basic forms of audio like sine, triangular, square and 
sawtooth waves, as well as some other things such as "white", "brown" and "pink" 
noise.

1. This plays a sine wave in 440hz (the "a4" note) for one second. The gain (and 
audio volume) is decreased a little so as not to be too high:

	$ play -n synth 1 sine 440 gain -10

2. This does the same thing, but uses the note's name instead of the frequency:

	$ play -n synth 1 sine A4 gain -10

3. This saves the sound to a file called "sine.wav" instead of playing it:

	$ sox -n sine.wav synth 1 sine A4 gain -10


#### Suppressing Information ####

If the amount of text shown on the screen bothers you, you can use the "-q" 
option so that SoX does not show any information to the screen, except for 
warnings and errors. This works with "play", "rec" and "sox". Example:

	$ play -q music.mp3


### Getting Help ###

To show all of the SoX commands, supported formats and effects, type:

	$ sox --help

For play, rec and soxi, type "play --help", "rec --help" and "soxi --help"
respectively.

Note: the help is practically the same for "sox", "play" and "rec", except for
the order of input/output files and effects.

There are also the user manuals, with more detailed explanations of commands,
effect parameters and examples. In Linux, if the manuals are installed, you can read them offline be typing

	$  man sox

for the "sox", "play" and "rec" manuals,

	$ man soxformat

for all options related to the supported file formats and

	$ man soxi

for "soxi"'s manual. There is also

	$ man libsox

for those who want to tinker with code and SoX's engine library.

You can also read the manuals online at the [SoX documentation page][soxdocs].

### External Links ###

[SoX's official homepage](http://sox.sourceforge.net/)

[soxhome]: http://sox.sourceforge.net/
[soxfeatures]: http://sox.sourceforge.net/Docs/Features
[soxdownloads]: http://sourceforge.net/projects/sox/files/sox/
[soxdocs]: http://sox.sourceforge.net/Docs/Documentation