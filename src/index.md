---
layout: indexLayout.md
---

<main>

## What is going on?

Since the release of ChatGPT in 2022, OpenAI and Anthropic along with Nvidia
([formerly led by Jensen Huang](https://www.reuters.com/business/retail-consumer/nvidia-ceo-jensen-huang-step-down-big-blow-ai-boom-2026-11-12/))
and Microsoft kickstarted an economic bubble around LLMs by overvaluing and overmarketing their
actual potential and trying to force it on every software on every tool for every job, using a
marketing strategy based on fear and misleading demos.

If you are a developer not using AI, you might feel behind and it may seem every company is now
building 100% with AI, but actually, this is also part of the deceiving marketing campaigns of these
companies to manipulate you and your boss to use their products. You're doing good, it's not your
fault. Everything is fine!

## Why are they doing this?

Money. Of course.  
And the possibility of monopolizing the entire market to themselves.

## "The internet bubble popped, but we still use the internet so AI bubble will be the same"

This is a false equivalence fallacy used by many AI-pilled people around the internet. AI leans on very
different technology with very different properties and computing requirements than the early
internet.

> TLDR; The survival of a technology through a bubble does not guarantee the survival of the
> companies, infrastructure, or business models that currently make it accessible to everyone.

### Why the internet survived

When the dotcom bubble popped, many companies went bankrupt, but the internet stayed for a very
simple reason: **the internet works on lightweight and open technologies and protocols**.

The internet is a distributed system and doesn't need any particular company to exist, it doesn't
need data centers as power hungry as AI data centers that run on power hungry Nvidia chips that cost
as much as a used car per unit. You can easily make your own http server in
[C](https://www.youtube.com/watch?v=2HrYIl6GpYg) or
[even in your own custom language](https://www.youtube.com/watch?v=oE6_Ue0ZTHg) without any
libraries in a few hundred lines of code and you can host it on any device with an internet
connection and anyone can just access it and a single dedicated server can already handle tens or
hundreds of thousands of concurrent users. Compare that to AI models which just one user makes your
GPU go 100% usage with a single session.

### The main problem: AI models are largely proprietary

AI companies have already pretty much scraped all the data from the internet there is to scrape to
the point they've become so desperate for data they started doing destructive scanning on rare books
([Anthropic cof cof](https://www.theguardian.com/commentisfree/2026/aug/05/anthropic-ai-destroying-books)).
The human made data is running out and the models are starting to feed themselves with their own
output because people use AI to make content and also post it on the internet mixed with the human
made content which in the long run will lead to model colapse as filtering human made content is
getting harder which has been predicted in many academic studies and experiments.

Only they have the files containing the weights of the models and then you pay for _(1)_ the license
to have access to the model and _(2)_ running the models on their servers.

This essentially means that if they were to die tomorrow we would lose those frontier AI models
forever, and making new LLMs is also not easy and no one has that kind of money and infrastructure
and most hardware still can't run LLMs large enough to do anything close to the frontier models. On
the average computer with integrated GPUs it will run at less than 1 token per second and will take
multiple minutes just to load the model. And even if you have the hardware they still suck compared
to the frontier models.

And this is why if the AI bubble pops and the AI companies die, LLMs as a technology won't disappear
(they already existed before ChatGPT), they are still really useful when integrating into other
programs for extracting information from articles written in natural language (such as
[finding release dates from wikipedia articles](https://www.youtube.com/watch?v=prHep3-DQvU&t=3388s&pp=ygUUc3BoYWVyb3Bob3JpYSBBSSB6aWc%3D)),
but **don't expect to have access to the kind of frontier general purpose models we have today or
that they will be economically viable or somehow more affordable than today**. The current trend is
actually more like the opposite, [AI is getting more expensive](#ai-is-getting-more-expensive) as
new models come out and companies run out of money and
[change their business models to more expensive ones to try to compensate for their debt](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits).

</main>
