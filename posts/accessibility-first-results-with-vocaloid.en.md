.. title: Accessibility: First Results with VOCALOID
.. slug: accessibility-first-results-with-vocaloid
.. keywords: a11y, accessibility, blind, keyboard shortcuts, visually impaired, vocaloid
.. description: A few VOCALOID tips for visually impaired users.
.. tags: Audio, VOCALOID
.. date: 2014-06-21 22:47:52

This is a follow up to my previous post, "[Accessibility, and How I Began Using VOCALOID][vocaloid-a11y1]". Here I'd like to share my progress, as well as a few tips for any visually impaired user that eventually decides to use VOCALOID. <!--more-->

Note: I'm using VOCALOID3 on Windows 7, with the free and open source [NVDA screen reader][nvdahp].

### The Editors

There are two "versions" of the VOCALOID editor. The Tiny Editor, which (as the name suggests) is "tiny" and with few features. It's the basic editor that comes with all the VOCALOID3 voicebanks, serving as a demo for the full editor(also good for those that aren't very demanding, and can't / don't want to buy the other one :P). The other one is the full editor, sold separately, with many more functions, mostly related to visual features and involving the mouse :P, therefore mostly useless for users who are blind and can't use a mouse. The exception is the ability to (re) define keyboard shortcuts, which can be interesting if you really want shortcuts that don't exist in the basic editor (so far, I managed to do without). Apart from that, my conclusion was that I wouldn't be able to enjoy it much, so for now I decided to stick with the Tiny Editor.

## # Keyboard Shortcuts

Speaking of keyboard shortcuts, here's a list of the ones I found:

- Play/Pause: "Space" or "keypad Enter".
- Rewind: "keypad minus" ("-"). Press once to go back one bar, hold to rewind a lot.
- Fast forward: "keypad plus" ("+"). Press once to forward one bar, hold to advance a lot.
- Go to the beginning of the song: "Control" + "Home".
- Go to the end of the song: "Control" + "End".
- Go to marker: "Period" (".") (but I don't know if there's a way to set that marker without using the mouse). Goes to the song's beginning if there isn't a marker defined.
- Enter text edit mode to change the note's lyric: "F2". Then "Tab" takes you to the next note's lyric text box and "Shift" + "Tab" goes to the previous one. "Alt" + up/down arrows alternate between editing lyrics and phonemes. Pressing "Enter" or "Esc" exits the text edit mode, and you can browse through notes using left and right arrows, and select notes with "Shift" + left/right.
- Set the singing position for the note under the cursor: "Control" + "g" (outside of text edit mode).
- Transpose notes by a half semitone: out of text editing mode, with the cursor on one note (or if there are selected notes), up arrow increases a half semitone, down arrow decreases.
- Transpose notes by an octave: out of text editing mode, with the cursor on one note (or if there are selected notes), "Shift" + up arrow increases an octave, "Shift" + down arrow decreases.
- Switch between Music Editor and Track Editor: "Control" + "Tab".

### Tip - Exp/Vibrato Window

This tip is specific for those using the NVDA screen reader (I don't know how it'd work for other readers but it's probably similar). From the menu bar, entering "Lyrics" -> "Note Properties" (or "Alt" + "l" then "p"), the exp and vibrato window appears. This window has no shortcuts. It only has text boxes for the lyrics and phonemes, a checkbox saying "PROTECT" and the "OK" and "Cancel" buttons. From the "PROTECT" box, press the "NVDA modifier key" + "keypad 7" once, then keep pressing "keypad 4" until you hear "EXP" or "vibrato". Then, "NVDA" + keypad slash ("/") to simulate a click on the object. After that, another window will appear, from where the expression or vibrato settings can be chosen. On the vibrato screen, the vibrato type and duration can be selected through the keyboard, but the other settings have to be changed by drawing curves with the mouse (the only way to do that via keyboard is by editing the VSQX file in a text editor).

### Putting a Song Together

Now, the process I'm using to put a song together:

As I only have the Tiny Editor which limits the song to 17 bars, the song must be divided into small pieces in order to fit in it. For each piece, the following steps must be taken:

- Using a MIDI keyboard, create a MIDI file of the melody.
- Put the file into the editor. Since the Tiny Editor doesn't import MIDI files, I import it in UTAU (about the only thing I can do in UTAU) and export it as a VSQ, which the Tiny Editor reads.
- Edit the lyrics, and do what ever else I can from the interface. Many things aren't accessible to screen readers (for example, changing note duration), and I have to resort to editing some values on the VSQX (which is actually a XML file) by hand with a text editor.
- Tweak and tweak until it sounds acceptable.
- Export the result as a wav file.
- After all pieces are completed and exported to WAV, join them with the karaoke track using some other audio editor, like Audacity (in my case, I move the files to my Linux partition and use [Ecasound][ecasoundhp] from there).

### Last But Not Least...

And as I said that I'd post when my first cover was ready, here it is! It's the song "Relics" by Tokoro-P with lyrics by Karakuri. . My version uses Megpoid Power (Gumi). It has some flaws but hopefully it's good enough for a first try. You can download it [here][relics-dl], and the Youtube link is [here][relics-yt].


[vocaloid-a11y1]: /en/blog/accessibility-and-how-i-began-using-vocaloid
[nvdahp]: http://www.nvaccess.org/
[ecasoundhp]: http://nosignal.fi/ecasound/
[relics-dl]: http://aiyumi.opendrive.com/files/87606812_JJA43_d5d3/gumi_power_-_relics_0.1.mp3
[relics-yt]: https://www.youtube.com/watch?v=G5xsuG4MGZg