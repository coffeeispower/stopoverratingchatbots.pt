---
layout: layouts/indexLayout.md
description: "Don't Panic! AGI is still science fiction: A reality check at the hype, limitations, and real-world impact of chatbots and large language models."
image:
  alt: 'A stick figure screaming desperately "OH NO! AI IS GONNA REPLACE US ALL!" while looking at claude fable 5.2 producing poop emojis piling up into a glitched giant poop emoji'
  url: https://stopoverratingchatbots.pt/assets/thumbnail.png
---

{% slot 'beforetoc' %}

<p class="border-black border-2 mx-auto max-w-fit p-4 text-center font-bold my-6">
    WARNING: This is a preview version<br>
    This website is still a work in progress.
</p>

<h1 class="text-5xl text-center font-extrabold my-10">Stop Overrating Chatbots</h1>

![{{ image.alt }}](/assets/thumbnail.png)
<div class="border-black border-3 mx-auto max-w-fit p-13 text-5xl font-bold text-red-500 my-10 blinkyblink">
    Don't Panic!<br>AGI is still science fiction.
</div>

{% endslot %}

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

## "The internet bubble popped, but we still use the internet. AI is here to stay."

This is a false equivalence fallacy used by many AI-pilled people around the internet. AI chatbots lean on a
very different technology with very different properties and computing requirements than the early
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
output because people use chatbots to make content and post it on the internet mixed in with the human
made content which in the long run will lead to model colapse as filtering human made content is
getting harder which has been predicted in many academic studies and experiments.

Only they have the files containing the weights of the models and then you pay for _(1)_ the license
to have access to the model and _(2)_ running the models on their servers.

This essentially means that if they were to die tomorrow we would lose those frontier chatbot AI models
forever, and making new LLMs is also not easy and no one has that kind of money and infrastructure
and most hardware still can't run LLMs large enough to do anything close to the frontier models. On
the average computer with integrated GPUs it will run at less than 1 token per second and will take
multiple minutes just to load the model. And even if you have the hardware they still suck compared
to the frontier models.

And this is why if the AI bubble pops and the AI companies die, **don't expect to have access to the
kind of frontier general purpose models we have today or that they will be economically viable or
somehow more affordable than today**. The current trend is actually more like the opposite,
[LLMs are getting more expensive](#llms-are-getting-more-expensive) as new models come out and companies
run out of money and
[change their business models to more expensive ones to try to compensate for their debt](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits).

LLMs as a technology won't disappear (they already existed before ChatGPT even in GH Copilot and
early GPT versions for example), they are still really useful when integrating into other programs
for extracting information from articles written in natural language (such as
[finding release dates from wikipedia articles](https://www.youtube.com/watch?v=prHep3-DQvU&t=3388s)).

### The scale of financial commitments is completely different

There is another major difference between the tech companies of the late 1990s and today's AI companies: the scale and nature of the capital they are committing to infrastructure.

Consider Amazon during the early dot-com era. According to its financial statements, Amazon reported approximately $76.5 million in long-term debt at the end of 1997, increasing to $348.1 million by the end of 1998. Adjusted for inflation, these amounts are roughly $155 million and $700 million in 2026 dollars.

Facebook also used debt financing to expand its infrastructure. In May 2008, it secured a $100 million equipment lease facility from TriplePoint Capital, intended to finance servers and data-center infrastructure. That is roughly $150 million in 2026 dollars.

Those were significant commitments for young technology companies, until you take a look at what the AI companies are doing:

According to Anthropic's 2026 SEC registration filings, the company had $6.2 billion in outstanding indebtedness as of June 30, 2026, primarily consisting of convertible promissory notes issued to Amazon. Anthropic also disclosed approximately $900.9 billion in aggregate committed spending under purchase commitments and lease agreements, substantially all related to compute and infrastructure. This includes approximately $451.6 billion expected to be incurred before the end of 2030.

Despite being drowned in so much debt, Anthropic is only making around 6,569 million dolars per year which is no where near what they need to pay all of that by 2030.

OpenAI seems to be in a pretty similar situation, only a small percentage of its user base actually pays for their products.
The AI bubble popping essentially means Anthropic going basically bankrupt, or at least its customers going bankrupt.

## The Ponzi Scheme

Explaining what is a Ponzi scheme is out of the scope of this website, you can learn about it here: https://www.youtube.com/watch?v=rfJpclWAaKg

But if you squint your eyes a bit you can see the similarity between what happens in the AI industry and what a ponzi scheme is, because the AI bubble IS a ponzi scheme:
- AI CEO's ask for investor's money promising high returns
- They spend it on AI data centers
- Doesn't get any actual profits
- Gets more investor money
- Pays the old ones

It's a investor revolving door essentially;
And this is not the only scam these little companies are doing.

## The circular financing scheme

This is the trick NVIDIA used to become the world's "biggest" company in the world.

NVIDIA invests in OpenAI and Anthropic which then buy NVIDIA's chips to build the AI data centers, making NVIDIA's profits look stunning, although it's just money going around in circles. It's NVIDIA selling to itself essentially.

![bloomberg graph](/assets/bloombergGraph.png)

They promise there will be high demand for AI and high returns but the numbers
show otherwise. People that do not work engineering jobs or live mostly offline
couldn't care less about AI.

This scheme was being led by Jensen Huang before [resigning from NVIDIA due to 2 affairs including an affair with a chinese
spy](https://www.reuters.com/business/retail-consumer/nvidia-ceo-jensen-huang-step-down-big-blow-ai-boom-2026-11-12/). I don't know if this scheme will continue but it has a high probability of collapsing because the stock price right now is plummeting day by day and it's not slowing down. By the time i'm writing this, it has already gone down by \~28% from \~220$ to \~160$ and has lost about 300 billion dolars in valuation.

## B..B..But AI is good at updating code!

Sources:

- https://pivot-to-ai.com/2026/11/11/but-the-ai-is-super-good-at-updating-code-well-no-it-isnt/

No, it isn't. Someone got to test the following models for updating legacy PHP code to newer
versions:

| Model                  | API identifier                    |
| ---------------------- | --------------------------------- |
| Claude Sonnet 4        | <span class="font-mono">claude-sonnet-4-20250514</span>          |
| Gemini 2.5 Flash       | <span class="font-mono">gemini-2.5-flash</span>                  |
| Gemini 2.5 Pro         | <span class="font-mono">gemini-2.5-pro</span>                    |
| GPT-5 Codex            | <span class="font-mono">gpt-5-codex</span>                       |
| Llama 3.3 70B Instruct | <span class="font-mono">meta-llama/llama-3.3-70b-instruct</span> |

And they compared them to a commercial tool called *`Rector`* which is a dumb tool based on static rules:

> [...] Pasting a legacy file into an LLM and asking it to
“modernize this” is an easy shortcut. But is the result better than
leaving the code alone? In this paper, we study this single-file
setting with five LLMs, each asked to modernize 100 WordPress
4.0 PHP files to PHP 8.3 while preserving behavior, with no
project context or execution feedback. We evaluate every output
with 630 hidden behavioral checks and 511 Rector-detected
modernization findings. We compare against two baselines: the
unchanged originals and the rule-based tool Rector. Often, the
answer is no. **Untouched, 83 files already pass every check; the
best LLM leaves only 59. Each model breaks 32–51 working
files while repairing at most 10, whereas Rector breaks 7 and
repairs 6. Most of this damage is unnecessary. Only 37 findings
(7%) require a change under PHP 8.3, yet in compatible files
with no required change, the LLMs break 36–60% (Rector:
8%).** The model with the highest modernization score is no
more compatible than its closest competitors. Most regressed
checks come from files that no longer load at all, often because
of type declarations PHP itself rejects. These are errors that
need no project context to avoid. Evaluations of LLM-based
modernization should therefore measure against a no-change
baseline and report modernization and behavioral preservation
separately. [...]

- Source: https://arxiv.org/pdf/2610.40269 - *When Modernization Breaks Working Code: A Single-File Study of LLMs on Legacy PHP*

This essentially means that if you use LLMs to migrate your codebase to a different framework or update it or ask it to find bugs in your code it will most likely spit out garbage or non issues and will break your code. This is a direct counterproof to people that say that LLMs "do not hallucinate anymore".

LLMs take a lot more computing resources than a simple rule based tool and yet it did much worse, so why do you still blindly trust chatbot code because "models got better"?

![AIPhpMigration.png](/assets/AIPhpMigration.png)

## Tests passing != Good code

The software might work and the tests might pass, but the tests passing is not enough. Remember how TDD is supposed to work:
![Fail, Make the test pass, Refactor cycle](https://miro.medium.com/0*3QZ1Mogwlvn0KbmW.jpg)

Making the tests pass is just the middle, TDD works by doing this cycle until you're satisfied with both the 
code and with what the code does.

AI-pilled people say that AI is great with tests without understanding what a test passing actually means and subvert what TDD actually is.
Which brings us to...

## AI produces spaghetti code by default

In my experience using OpenAI's codex, I need to always hand hold the AI to produce the desired code and the tendency for AI is to produce more and more sloppy code with no organization whatsoever and reinventing the wheel all the time.

It is only useful for doing tasks like generating Effect Http API Client definitions from a OpenAPI 
documentation file, and even then it still makes a lot of small mistakes I need to fix and debug right after.

AI has a limited context window, which means it cannot work on large projects because it keeps forgetting what it has already done and where it started.

Don't take my word for it, let's take a look on 3 case studies where undiscriminated use of AI has completely ruined the codebase.

### Case study 1: Zed

The [zed editor](https://zed.dev/) is an alternative to VSCode written in rust with its own UI toolkit called [gpui](https://gpui.rs/) now available for anyone to use in their apps.

It initially was not chatbot code, it was made by humans, but since the AI bubble started, they started using more and more chatbot slop code for critical parts of zed.

[Gram](https://gram-editor.com/) is a hardfork of zed which aims to remove AI features and its proprietary parts and is the code editor
I am using to write this website. Its creator (@krig) has found a lot of duplicated, unefficient slop code inside zed:

> ![So far in the zed (now gram) codebase I have found three separate theme pickers, two separate markdown parsers and renderers, two separate language server installation implementations, one broken capability/permission system that only applies to one of the language server implementations and a system for loading settings from JSON that leveraged monomorphization bloat (convoluted generic async rust code strikes again) to generate 10 MB of code in the binary... and probably even more nonsense that I'm not remembering now. Trying to fix anything is like pulling at a thread in a ball of yarn but the ball of yarn is the ball from Katamari Damacy and out tumbles three cows, a high rise building and a brass orchestra](/assets/krig.png)

 - Source: https://goto.liten.app/@krig/statuses/01M1DSY8D9RC5VSDB6N9376B88

Of course if you're working for a company nobody cares, your boss only cares about features and he wants them for yesterday... until 1 year later when some one needs to touch this code. Coding agents are tools for making a huge mess.

### Case study 2: Humble Bundle
<!-- TBD -->
TBD
### Case study 3: An AI-pilled company going back to writing code by hand
<!-- TBD -->
TBD
</main>
