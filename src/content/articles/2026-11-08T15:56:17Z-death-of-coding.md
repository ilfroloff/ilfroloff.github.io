---
title: Death of Coding
brief: >
  Reflections on what AI has already done to the programming profession: why
  writing code is no longer the main skill, what a Product Engineer is, and how
  to adapt to the new reality.
slug: death-of-coding
publishedAt: 2026-11-08T15:56:17Z
tags:
  - ai
  - software
lang: en
---

Hi everyone, it's been a while. A catastrophic lack of time is making itself
felt, and writing something worthwhile takes time.

I want to talk about the “elephant in the room” — AI. It's funny that
[my last post related to AI](https://t.me/if_devlpr/87) landed at the moment it
was only just starting to roll into our processes, and developers' perception
was at the level of “it generates obvious chunks of code for me, but it will
never be capable of more.” The models were too weak for anyone to take it
seriously — more like just an improved autocomplete. The post itself already
looks like a pure relic of the bearded old times, and only about three years
have passed.

Progress over this time has been so exponential that we can already draw a line
between the pre-AI past and the AI present. The spans are already comparable to
roughly when people moved from the horse cart to the car/airplane, and/or when
the robotization of production began around the world. There is a colossal
opening of opportunities and the lifting of many limitations. And,
understandably, a time of new challenges and problems.

I don't want to generate passable posts with AI, because this channel was
created to voice my “human” thoughts, and I wouldn't have thought it could be a
“business card” of some blog, but reality is what it is. So below I'll try to
structure my thinking about my vision of the situation around AI. I'm going to
present it in parts, because there are many thoughts on this, and I'll write as
time allows. Let's begin!

_**Briefly about where I was in accepting AI and where I am now:**_ I started
seriously thinking about the usefulness of AI as a tool when I downloaded my
first deepseek locally — I appreciated its huge potential and capabilities.
Right after that came JetBrains Junie, then paid GitHub Copilot + OpenCode with
experiments on all the available top models. Now it's Claude Code Pro and Max
20x + OpenCode Go with the top Chinese models glm, kimi, qwen + local qwen /
gemma / etc. for secondary private tasks. I try to automate all the routine
through AI; I've developed a multi-agent framework for development on Claude /
OpenCode; and
[“gave birth to” a tool for working with Claude Code](https://github.com/ilfroloff/snapback)
because of its limitations when multiplying work (in the future I plan to extend
it to at least OpenCode and Codex).

I'm making this small announcement so that you can leave comments with the
questions about AI that interest you — I'll try to answer.

When I first heard the Anthropic CEO's statements that programmers would stop
writing code, I laughed to myself. Wrongly so. For the last six months, or more,
I don't write code at all. Objectively, it has simply become stupidly expensive
— it's cheaper to tell Claude “figure it out and write it.” It will almost
always solve/write it better than me. So who is a “programmer” today? Earlier,
in pre-AI times, I wrote what turned out to be a
[far-sighted post](https://www.if-developer.fyi/fundamentals-software-engineering/)
([ru version](https://www.if-developer.fyi/ru/fundamentals-software-engineering/))
with the same question. Both the answer and the set of skills haven't changed
much — they've only been confirmed: it's a specialist who understands how, why,
and what for code and systems work and exist at all. And the further we go, the
more of a must-have this will be for any developer vacancy. Re-read the post,
everything written there is still relevant, but I'll still add a few things:

## 1. The ability to work with AI

Alas, but if you don't understand how AI can boost you, being in demand today
becomes unlikely. For me personally, AI has become that very “partner” that
helps me with two main things:

**1.1 Finding the most suitable solution to a problem. AI has cut the search for
information and the testing of theories from days to minutes/hours.** I can't
express how glad I am about this — I've regained my “youthful” zeal and love for
development, which had somewhat faded over the years. Today, with Claude Code, I
manage to deliver volumes of solutions that in pre-AI times I couldn't even
imagine. Without losing quality.

**1.2. Offloading to AI all the routine I so disliked doing in the old days —
implementing a designed solution.** In fact, that very “coding” stage —
time-consuming and straightforward.

What is the “trouble” with AI for the market of a novice job seeker — previously
they did such routine, under the supervision of experienced people. Today it's
easier/more efficient for an experienced, conscious specialist to delegate
routine to AI. That is neither good nor bad — just a fact, and an answer to
“what's the use of the young?” must come too, because an experienced specialist
emerges from a novice.

**1.3. AI opens up the possibility of parallelizing work.** Something that was
badly missing in the past — “coding” blocked the ability to solve several
problems at once. Now it's the new normal when you work through several
questions and solutions in parallel; many are building
[development factories](https://dzone.com/articles/ai-software-factory). In
fact, you do several “jobs” at once. Yes, it requires a huge amount of mental
resource, yes, we are still blocked by “human” review, but even so the total
time to implement features has dropped very substantially — by multiples
depending on the task (for a project start it can be 10x–100x, for a running
project 2x+ is quite possible too).

As a result, in fact, the industry is now following the path of how mechanical
engineering was optimized with the advent of robots: yesterday it took 100
people to create one Ford — today 10 (I'm exaggerating, but you get the point).

## 2. Mandatory soft skills and product orientation

Without this, the “programmer of the future” will be impossible, because the
machine will take all the routine (coding already today; a large part/all? of
system design in the future), while discussing why changes happen at all is a
human part and is unlikely ever to be fully handed over to a machine. If that
too is handed over, we will lose “ourselves” as humans, and products will lose
their soul, so let's go deeper into philosophy.

The ability to communicate with people and understand a product's
strengths/weaknesses must become one of the most important stages in a
specialist's growth, in many cases more important than hard skills. Let's admit
it — we often solve problems that have already been solved
tens/hundreds/thousands of times before us, so AI already knows how to solve
them correctly and efficiently (= better than us). Hard skills for purely
repeated solutions will be needed by no one — too expensive.

In fact, the “programmer” as understood today will be gone — he transforms into
a Product Engineer, the one who **himself** can research, propose, and create
the solution the market needs (= earn money for the client) and will always be
able to objectively weed out the “unnecessary” so as not to waste the client's
time (= money) for nothing.

A question arises — how can you adapt to such changes in time and have a
“checklist” for becoming a “programmer of the future” already today? I don't
have any concrete answer (and I think no one does). I can only answer for myself
— I've always loved new technologies and always meet any novelties with youthful
interest. The same is true now — you need to study and accept new technologies,
not try to reject them, especially if there's a feeling of “harm” for yourself.
AI has shown very well that many are mentally unprepared for their “sacred cow”
(each specialization has its own) being handed to a machine so easily — hence
the many anti-AI initiatives and the general rejection of the situation.

But will anyone today remember that just 40–50 years ago people programmed on
punched cards, or that 20–30 years ago an accountant calculated on a
calculator/abacus and wrote his little numbers in a notebook? Humanity is
perfectly capable of adapting reality to itself — don't lose that skill and
don't worry that we are “doomed.”

I'll be glad for any feedback, and if you share the post with others, since
there are many thoughts — some come and go — but if you ask questions, I'll try
to elaborate.
